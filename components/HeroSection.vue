<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-primary">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/10 rounded-full blur-3xl animate-glow-pulse" style="animation-delay: 1.5s"></div>
      <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-success/5 rounded-full blur-3xl animate-glow-pulse" style="animation-delay: 0.8s"></div>

      <!-- Grid Lines -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 60px 60px;"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-on-scroll">
        <span class="w-2 h-2 rounded-full bg-success animate-pulse"></span>
        <span class="text-sm text-text-secondary">企业出海 · 企业上云 · 全球贸易洞察</span>
      </div>

      <!-- Main Title -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-scroll">
        <span class="text-white">链接全球</span>
        <span class="text-gradient"> · </span>
        <span class="text-white">智启未来</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-4 animate-on-scroll">
        成都瑞纳致一网络科技有限公司
      </p>
      <p class="text-base md:text-lg text-text-secondary/70 mb-10 animate-on-scroll">
        Chengdu Nuevos TEC Company
      </p>

      <!-- Description -->
      <p class="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-on-scroll">
        我们致力于帮助中国企业拓展全球市场，提供一站式出海服务、云端AI解决方案及实时贸易数据洞察，让全球化触手可及。
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
        <a href="#services" class="btn-primary text-base">
          探索我们的服务
          <svg class="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a href="#trade-map" class="btn-secondary text-base">
          资本市场咨询
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
      <span class="text-xs text-text-secondary">向下滚动</span>
      <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })

  onUnmounted(() => observer.disconnect())
})
</script>
