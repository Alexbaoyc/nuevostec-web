<template>
  <section id="services" class="section bg-primary relative">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">我们的核心业务</h2>
        <p class="section-subtitle mx-auto">
          三大业务板块，助力企业全球化发展
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        <a
          v-for="(card, index) in cards"
          :key="card.id"
          :href="`#${card.id}`"
          class="group relative glass rounded-2xl p-8 card-hover border-glow"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Icon -->
          <div
            class="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-3xl"
            :style="{ background: card.gradient }"
          >
            {{ card.icon }}
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
            {{ card.title }}
          </h3>

          <!-- Description -->
          <p class="text-text-secondary text-sm leading-relaxed mb-6">
            {{ card.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in card.tags"
              :key="tag"
              class="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Arrow -->
          <div class="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    id: 'outbound',
    icon: '🌏',
    title: '企业出海',
    description: '覆盖全球顶尖科技展会，深度开拓中东、拉丁美洲、非洲等新兴市场，提供从市场调研、展位规划到落地执行的一站式服务。',
    gradient: 'linear-gradient(135deg, #00D4FF20, #00D4FF05)',
    tags: ['GITEX', 'CES', '新兴市场', '展会服务'],
  },
  {
    id: 'cloud-ai',
    icon: '☁️',
    title: '企业上云',
    description: 'AI数字员工智能客服，7×24小时多语言支持，深度适配各国法规与文化，提供私有化部署与定制化训练服务。',
    gradient: 'linear-gradient(135deg, #6366F120, #6366F105)',
    tags: ['AI客服', '多语言', '私有化部署', '国别适配'],
  },
  {
    id: 'trade-map',
    icon: '📊',
    title: '全球贸易热点图',
    description: '实时追踪全球贸易热点，动态可视化商品指数与市场趋势，智能匹配商机，让决策有据可依。',
    gradient: 'linear-gradient(135deg, #10B98120, #10B98105)',
    tags: ['实时数据', '贸易分析', '商品指数', '商机洞察'],
  },
]
</script>
