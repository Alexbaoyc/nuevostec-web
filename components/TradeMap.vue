<template>
  <section id="trade-map" class="section bg-secondary/30 relative">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <span class="text-2xl">📈</span>
          <span class="text-sm text-text-secondary font-medium">全球主要市场股票指数</span>
        </div>
        <h2 class="section-title">全球主要市场股票指数</h2>
        <p class="section-subtitle mx-auto">
          覆盖全球核心交易所，实时追踪主要股指波动，让决策有据可依
        </p>
      </div>

      <!-- Global Market Overview Banner -->
      <div class="flex flex-wrap justify-center gap-3 mb-6">
        <div v-for="idx in globalIndices" :key="idx.name"
          class="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:border-accent/40 transition-colors">
          <span class="text-sm font-medium text-text-secondary">{{ idx.name }}</span>
          <span class="text-white font-mono font-semibold text-sm">{{ idx.value.toLocaleString() }}</span>
          <span :class="idx.change >= 0 ? 'text-success' : 'text-danger'" class="text-xs font-medium">
            {{ idx.change >= 0 ? '▲' : '▼' }} {{ Math.abs(idx.change).toFixed(2) }}%
          </span>
        </div>
      </div>

      <!-- Main Grid: World Map + Indices Cards -->
      <div class="grid lg:grid-cols-3 gap-6 mb-6">
        <!-- World Map with Stock Market Bubbles -->
        <div class="lg:col-span-2 glass rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
            <h3 class="text-white font-semibold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              全球股指热力图
            </h3>
            <div class="flex items-center gap-2 text-xs text-text-secondary">
              <span class="w-3 h-3 rounded-full bg-success inline-block"></span> 上涨
              <span class="w-3 h-3 rounded-full bg-danger inline-block ml-2"></span> 下跌
              <span class="w-3 h-3 rounded-full bg-[#F59E0B] inline-block ml-2"></span> 持平
            </div>
          </div>
          <div class="relative bg-[#0a1628]">
            <svg viewBox="0 0 1000 500" class="w-full h-[380px] lg:h-[460px]" xmlns="http://www.w3.org/2000/svg">
              <rect width="1000" height="500" fill="#0a1628"/>
              <g fill="#1e3a5f" stroke="#2d5a8a" stroke-width="0.8">
                <path d="M340,30 L420,25 L450,50 L440,90 L400,100 L360,90 L330,60 Z"/>
                <path d="M60,60 L120,40 L180,35 L240,45 L280,60 L300,90 L290,130 L270,160 L240,200 L200,230 L160,250 L130,240 L100,210 L80,180 L50,150 L40,110 L50,80 Z"/>
                <path d="M160,250 L180,260 L190,280 L185,300 L175,310 L165,305 L155,285 Z"/>
                <path d="M200,300 L240,290 L280,300 L310,330 L320,380 L300,430 L270,470 L230,480 L200,450 L180,400 L175,350 L185,320 Z"/>
                <circle cx="220" cy="245" r="6" fill="#1e3a5f"/>
                <circle cx="235" cy="250" r="5" fill="#1e3a5f"/>
                <circle cx="245" cy="240" r="4" fill="#1e3a5f"/>
                <path d="M440,60 L480,50 L520,55 L560,70 L580,95 L570,120 L550,140 L530,150 L510,145 L490,130 L470,140 L450,130 L440,110 L435,85 Z"/>
                <path d="M420,65 L435,60 L440,80 L430,95 L418,90 Z"/>
                <path d="M480,40 L510,35 L525,55 L515,75 L495,80 L480,65 Z"/>
                <path d="M440,160 L480,150 L520,155 L560,170 L580,200 L590,250 L580,310 L560,360 L530,400 L490,420 L450,410 L420,380 L410,330 L420,270 L430,220 L425,185 Z"/>
                <path d="M600,320 L615,310 L620,350 L610,380 L598,370 Z"/>
                <path d="M560,150 L600,145 L630,160 L640,190 L630,220 L610,230 L585,220 L570,195 L565,170 Z"/>
                <path d="M660,200 L700,190 L720,220 L715,270 L700,310 L680,320 L665,300 L660,260 L655,230 Z"/>
                <circle cx="700" cy="330" r="8" fill="#1e3a5f"/>
                <path d="M560,40 L650,30 L750,35 L850,45 L920,60 L950,90 L940,130 L900,140 L850,130 L800,120 L750,110 L700,100 L650,95 L600,100 L560,95 L540,75 Z"/>
                <path d="M740,130 L800,120 L860,130 L900,160 L910,210 L890,250 L850,270 L800,275 L750,265 L720,240 L710,200 L720,160 Z"/>
                <path d="M900,130 L920,125 L935,150 L930,180 L915,195 L900,180 L895,155 Z"/>
                <path d="M870,170 L885,165 L890,190 L878,205 L868,195 Z"/>
                <path d="M855,220 L862,215 L865,235 L858,245 L850,235 Z"/>
                <path d="M760,280 L820,270 L870,280 L900,310 L910,350 L890,380 L850,395 L810,390 L780,370 L760,340 Z"/>
                <circle cx="870" cy="290" r="8" fill="#1e3a5f"/>
                <circle cx="878" cy="310" r="6" fill="#1e3a5f"/>
                <circle cx="780" cy="350" r="7" fill="#1e3a5f"/>
                <circle cx="800" cy="370" r="9" fill="#1e3a5f"/>
                <circle cx="830" cy="365" r="8" fill="#1e3a5f"/>
                <circle cx="890" cy="380" r="12" fill="#1e3a5f"/>
                <path d="M800,390 L870,380 L920,395 L950,430 L940,470 L900,490 L850,485 L810,460 L790,430 L785,410 Z"/>
                <path d="M950,440 L965,435 L970,460 L958,475 L948,465 Z"/>
                <path d="M955,480 L970,475 L975,495 L962,505 L952,495 Z"/>
                <path d="M0,480 L100,475 L200,480 L300,478 L400,482 L500,480 L600,485 L700,482 L800,478 L900,485 L1000,480 L1000,500 L0,500 Z" fill="#1a3050"/>
              </g>
              <g stroke="#1a3050" stroke-width="0.3" fill="none" opacity="0.5">
                <line x1="0" y1="125" x2="1000" y2="125"/>
                <line x1="0" y1="250" x2="1000" y2="250"/>
                <line x1="0" y1="375" x2="1000" y2="375"/>
                <line x1="250" y1="0" x2="250" y2="500"/>
                <line x1="500" y1="0" x2="500" y2="500"/>
                <line x1="750" y1="0" x2="750" y2="500"/>
              </g>

              <!-- Market Bubbles -->
              <!-- New York S&P500 -->
              <circle cx="230" cy="155" r="14" :fill="getBubbleColor('US')" opacity="0.85"/>
              <circle cx="230" cy="155" r="20" fill="none" :stroke="getBubbleColor('US')" stroke-width="0.8" opacity="0.3"/>
              <text x="244" y="150" fill="#fff" font-size="11" font-weight="700">标普500</text>
              <text x="244" y="164" fill="rgba(255,255,255,0.65)" font-size="9">纽约</text>
              <!-- NASDAQ -->
              <circle cx="200" cy="175" r="10" :fill="getBubbleColor('US')" opacity="0.85"/>
              <text x="212" y="179" fill="rgba(255,255,255,0.65)" font-size="9">纳斯达克</text>
              <!-- London FTSE100 -->
              <circle cx="460" cy="100" r="11" :fill="getBubbleColor('UK')" opacity="0.85"/>
              <circle cx="460" cy="100" r="16" fill="none" :stroke="getBubbleColor('UK')" stroke-width="0.8" opacity="0.3"/>
              <text x="444" y="87" fill="#fff" font-size="11" font-weight="700">富时100</text>
              <text x="444" y="101" fill="rgba(255,255,255,0.65)" font-size="9">伦敦</text>
              <!-- Frankfurt DAX -->
              <circle cx="495" cy="95" r="10" :fill="getBubbleColor('EU')" opacity="0.85"/>
              <text x="475" y="118" fill="rgba(255,255,255,0.65)" font-size="9">法兰克福 DAX</text>
              <!-- Paris CAC40 -->
              <circle cx="472" cy="105" r="8" :fill="getBubbleColor('EU')" opacity="0.85"/>
              <text x="480" y="109" fill="rgba(255,255,255,0.65)" font-size="9">CAC40</text>
              <!-- Tokyo Nikkei225 -->
              <circle cx="888" cy="148" r="12" :fill="getBubbleColor('JP')" opacity="0.85"/>
              <circle cx="888" cy="148" r="18" fill="none" :stroke="getBubbleColor('JP')" stroke-width="0.8" opacity="0.3"/>
              <text x="872" y="139" fill="#fff" font-size="11" font-weight="700">日经225</text>
              <text x="872" y="153" fill="rgba(255,255,255,0.65)" font-size="9">东京</text>
              <!-- Shanghai CSI300 -->
              <circle cx="748" cy="195" r="12" :fill="getBubbleColor('CN')" opacity="0.85"/>
              <circle cx="748" cy="195" r="18" fill="none" :stroke="getBubbleColor('CN')" stroke-width="0.8" opacity="0.3"/>
              <text x="730" y="184" fill="#fff" font-size="11" font-weight="700">沪深300</text>
              <text x="730" y="198" fill="rgba(255,255,255,0.65)" font-size="9">上海</text>
              <!-- Hong Kong HSI -->
              <circle cx="775" cy="230" r="10" :fill="getBubbleColor('HK')" opacity="0.85"/>
              <text x="758" y="246" fill="rgba(255,255,255,0.65)" font-size="9">恒生指数</text>
              <!-- Shenzhen -->
              <circle cx="755" cy="210" r="7" :fill="getBubbleColor('CN')" opacity="0.85"/>
              <text x="762" y="214" fill="rgba(255,255,255,0.65)" font-size="8">深圳</text>
              <!-- Mumbai Sensex -->
              <circle cx="670" cy="240" r="9" :fill="getBubbleColor('IN')" opacity="0.85"/>
              <text x="655" y="256" fill="rgba(255,255,255,0.65)" font-size="9">孟买 Sensex</text>
              <!-- Singapore STI -->
              <circle cx="758" cy="285" r="7" :fill="getBubbleColor('SG')" opacity="0.85"/>
              <text x="766" y="289" fill="rgba(255,255,255,0.65)" font-size="8">新加坡 STI</text>
              <!-- Sydney ASX200 -->
              <circle cx="870" cy="415" r="9" :fill="getBubbleColor('AU')" opacity="0.85"/>
              <text x="856" y="430" fill="rgba(255,255,255,0.65)" font-size="9">ASX200</text>
              <!-- Sao Paulo Bovespa -->
              <circle cx="265" cy="375" r="10" :fill="getBubbleColor('BR')" opacity="0.85"/>
              <text x="250" y="392" fill="rgba(255,255,255,0.65)" font-size="9">Bovespa</text>
              <!-- Toronto TSX -->
              <circle cx="195" cy="115" r="8" :fill="getBubbleColor('CA')" opacity="0.85"/>
              <text x="178" y="130" fill="rgba(255,255,255,0.65)" font-size="9">TSX 多伦多</text>
              <!-- Seoul KOSPI -->
              <circle cx="868" cy="178" r="8" :fill="getBubbleColor('KR')" opacity="0.85"/>
              <text x="852" y="193" fill="rgba(255,255,255,0.65)" font-size="9">KOSPI 首尔</text>

              <!-- Legend -->
              <g transform="translate(30, 400)">
                <rect x="0" y="0" width="240" height="88" rx="6" fill="rgba(10,22,40,0.9)" stroke="rgba(255,255,255,0.1)"/>
                <text x="10" y="18" fill="rgba(255,255,255,0.6)" font-size="10">全球主要股指</text>
                <circle cx="15" cy="34" r="5" fill="#10B981"/><text x="25" y="38" fill="#fff" font-size="9">上涨</text>
                <circle cx="70" cy="34" r="5" fill="#EF4444"/><text x="80" y="38" fill="#fff" font-size="9">下跌</text>
                <circle cx="130" cy="34" r="5" fill="#F59E0B"/><text x="140" y="38" fill="#fff" font-size="9">持平</text>
                <circle cx="15" cy="58" r="5" fill="rgba(99,102,241,0.8)"/><text x="25" y="62" fill="#fff" font-size="9">发达市场</text>
                <circle cx="85" cy="58" r="5" fill="rgba(0,212,255,0.8)"/><text x="95" y="62" fill="#fff" font-size="9">新兴市场</text>
                <circle cx="160" cy="58" r="5" fill="rgba(245,158,11,0.8)"/><text x="170" y="62" fill="#fff" font-size="9">亚太</text>
              </g>
            </svg>
          </div>
        </div>

        <!-- Right Column: Major Indices Cards -->
        <div class="space-y-4">
          <!-- S&P 500 -->
          <div class="glass rounded-2xl p-4">
            <div class="flex items-center justify-between mb-2">
              <div>
                <div class="text-white font-semibold text-sm">标普500</div>
                <div class="text-text-secondary text-xs">S&P 500 · 纽约</div>
              </div>
              <span class="text-2xl">🇺🇸</span>
            </div>
            <div class="flex items-baseline gap-1 mb-1">
              <span class="text-xl font-bold text-white font-mono">{{ marketData.sp500.value.toLocaleString() }}</span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span :class="marketData.sp500.change >= 0 ? 'text-success' : 'text-danger'" class="text-xs font-medium">
                {{ marketData.sp500.change >= 0 ? '▲' : '▼' }} {{ Math.abs(marketData.sp500.change).toFixed(2) }}%
              </span>
              <span class="text-xs text-text-secondary">日内涨跌</span>
            </div>
            <div ref="sp500ChartContainer" class="h-[55px]"></div>
          </div>

          <!-- Nasdaq -->
          <div class="glass rounded-2xl p-4">
            <div class="flex items-center justify-between mb-2">
              <div>
                <div class="text-white font-semibold text-sm">纳斯达克</div>
                <div class="text-text-secondary text-xs">NASDAQ Composite · 纽约</div>
              </div>
              <span class="text-2xl">🇺🇸</span>
            </div>
            <div class="flex items-baseline gap-1 mb-1">
              <span class="text-xl font-bold text-white font-mono">{{ marketData.nasdaq.value.toLocaleString() }}</span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span :class="marketData.nasdaq.change >= 0 ? 'text-success' : 'text-danger'" class="text-xs font-medium">
                {{ marketData.nasdaq.change >= 0 ? '▲' : '▼' }} {{ Math.abs(marketData.nasdaq.change).toFixed(2) }}%
              </span>
              <span class="text-xs text-text-secondary">日内涨跌</span>
            </div>
            <div ref="nasdaqChartContainer" class="h-[55px]"></div>
          </div>

          <!-- CSI 300 -->
          <div class="glass rounded-2xl p-4">
            <div class="flex items-center justify-between mb-2">
              <div>
                <div class="text-white font-semibold text-sm">沪深300</div>
                <div class="text-text-secondary text-xs">CSI 300 · 上海</div>
              </div>
              <span class="text-2xl">🇨🇳</span>
            </div>
            <div class="flex items-baseline gap-1 mb-1">
              <span class="text-xl font-bold text-white font-mono">{{ marketData.csi300.value.toLocaleString() }}</span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span :class="marketData.csi300.change >= 0 ? 'text-success' : 'text-danger'" class="text-xs font-medium">
                {{ marketData.csi300.change >= 0 ? '▲' : '▼' }} {{ Math.abs(marketData.csi300.change).toFixed(2) }}%
              </span>
              <span class="text-xs text-text-secondary">日内涨跌</span>
            </div>
            <div ref="csi300ChartContainer" class="h-[55px]"></div>
          </div>

          <!-- Nikkei 225 -->
          <div class="glass rounded-2xl p-4">
            <div class="flex items-center justify-between mb-2">
              <div>
                <div class="text-white font-semibold text-sm">日经225</div>
                <div class="text-text-secondary text-xs">Nikkei 225 · 东京</div>
              </div>
              <span class="text-2xl">🇯🇵</span>
            </div>
            <div class="flex items-baseline gap-1 mb-1">
              <span class="text-xl font-bold text-white font-mono">{{ marketData.nikkei.value.toLocaleString() }}</span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span :class="marketData.nikkei.change >= 0 ? 'text-success' : 'text-danger'" class="text-xs font-medium">
                {{ marketData.nikkei.change >= 0 ? '▲' : '▼' }} {{ Math.abs(marketData.nikkei.change).toFixed(2) }}%
              </span>
              <span class="text-xs text-text-secondary">日内涨跌</span>
            </div>
            <div ref="nikkeiChartContainer" class="h-[55px]"></div>
          </div>
        </div>
      </div>

      <!-- Secondary Indices Row -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div v-for="idx in secondaryIndices" :key="idx.name"
          class="glass rounded-2xl p-4 text-center hover:border-accent/40 border border-transparent transition-colors">
          <div class="text-2xl mb-1">{{ idx.flag }}</div>
          <div class="text-white font-semibold text-xs mb-1">{{ idx.name }}</div>
          <div class="text-white font-mono font-bold text-sm">{{ idx.value.toLocaleString() }}</div>
          <div :class="idx.change >= 0 ? 'text-success' : 'text-danger'" class="text-xs mt-1">
            {{ idx.change >= 0 ? '▲' : '▼' }} {{ Math.abs(idx.change).toFixed(2) }}%
          </div>
        </div>
      </div>

      <!-- Performance Comparison Chart -->
      <div class="glass rounded-2xl p-6 mb-6">
        <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
          <span class="text-lg">📊</span>
          主要指数涨跌幅对比（2024年以来）
        </h3>
        <div ref="compareChartContainer" class="h-[220px]"></div>
        <p class="text-xs text-text-secondary mt-3 text-right">数据来源：各交易所公开数据 / 模拟数据</p>
      </div>

      <!-- Market Summary Table -->
      <div class="glass rounded-2xl overflow-hidden mb-8">
        <div class="p-4 border-b border-white/5">
          <h3 class="text-white font-semibold">全球主要指数一览</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-white/5">
              <tr>
                <th class="text-left p-3 text-text-secondary font-medium">指数名称</th>
                <th class="text-right p-3 text-text-secondary font-medium">最新点位</th>
                <th class="text-right p-3 text-text-secondary font-medium">涨跌幅</th>
                <th class="text-right p-3 text-text-secondary font-medium">年初至今</th>
                <th class="text-right p-3 text-text-secondary font-medium">52周高点</th>
                <th class="text-right p-3 text-text-secondary font-medium">52周低点</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in marketTable" :key="row.name" class="border-t border-white/5 hover:bg-white/5 transition-colors">
                <td class="p-3">
                  <div class="flex items-center gap-2">
                    <span>{{ row.flag }}</span>
                    <span class="text-white font-medium">{{ row.name }}</span>
                    <span class="text-text-secondary text-xs">{{ row.exchange }}</span>
                  </div>
                </td>
                <td class="text-right p-3 text-white font-mono">{{ row.value.toLocaleString() }}</td>
                <td class="text-right p-3" :class="row.change >= 0 ? 'text-success' : 'text-danger'">
                  {{ row.change >= 0 ? '+' : '' }}{{ row.change.toFixed(2) }}%
                </td>
                <td class="text-right p-3" :class="row.ytd >= 0 ? 'text-success' : 'text-danger'">
                  {{ row.ytd >= 0 ? '+' : '' }}{{ row.ytd.toFixed(2) }}%
                </td>
                <td class="text-right p-3 text-text-secondary font-mono">{{ row.high52w.toLocaleString() }}</td>
                <td class="text-right p-3 text-text-secondary font-mono">{{ row.low52w.toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Market Regions Gallery -->
      <div class="mb-8">
        <h3 class="text-xl font-bold text-white text-center mb-6">全球主要资本市场</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="m in marketCards" :key="m.title" class="glass rounded-2xl overflow-hidden group">
            <div class="relative h-44 overflow-hidden">
              <img
                :src="m.img"
                :alt="m.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-3 left-3">
                <p class="text-white font-semibold text-sm">{{ m.title }}</p>
                <p class="text-white/60 text-xs">{{ m.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="glass rounded-xl p-4 mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div class="flex items-center gap-2">
          <span class="w-8 h-0.5 bg-success rounded"></span>
          <span class="text-text-secondary">上涨市场</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-8 h-0.5 bg-danger rounded"></span>
          <span class="text-text-secondary">下跌市场</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-8 h-0.5 bg-[#F59E0B] rounded"></span>
          <span class="text-text-secondary">持平市场</span>
        </div>
        <div class="text-text-secondary text-xs">
          注意：以上数据为模拟数据，仅供展示参考，不构成投资建议
        </div>
      </div>

      <!-- Lead Form -->
      <div id="contact" class="glass rounded-2xl p-8 lg:p-12">
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">获取全球市场分析报告</h3>
            <p class="text-text-secondary mb-8">
              留下您的联系方式，我们将为您分析目标市场的投资机遇与风险
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
                    <option value="us">美国市场</option>
                    <option value="eu">欧洲市场</option>
                    <option value="cn">中国市场</option>
                    <option value="jp">日本市场</option>
                    <option value="sea">东南亚市场</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm text-text-secondary mb-2">感兴趣类目 *</label>
                  <select v-model="form.interest" required class="input-field">
                    <option value="">请选择</option>
                    <option value="equity">股票投资</option>
                    <option value="index-fund">指数基金</option>
                    <option value="etf">ETF</option>
                    <option value="derivatives">衍生品</option>
                    <option value="research">市场研报</option>
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
                  <span class="text-accent font-medium">数据说明：</span>本页展示的股指数据基于各交易所公开数据源，数据仅供参考。我们不对数据做任何修改，力求展示最原始、最准确的信息。本页数据为演示用途，不构成任何投资建议。
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
import * as echarts from 'echarts'

const sp500ChartContainer = ref(null)
const nasdaqChartContainer = ref(null)
const csi300ChartContainer = ref(null)
const nikkeiChartContainer = ref(null)
const compareChartContainer = ref(null)

let sp500Chart = null
let nasdaqChart = null
let csi300Chart = null
let nikkeiChart = null
let compareChart = null

// Market data
const marketData = ref({
  sp500: { value: 5234.18, change: 0.67, history: [5100, 5120, 5150, 5180, 5200, 5210, 5225, 5234] },
  nasdaq: { value: 16428.82, change: 1.12, history: [15800, 15950, 16080, 16200, 16300, 16380, 16400, 16428] },
  csi300: { value: 3685.42, change: -0.45, history: [3750, 3720, 3700, 3695, 3690, 3688, 3686, 3685] },
  nikkei: { value: 38647.75, change: 1.85, history: [37200, 37400, 37800, 38000, 38200, 38400, 38550, 38647] },
})

const globalIndices = computed(() => [
  { name: '标普500', value: marketData.value.sp500.value, change: marketData.value.sp500.change },
  { name: '纳斯达克', value: marketData.value.nasdaq.value, change: marketData.value.nasdaq.change },
  { name: '沪深300', value: marketData.value.csi300.value, change: marketData.value.csi300.change },
  { name: '日经225', value: marketData.value.nikkei.value, change: marketData.value.nikkei.change },
  { name: '富时100', value: secondaryIndices.value[0].value, change: secondaryIndices.value[0].change },
  { name: '恒生指数', value: secondaryIndices.value[1].value, change: secondaryIndices.value[1].change },
])

const secondaryIndices = ref([
  { name: '富时100', flag: '🇬🇧', value: 8087.83, change: 0.32 },
  { name: '恒生指数', flag: '🇭🇰', value: 17201.27, change: -0.78 },
  { name: 'DAX', flag: '🇩🇪', value: 18693.42, change: 0.54 },
  { name: 'CAC40', flag: '🇫🇷', value: 8134.17, change: 0.21 },
  { name: 'ASX200', flag: '🇦🇺', value: 7783.20, change: 0.45 },
  { name: 'KOSPI', flag: '🇰🇷', value: 2624.36, change: 0.88 },
])

const marketTable = ref([
  { flag: '🇺🇸', name: '标普500', exchange: '纽约NYSE', value: 5234.18, change: 0.67, ytd: 8.42, high52w: 5264.85, low52w: 4103.78 },
  { flag: '🇺🇸', name: '纳斯达克', exchange: 'NASDAQ', value: 16428.82, change: 1.12, ytd: 12.35, high52w: 16533.00, low52w: 12543.86 },
  { flag: '🇨🇳', name: '沪深300', exchange: '上海', value: 3685.42, change: -0.45, ytd: 2.18, high52w: 3870.54, low52w: 3021.47 },
  { flag: '🇯🇵', name: '日经225', exchange: '东京', value: 38647.75, change: 1.85, ytd: 15.62, high52w: 41087.75, low52w: 30488.02 },
  { flag: '🇬🇧', name: '富时100', exchange: '伦敦', value: 8087.83, change: 0.32, ytd: 4.15, high52w: 8474.41, low52w: 7228.12 },
  { flag: '🇭🇰', name: '恒生指数', exchange: '香港', value: 17201.27, change: -0.78, ytd: -2.34, high52w: 19124.83, low52w: 14961.18 },
  { flag: '🇩🇪', name: 'DAX', exchange: '法兰克福', value: 18693.42, change: 0.54, ytd: 9.87, high52w: 18892.92, low52w: 14458.39 },
  { flag: '🇫🇷', name: 'CAC40', exchange: '巴黎', value: 8134.17, change: 0.21, ytd: 6.43, high52w: 8259.19, low52w: 6933.16 },
  { flag: '🇦🇺', name: 'ASX200', exchange: '悉尼', value: 7783.20, change: 0.45, ytd: 5.78, high52w: 8148.70, low52w: 6893.04 },
  { flag: '🇰🇷', name: 'KOSPI', exchange: '首尔', value: 2624.36, change: 0.88, ytd: 7.21, high52w: 2736.05, low52w: 2195.28 },
  { flag: '🇮🇳', name: 'Sensex', exchange: '孟买', value: 73089.77, change: -0.23, ytd: 3.56, high52w: 76832.52, low52w: 64015.14 },
  { flag: '🇧🇷', name: 'Bovespa', exchange: '圣保罗', value: 128347.82, change: 0.67, ytd: -1.82, high52w: 137469.23, low52w: 97153.44 },
])

const marketCards = ref([
  { title: '纽约证券交易所', subtitle: '全球最大股票市场', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80' },
  { title: '东京证券交易所', subtitle: '亚洲领先资本市场', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80' },
  { title: '上海证券交易所', subtitle: '中国A股核心市场', img: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80' },
  { title: '伦敦证券交易所', subtitle: '欧洲历史最久交易所', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
  { title: '香港联交所', subtitle: '连接中国与世界', img: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80' },
  { title: '法兰克福交易所', subtitle: '欧洲金融中心之一', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80' },
])

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

// Bubble color helper
const getBubbleColor = (region) => {
  const idx = globalIndices.value.find(i => {
    if (region === 'US') return i.name === '标普500' || i.name === '纳斯达克'
    if (region === 'UK') return i.name === '富时100'
    if (region === 'EU') return i.name === 'DAX' || i.name === 'CAC40'
    if (region === 'JP') return i.name === '日经225'
    if (region === 'CN') return i.name === '沪深300'
    if (region === 'HK') return i.name === '恒生指数'
    if (region === 'IN') return i.name === 'Sensex'
    if (region === 'AU') return true
    if (region === 'BR') return i.name === 'Bovespa'
    if (region === 'CA') return true
    if (region === 'SG') return true
    if (region === 'KR') return i.name === 'KOSPI'
    return false
  })
  if (!idx) return 'rgba(245,158,11,0.8)'
  if (idx.change > 0.2) return '#10B981'
  if (idx.change < -0.2) return '#EF4444'
  return '#F59E0B'
}

// Charts
const initCharts = () => {
  const chartDefaults = {
    backgroundColor: 'transparent',
    grid: { top: 5, right: 5, bottom: 5, left: 5 },
    xAxis: { type: 'category', show: false, data: ['一', '二', '三', '四', '五', '六', '日', '八'] },
    yAxis: { type: 'value', show: false, min: 'dataMin' },
  }

  const makeOption = (history, color) => ({
    ...chartDefaults,
    series: [{
      type: 'line', smooth: true, symbol: 'none',
      data: history,
      lineStyle: { color, width: 2 },
      areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: color.replace(')', ',0.35)').replace('rgb', 'rgba') },
        { offset: 1, color: 'rgba(0,0,0,0)' }
      ]) }
    }]
  })

  if (sp500ChartContainer.value) {
    sp500Chart = echarts.init(sp500ChartContainer.value, 'dark')
    sp500Chart.setOption(makeOption(marketData.value.sp500.history, '#00D4FF'))
  }
  if (nasdaqChartContainer.value) {
    nasdaqChart = echarts.init(nasdaqChartContainer.value, 'dark')
    nasdaqChart.setOption(makeOption(marketData.value.nasdaq.history, '#6366F1'))
  }
  if (csi300ChartContainer.value) {
    csi300Chart = echarts.init(csi300ChartContainer.value, 'dark')
    csi300Chart.setOption(makeOption(marketData.value.csi300.history, '#EF4444'))
  }
  if (nikkeiChartContainer.value) {
    nikkeiChart = echarts.init(nikkeiChartContainer.value, 'dark')
    nikkeiChart.setOption(makeOption(marketData.value.nikkei.history, '#10B981'))
  }
  if (compareChartContainer.value) {
    compareChart = echarts.init(compareChartContainer.value, 'dark')
    compareChart.setOption({
      backgroundColor: 'transparent',
      grid: { top: 20, right: 20, bottom: 40, left: 50 },
      legend: { bottom: 0, textStyle: { color: '#94A3B8', fontSize: 10 }, itemWidth: 12, itemHeight: 8 },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
        axisLabel: { color: '#94A3B8', fontSize: 9 },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
        axisLabel: { color: '#94A3B8', fontSize: 9, formatter: v => v + '%' },
      },
      series: [
        {
          name: '标普500', type: 'line', smooth: true, symbol: 'circle', symbolSize: 4,
          data: [0, 1.2, 2.8, 3.5, 4.2, 5.1, 6.3, 7.0, 7.8, 8.1, 8.3, 8.42],
          lineStyle: { color: '#00D4FF', width: 2 }, itemStyle: { color: '#00D4FF' },
        },
        {
          name: '纳斯达克', type: 'line', smooth: true, symbol: 'circle', symbolSize: 4,
          data: [0, 1.8, 3.5, 4.8, 6.2, 7.8, 9.0, 10.2, 11.0, 11.8, 12.1, 12.35],
          lineStyle: { color: '#6366F1', width: 2 }, itemStyle: { color: '#6366F1' },
        },
        {
          name: '沪深300', type: 'line', smooth: true, symbol: 'circle', symbolSize: 4,
          data: [0, -0.5, 0.8, 1.2, 1.5, 1.8, 2.0, 2.1, 2.0, 2.15, 2.2, 2.18],
          lineStyle: { color: '#EF4444', width: 2 }, itemStyle: { color: '#EF4444' },
        },
        {
          name: '日经225', type: 'line', smooth: true, symbol: 'circle', symbolSize: 4,
          data: [0, 1.5, 3.2, 5.0, 7.2, 9.0, 11.0, 12.5, 14.0, 14.8, 15.4, 15.62],
          lineStyle: { color: '#10B981', width: 2 }, itemStyle: { color: '#10B981' },
        },
        {
          name: '富时100', type: 'line', smooth: true, symbol: 'circle', symbolSize: 4,
          data: [0, 0.5, 1.2, 1.8, 2.3, 2.9, 3.4, 3.7, 3.9, 4.0, 4.1, 4.15],
          lineStyle: { color: '#F59E0B', width: 2 }, itemStyle: { color: '#F59E0B' },
        },
      ],
    })
  }
}

const updateMarket = () => {
  const updateOne = (key, base, volatility) => {
    const change = (Math.random() - 0.5) * volatility
    marketData.value[key].value = Math.max(base * 0.8, Math.min(base * 1.2, marketData.value[key].value + change))
    marketData.value[key].change = ((marketData.value[key].value - base) / base) * 100
    marketData.value[key].history = [...marketData.value[key].history.slice(1), marketData.value[key].value]
    return marketData.value[key]
  }

  const sp500 = updateOne('sp500', 5234, 5)
  const nasdaq = updateOne('nasdaq', 16428, 15)
  const csi300 = updateOne('csi300', 3685, 8)
  const nikkei = updateOne('nikkei', 38647, 40)

  secondaryIndices.value.forEach((idx, i) => {
    const bases = [8087, 17201, 18693, 8134, 7783, 2624]
    const vols = [8, 15, 18, 8, 7, 3]
    const change = (Math.random() - 0.5) * vols[i]
    idx.value = Math.max(bases[i] * 0.8, Math.min(bases[i] * 1.2, idx.value + change))
    idx.change = ((idx.value - bases[i]) / bases[i]) * 100
  })

  if (sp500Chart) sp500Chart.setOption({ series: [{ data: sp500.history }] })
  if (nasdaqChart) nasdaqChart.setOption({ series: [{ data: nasdaq.history }] })
  if (csi300Chart) csi300Chart.setOption({ series: [{ data: csi300.history }] })
  if (nikkeiChart) nikkeiChart.setOption({ series: [{ data: nikkei.history }] })
}

let marketInterval = null

onMounted(() => {
  initCharts()
  marketInterval = setInterval(updateMarket, 4000)
  window.addEventListener('resize', () => {
    sp500Chart?.resize()
    nasdaqChart?.resize()
    csi300Chart?.resize()
    nikkeiChart?.resize()
    compareChart?.resize()
  })
})

onUnmounted(() => {
  sp500Chart?.dispose()
  nasdaqChart?.dispose()
  csi300Chart?.dispose()
  nikkeiChart?.dispose()
  compareChart?.dispose()
  if (marketInterval) clearInterval(marketInterval)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
</style>
