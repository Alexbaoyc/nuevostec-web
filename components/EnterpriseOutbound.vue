<template>
  <section id="outbound" class="section bg-secondary/30 relative">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <span class="text-2xl">🌏</span>
          <span class="text-sm text-text-secondary font-medium">企业出海</span>
        </div>
        <h2 class="section-title">全球顶尖展会资源</h2>
        <p class="section-subtitle mx-auto">
          深度布局国际顶级科技展会，开拓新兴市场，共创全球布局新篇章
        </p>
      </div>

      <!-- Major Exhibitions -->
      <div class="mb-20">
        <h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3">
          <span class="w-1 h-6 bg-accent rounded-full"></span>
          主流展会
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="expo in majorExpos"
            :key="expo.name"
            class="glass rounded-2xl overflow-hidden card-hover border-glow"
          >
            <div class="aspect-video relative overflow-hidden">
              <img
                :src="expo.image"
                :alt="expo.name"
                class="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 rounded text-xs font-medium bg-accent/20 text-accent">
                    {{ expo.location }}
                  </span>
                  <span class="px-2 py-1 rounded text-xs font-medium bg-accent2/20 text-accent2">
                    {{ expo.timing }}
                  </span>
                </div>
                <h4 class="text-xl font-bold text-white">{{ expo.name }}</h4>
              </div>
            </div>
            <div class="p-6">
              <p class="text-text-secondary text-sm leading-relaxed mb-4">
                {{ expo.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="highlight in expo.highlights"
                  :key="highlight"
                  class="text-xs px-3 py-1 rounded-full bg-white/5 text-accent border border-accent/20"
                >
                  {{ highlight }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Emerging Markets -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3">
          <span class="w-1 h-6 bg-accent2 rounded-full"></span>
          新兴市场导航
        </h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="market in emergingMarkets"
            :key="market.region"
            class="glass rounded-xl p-5 card-hover"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">{{ market.flag }}</span>
              <div>
                <h4 class="text-white font-semibold">{{ market.region }}</h4>
                <p class="text-xs text-text-secondary">{{ market.countries }}</p>
              </div>
            </div>
            <p class="text-text-secondary text-sm leading-relaxed">
              {{ market.description }}
            </p>
            <div class="mt-4 pt-4 border-t border-white/5">
              <p class="text-xs text-accent font-medium">{{ market.opportunity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const majorExpos = [
  {
    name: 'GITEX',
    location: '迪拜 · UAE',
    timing: '每年10月',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: '中东及北非地区规模最大、最具影响力的科技盛会，汇聚全球顶尖科技企业与创新解决方案，是进入中东市场的绝佳窗口。',
    highlights: ['中东市场', '科技前沿', ' networking', '政府合作'],
  },
  {
    name: 'CES',
    location: '拉斯维加斯 · 美国',
    timing: '每年1月',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    description: '全球消费电子领域最具影响力的展会，涵盖AI、IoT、机器人、汽车科技等前沿领域，是展示创新实力和对接国际资源的顶级平台。',
    highlights: ['消费电子', 'AI创新', '全球曝光', '投资对接'],
  },
]

const emergingMarkets = [
  {
    region: '拉丁美洲',
    flag: '🌎',
    countries: '巴西 · 墨西哥 · 智利 · 哥伦比亚',
    description: '人口红利巨大，互联网渗透率快速增长，电商与金融科技需求旺盛，正处于数字化转型关键期。',
    opportunity: '电商平台 · 移动支付 · 企业服务',
  },
  {
    region: '非洲新兴',
    flag: '🌍',
    countries: '尼日利亚 · 肯尼亚 · 南非 · 埃及',
    description: '移动互联网用户爆发式增长，数字经济起步晚但空间巨大，是下一波全球增长的核心引擎。',
    opportunity: '移动金融 · 电商物流 · 数字基建',
  },
  {
    region: '东南亚',
    flag: '🌏',
    countries: '印尼 · 越南 · 泰国 · 马来西亚',
    description: '制造业转移承接地，数字支付快速普及，年轻人口结构带来消费市场蓬勃发展。',
    opportunity: '智能制造 · 跨境电商 · 数字娱乐',
  },
  {
    region: '中东中亚',
    flag: '🏜️',
    countries: '沙特 · 阿联酋 · 哈萨克斯坦',
    description: '石油国家积极推进经济多元化，Vision 2030等战略带动科技投资热潮，市场消费力强劲。',
    opportunity: '新能源 · 智慧城市 · 数字娱乐',
  },
]
</script>
