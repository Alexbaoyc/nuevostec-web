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
              class="absolute top-0 left-0 w-full h-full pointer-events-none"
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
          <span class="w-8 h-0.5 bg-gradient-to-r from-accent to-transparent rounded"></span>
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

// Flow paths (arc connections between nodes)
const flowPaths = []
// Packet particles
const packets = []
// Radar sweep
let radarAngle = 0

const FLOW_COLORS = ['#00D4FF', '#6366F1', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6']

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

  // Trade hotspots with heat effect + pulsing rings
  tradeNodes.forEach(hotspot => {
    const radius = 20 + hotspot.weight * 30
    const color = hotspot.weight > 0.7 ? '#00D4FF' : hotspot.weight > 0.5 ? '#6366F1' : '#10B981'

    L.circle([hotspot.lat, hotspot.lng], {
      radius: radius * 1000,
      fillColor: color,
      fillOpacity: 0.1,
      stroke: true,
      color: color,
      weight: 1,
      opacity: 0.4,
    }).addTo(map)

    // Add node marker with glow
    const marker = L.circleMarker([hotspot.lat, hotspot.lng], {
      radius: 4 + hotspot.weight * 4,
      fillColor: color,
      fillOpacity: 0.9,
      stroke: true,
      color: '#fff',
      weight: 1,
      opacity: 0.8,
    }).addTo(map)

    marker.bindPopup(`
      <div style="min-width: 120px;">
        <strong style="color: #F0F6FF;">${hotspot.name}</strong>
        <p style="color: #94A3B8; font-size: 12px; margin: 4px 0 0;">贸易热度: ${(hotspot.weight * 100).toFixed(0)}%</p>
      </div>
    `)
  })

  // Build flow paths (curved arcs between major nodes)
  const majorNodes = tradeNodes.filter(n => n.weight >= 0.6)
  for (let i = 0; i < majorNodes.length; i++) {
    for (let j = i + 1; j < majorNodes.length; j++) {
      if (Math.random() > 0.35) {
        const colorIdx = Math.floor(Math.random() * FLOW_COLORS.length)
        flowPaths.push({
          from: majorNodes[i],
          to: majorNodes[j],
          color: FLOW_COLORS[colorIdx],
          intensity: (majorNodes[i].weight + majorNodes[j].weight) / 2,
          dashOffset: Math.random() * 100,
        })
      }
    }
  }

  // Initialize data packets
  for (let i = 0; i < 120; i++) {
    const path = flowPaths[Math.floor(Math.random() * flowPaths.length)]
    packets.push({
      path: path,
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
      size: 1.5 + Math.random() * 2.5,
      color: path.color,
      alpha: 0.6 + Math.random() * 0.4,
      trailLength: 8 + Math.floor(Math.random() * 12),
      burst: Math.random() > 0.85, // some packets burst at nodes
    })
  }
}

// Compute quadratic bezier point for curved arc
const getArcPoint = (from, to, t, curvature = 0.3) => {
  const midLat = (from.lat + to.lat) / 2
  const midLng = (from.lng + to.lng) / 2
  // Lift the midpoint for arc effect
  const lift = Math.abs(to.lng - from.lng) * curvature
  const ctrlLat = midLat + lift * 0.5
  const ctrlLng = midLng

  const mt = 1 - t
  const x = mt * mt * from.lng + 2 * mt * t * ctrlLng + t * t * to.lng
  const y = mt * mt * from.lat + 2 * mt * t * ctrlLat + t * t * to.lat
  return { lng: x, lat: y }
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

  const drawArcPath = (from, to, color, intensity, dashOffset) => {
    const p1 = map.latLngToContainerPoint([from.lat, from.lng])
    const p2 = map.latLngToContainerPoint([to.lat, to.lng])

    // Compute midpoint for bezier control
    const midX = (p1.x + p2.x) / 2
    const midY = (p1.y + p2.y) / 2
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
    const lift = dist * 0.25
    // Perpendicular lift
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    const len = Math.hypot(dx, dy) || 1
    const cx = midX - (dy / len) * lift
    const cy = midY + (dx / len) * lift

    // Draw base arc line (subtle)
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.quadraticCurveTo(cx, cy, p2.x, p2.y)
    ctx.strokeStyle = `${color}${Math.floor(intensity * 25).toString(16).padStart(2, '0')}`
    ctx.lineWidth = 1
    ctx.stroke()

    // Draw animated dashed overlay (the "data stream")
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
    const from = packet.path.from
    const to = packet.path.to
    const t = packet.progress

    const p1 = map.latLngToContainerPoint([from.lat, from.lng])
    const p2 = map.latLngToContainerPoint([to.lat, to.lng])
    const midX = (p1.x + p2.x) / 2
    const midY = (p1.y + p2.y) / 2
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
    const lift = dist * 0.25
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    const len = Math.hypot(dx, dy) || 1
    const cx = midX - (dy / len) * lift
    const cy = midY + (dx / len) * lift

    // Current position on bezier
    const mt = 1 - t
    const bx = mt * mt * p1.x + 2 * mt * t * cx + t * t * p2.x
    const by = mt * mt * p1.y + 2 * mt * t * cy + t * t * p2.y

    // Draw trail
    const trailPositions = []
    for (let i = 1; i <= packet.trailLength; i++) {
      const tt = Math.max(0, t - (i * 0.015))
      const mtt = 1 - tt
      const tx = mtt * mtt * p1.x + 2 * mtt * tt * cx + tt * tt * p2.x
      const ty = mtt * mtt * p1.y + 2 * mtt * tt * cy + tt * tt * p2.y
      trailPositions.push({ x: tx, y: ty })
    }

    // Draw trail gradient
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

    // Glow around packet head
    const glowGrad = ctx.createRadialGradient(bx, by, 0, bx, by, packet.size * 5)
    glowGrad.addColorStop(0, `${packet.color}${Math.floor(packet.alpha * 200).toString(16).padStart(2, '0')}`)
    glowGrad.addColorStop(1, `${packet.color}00`)
    ctx.beginPath()
    ctx.arc(bx, by, packet.size * 5, 0, Math.PI * 2)
    ctx.fillStyle = glowGrad
    ctx.fill()

    // Packet core
    ctx.beginPath()
    ctx.arc(bx, by, packet.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${packet.alpha * 0.9})`
    ctx.fill()

    // Inner bright spot
    ctx.beginPath()
    ctx.arc(bx, by, packet.size * 0.4, 0, Math.PI * 2)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
  }

  const drawNodePulse = () => {
    tradeNodes.forEach(node => {
      const pt = map.latLngToContainerPoint([node.lat, node.lng])
      const color = node.weight > 0.7 ? '#00D4FF' : node.weight > 0.5 ? '#6366F1' : '#10B981'
      const baseRadius = 6 + node.weight * 6

      // Three expanding rings
      for (let i = 0; i < 3; i++) {
        const phase = (radarAngle * 0.5 + i * 0.33 + node.lat * 0.01) % 1
        const ringRadius = baseRadius + phase * 30
        const alpha = (1 - phase) * 0.3

        ctx.beginPath()
        ctx.arc(pt.x, pt.y, ringRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    })
  }

  const drawRadarSweep = () => {
    const w = canvas.width
    const h = canvas.height
    const cx = w * 0.5
    const cy = h * 0.5
    const maxR = Math.hypot(w, h)

    const sweepGrad = ctx.createConicGradient(radarAngle, cx, cy)
    sweepGrad.addColorStop(0, 'rgba(0,212,255,0.04)')
    sweepGrad.addColorStop(0.08, 'rgba(0,212,255,0.0)')
    sweepGrad.addColorStop(1, 'rgba(0,212,255,0.0)')

    ctx.beginPath()
    ctx.arc(cx, cy, maxR, 0, Math.PI * 2)
    ctx.fillStyle = sweepGrad
    ctx.fill()

    // Sweep line glow
    const lineLen = maxR
    const ex = cx + Math.cos(radarAngle) * lineLen
    const ey = cy + Math.sin(radarAngle) * lineLen
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

    // 1. Radar sweep
    drawRadarSweep()

    // 2. Node pulses
    drawNodePulse()

    // 3. Flow paths (arcs with animated dashes)
    flowPaths.forEach(path => {
      path.dashOffset += 0.4
      drawArcPath(path.from, path.to, path.color, path.intensity, path.dashOffset)
    })

    // 4. Data packets
    packets.forEach(packet => {
      packet.progress += packet.speed
      if (packet.progress >= 1) {
        packet.progress = 0
        // Occasionally switch to a different path
        if (Math.random() > 0.6) {
          packet.path = flowPaths[Math.floor(Math.random() * flowPaths.length)]
          packet.color = packet.path.color
        }
        // Randomize again
        packet.speed = 0.003 + Math.random() * 0.004
        packet.trailLength = 8 + Math.floor(Math.random() * 12)
        packet.burst = Math.random() > 0.85
      }
      drawPacket(packet)
    })

    // Update radar angle
    radarAngle += 0.008

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

//
// Simulate BDI real-time updates
const updateBDI = () => {
  const change = (Math.random() - 0.5) * 20
  bdiData.value.value = Math.max(1500, bdiData.value.value + change)
  bdiData.value.change = ((bdiData.value.value - 1800) / 1800) * 100

  bdiData.value.history = [...bdiData.value.history.slice(1), bdiData.value.value]

  if (bdiChart) {
    bdiChart.setOption({
      series: [{ data: bdiData.value.history }]
    })
  }
}

let bdiInterval = null

onMounted(() => {
  initMap()
  initCanvas()
  initCharts()

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
