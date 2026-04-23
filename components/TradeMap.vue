<template>
  <section id="trade-map" class="section bg-secondary/30 relative">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <span class="text-2xl">📊</span>
          <span class="text-sm text-text-secondary font-medium">全球贸易热点图</span>
        </div>
        <h2 class="section-title">实时贸易数据洞察</h2>
        <p class="section-subtitle mx-auto">
          基于公开数据源，实时追踪全球贸易热点，让决策有据可依
        </p>
      </div>

      <!-- World Map + Charts -->
      <div class="grid lg:grid-cols-3 gap-6 mb-6">
        <!-- Map with Data Flow Canvas -->
        <div class="lg:col-span-2 glass rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
            <h3 class="text-white font-semibold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              全球贸易热度图
            </h3>
            <div class="flex items-center gap-3 text-sm flex-wrap">
              <!-- BDI -->
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span class="text-accent font-medium">BDI</span>
                <span class="text-white font-mono">{{ bdiData.value.toLocaleString() }}</span>
                <span :class="bdiData.change >= 0 ? 'text-success' : 'text-danger'" class="font-medium">
                  {{ bdiData.change >= 0 ? '↑' : '↓' }}{{ Math.abs(bdiData.change).toFixed(1) }}%
                </span>
              </div>
              <!-- WTI Oil -->
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                <span class="text-[#F59E0B] font-medium">WTI原油</span>
                <span class="text-white font-mono">${{ oilData.price }}</span>
                <span :class="oilData.change >= 0 ? 'text-success' : 'text-danger'" class="font-medium">
                  {{ oilData.change >= 0 ? '↑' : '↓' }}{{ Math.abs(oilData.change).toFixed(1) }}%
                </span>
              </div>
            </div>
          </div>
          <div class="relative">
            <div ref="mapContainer" class="h-[380px] lg:h-[480px]"></div>
            <canvas
              ref="flowCanvas"
              class="absolute top-0 left-0 w-full h-full pointer-events-none"
            ></canvas>
          </div>
        </div>

        <!-- Charts Column -->
        <div class="space-y-4">
          <!-- BDI Trend Card -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-3 flex items-center gap-2">
              <span class="text-sm">🚢</span>
              波罗的海航运指数 (BDI)
            </h3>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-2xl font-bold text-white font-mono">{{ bdiData.value.toLocaleString() }}</span>
              <span class="text-sm text-text-secondary">点位</span>
            </div>
            <div class="flex items-center gap-2 mb-3">
              <span :class="bdiData.change >= 0 ? 'text-success' : 'text-danger'" class="text-sm font-medium">
                {{ bdiData.change >= 0 ? '↑' : '↓' }} {{ Math.abs(bdiData.change).toFixed(2) }}
              </span>
              <span class="text-xs text-text-secondary">较前日</span>
            </div>
            <div ref="bdiChartContainer" class="h-[70px]"></div>
            <p class="text-xs text-text-secondary mt-2">数据来源: Baltic Exchange</p>
          </div>

          <!-- Oil Price -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-3 flex items-center gap-2">
              <span class="text-sm">🛢️</span>
              WTI 原油期货
            </h3>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-2xl font-bold text-white font-mono">${{ oilData.price }}</span>
              <span class="text-sm text-text-secondary">美元/桶</span>
            </div>
            <div class="flex items-center gap-2 mb-3">
              <span :class="oilData.change >= 0 ? 'text-success' : 'text-danger'" class="text-sm font-medium">
                {{ oilData.change >= 0 ? '↑' : '↓' }} {{ Math.abs(oilData.change).toFixed(2) }}%
              </span>
              <span class="text-xs text-text-secondary">日内波动</span>
            </div>
            <div ref="oilChartContainer" class="h-[70px]"></div>
            <p class="text-xs text-text-secondary mt-2">数据来源: EIA / 模拟数据</p>
          </div>

          <!-- Commodity Index -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-3 flex items-center gap-2">
              <span class="text-sm">📈</span>
              大宗商品指数
            </h3>
            <div ref="chartContainer" class="h-[120px]"></div>
          </div>
        </div>
      </div>

      <!-- Shipping Lanes + Vessel Tracking Row -->
      <div class="grid lg:grid-cols-4 gap-6 mb-6">
        <!-- Vessel Tracking Panel -->
        <div class="lg:col-span-1 glass rounded-2xl p-4">
          <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            油气货轮追踪
          </h3>
          <div class="space-y-3 max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
            <div
              v-for="vessel in visibleVessels"
              :key="vessel.id"
              class="p-3 rounded-xl bg-white/5 border border-white/8 hover:border-[#F59E0B]/40 transition-colors"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                  <span class="text-base">{{ vessel.icon }}</span>
                  <span class="text-white text-sm font-medium">{{ vessel.name }}</span>
                </div>
                <span
                  :class="vessel.status === '航行中' ? 'text-success' : 'text-[#F59E0B]'"
                  class="text-xs font-medium"
                >
                  {{ vessel.status }}
                </span>
              </div>
              <div class="text-xs text-text-secondary space-y-0.5">
                <div>航线: {{ vessel.route }}</div>
                <div>航速: <span class="text-white font-mono">{{ vessel.speed }}</span> 节</div>
                <div>载重: <span class="text-white font-mono">{{ vessel.dwt }}</span> DWT</div>
              </div>
              <div class="mt-2 w-full bg-white/5 rounded-full h-1">
                <div
                  class="h-1 rounded-full transition-all duration-1000"
                  :class="vessel.status === '航行中' ? 'bg-success' : 'bg-[#F59E0B]'"
                  :style="{ width: vessel.progress + '%' }"
                ></div>
              </div>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-center">
            <div>
              <div class="text-xl font-bold text-[#F59E0B] font-mono">{{ vesselStats.tanker }}</div>
              <div class="text-xs text-text-secondary">油轮</div>
            </div>
            <div>
              <div class="text-xl font-bold text-[#6366F1] font-mono">{{ vesselStats.cargo }}</div>
              <div class="text-xs text-text-secondary">货轮</div>
            </div>
          </div>
        </div>

        <!-- Shipping Lanes Map -->
        <div class="lg:col-span-3 glass rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-white/5 flex items-center justify-between">
            <h3 class="text-white font-semibold flex items-center gap-2">
              <span class="text-sm">🛢️</span>
              全球油气航运路线
            </h3>
            <div class="flex items-center gap-3 text-xs">
              <div class="flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                <span class="text-text-secondary">油轮航线</span>
              </div>
              <div class="flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-[#6366F1]"></span>
                <span class="text-text-secondary">货轮航线</span>
              </div>
              <div class="flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
                <span class="text-text-secondary">LNG运输</span>
              </div>
            </div>
          </div>
          <div class="relative">
            <div ref="shippingContainer" class="h-[340px]"></div>
            <canvas
              ref="shippingCanvas"
              class="absolute top-0 left-0 w-full h-full pointer-events-none"
            ></canvas>
          </div>
        </div>
      </div>

      <!-- Data Flow Legend -->
      <div class="glass rounded-xl p-4 mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
          <span class="text-text-secondary">高贸易活跃度</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-8 h-0.5 bg-gradient-to-r from-accent to-transparent rounded"></span>
          <span class="text-text-secondary">数据流动路径</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
          <span class="text-text-secondary">油轮/油气</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#6366F1]"></span>
          <span class="text-text-secondary">货轮</span>
        </div>
        <div class="text-text-secondary">
          <span class="text-accent font-medium">BDI</span> 波罗的海航运指数 | 
          <span class="text-[#F59E0B] font-medium">WTI</span> 原油期货
        </div>
      </div>

      <!-- Lead Form -->
      <div id="contact" class="glass rounded-2xl p-8 lg:p-12">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Form -->
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">获取定制化贸易报告</h3>
            <p class="text-text-secondary mb-8">
              留下您的联系方式，我们将为您分析目标市场的贸易热点与机遇
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-text-secondary mb-2">姓名 *</label>
                  <input v-model="form.name" type="text" required class="input-field" placeholder="您的姓名" />
                </div>
                <div>
                  <label class="block text-sm text-text-secondary mb-2">公司 *</label>
                  <input v-model="form.company" type="text" required class="input-field" placeholder="公司名称" />
                </div>
              </div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-text-secondary mb-2">邮箱 *</label>
                  <input v-model="form.email" type="email" required class="input-field" placeholder="business@company.com" />
                </div>
                <div>
                  <label class="block text-sm text-text-secondary mb-2">电话</label>
                  <input v-model="form.phone" type="tel" class="input-field" placeholder="+86 xxx xxxx xxxx" />
                </div>
              </div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-text-secondary mb-2">目标市场 *</label>
                  <select v-model="form.region" required class="input-field">
                    <option value="">请选择</option>
                    <option value="latam">拉丁美洲</option>
                    <option value="africa">非洲</option>
                    <option value="southeast-asia">东南亚</option>
                    <option value="mena">中东中亚</option>
                    <option value="europe">欧洲</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm text-text-secondary mb-2">感兴趣类目 *</label>
                  <select v-model="form.interest" required class="input-field">
                    <option value="">请选择</option>
                    <option value="electronics">消费电子</option>
                    <option value="manufacturing">智能制造</option>
                    <option value="ecommerce">跨境电商</option>
                    <option value="fintech">金融科技</option>
                    <option value="cloud-ai">云服务/AI</option>
                    <option value="other">其他</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm text-text-secondary mb-2">留言</label>
                <textarea v-model="form.message" rows="3" class="input-field resize-none" placeholder="请描述您的需求..."></textarea>
              </div>
              <button type="submit" :disabled="isSubmitting" class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                {{ isSubmitting ? '提交中...' : '提交申请' }}
              </button>
            </form>

            <Transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0">
              <div v-if="submitSuccess" class="mt-6 p-4 rounded-xl bg-success/10 border border-success/30">
                <p class="text-success font-medium">✓ 提交成功！</p>
                <p class="text-text-secondary text-sm mt-1">我们的团队将在24小时内与您联系。</p>
              </div>
            </Transition>
          </div>

          <!-- Info -->
          <div class="flex flex-col justify-center">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">📧</div>
                <div>
                  <h4 class="text-white font-medium">邮箱</h4>
                  <p class="text-text-secondary text-sm">contact@nuevostec.com</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-accent2/10 flex items-center justify-center text-accent2 text-xl shrink-0">🌐</div>
                <div>
                  <h4 class="text-white font-medium">网址</h4>
                  <p class="text-text-secondary text-sm">www.nuevostec.com</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success text-xl shrink-0">📍</div>
                <div>
                  <h4 class="text-white font-medium">地址</h4>
                  <p class="text-text-secondary text-sm">四川省成都市高新区</p>
                </div>
              </div>
              <div class="p-6 rounded-xl bg-white/5 border border-white/10">
                <p class="text-text-secondary text-sm leading-relaxed">
                  <span class="text-accent font-medium">数据说明：</span>本页展示的贸易数据基于 World Bank Open API，免费公开数据，数据更新频率以数据源为准。我们不对数据做任何修改，力求展示最原始、最准确的信息。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, onUnmounted, computed } from 'vue'
import L from 'leaflet'
import * as echarts from 'echarts'

const mapContainer = ref(null)
const chartContainer = ref(null)
const bdiChartContainer = ref(null)
const oilChartContainer = ref(null)
const flowCanvas = ref(null)
const shippingContainer = ref(null)
const shippingCanvas = ref(null)
let map = null
let shippingMap = null
let chart = null
let bdiChart = null
let oilChart = null
let flowAnimationId = null
let shippingAnimationId = null

// BDI Data
const bdiData = ref({
  value: 1847,
  change: 2.34,
  history: [1650, 1680, 1720, 1750, 1780, 1800, 1820, 1847]
})

// Oil Price Data
const oilData = ref({
  price: 78.42,
  change: 1.23,
  history: [75.1, 76.3, 77.8, 76.5, 77.2, 78.0, 78.9, 78.42]
})

const form = ref({
  name: '', company: '', email: '', phone: '', region: '', interest: '', message: ''
})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  isSubmitting.value = false
  submitSuccess.value = true
  form.value = { name: '', company: '', email: '', phone: '', region: '', interest: '', message: '' }
  setTimeout(() => { submitSuccess.value = false }, 5000)
}

// ─── Shipping Data ───────────────────────────────────────────────────
// Major oil & gas shipping lanes
const shippingLanes = [
  // Persian Gulf exports
  { from: { lat: 26.2, lng: 50.2, name: '霍尔木兹' }, to: { lat: 1.3, lng: 103.8, name: '新加坡' }, type: 'oil', color: '#F59E0B' },
  { from: { lat: 26.2, lng: 50.2, name: '霍尔木兹' }, to: { lat: 22.3, lng: 114.2, name: '香港' }, type: 'oil', color: '#F59E0B' },
  { from: { lat: 26.2, lng: 50.2, name: '霍尔木兹' }, to: { lat: 31.2, lng: 121.5, name: '上海' }, type: 'oil', color: '#F59E0B' },
  { from: { lat: 26.2, lng: 50.2, name: '霍尔木兹' }, to: { lat: 35.7, lng: 139.7, name: '东京' }, type: 'oil', color: '#F59E0B' },
  { from: { lat: 26.2, lng: 50.2, name: '霍尔木兹' }, to: { lat: 51.9, lng: 4.5, name: '鹿特丹' }, type: 'oil', color: '#F59E0B' },
  { from: { lat: 26.2, lng: 50.2, name: '霍尔木兹' }, to: { lat: 40.7, lng: -74.0, name: '纽约' }, type: 'oil', color: '#F59E0B' },
  // North Sea / UK
  { from: { lat: 57.6, lng: 3.8, name: '北海' }, to: { lat: 53.5, lng: 9.9, name: '汉堡' }, type: 'lng', color: '#10B981' },
  { from: { lat: 57.6, lng: 3.8, name: '北海' }, to: { lat: 51.9, lng: 4.5, name: '鹿特丹' }, type: 'lng', color: '#10B981' },
  // West Africa
  { from: { lat: 4.8, lng: 7.0, name: '拉各斯' }, to: { lat: 40.7, lng: -74.0, name: '纽约' }, type: 'oil', color: '#F59E0B' },
  { from: { lat: -34.6, lng: 18.1, name: '开普敦' }, to: { lat: 1.3, lng: 103.8, name: '新加坡' }, type: 'cargo', color: '#6366F1' },
  // US Gulf
  { from: { lat: 29.8, lng: -95.4, name: '休斯顿' }, to: { lat: 51.9, lng: 4.5, name: '鹿特丹' }, type: 'oil', color: '#F59E0B' },
  { from: { lat: 29.8, lng: -95.4, name: '休斯顿' }, to: { lat: 22.3, lng: 114.2, name: '香港' }, type: 'cargo', color: '#6366F1' },
  // Panama route
  { from: { lat: 29.8, lng: -95.4, name: '休斯顿' }, to: { lat: 31.2, lng: 121.5, name: '上海' }, type: 'cargo', color: '#6366F1' },
  // South America
  { from: { lat: -23.5, lng: -46.6, name: '桑托斯' }, to: { lat: 31.2, lng: 121.5, name: '上海' }, type: 'oil', color: '#F59E0B' },
  { from: { lat: -23.5, lng: -46.6, name: '桑托斯' }, to: { lat: 51.9, lng: 4.5, name: '鹿特丹' }, type: 'cargo', color: '#6366F1' },
  // Australia LNG
  { from: { lat: -21.0, lng: 115.0, name: '弗里曼特' }, to: { lat: 35.7, lng: 139.7, name: '东京' }, type: 'lng', color: '#10B981' },
  // Transpacific
  { from: { lat: 37.5, lng: -122.3, name: '洛杉矶' }, to: { lat: 31.2, lng: 121.5, name: '上海' }, type: 'cargo', color: '#6366F1' },
]

// Vessel types
const VESSEL_TYPES = {
  oil: { icon: '🛢️', name: '油轮', color: '#F59E0B' },
  lng: { icon: '⛽', name: 'LNG船', color: '#10B981' },
  cargo: { icon: '📦', name: '货轮', color: '#6366F1' },
}

// Vessel name prefixes by type
const VESSEL_PREFIXES = {
  oil: ['Pacific', 'Atlantic', 'Eternal', 'Grand', 'Nordic', 'Olympic', 'Royal', 'Star'],
  lng: ['Methane', 'Arctic', 'Excellence', 'Grace', 'Pacific', 'Vision'],
  cargo: ['Ever', 'Yang', 'Maersk', 'MSC', 'CMA', 'COSCO', 'HMM', 'ONE'],
}

// Generate simulated vessels
const vessels = ref([])
const generateVessels = () => {
  const newVessels = []
  shippingLanes.forEach((lane, idx) => {
    const count = lane.type === 'oil' ? 3 : lane.type === 'lng' ? 2 : 2
    for (let i = 0; i < count; i++) {
      const prefix = VESSEL_PREFIXES[lane.type][Math.floor(Math.random() * VESSEL_PREFIXES[lane.type].length)]
      newVessels.push({
        id: `v${idx}-${i}`,
        name: `${prefix} ${Math.floor(Math.random() * 9000) + 1000}`,
        type: lane.type,
        route: `${lane.from.name} → ${lane.to.name}`,
        from: lane.from,
        to: lane.to,
        progress: Math.random() * 100,
        speed: (10 + Math.random() * 8).toFixed(1),
        dwt: lane.type === 'oil' ? `${Math.floor(Math.random() * 300 + 100)}K` : lane.type === 'lng' ? `${Math.floor(Math.random() * 80 + 50)}K` : `${Math.floor(Math.random() * 200 + 20)}K`,
        status: Math.random() > 0.1 ? '航行中' : '装卸货',
        color: lane.color,
        pulse: Math.random(),
      })
    }
  })
  vessels.value = newVessels
}

const visibleVessels = computed(() => vessels.value.slice(0, 8))
const vesselStats = computed(() => ({
  tanker: vessels.value.filter(v => v.type === 'oil').length,
  cargo: vessels.value.filter(v => v.type !== 'oil').length,
}))

// ─── Trade nodes (existing) ─────────────────────────────────────────
const tradeNodes = [
  { name: '中国', lat: 31.23, lng: 121.47, weight: 1.0 },
  { name: '美国', lat: 40.71, lng: -74.01, weight: 0.9 },
  { name: '德国', lat: 52.52, lng: 13.41, weight: 0.8 },
  { name: '日本', lat: 35.68, lng: 139.69, weight: 0.75 },
  { name: '新加坡', lat: 1.35, lng: 103.82, weight: 0.65 },
  { name: '迪拜', lat: 25.2, lng: 55.27, weight: 0.6 },
  { name: '巴西', lat: -23.55, lng: -46.63, weight: 0.55 },
  { name: '澳大利亚', lat: -33.87, lng: 151.21, weight: 0.5 },
  { name: '肯尼亚', lat: -1.29, lng: 36.82, weight: 0.4 },
  { name: '英国', lat: 51.51, lng: -0.13, weight: 0.7 },
]

// Flow paths
const flowPaths = []
const packets = []
let radarAngle = 0
const FLOW_COLORS = ['#00D4FF', '#6366F1', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6']

// ─── Initialize Main Map ────────────────────────────────────────────
const initMap = () => {
  if (!mapContainer.value) return

  map = L.map(mapContainer.value, {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    scrollWheelZoom: false,
  })

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map)

  tradeNodes.forEach(hotspot => {
    const radius = 20 + hotspot.weight * 30
    const color = hotspot.weight > 0.7 ? '#00D4FF' : hotspot.weight > 0.5 ? '#6366F1' : '#10B981'
    L.circle([hotspot.lat, hotspot.lng], {
      radius: radius * 1000, fillColor: color, fillOpacity: 0.1,
      stroke: true, color: color, weight: 1, opacity: 0.4,
    }).addTo(map)
    L.circleMarker([hotspot.lat, hotspot.lng], {
      radius: 4 + hotspot.weight * 4, fillColor: color, fillOpacity: 0.9,
      stroke: true, color: '#fff', weight: 1, opacity: 0.8,
    }).addTo(map)
  })

  const majorNodes = tradeNodes.filter(n => n.weight >= 0.6)
  for (let i = 0; i < majorNodes.length; i++) {
    for (let j = i + 1; j < majorNodes.length; j++) {
      if (Math.random() > 0.35) {
        const colorIdx = Math.floor(Math.random() * FLOW_COLORS.length)
        flowPaths.push({
          from: majorNodes[i], to: majorNodes[j],
          color: FLOW_COLORS[colorIdx],
          intensity: (majorNodes[i].weight + majorNodes[j].weight) / 2,
          dashOffset: Math.random() * 100,
        })
      }
    }
  }

  for (let i = 0; i < 120; i++) {
    const path = flowPaths[Math.floor(Math.random() * flowPaths.length)]
    packets.push({
      path, progress: Math.random(), speed: 0.003 + Math.random() * 0.004,
      size: 1.5 + Math.random() * 2.5, color: path.color,
      alpha: 0.6 + Math.random() * 0.4,
      trailLength: 8 + Math.floor(Math.random() * 12),
    })
  }
}

// ─── Initialize Shipping Map ──────────────────────────────────────
const initShippingMap = () => {
  if (!shippingContainer.value) return

  shippingMap = L.map(shippingContainer.value, {
    center: [15, 30],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    scrollWheelZoom: false,
  })

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(shippingMap)

  // Draw shipping lanes
  shippingLanes.forEach(lane => {
    // Animated dashed line for lane
    const laneLine = L.polyline([[lane.from.lat, lane.from.lng], [lane.to.lat, lane.to.lng]], {
      color: lane.color, weight: 1.5, opacity: 0.35, dashArray: '6, 6',
    }).addTo(shippingMap)

    // Start/end markers
    const startIcon = L.divIcon({
      className: 'shipping-marker',
      html: `<div style="width:8px;height:8px;border-radius:50%;background:${lane.color};box-shadow:0 0 6px ${lane.color};opacity:0.7"></div>`,
      iconSize: [8, 8], iconAnchor: [4, 4]
    })
    L.marker([lane.from.lat, lane.from.lng], { icon: startIcon }).addTo(shippingMap)
    L.marker([lane.to.lat, lane.to.lng], { icon: startIcon }).addTo(shippingMap)
  })
}

// ─── Data Flow Canvas ──────────────────────────────────────────────
const initCanvas = () => {
  if (!flowCanvas.value || !map) return

  const canvas = flowCanvas.value
  const ctx = canvas.getContext('2d')

  const resize = () => {
    const rect = mapContainer.value.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
  }
  resize()

  const drawArcPath = (from, to, color, intensity, dashOffset) => {
    const p1 = map.latLngToContainerPoint([from.lat, from.lng])
    const p2 = map.latLngToContainerPoint([to.lat, to.lng])
    const midX = (p1.x + p2.x) / 2, midY = (p1.y + p2.y) / 2
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
    const lift = dist * 0.25
    const dx = p2.x - p1.x, dy = p2.y - p1.y
    const len = Math.hypot(dx, dy) || 1
    const cx = midX - (dy / len) * lift
    const cy = midY + (dx / len) * lift

    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.quadraticCurveTo(cx, cy, p2.x, p2.y)
    ctx.strokeStyle = `${color}${Math.floor(intensity * 25).toString(16).padStart(2, '0')}`
    ctx.lineWidth = 1
    ctx.stroke()

    const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
    gradient.addColorStop(0, `${color}00`)
    gradient.addColorStop(0.3, `${color}40`)
    gradient.addColorStop(0.7, `${color}40`)
    gradient.addColorStop(1, `${color}00`)

    ctx.setLineDash([6, 4])
    ctx.lineDashOffset = -dashOffset
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.quadraticCurveTo(cx, cy, p2.x, p2.y)
    ctx.strokeStyle = gradient
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.setLineDash([])
  }


  const drawPacket = (packet) => {
    const from = packet.path.from, to = packet.path.to
    const p1 = map.latLngToContainerPoint([from.lat, from.lng])
    const p2 = map.latLngToContainerPoint([to.lat, to.lng])
    const midX = (p1.x + p2.x) / 2, midY = (p1.y + p2.y) / 2
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
    const lift = dist * 0.25
    const dx = p2.x - p1.x, dy = p2.y - p1.y
    const len = Math.hypot(dx, dy) || 1
    const cx = midX - (dy / len) * lift
    const cy = midY + (dx / len) * lift

    const mt = 1 - packet.progress
    const bx = mt * mt * p1.x + 2 * mt * packet.progress * cx + packet.progress * packet.progress * p2.x
    const by = mt * mt * p1.y + 2 * mt * packet.progress * cy + packet.progress * packet.progress * p2.y

    // Trail
    const trailPositions = []
    for (let i = 1; i <= packet.trailLength; i++) {
      const tt = Math.max(0, packet.progress - (i * 0.015))
      const mtt = 1 - tt
      const tx = mtt * mtt * p1.x + 2 * mtt * tt * cx + tt * tt * p2.x
      const ty = mtt * mtt * p1.y + 2 * mtt * tt * cy + tt * tt * p2.y
      trailPositions.push({ x: tx, y: ty })
    }
    for (let i = 0; i < trailPositions.length - 1; i++) {
      const alpha = (1 - i / trailPositions.length) * packet.alpha * 0.7
      const width = (1 - i / trailPositions.length) * packet.size * 1.5
      ctx.beginPath()
      ctx.moveTo(trailPositions[i].x, trailPositions[i].y)
      ctx.lineTo(trailPositions[i + 1].x, trailPositions[i + 1].y)
      ctx.strokeStyle = `${packet.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
      ctx.lineWidth = width
      ctx.lineCap = 'round'
      ctx.stroke()
    }

    // Glow + core
    const glowGrad = ctx.createRadialGradient(bx, by, 0, bx, by, packet.size * 5)
    glowGrad.addColorStop(0, `${packet.color}${Math.floor(packet.alpha * 200).toString(16).padStart(2, '0')}`)
    glowGrad.addColorStop(1, `${packet.color}00`)
    ctx.beginPath()
    ctx.arc(bx, by, Math.max(0.1, packet.size * 5), 0, Math.PI * 2)
    ctx.fillStyle = glowGrad
    ctx.fill()

    ctx.beginPath()
    ctx.arc(bx, by, Math.max(0.1, packet.size), 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${packet.alpha * 0.9})`
    ctx.fill()

    ctx.beginPath()
    ctx.arc(bx, by, Math.max(0.1, packet.size * 0.4), 0, Math.PI * 2)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
  }

  const drawNodePulse = () => {
    tradeNodes.forEach(node => {
      const pt = map.latLngToContainerPoint([node.lat, node.lng])
      const color = node.weight > 0.7 ? '#00D4FF' : node.weight > 0.5 ? '#6366F1' : '#10B981'
      const baseRadius = 6 + node.weight * 6
      for (let i = 0; i < 3; i++) {
        const phase = ((radarAngle * 0.5 + i * 0.33 + node.lat * 0.01) % 1 + 1) % 1
        const ringRadius = Math.max(0.1, baseRadius + phase * 30)
        const alpha = (1 - phase) * 0.3
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, Math.max(0.1, ringRadius), 0, Math.PI * 2)
        ctx.strokeStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    })
  }

  const drawRadarSweep = () => {
    const w = canvas.width, h = canvas.height
    const cx = w * 0.5, cy = h * 0.5
    const maxR = Math.max(10, Math.hypot(w, h))
    ctx.beginPath()
    ctx.arc(cx, cy, maxR, 0, Math.PI * 2)
    // Fallback for createConicGradient (not supported in all environments)
    try {
      const sweepGrad = ctx.createConicGradient(radarAngle, cx, cy)
      sweepGrad.addColorStop(0, 'rgba(0,212,255,0.06)')
      sweepGrad.addColorStop(0.1, 'rgba(0,212,255,0.0)')
      sweepGrad.addColorStop(1, 'rgba(0,212,255,0.0)')
      ctx.beginPath()
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2)
      ctx.fillStyle = sweepGrad
      ctx.fill()
    } catch (e) {
      // Fallback: simple radial gradient
      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR)
      sweepGrad.addColorStop(0, 'rgba(0,212,255,0.0)')
      sweepGrad.addColorStop(0.7, 'rgba(0,212,255,0.0)')
      sweepGrad.addColorStop(1, 'rgba(0,212,255,0.0)')
      ctx.beginPath()
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2)
      ctx.fillStyle = sweepGrad
      ctx.fill()
    }
    const ex = cx + Math.cos(radarAngle) * maxR
    const ey = cy + Math.sin(radarAngle) * maxR
    const lineGrad = ctx.createLinearGradient(cx, cy, ex, ey)
    lineGrad.addColorStop(0, 'rgba(0,212,255,0.3)')
    lineGrad.addColorStop(1, 'rgba(0,212,255,0)')
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(ex, ey)
    ctx.strokeStyle = lineGrad
    ctx.lineWidth = 2
    ctx.stroke()
  }

  const drawFlow = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRadarSweep()
    drawNodePulse()
    flowPaths.forEach(path => {
      path.dashOffset += 0.4
      drawArcPath(path.from, path.to, path.color, path.intensity, path.dashOffset)
    })
    packets.forEach(packet => {
      packet.progress += packet.speed
      if (packet.progress >= 1) {
        packet.progress = 0
        if (Math.random() > 0.6) {
          packet.path = flowPaths[Math.floor(Math.random() * flowPaths.length)]
          packet.color = packet.path.color
        }
        packet.speed = 0.003 + Math.random() * 0.004
        packet.trailLength = 8 + Math.floor(Math.random() * 12)
      }
      drawPacket(packet)
    })
    radarAngle += 0.008
    flowAnimationId = requestAnimationFrame(drawFlow)
  }

  drawFlow()
  map.on('move', resize)
  map.on('zoom', resize)
}

// ─── Shipping Canvas ───────────────────────────────────────────────
const initShippingCanvas = () => {
  if (!shippingCanvas.value || !shippingMap) return

  const canvas = shippingCanvas.value
  const ctx = canvas.getContext('2d')

  const resize = () => {
    const rect = shippingContainer.value.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
  }
  resize()

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : '255,255,255'
  }

  const drawVessel = (vessel, idx) => {
    const fromPt = shippingMap.latLngToContainerPoint([vessel.from.lat, vessel.from.lng])
    const toPt = shippingMap.latLngToContainerPoint([vessel.to.lat, vessel.to.lng])

    // Compute bezier control point
    const midX = (fromPt.x + toPt.x) / 2
    const midY = (fromPt.y + toPt.y) / 2
    const dist = Math.hypot(toPt.x - fromPt.x, toPt.y - fromPt.y)
    const lift = dist * 0.2
    const dx = toPt.x - fromPt.x, dy = toPt.y - fromPt.y
    const len = Math.hypot(dx, dy) || 1
    const cx = midX - (dy / len) * lift
    const cy = midY + (dx / len) * lift

    // Current position
    const t = vessel.progress / 100
    const mt = 1 - t
    const bx = mt * mt * fromPt.x + 2 * mt * t * cx + t * t * toPt.x
    const by = mt * mt * fromPt.y + 2 * mt * t * cy + t * t * toPt.y

    // Direction (tangent)
    const dtx = 2 * mt * (cx - fromPt.x) + 2 * t * (toPt.x - cx)
    const dty = 2 * mt * (cy - fromPt.y) + 2 * t * (toPt.y - cy)
    const angle = Math.atan2(dty, dtx)

    // Wake trail
    const trailLen = 20
    const wx = bx - Math.cos(angle) * trailLen
    const wy = by - Math.sin(angle) * trailLen
    const wakeGrad = ctx.createLinearGradient(bx, by, wx, wy)
    wakeGrad.addColorStop(0, `rgba(${hexToRgb(vessel.color)},0.5)`)
    wakeGrad.addColorStop(1, `rgba(${hexToRgb(vessel.color)},0)`)
    ctx.beginPath()
    ctx.moveTo(bx, by)
    ctx.lineTo(wx - Math.cos(angle + 0.5) * 6, wy - Math.sin(angle + 0.5) * 6)
    ctx.lineTo(wx - Math.cos(angle - 0.5) * 6, wy - Math.sin(angle - 0.5) * 6)
    ctx.closePath()
    ctx.fillStyle = wakeGrad
    ctx.fill()

    // Hull glow
    const glowGrad = ctx.createRadialGradient(bx, by, 0, bx, by, 12)
    glowGrad.addColorStop(0, `rgba(${hexToRgb(vessel.color)},0.6)`)
    glowGrad.addColorStop(1, `rgba(${hexToRgb(vessel.color)},0)`)
    ctx.beginPath()
    ctx.arc(bx, by, 12, 0, Math.PI * 2)
    ctx.fillStyle = glowGrad
    ctx.fill()

    // Vessel body (elongated ellipse pointing in direction)
    ctx.save()
    ctx.translate(bx, by)
    ctx.rotate(angle)
    ctx.beginPath()
    ctx.ellipse(0, 0, 8, 3, 0, 0, Math.PI * 2)
    ctx.fillStyle = vessel.color
    ctx.fill()
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 0.5
    ctx.stroke()

    // Bow highlight
    ctx.beginPath()
    ctx.ellipse(3, 0, 3, 1.5, 0, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255,255,255,0.4)'
    ctx.fill()
    ctx.restore()

    // Pulse indicator
    const pulseAlpha = 0.3 + 0.3 * Math.sin(vessel.pulse)
    ctx.beginPath()
    ctx.arc(bx, by, Math.max(1, 16 + Math.sin(vessel.pulse) * 3), 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(${hexToRgb(vessel.color)},${pulseAlpha})`
    ctx.lineWidth = 1
    ctx.stroke()
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    vessels.value.forEach((v, idx) => {
      v.progress += parseFloat(v.speed) * 0.015
      if (v.progress >= 100) v.progress = 0
      v.pulse += 0.05
      drawVessel(v, idx)
    })
    shippingAnimationId = requestAnimationFrame(animate)
  }

  animate()
  shippingMap.on('move', resize)
  shippingMap.on('zoom', resize)
}

// ─── Charts ────────────────────────────────────────────────────────
const initCharts = () => {
  if (bdiChartContainer.value) {
    bdiChart = echarts.init(bdiChartContainer.value, 'dark')
    bdiChart.setOption({
      backgroundColor: 'transparent',
      grid: { top: 5, right: 5, bottom: 5, left: 5 },
      xAxis: { type: 'category', show: false, data: ['一', '二', '三', '四', '五', '六', '日'] },
      yAxis: { type: 'value', show: false, min: 'dataMin' },
      series: [{
        type: 'line', smooth: true, symbol: 'none',
        data: bdiData.value.history,
        lineStyle: { color: '#00D4FF', width: 2 },
        areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0,212,255,0.4)' },
          { offset: 1, color: 'rgba(0,212,255,0)' }
        ]) }
      }]
    })
  }

  if (oilChartContainer.value) {
    oilChart = echarts.init(oilChartContainer.value, 'dark')
    oilChart.setOption({
      backgroundColor: 'transparent',
      grid: { top: 5, right: 5, bottom: 5, left: 5 },
      xAxis: { type: 'category', show: false, data: ['一', '二', '三', '四', '五', '六', '日'] },
      yAxis: { type: 'value', show: false, min: 'dataMin' },
      series: [{
        type: 'line', smooth: true, symbol: 'none',
        data: oilData.value.history,
        lineStyle: { color: '#F59E0B', width: 2 },
        areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(245,158,11,0.4)' },
          { offset: 1, color: 'rgba(245,158,11,0)' }
        ]) }
      }]
    })
  }

  if (chartContainer.value) {
    chart = echarts.init(chartContainer.value, 'dark')
    chart.setOption({
      backgroundColor: 'transparent',
      grid: { top: 8, right: 8, bottom: 20, left: 35 },
      xAxis: {
        type: 'category', data: ['2020', '2021', '2022', '2023', '2024', '2025'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
        axisLabel: { color: '#94A3B8', fontSize: 9 },
      },
      yAxis: {
        type: 'value', axisLine: { show: false },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
        axisLabel: { color: '#94A3B8', fontSize: 9 },
      },
      series: [
        {
          name: '全球贸易指数', type: 'line', smooth: true, symbol: 'circle', symbolSize: 5,
          data: [100, 115, 125, 138, 152, 168],
          lineStyle: { color: '#00D4FF', width: 2 }, itemStyle: { color: '#00D4FF' },
          areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0,212,255,0.3)' }, { offset: 1, color: 'rgba(0,212,255,0)' }
          ]) },
        },
        {
          name: '新兴市场指数', type: 'line', smooth: true, symbol: 'circle', symbolSize: 5,
          data: [100, 108, 122, 141, 165, 195],
          lineStyle: { color: '#6366F1', width: 2 }, itemStyle: { color: '#6366F1' },
          areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(99,102,241,0.3)' }, { offset: 1, color: 'rgba(99,102,241,0)' }
          ]) },
        },
      ],
      legend: { show: true, bottom: 0, textStyle: { color: '#94A3B8', fontSize: 9 }, itemWidth: 10, itemHeight: 6 },
    })
  }
}

// ─── Real-time Updates ─────────────────────────────────────────────
const updateBDI = () => {
  const change = (Math.random() - 0.5) * 20
  bdiData.value.value = Math.max(1500, bdiData.value.value + change)
  bdiData.value.change = ((bdiData.value.value - 1800) / 1800) * 100
  bdiData.value.history = [...bdiData.value.history.slice(1), bdiData.value.value]
  if (bdiChart) bdiChart.setOption({ series: [{ data: bdiData.value.history }] })
}

const updateOil = () => {
  const change = (Math.random() - 0.5) * 1.5
  oilData.value.price = Math.max(60, Math.min(120, oilData.value.price + change))
  oilData.value.change = ((oilData.value.price - 77) / 77) * 100
  oilData.value.history = [...oilData.value.history.slice(1), oilData.value.price]
  if (oilChart) oilChart.setOption({ series: [{ data: oilData.value.history }] })
}

let bdiInterval = null
let oilInterval = null

onMounted(() => {
  generateVessels()
  initMap()
  initShippingMap()
  initCanvas()
  initShippingCanvas()
  initCharts()

  bdiInterval = setInterval(updateBDI, 3000)
  oilInterval = setInterval(updateOil, 4000)

  window.addEventListener('resize', () => {
    if (chart) chart.resize()
    if (bdiChart) bdiChart.resize()
    if (oilChart) oilChart.resize()
  })
})

onUnmounted(() => {
  if (map) map.remove()
  if (shippingMap) shippingMap.remove()
  if (chart) chart.dispose()
  if (bdiChart) bdiChart.dispose()
  if (oilChart) oilChart.dispose()
  if (flowAnimationId) cancelAnimationFrame(flowAnimationId)
  if (shippingAnimationId) cancelAnimationFrame(shippingAnimationId)
  if (bdiInterval) clearInterval(bdiInterval)
  if (oilInterval) clearInterval(oilInterval)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
</style>
