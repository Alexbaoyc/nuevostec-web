<template>
  <section id="cloud-ai" class="section bg-primary relative">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <span class="text-2xl">☁️</span>
          <span class="text-sm text-text-secondary font-medium">企业上云</span>
        </div>
        <h2 class="section-title">AI 数字员工</h2>
        <p class="section-subtitle mx-auto">
          重新定义企业客服，7×24小时多语言智能服务，深度适配各国法规与文化
        </p>
      </div>

      <!-- Value Props -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div
          v-for="(prop, index) in valueProps"
          :key="prop.title"
          class="glass rounded-xl p-6 text-center card-hover"
        >
          <div class="text-4xl mb-4">{{ prop.icon }}</div>
          <h4 class="text-white font-semibold mb-2">{{ prop.title }}</h4>
          <p class="text-text-secondary text-sm">{{ prop.desc }}</p>
        </div>
      </div>

      <!-- Comparison -->
      <div class="mb-16">
        <h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3">
          <span class="w-1 h-6 bg-success rounded-full"></span>
          传统客服 vs AI数字员工
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Traditional -->
          <div class="glass rounded-2xl p-8 border border-red-500/20">
            <div class="flex items-center gap-3 mb-6">
              <span class="text-2xl">⚠️</span>
              <h4 class="text-lg font-semibold text-red-400">传统客服</h4>
            </div>
            <ul class="space-y-4">
              <li v-for="item in traditionalCons" :key="item" class="flex items-start gap-3 text-text-secondary text-sm">
                <span class="text-red-400 mt-0.5">✕</span>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- AI -->
          <div class="glass rounded-2xl p-8 border border-success/20 glow-accent">
            <div class="flex items-center gap-3 mb-6">
              <span class="text-2xl">✨</span>
              <h4 class="text-lg font-semibold text-success">AI数字员工</h4>
            </div>
            <ul class="space-y-4">
              <li v-for="item in aiPros" :key="item" class="flex items-start gap-3 text-text-secondary text-sm">
                <span class="text-success mt-0.5">✓</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Country Coverage -->
      <div>
        <h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3">
          <span class="w-1 h-6 bg-accent rounded-full"></span>
          国别深度适配
        </h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="country in countryCoverage"
            :key="country.region"
            class="glass rounded-xl p-5"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">{{ country.flag }}</span>
              <div>
                <h4 class="text-white font-semibold">{{ country.region }}</h4>
                <p class="text-xs text-text-secondary">{{ country.language }}</p>
              </div>
            </div>
            <ul class="space-y-2">
              <li
                v-for="feature in country.features"
                :key="feature"
                class="text-text-secondary text-xs flex items-center gap-2"
              >
                <span class="w-1 h-1 rounded-full bg-accent"></span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const valueProps = [
  { icon: '🕛', title: '7×24小时', desc: '全天候不间断服务，节假日无休' },
  { icon: '🌍', title: '多语言', desc: '覆盖50+语种，母语级对话体验' },
  { icon: '⚡', title: '秒级响应', desc: '平均响应时间<1秒，零等待' },
  { icon: '🎯', title: '99.9%准确', desc: '先进NLP引擎，理解意图精准' },
]

const traditionalCons = [
  '人工成本高昂，招募培训周期长',
  '服务水平参差不齐，情绪波动大',
  '无法同时处理多语言需求',
  '夜间/节假日无法提供服务',
  '知识更新慢，答案一致性差',
  '难以进行数据分析和挖掘',
]

const aiPros = [
  '边际成本趋近于零，ROI高达500%+',
  '服务标准化，情绪稳定，专业度高',
  '原生多语言切换，无缝衔接',
  '24小时在线，节假日无休',
  '实时学习更新，知识库持续进化',
  '自动生成服务报告，洞察客户需求',
]

const countryCoverage = [
  {
    region: '中国',
    flag: '🇨🇳',
    language: '普通话 / 粤语 / 各地方言',
    features: ['符合《网络安全法》《数据安全法》', '支持微信/钉钉/企微多渠道', '本地化知识库即插即用'],
  },
  {
    region: '东南亚',
    flag: '🇸🇬',
    language: '英语 / 泰语 / 越南语 / 印尼语',
    features: ['适配ASEAN数据跨境规则', '支持Grab/Line等本地平台', '文化习惯深度适配'],
  },
  {
    region: '欧洲',
    flag: '🇪🇺',
    language: '英语 / 德语 / 法语 / 西班牙语',
    features: ['GDPR完全合规', '支持GDPR数据删除权', '本地化语境理解'],
  },
  {
    region: '中东',
    flag: '🇸🇦',
    language: '阿拉伯语 / 英语',
    features: ['适配GCC数据本地化要求', '宗教文化深度理解', '右向左阅读适配'],
  },
  {
    region: '拉美',
    flag: '🇧🇷',
    language: '西班牙语 / 葡萄牙语',
    features: ['符合LGPD数据法规', '本地节日/习俗自动适配', '时区智能切换'],
  },
  {
    region: '非洲',
    flag: '🇳🇬',
    language: '英语 / 法语 / 斯瓦希里语',
    features: ['适配各国家数据法规差异', '离线+在线双模式', '方言识别支持'],
  },
]
</script>
