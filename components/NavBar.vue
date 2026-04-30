<template>
  <nav
    ref="navRef"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
    ]"
  >
    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center">
          <span class="text-white font-bold text-lg">N</span>
        </div>
        <div class="hidden sm:block">
          <p class="text-sm font-semibold text-white group-hover:text-accent transition-colors">Nuevos TEC</p>
          <p class="text-xs text-text-secondary">瑞纳致一</p>
        </div>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
        >
          {{ item.label }}
        </a>
        <a href="#contact" class="btn-primary text-sm !px-5 !py-2">
          联系我们
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 text-white"
      >
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden glass-strong mt-3 mx-4 rounded-xl p-4">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click="mobileMenuOpen = false"
          class="block py-3 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
        >
          {{ item.label }}
        </a>
        <a href="#contact" @click="mobileMenuOpen = false" class="btn-primary text-sm !px-5 !py-2 mt-4 inline-block">
          联系我们
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const navRef = ref(null)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { id: 'services', label: '业务板块' },
  { id: 'outbound', label: '企业出海' },
  { id: 'cloud-ai', label: '企业上云' },
  { id: 'trade-map', label: '资本市场咨询' },
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
