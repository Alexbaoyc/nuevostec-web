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
              <!-- Ocean base -->
              <rect width="1000" height="500" fill="#07101f"/>
              <!-- Ocean grid (latitude/longitude lines) -->
              <g stroke="rgba(30,58,95,0.5)" stroke-width="0.5" fill="none">
                <line x1="0" y1="83" x2="1000" y2="83"/><line x1="0" y1="167" x2="1000" y2="167"/><line x1="0" y1="250" x2="1000" y2="250"/><line x1="0" y1="333" x2="1000" y2="333"/><line x1="0" y1="417" x2="1000" y2="417"/>
                <line x1="83" y1="0" x2="83" y2="500"/><line x1="167" y1="0" x2="167" y2="500"/><line x1="250" y1="0" x2="250" y2="500"/><line x1="333" y1="0" x2="333" y2="500"/><line x1="417" y1="0" x2="417" y2="500"/><line x1="500" y1="0" x2="500" y2="500"/><line x1="583" y1="0" x2="583" y2="500"/><line x1="667" y1="0" x2="667" y2="500"/><line x1="750" y1="0" x2="750" y2="500"/><line x1="833" y1="0" x2="833" y2="500"/><line x1="917" y1="0" x2="917" y2="500"/>
              </g>
              <!-- Equator and prime meridian -->
              <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(0,212,255,0.15)" stroke-width="0.8"/><line x1="500" y1="0" x2="500" y2="500" stroke="rgba(0,212,255,0.15)" stroke-width="0.8"/>
              <!-- World Landmasses - proper continent shapes -->
              <g fill="#1e3a5f" stroke="#2d5a8a" stroke-width="0.6">
                <!-- Greenland -->
                <path d="M305,18 L355,14 L380,30 L375,65 L345,75 L315,65 L295,42 Z"/>
                <!-- North America -->
                <path d="M55,72 L95,55 L135,50 L175,52 L205,60 L225,80 L235,108 L228,138 L210,165 L185,185 L155,198 L130,190 L108,172 L82,155 L58,130 L42,100 L48,82 Z"/>
                <!-- Central America -->
                <path d="M155,198 L175,205 L185,220 L182,238 L172,245 L160,238 L150,220 Z"/>
                <!-- Caribbean -->
                <path d="M198,175 L210,172 L218,178 L215,188 L205,190 L195,185 Z M222,180 L230,178 L236,185 L233,192 L225,192 Z"/>
                <!-- South America -->
                <path d="M188,248 L220,242 L255,250 L280,270 L288,300 L282,335 L265,372 L235,402 L205,408 L182,390 L168,355 L162,310 L170,270 Z"/>
                <!-- Europe -->
                <path d="M428,72 L458,65 L488,70 L515,82 L528,100 L522,120 L508,132 L492,135 L475,128 L460,132 L445,122 L435,105 Z"/>
                <!-- British Isles -->
                <path d="M412,78 L422,74 L428,85 L422,95 L414,93 Z"/>
                <!-- Scandinavia -->
                <path d="M478,42 L500,38 L515,52 L508,70 L492,75 L478,65 Z"/>
                <!-- Iceland -->
                <path d="M380,58 L395,56 L402,64 L395,70 L382,68 Z"/>
                <!-- Africa -->
                <path d="M428,148 L468,140 L510,145 L548,158 L565,185 L572,218 L565,258 L548,298 L522,335 L488,358 L455,360 L428,338 L415,298 L412,252 L418,205 Z"/>
                <!-- Madagascar -->
                <path d="M572,268 L582,262 L588,285 L582,305 L572,302 Z"/>
                <!-- Middle East / Arabian Peninsula -->
                <path d="M545,140 L575,135 L600,145 L610,170 L600,198 L582,205 L562,195 L552,170 L548,152 Z"/>
                <!-- India / South Asia -->
                <path d="M638,152 L668,148 L685,172 L682,210 L668,245 L650,255 L635,238 L628,208 L632,175 Z"/>
                <!-- Sri Lanka -->
                <path d="M658,262 L664,258 L668,270 L664,278 L656,274 Z"/>
                <!-- Russia / Northern Asia -->
                <path d="M548,38 L615,30 L700,32 L785,38 L858,48 L918,62 L938,90 L928,120 L888,130 L838,125 L788,118 L738,112 L688,108 L638,108 L590,108 L560,92 L540,70 Z"/>
                <!-- China / East Asia -->
                <path d="M732,118 L788,112 L842,118 L878,140 L888,172 L878,210 L852,232 L812,240 L768,238 L735,220 L720,188 L722,150 Z"/>
                <!-- Japan -->
                <path d="M882,118 L895,115 L902,135 L898,162 L885,175 L875,162 L875,140 Z"/>
                <!-- Korea -->
                <path d="M862,152 L872,148 L878,165 L872,180 L862,178 Z"/>
                <!-- Taiwan -->
                <path d="M852,188 L858,185 L862,200 L856,210 L848,202 Z"/>
                <!-- Southeast Asia -->
                <path d="M745,230 L782,225 L815,232 L840,252 L848,280 L838,308 L812,320 L782,318 L758,302 L742,275 Z"/>
                <!-- Philippines -->
                <path d="M848,238 L858,235 L862,252 L858,268 L848,265 Z M852,272 L862,270 L868,282 L862,292 L852,288 Z"/>
                <!-- Indonesia -->
                <path d="M758,285 L775,282 L790,290 L798,308 L790,325 L772,325 L758,312 Z M808,298 L825,295 L835,312 L825,328 L808,325 Z M840,295 L858,292 L868,310 L858,325 L840,322 Z"/>
                <!-- Papua New Guinea -->
                <path d="M868,305 L890,302 L905,315 L900,335 L882,340 L868,330 Z"/>
                <!-- Australia -->
                <path d="M785,348 L838,340 L882,352 L905,380 L898,412 L865,432 L825,432 L790,412 L772,385 Z"/>
                <!-- New Zealand -->
                <path d="M918,392 L930,388 L936,405 L928,420 L916,418 Z M920,428 L932,424 L940,440 L930,452 L918,448 Z"/>
                <!-- Antarctica (bottom edge) -->
                <path d="M0,458 Q250,445 500,450 Q750,455 1000,450 L1000,500 L0,500 Z" fill="#1a3050"/>
              </g>
              <!-- Country borders overlay for depth -->
              <g fill="none" stroke="rgba(45,90,138,0.4)" stroke-width="0.4">
                <!-- Major country divisions -->
                <path d="M732,118 L732,240"/><path d="M788,112 L788,240"/><path d="M838,125 L838,232"/>
                <path d="M638,148 L638,255"/><path d="M668,148 L668,255"/>
                <path d="M548,38 L548,148"/><path d="M615,30 L615,148"/>
                <path d="M428,72 L428,148"/><path d="M488,70 L488,148"/>
                <path d="M55,72 L235,108"/><path d="M235,108 L235,185"/>
                <path d="M188,248 L288,300"/><path d="M288,300 L288,402"/>
                <path d="M428,148 L572,218"/><path d="M572,218 L572,360"/>
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

let sp500Chart = null
let nasdaqChart = null
let csi300Chart = null
let nikkeiChart = null

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

  })
})

onUnmounted(() => {
  sp500Chart?.dispose()
  nasdaqChart?.dispose()
  csi300Chart?.dispose()
  nikkeiChart?.dispose()

  if (marketInterval) clearInterval(marketInterval)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
</style>
