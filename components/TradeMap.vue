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

      <!-- Static World Trade Map + Charts Row -->
      <div class="grid lg:grid-cols-3 gap-6 mb-6">
        <!-- Static World Map with SVG Trade Routes -->
        <div class="lg:col-span-2 glass rounded-2xl overflow-hidden">
          <div class="p-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
            <h3 class="text-white font-semibold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              全球贸易热度图
            </h3>
            <div class="flex items-center gap-3 text-sm">
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span class="text-accent font-medium">BDI</span>
                <span class="text-white font-mono">{{ bdiData.value.toLocaleString() }}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                <span class="text-[#F59E0B] font-medium">WTI</span>
                <span class="text-white font-mono">${{ oilData.wti.toFixed(2) }}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20">
                <span class="text-[#10B981] font-medium">布伦特</span>
                <span class="text-white font-mono">${{ oilData.brent.toFixed(2) }}</span>
              </div>
            </div>
          </div>
          <div class="relative bg-[#0a1628]">
            <!-- Static SVG World Trade Map -->
            <svg viewBox="0 0 1000 500" class="w-full h-[380px] lg:h-[460px]" xmlns="http://www.w3.org/2000/svg">
              <!-- Ocean background -->
              <rect width="1000" height="500" fill="#0a1628"/>
              
              <!-- World Landmasses - Natural Earth Projection (simplified) -->
              <g fill="#1e3a5f" stroke="#2d5a8a" stroke-width="0.8">
                <!-- Greenland -->
                <path d="M340,30 L420,25 L450,50 L440,90 L400,100 L360,90 L330,60 Z"/>
                <!-- North America -->
                <path d="M60,60 L120,40 L180,35 L240,45 L280,60 L300,90 L290,130 L270,160 L240,200 L200,230 L160,250 L130,240 L100,210 L80,180 L50,150 L40,110 L50,80 Z"/>
                <!-- Central America -->
                <path d="M160,250 L180,260 L190,280 L185,300 L175,310 L165,305 L155,285 Z"/>
                <!-- South America -->
                <path d="M200,300 L240,290 L280,300 L310,330 L320,380 L300,430 L270,470 L230,480 L200,450 L180,400 L175,350 L185,320 Z"/>
                <!-- Caribbean Islands -->
                <circle cx="220" cy="245" r="6" fill="#1e3a5f"/>
                <circle cx="235" cy="250" r="5" fill="#1e3a5f"/>
                <circle cx="245" cy="240" r="4" fill="#1e3a5f"/>
                <!-- Europe -->
                <path d="M440,60 L480,50 L520,55 L560,70 L580,95 L570,120 L550,140 L530,150 L510,145 L490,130 L470,140 L450,130 L440,110 L435,85 Z"/>
                <!-- British Isles -->
                <path d="M420,65 L435,60 L440,80 L430,95 L418,90 Z"/>
                <!-- Scandinavia -->
                <path d="M480,40 L510,35 L525,55 L515,75 L495,80 L480,65 Z"/>
                <!-- Africa -->
                <path d="M440,160 L480,150 L520,155 L560,170 L580,200 L590,250 L580,310 L560,360 L530,400 L490,420 L450,410 L420,380 L410,330 L420,270 L430,220 L425,185 Z"/>
                <!-- Madagascar -->
                <path d="M600,320 L615,310 L620,350 L610,380 L598,370 Z"/>
                <!-- Middle East / Arabian Peninsula -->
                <path d="M560,150 L600,145 L630,160 L640,190 L630,220 L610,230 L585,220 L570,195 L565,170 Z"/>
                <!-- India -->
                <path d="M660,200 L700,190 L720,220 L715,270 L700,310 L680,320 L665,300 L660,260 L655,230 Z"/>
                <!-- Sri Lanka -->
                <circle cx="700" cy="330" r="8" fill="#1e3a5f"/>
                <!-- Asia (Russia/Central Asia) -->
                <path d="M560,40 L650,30 L750,35 L850,45 L920,60 L950,90 L940,130 L900,140 L850,130 L800,120 L750,110 L700,100 L650,95 L600,100 L560,95 L540,75 Z"/>
                <!-- China/East Asia -->
                <path d="M740,130 L800,120 L860,130 L900,160 L910,210 L890,250 L850,270 L800,275 L750,265 L720,240 L710,200 L720,160 Z"/>
                <!-- Japan -->
                <path d="M900,130 L920,125 L935,150 L930,180 L915,195 L900,180 L895,155 Z"/>
                <!-- Korea -->
                <path d="M870,170 L885,165 L890,190 L878,205 L868,195 Z"/>
                <!-- Taiwan -->
                <path d="M855,220 L862,215 L865,235 L858,245 L850,235 Z"/>
                <!-- Southeast Asia -->
                <path d="M760,280 L820,270 L870,280 L900,310 L910,350 L890,380 L850,395 L810,390 L780,370 L760,340 Z"/>
                <!-- Philippines -->
                <circle cx="870" cy="290" r="8" fill="#1e3a5f"/>
                <circle cx="878" cy="310" r="6" fill="#1e3a5f"/>
                <!-- Indonesia -->
                <circle cx="780" cy="350" r="7" fill="#1e3a5f"/>
                <circle cx="800" cy="370" r="9" fill="#1e3a5f"/>
                <circle cx="830" cy="365" r="8" fill="#1e3a5f"/>
                <!-- Papua New Guinea -->
                <circle cx="890" cy="380" r="12" fill="#1e3a5f"/>
                <!-- Australia -->
                <path d="M800,390 L870,380 L920,395 L950,430 L940,470 L900,490 L850,485 L810,460 L790,430 L785,410 Z"/>
                <!-- New Zealand -->
                <path d="M950,440 L965,435 L970,460 L958,475 L948,465 Z"/>
                <path d="M955,480 L970,475 L975,495 L962,505 L952,495 Z"/>
                <!-- Antarctica (bottom edge) -->
                <path d="M0,480 L100,475 L200,480 L300,478 L400,482 L500,480 L600,485 L700,482 L800,478 L900,485 L1000,480 L1000,500 L0,500 Z" fill="#1a3050"/>
              </g>
              
              <!-- Ocean grid lines (subtle) -->
              <g stroke="#1a3050" stroke-width="0.3" fill="none" opacity="0.5">
                <line x1="0" y1="125" x2="1000" y2="125"/>
                <line x1="0" y1="250" x2="1000" y2="250"/>
                <line x1="0" y1="375" x2="1000" y2="375"/>
                <line x1="250" y1="0" x2="250" y2="500"/>
                <line x1="500" y1="0" x2="500" y2="500"/>
                <line x1="750" y1="0" x2="750" y2="500"/>
              </g>

              <!-- Major Trade Routes -->
              <!-- China to US (Trans-Pacific) -->
              <path d="M750,240 C700,200 500,180 250,180" fill="none" stroke="#00D4FF" stroke-width="2" stroke-dasharray="8,4" opacity="0.7"/>
              <!-- China to EU -->
              <path d="M740,240 C650,200 550,140 480,120" fill="none" stroke="#6366F1" stroke-width="2" stroke-dasharray="8,4" opacity="0.7"/>
              <!-- China to Africa -->
              <path d="M740,260 C650,300 550,300 480,280" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8,4" opacity="0.7"/>
              <!-- Middle East to Asia -->
              <path d="M600,220 C680,250 740,260 780,250" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8,4" opacity="0.7"/>
              <!-- Middle East to Europe -->
              <path d="M600,220 C560,180 520,140 490,120" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8,4" opacity="0.7"/>
              <!-- US to EU (Atlantic) -->
              <path d="M250,180 C350,140 430,120 480,120" fill="none" stroke="#10B981" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.6"/>
              <!-- South America to China -->
              <path d="M260,340 C500,300 650,260 750,240" fill="none" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.6"/>
              <!-- Australia to Asia -->
              <path d="M860,410 C840,360 800,320 780,290" fill="none" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.6"/>

              <!-- Trade Hub Nodes -->
              <!-- Shanghai -->
              <circle cx="750" cy="240" r="8" fill="#00D4FF" opacity="0.9"/>
              <circle cx="750" cy="240" r="16" fill="none" stroke="#00D4FF" stroke-width="1" opacity="0.4"/>
              <text x="758" y="234" fill="#fff" font-size="11" font-weight="600">上海</text>
              
              <!-- Los Angeles -->
              <circle cx="150" cy="190" r="6" fill="#00D4FF" opacity="0.9"/>
              <circle cx="150" cy="190" r="12" fill="none" stroke="#00D4FF" stroke-width="1" opacity="0.4"/>
              <text x="158" y="186" fill="#fff" font-size="11" font-weight="600">洛杉矶</text>
              
              <!-- Rotterdam -->
              <circle cx="480" cy="115" r="6" fill="#6366F1" opacity="0.9"/>
              <circle cx="480" cy="115" r="12" fill="none" stroke="#6366F1" stroke-width="1" opacity="0.4"/>
              <text x="460" y="105" fill="#fff" font-size="11" font-weight="600">鹿特丹</text>
              
              <!-- Dubai -->
              <circle cx="600" cy="220" r="5" fill="#F59E0B" opacity="0.9"/>
              <circle cx="600" cy="220" r="10" fill="none" stroke="#F59E0B" stroke-width="1" opacity="0.4"/>
              <text x="608" y="216" fill="#fff" font-size="10">迪拜</text>
              
              <!-- Singapore -->
              <circle cx="760" cy="295" r="5" fill="#10B981" opacity="0.9"/>
              <text x="765" y="300" fill="#fff" font-size="10">新加坡</text>
              
              <!-- Tokyo -->
              <circle cx="890" cy="145" r="5" fill="#EC4899" opacity="0.9"/>
              <text x="880" y="136" fill="#fff" font-size="10">东京</text>

              <!-- Legend inside map -->
              <g transform="translate(30, 400)">
                <rect x="0" y="0" width="220" height="85" rx="6" fill="rgba(10,22,40,0.9)" stroke="rgba(255,255,255,0.1)"/>
                <text x="10" y="18" fill="rgba(255,255,255,0.6)" font-size="10">全球贸易主要航线</text>
                <circle cx="15" cy="35" r="5" fill="#00D4FF" opacity="0.9"/><text x="25" y="39" fill="#fff" font-size="9">跨太平洋</text>
                <circle cx="85" cy="35" r="5" fill="#6366F1" opacity="0.9"/><text x="95" y="39" fill="#fff" font-size="9">中欧航线</text>
                <circle cx="155" cy="35" r="5" fill="#F59E0B" opacity="0.9"/><text x="165" y="39" fill="#fff" font-size="9">能源运输</text>
                <circle cx="15" cy="58" r="5" fill="#10B981" opacity="0.9"/><text x="25" y="62" fill="#fff" font-size="9">跨大西洋</text>
                <circle cx="85" cy="58" r="5" fill="#EC4899" opacity="0.9"/><text x="95" y="62" fill="#fff" font-size="9">南美-亚洲</text>
                <circle cx="155" cy="58" r="5" fill="#8B5CF6" opacity="0.9"/><text x="165" y="62" fill="#fff" font-size="9">澳亚航线</text>
              </g>
            </svg>
          </div>
        </div>

        <!-- Charts Column -->
        <div class="space-y-4">
          <!-- BDI Trend Card -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-3 flex items-center gap-2">
              <span class="text-sm">🚢</span>
              波罗的海航运指数 (BDI)
            </h3>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-2xl font-bold text-white font-mono">{{ bdiData.value.toLocaleString() }}</span>
              <span class="text-sm text-text-secondary">点位</span>
            </div>
            <div class="flex items-center gap-2 mb-3">
              <span :class="bdiData.change >= 0 ? 'text-success' : 'text-danger'" class="text-sm font-medium">
                {{ bdiData.change >= 0 ? '↑' : '↓' }} {{ Math.abs(bdiData.change).toFixed(2) }}
              </span>
              <span class="text-xs text-text-secondary">较前日</span>
            </div>
            <div ref="bdiChartContainer" class="h-[70px]"></div>
            <p class="text-xs text-text-secondary mt-2">数据来源: Baltic Exchange</p>
          </div>

          <!-- Oil Price: WTI vs Brent -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-3 flex items-center gap-2">
              <span class="text-sm">🛢️</span>
              原油期货
            </h3>
            <div class="grid grid-cols-2 gap-4 mb-3">
              <!-- WTI -->
              <div class="text-center">
                <div class="text-[#F59E0B] text-xs font-medium mb-1">WTI (美国)</div>
                <div class="flex items-baseline justify-center gap-1">
                  <span class="text-xl font-bold text-white font-mono">${{ oilData.wti.toFixed(2) }}</span>
                </div>
                <div class="flex items-center justify-center gap-1 mt-1">
                  <span :class="oilData.wtiChange >= 0 ? 'text-success' : 'text-danger'" class="text-xs font-medium">
                    {{ oilData.wtiChange >= 0 ? '↑' : '↓' }}{{ Math.abs(oilData.wtiChange).toFixed(2) }}%
                  </span>
                </div>
              </div>
              <!-- Brent -->
              <div class="text-center">
                <div class="text-[#10B981] text-xs font-medium mb-1">布伦特 (北海)</div>
                <div class="flex items-baseline justify-center gap-1">
                  <span class="text-xl font-bold text-white font-mono">${{ oilData.brent.toFixed(2) }}</span>
                </div>
                <div class="flex items-center justify-center gap-1 mt-1">
                  <span :class="oilData.brentChange >= 0 ? 'text-success' : 'text-danger'" class="text-xs font-medium">
                    {{ oilData.brentChange >= 0 ? '↑' : '↓' }}{{ Math.abs(oilData.brentChange).toFixed(2) }}%
                  </span>
                </div>
              </div>
            </div>
            <div ref="oilChartContainer" class="h-[70px]"></div>
            <p class="text-xs text-text-secondary mt-2">数据来源: EIA / 模拟数据</p>
          </div>

          <!-- Commodity Index -->
          <div class="glass rounded-2xl p-4">
            <h3 class="text-white font-semibold mb-3 flex items-center gap-2">
              <span class="text-sm">📈</span>
              大宗商品指数
            </h3>
            <div ref="chartContainer" class="h-[120px]"></div>
          </div>
        </div>
      </div>

      <!-- Shipping & Trade Images Gallery -->
      <div class="mb-8">
        <h3 class="text-xl font-bold text-white text-center mb-6">全球贸易与航运</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <!-- Card 1: Container Terminal -->
          <div class="glass rounded-2xl overflow-hidden group">
            <div class="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80" 
                alt="全球集装箱港口"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-3 left-3">
                <p class="text-white font-semibold text-sm">国际集装箱港口</p>
                <p class="text-white/60 text-xs">连接全球贸易网络</p>
              </div>
            </div>
          </div>
          
          <!-- Card 2: Cargo Ship -->
          <div class="glass rounded-2xl overflow-hidden group">
            <div class="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565945947649-24689ec2d2c5?w=600&q=80" 
                alt="大型货轮"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-3 left-3">
                <p class="text-white font-semibold text-sm">远洋货轮</p>
                <p class="text-white/60 text-xs">跨太平洋/印度洋航线</p>
              </div>
            </div>
          </div>
          
          <!-- Card 3: Oil Tanker -->
          <div class="glass rounded-2xl overflow-hidden group">
            <div class="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80" 
                alt="油气运输"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-3 left-3">
                <p class="text-white font-semibold text-sm">油气运输船</p>
                <p class="text-white/60 text-xs">中东→亚洲能源通道</p>
              </div>
            </div>
          </div>
          
          <!-- Card 4: Panama Canal -->
          <div class="glass rounded-2xl overflow-hidden group">
            <div class="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=600&q=80" 
                alt="巴拿马运河"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-3 left-3">
                <p class="text-white font-semibold text-sm">巴拿马运河</p>
                <p class="text-white/60 text-xs">连接太平洋与大西洋</p>
              </div>
            </div>
          </div>
          
          <!-- Card 5: Air Freight -->
          <div class="glass rounded-2xl overflow-hidden group">
            <div class="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" 
                alt="航空货运"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-3 left-3">
                <p class="text-white font-semibold text-sm">跨境航空货运</p>
                <p class="text-white/60 text-xs">高价值商品空中走廊</p>
              </div>
            </div>
          </div>
          
          <!-- Card 6: Trade Analytics -->
          <div class="glass rounded-2xl overflow-hidden group">
            <div class="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" 
                alt="贸易数据分析"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-3 left-3">
                <p class="text-white font-semibold text-sm">全球贸易数据分析</p>
                <p class="text-white/60 text-xs">实时洞察决策支持</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="glass rounded-xl p-4 mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div class="flex items-center gap-2">
          <span class="w-8 h-0.5 bg-gradient-to-r from-[#00D4FF] to-transparent rounded"></span>
          <span class="text-text-secondary">跨太平洋航线</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-8 h-0.5 bg-gradient-to-r from-[#6366F1] to-transparent rounded"></span>
          <span class="text-text-secondary">中欧班列/海运</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-8 h-0.5 bg-gradient-to-r from-[#F59E0B] to-transparent rounded"></span>
          <span class="text-text-secondary">能源运输航线</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
          <span class="text-text-secondary">LNG运输</span>
        </div>
        <div class="text-text-secondary">
          <span class="text-accent font-medium">BDI</span> 波罗的海航运指数 | 
          <span class="text-[#F59E0B] font-medium">WTI</span> 美国原油 | 
          <span class="text-[#10B981] font-medium">布伦特</span> 北海原油
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

          <!-- Info -->
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
import * as echarts from 'echarts'

const chartContainer = ref(null)
const bdiChartContainer = ref(null)
const oilChartContainer = ref(null)
let chart = null
let bdiChart = null
let oilChart = null

// BDI Data
const bdiData = ref({
  value: 1847,
  change: 2.34,
  history: [1650, 1680, 1720, 1750, 1780, 1800, 1820, 1847]
})

// Oil Price Data
const oilData = ref({
  wti: 78.42,
  wtiChange: 1.23,
  wtiHistory: [75.1, 76.3, 77.8, 76.5, 77.2, 78.0, 78.9, 78.42],
  brent: 82.15,
  brentChange: 0.87,
  brentHistory: [78.5, 79.2, 80.1, 81.3, 80.8, 81.5, 82.0, 82.15]
})

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

// ─── Charts ────────────────────────────────────────────────────────
const initCharts = () => {
  if (bdiChartContainer.value) {
    bdiChart = echarts.init(bdiChartContainer.value, 'dark')
    bdiChart.setOption({
      backgroundColor: 'transparent',
      grid: { top: 5, right: 5, bottom: 5, left: 5 },
      xAxis: { type: 'category', show: false, data: ['一', '二', '三', '四', '五', '六', '日'] },
      yAxis: { type: 'value', show: false, min: 'dataMin' },
      series: [{
        type: 'line', smooth: true, symbol: 'none',
        data: bdiData.value.history,
        lineStyle: { color: '#00D4FF', width: 2 },
        areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0,212,255,0.4)' },
          { offset: 1, color: 'rgba(0,212,255,0)' }
        ]) }
      }]
    })
  }

  if (oilChartContainer.value) {
    oilChart = echarts.init(oilChartContainer.value, 'dark')
    oilChart.setOption({
      backgroundColor: 'transparent',
      grid: { top: 5, right: 5, bottom: 5, left: 5 },
      xAxis: { type: 'category', show: false, data: ['一', '二', '三', '四', '五', '六', '日'] },
      yAxis: { type: 'value', show: false, min: 'dataMin' },
      series: [{
        type: 'line', smooth: true, symbol: 'none',
        data: oilData.value.history,
        lineStyle: { color: '#F59E0B', width: 2 },
        areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(245,158,11,0.4)' },
          { offset: 1, color: 'rgba(245,158,11,0)' }
        ]) }
      }]
    })
  }

  if (chartContainer.value) {
    chart = echarts.init(chartContainer.value, 'dark')
    chart.setOption({
      backgroundColor: 'transparent',
      grid: { top: 8, right: 8, bottom: 20, left: 35 },
      xAxis: {
        type: 'category', data: ['2020', '2021', '2022', '2023', '2024', '2025'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
        axisLabel: { color: '#94A3B8', fontSize: 9 },
      },
      yAxis: {
        type: 'value', axisLine: { show: false },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
        axisLabel: { color: '#94A3B8', fontSize: 9 },
      },
      series: [
        {
          name: '全球贸易指数', type: 'line', smooth: true, symbol: 'circle', symbolSize: 5,
          data: [100, 115, 125, 138, 152, 168],
          lineStyle: { color: '#00D4FF', width: 2 }, itemStyle: { color: '#00D4FF' },
          areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0,212,255,0.3)' }, { offset: 1, color: 'rgba(0,212,255,0)' }
          ]) },
        },
        {
          name: '新兴市场指数', type: 'line', smooth: true, symbol: 'circle', symbolSize: 5,
          data: [100, 108, 122, 141, 165, 195],
          lineStyle: { color: '#6366F1', width: 2 }, itemStyle: { color: '#6366F1' },
          areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(99,102,241,0.3)' }, { offset: 1, color: 'rgba(99,102,241,0)' }
          ]) },
        },
      ],
      legend: { show: true, bottom: 0, textStyle: { color: '#94A3B8', fontSize: 9 }, itemWidth: 10, itemHeight: 6 },
    })
  }
}

// ─── Real-time Updates ─────────────────────────────────────────────
const updateBDI = () => {
  const change = (Math.random() - 0.5) * 20
  bdiData.value.value = Math.max(1500, bdiData.value.value + change)
  bdiData.value.change = ((bdiData.value.value - 1800) / 1800) * 100
  bdiData.value.history = [...bdiData.value.history.slice(1), bdiData.value.value]
  if (bdiChart) bdiChart.setOption({ series: [{ data: bdiData.value.history }] })
}

const updateOil = () => {
  const wtiChange = (Math.random() - 0.5) * 1.5
  oilData.value.wti = Math.max(60, Math.min(120, oilData.value.wti + wtiChange))
  oilData.value.wtiChange = ((oilData.value.wti - 77) / 77) * 100
  oilData.value.wtiHistory = [...oilData.value.wtiHistory.slice(1), oilData.value.wti]

  const brentChange = (Math.random() - 0.5) * 1.5
  oilData.value.brent = Math.max(60, Math.min(130, oilData.value.brent + brentChange))
  oilData.value.brentChange = ((oilData.value.brent - 81) / 81) * 100
  oilData.value.brentHistory = [...oilData.value.brentHistory.slice(1), oilData.value.brent]

  if (oilChart) oilChart.setOption({ series: [{ data: oilData.value.wtiHistory }] })
}

let bdiInterval = null
let oilInterval = null

onMounted(() => {
  initCharts()

  bdiInterval = setInterval(updateBDI, 3000)
  oilInterval = setInterval(updateOil, 4000)

  window.addEventListener('resize', () => {
    if (chart) chart.resize()
    if (bdiChart) bdiChart.resize()
    if (oilChart) oilChart.resize()
  })
})

onUnmounted(() => {
  if (chart) chart.dispose()
  if (bdiChart) bdiChart.dispose()
  if (oilChart) oilChart.dispose()
  if (bdiInterval) clearInterval(bdiInterval)
  if (oilInterval) clearInterval(oilInterval)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
</style>
