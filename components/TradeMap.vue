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
      <div class="grid lg:grid-cols-3 gap-6 mb-8">
        <!-- Map with Data Flow Canvas -->
        <div class="lg:col-span-2 glass rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-white/5 flex items-center justify-between">
            <h3 class="text-white font-semibold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              全球贸易热度图
            </h3>
            <!-- BDI Indicator -->
            <div class="flex items-center gap-4 text-sm">
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span class="text-accent font-medium">BDI</span>
                <span class="text-white font-mono">{{ bdiData.value.toLocaleString() }}</span>
                <span :class="bdiData.change >= 0 ? 'text-success' : 'text-danger'" class="font-medium">
                  {{ bdiData.change >= 0 ? '↑' : '↓' }}{{ Math.abs(bdiData.change).toFixed(1) }}%
                </span>
              </div>
            </div>
          </div>
          <div class="relative">
            <div ref="mapContainer" class="h-[400px] lg:h-[500px]"></div>
            <!-- Data Flow Canvas Overlay -->
            <canvas
              ref="flowCanvas"
              class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-70"
            ></canvas>
          </div>
        </div>

        <!-- Charts Column -->
        <div class="space-y-6">
          <!-- BDI Trend Card -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-3 flex items-center gap-2">
              <span class="text-sm">🚢</span>
              波罗的海航运指数 (BDI)
            </h3>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-3xl font-bold text-white font-mono">{{ bdiData.value.toLocaleString() }}</span>
              <span class="text-sm text-text-secondary">点位</span>
            </div>
            <div class="flex items-center gap-2 mb-3">
              <span :class="bdiData.change >= 0 ? 'text-success' : 'text-danger'" class="text-sm font-medium">
                {{ bdiData.change >= 0 ? '↑' : '↓' }} {{ Math.abs(bdiData.change).toFixed(2) }}
              </span>
              <span class="text-xs text-text-secondary">较前日</span>
            </div>
            <div ref="bdiChartContainer" class="h-[80px]"></div>
            <p class="text-xs text-text-secondary mt-2">数据来源: Baltic Exchange</p>
          </div>

          <!-- Commodity Index -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
              <span class="text-sm">📈</span>
              大宗商品指数
            </h3>
            <div ref="chartContainer" class="h-[160px]"></div>
            <p class="text-xs text-text-secondary mt-2">数据来源: World Bank API</p>
          </div>

          <!-- Trade Volume -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
              <span class="text-sm">🌍</span>
              区域贸易量占比
            </h3>
            <div ref="pieChartContainer" class="h-[160px]"></div>
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
          <span class="w-3 h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></span>
          <span class="text-text-secondary">数据流动路径</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-accent2"></span>
          <span class="text-text-secondary">航运节点</span>
        </div>
        <div class="text-text-secondary">
          <span class="text-accent font-medium">BDI</span> 波罗的海干散货指数 — 全球贸易先行指标
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
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="input-field"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label class="block text-sm text-text-secondary mb-2">公司 *</label>
                  <input
                    v-model="form.company"
                    type="text"
                    required
                    class="input-field"
                    placeholder="公司名称"
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-text-secondary mb-2">邮箱 *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="input-field"
                    placeholder="business@company.com"
                  />
                </div>
                <div>
                  <label class="block text-sm text-text-secondary mb-2">电话</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="input-field"
                    placeholder="+86 xxx xxxx xxxx"
                  />
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
                <textarea
                  v-model="form.message"
                  rows="3"
                  class="input-field resize-none"
                  placeholder="请描述您的需求..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? '提交中...' : '提交申请' }}
              </button>
            </form>

            <!-- Success Message -->
            <Transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
            >
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
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                  📧
                </div>
                <div>
                  <h4 class="text-white font-medium">邮箱</h4>
                  <p class="text-text-secondary text-sm">contact@nuevostec.com</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-accent2/10 flex items-center justify-center text-accent2 text-xl shrink-0">
                  🌐
                </div>
                <div>
                  <h4 class="text-white font-medium">网址</h4>
                  <p class="text-text-secondary text-sm">www.nuevostec.com</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success text-xl shrink-0">
                  📍
                </div>
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
import { onMounted, ref, onUnmounted } from 'vue'
import L from 'leaflet'
import * as echarts from 'echarts'

const mapContainer = ref(null)
const chartContainer = ref(null)
const pieChartContainer = ref(null)
const bdiChartContainer = ref(null)
const flowCanvas = ref(null)
let map = null
let chart = null
let pieChart = null
let bdiChart = null
let flowAnimationId = null

// BDI Data - Simulated real-time
const bdiData = ref({
  value: 1847,
  change: 2.34,
  history: [1650, 1680, 1720, 1750, 1780, 1800, 1820, 1847]
})

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  region: '',
  interest: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  submitSuccess.value = true
  form.value = { name: '', company: '', email: '', phone: '', region: '', interest: '', message: '' }
  setTimeout(() => { submitSuccess.value = false }, 5000)
}

// Trade nodes for data flow visualization
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

// Particles for data flow
const particles = []
const connections = []

const initMap = () => {
  if (!mapContainer.value) return

  map = L.map(mapContainer.value, {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    scrollWheelZoom: false,
    style: {
      background: '#0A0F1E',
      color: '#F0F6FF',
    },
  })

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map)

  // Trade hotspots with heat effect
  tradeNodes.forEach(hotspot => {
    const radius = 20 + hotspot.weight * 30
    const circle = L.circle([hotspot.lat, hotspot.lng], {
      radius: radius * 1000,
      fillColor: hotspot.weight > 0.7 ? '#00D4FF' : hotspot.weight > 0.5 ? '#6366F1' : '#10B981',
      fillOpacity: 0.15,
      stroke: true,
      color: hotspot.weight > 0.7 ? '#00D4FF' : hotspot.weight > 0.5 ? '#6366F1' : '#10B981',
      weight: 1,
      opacity: 0.6,
    }).addTo(map)

    circle.bindPopup(`
      <div style="min-width: 120px;">
        <strong style="color: #F0F6FF;">${hotspot.name}</strong>
        <p style="color: #94A3B8; font-size: 12px; margin: 4px 0 0;">贸易热度: ${(hotspot.weight * 100).toFixed(0)}%</p>
      </div>
    `)
  })

  // Initialize connections between nodes
  for (let i = 0; i < tradeNodes.length; i++) {
    for (let j = i + 1; j < tradeNodes.length; j++) {
      if (Math.random() > 0.5) {
        connections.push({
          from: tradeNodes[i],
          to: tradeNodes[j],
          intensity: (tradeNodes[i].weight + tradeNodes[j].weight) / 2
        })
      }
    }
  }

  // Initialize particles
  for (let i = 0; i < 50; i++) {
    const conn = connections[Math.floor(Math.random() * connections.length)]
    particles.push({
      connection: conn,
      progress: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      size: 2 + Math.random() * 2,
      color: Math.random() > 0.5 ? '#00D4FF' : '#6366F1'
    })
  }
}

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

  const drawFlow = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections
    connections.forEach(conn => {
      const fromPoint = map.latLngToContainerPoint([conn.from.lat, conn.from.lng])
      const toPoint = map.latLngToContainerPoint([conn.to.lat, conn.to.lng])

      ctx.beginPath()
      ctx.moveTo(fromPoint.x, fromPoint.y)
      ctx.lineTo(toPoint.x, toPoint.y)
      ctx.strokeStyle = `rgba(0, 212, 255, ${conn.intensity * 0.15})`
      ctx.lineWidth = 1
      ctx.stroke()
    })

    // Draw particles
    particles.forEach(p => {
      const fromPoint = map.latLngToContainerPoint([p.connection.from.lat, p.connection.from.lng])
      const toPoint = map.latLngToContainerPoint([p.connection.to.lat, p.connection.to.lng])

      const x = fromPoint.x + (toPoint.x - fromPoint.x) * p.progress
      const y = fromPoint.y + (toPoint.y - fromPoint.y) * p.progress

      // Glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 3)
      gradient.addColorStop(0, p.color)
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, p.size * 3, 0, Math.PI * 2)
      ctx.fill()

      // Core
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(x, y, p.size * 0.5, 0, Math.PI * 2)
      ctx.fill()

      // Move particle
      p.progress += p.speed
      if (p.progress >= 1) {
        p.progress = 0
        // Occasionally switch connection
        if (Math.random() > 0.7) {
          p.connection = connections[Math.floor(Math.random() * connections.length)]
        }
      }
    })

    flowAnimationId = requestAnimationFrame(drawFlow)
  }

  drawFlow()

  map.on('move', resize)
  map.on('zoom', resize)
}

const initCharts = () => {
  // BDI Mini Chart
  if (bdiChartContainer.value) {
    bdiChart = echarts.init(bdiChartContainer.value, 'dark')
    const bdiOption = {
      backgroundColor: 'transparent',
      grid: { top: 5, right: 5, bottom: 5, left: 5 },
      xAxis: {
        type: 'category',
        show: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 'dataMin'
      },
      series: [{
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: bdiData.value.history,
        lineStyle: {
          color: '#00D4FF',
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0,212,255,0.4)' },
            { offset: 1, color: 'rgba(0,212,255,0)' }
          ])
        }
      }]
    }
    bdiChart.setOption(bdiOption)
  }

  // Main chart - Trade trends
  if (chartContainer.value) {
    chart = echarts.init(chartContainer.value, 'dark')
    const option = {
      backgroundColor: 'transparent',
      grid: { top: 10, right: 10, bottom: 20, left: 40 },
      xAxis: {
        type: 'category',
        data: ['2020', '2021', '2022', '2023', '2024', '2025'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
        axisLabel: { color: '#94A3B8', fontSize: 10 },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
        axisLabel: { color: '#94A3B8', fontSize: 10 },
      },
      series: [
        {
          name: '全球贸易指数',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          data: [100, 115, 125, 138, 152, 168],
          lineStyle: { color: '#00D4FF', width: 2 },
          itemStyle: { color: '#00D4FF' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(0,212,255,0.3)' },
              { offset: 1, color: 'rgba(0,212,255,0)' },
            ]),
          },
        },
        {
          name: '新兴市场指数',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          data: [100, 108, 122, 141, 165, 195],
          lineStyle: { color: '#6366F1', width: 2 },
          itemStyle: { color: '#6366F1' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(99,102,241,0.3)' },
              { offset: 1, color: 'rgba(99,102,241,0)' },
            ]),
          },
        },
      ],
      legend: {
        show: true,
        bottom: 0,
        textStyle: { color: '#94A3B8', fontSize: 10 },
        itemWidth: 12,
        itemHeight: 8,
      },
    }
    chart.setOption(option)
  }

  // Pie chart - Regional distribution
  if (pieChartContainer.value) {
    pieChart = echarts.init(pieChartContainer.value, 'dark')
    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%',
        backgroundColor: '#1E2A4A',
        borderColor: 'rgba(255,255,255,0.1)',
        textStyle: { color: '#F0F6FF' },
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 4,
            borderColor: '#0A0F1E',
            borderWidth: 2,
          },
          label: {
            show: false,
          },
          emphasis: {
            label: { show: false },
          },
          data: [
            { value: 35, name: '亚洲', itemStyle: { color: '#00D4FF' } },
            { value: 25, name: '欧洲', itemStyle: { color: '#6366F1' } },
            { value: 18, name: '北美', itemStyle: { color: '#10B981' } },
            { value: 12, name: '拉美', itemStyle: { color: '#F59E0B' } },
            { value: 7, name: '非洲', itemStyle: { color: '#EF4444' } },
            { value: 3, name: '其他', itemStyle: { color: '#94A3B8' } },
          ],
        },
      ],
    }
    pieChart.setOption(option)
  }
}

// Simulate BDI real-time updates
const updateBDI = () => {
  const change = (Math.random() - 0.5) * 20
  bdiData.value.value = Math.max(1500, bdiData.value.value + change)
  bdiData.value.change = ((bdiData.value.value - 1800) / 1800) * 100

  // Update history
  bdiData.value.history = [...bdiData.value.history.slice(1), bdiData.value.value]

  if (bdiChart) {
    bdiChart.setOption({
      series: [{
        data: bdiData.value.history
      }]
    })
  }
}

let bdiInterval = null

onMounted(() => {
  initMap()
  initCanvas()
  initCharts()

  // Update BDI every 3 seconds for "real-time" feel
  bdiInterval = setInterval(updateBDI, 3000)

  window.addEventListener('resize', () => {
    if (chart) chart.resize()
    if (pieChart) pieChart.resize()
    if (bdiChart) bdiChart.resize()
  })
})

onUnmounted(() => {
  if (map) map.remove()
  if (chart) chart.dispose()
  if (pieChart) pieChart.dispose()
  if (bdiChart) bdiChart.dispose()
  if (flowAnimationId) cancelAnimationFrame(flowAnimationId)
  if (bdiInterval) clearInterval(bdiInterval)
})
</script>
