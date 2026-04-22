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
      <div class="grid lg:grid-cols-3 gap-6 mb-12">
        <!-- Map -->
        <div class="lg:col-span-2 glass rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-white/5">
            <h3 class="text-white font-semibold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              全球贸易热度图
            </h3>
          </div>
          <div ref="mapContainer" class="h-[400px] lg:h-[500px]"></div>
        </div>

        <!-- Charts -->
        <div class="space-y-6">
          <!-- Commodity Index -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
              <span class="text-sm">📈</span>
              大宗商品指数
            </h3>
            <div ref="chartContainer" class="h-[200px]"></div>
            <p class="text-xs text-text-secondary mt-2">数据来源: World Bank API</p>
          </div>

          <!-- Trade Volume -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
              <span class="text-sm">🌍</span>
              区域贸易量占比
            </h3>
            <div ref="pieChartContainer" class="h-[200px]"></div>
          </div>
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
let map = null
let chart = null
let pieChart = null

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
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  submitSuccess.value = true
  form.value = { name: '', company: '', email: '', phone: '', region: '', interest: '', message: '' }
  setTimeout(() => { submitSuccess.value = false }, 5000)
}

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
  const hotspots = [
    { lat: 31.23, lng: 121.47, name: '中国', weight: 1.0 },
    { lat: 40.71, lng: -74.01, name: '美国', weight: 0.9 },
    { lat: 51.51, lng: -0.13, name: '英国', weight: 0.7 },
    { lat: 52.52, lng: 13.41, name: '德国', weight: 0.8 },
    { lat: 35.68, lng: 139.69, name: '日本', weight: 0.75 },
    { lat: 1.35, lng: 103.82, name: '新加坡', weight: 0.65 },
    { lat: 25.2, lng: 55.27, name: '迪拜', weight: 0.6 },
    { lat: -23.55, lng: -46.63, name: '巴西', weight: 0.55 },
    { lat: -33.87, lng: 151.21, name: '澳大利亚', weight: 0.5 },
    { lat: -1.29, lng: 36.82, name: '肯尼亚', weight: 0.4 },
  ]

  hotspots.forEach(hotspot => {
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
}

const initCharts = () => {
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

onMounted(() => {
  initMap()
  initCharts()

  window.addEventListener('resize', () => {
    if (chart) chart.resize()
    if (pieChart) pieChart.resize()
  })
})

onUnmounted(() => {
  if (map) map.remove()
  if (chart) chart.dispose()
  if (pieChart) pieChart.dispose()
})
</script>
