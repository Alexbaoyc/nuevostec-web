import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import "leaflet";
import "echarts";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./composables-CqwvKiZK.js";
import "/root/.openclaw/workspace/nuevostec-web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/root/.openclaw/workspace/nuevostec-web/node_modules/hookable/dist/index.mjs";
import "/root/.openclaw/workspace/nuevostec-web/node_modules/unctx/dist/index.mjs";
import "/root/.openclaw/workspace/nuevostec-web/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/root/.openclaw/workspace/nuevostec-web/node_modules/defu/dist/defu.mjs";
import "/root/.openclaw/workspace/nuevostec-web/node_modules/ufo/dist/index.mjs";
import "/root/.openclaw/workspace/nuevostec-web/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$7 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const navRef = ref(null);
    const isScrolled = ref(false);
    const mobileMenuOpen = ref(false);
    const navItems = [
      { id: "services", label: "业务板块" },
      { id: "outbound", label: "企业出海" },
      { id: "cloud-ai", label: "企业上云" },
      { id: "trade-map", label: "贸易热点" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        ref_key: "navRef",
        ref: navRef,
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          unref(isScrolled) ? "glass-strong py-3" : "bg-transparent py-5"
        ]
      }, _attrs))}><div class="container-custom flex items-center justify-between"><a href="#" class="flex items-center gap-3 group"><div class="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center"><span class="text-white font-bold text-lg">N</span></div><div class="hidden sm:block"><p class="text-sm font-semibold text-white group-hover:text-accent transition-colors">Nuevos TEC</p><p class="text-xs text-text-secondary">瑞纳致一</p></div></a><div class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a${ssrRenderAttr("href", `#${item.id}`)} class="text-sm font-medium text-text-secondary hover:text-accent transition-colors">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--><a href="#contact" class="btn-primary text-sm !px-5 !py-2"> 联系我们 </a></div><button class="md:hidden p-2 text-white">`);
      if (!unref(mobileMenuOpen)) {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
      }
      _push(`</button></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="md:hidden glass-strong mt-3 mx-4 rounded-xl p-4"><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(`<a${ssrRenderAttr("href", `#${item.id}`)} class="block py-3 text-sm font-medium text-text-secondary hover:text-accent transition-colors">${ssrInterpolate(item.label)}</a>`);
        });
        _push(`<!--]--><a href="#contact" class="btn-primary text-sm !px-5 !py-2 mt-4 inline-block"> 联系我们 </a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$7, { __name: "NavBar" });
const _sfc_main$6 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center justify-center overflow-hidden" }, _attrs))}><div class="absolute inset-0 bg-primary"><div class="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"></div><div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/10 rounded-full blur-3xl animate-glow-pulse" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}"></div><div class="absolute top-1/2 right-1/3 w-64 h-64 bg-success/5 rounded-full blur-3xl animate-glow-pulse" style="${ssrRenderStyle({ "animation-delay": "0.8s" })}"></div><div class="absolute inset-0 opacity-5"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", "background-size": "60px 60px" })}"></div></div></div><div class="relative z-10 text-center px-4 max-w-5xl mx-auto"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-on-scroll"><span class="w-2 h-2 rounded-full bg-success animate-pulse"></span><span class="text-sm text-text-secondary">企业出海 · 企业上云 · 全球贸易洞察</span></div><h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-scroll"><span class="text-white">链接全球</span><span class="text-gradient"> · </span><span class="text-white">智启未来</span></h1><p class="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-4 animate-on-scroll"> 成都瑞纳致一网络科技有限公司 </p><p class="text-base md:text-lg text-text-secondary/70 mb-10 animate-on-scroll"> Chengdu Nuevos TEC Company </p><p class="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-on-scroll"> 我们致力于帮助中国企业拓展全球市场，提供一站式出海服务、云端AI解决方案及实时贸易数据洞察，让全球化触手可及。 </p><div class="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll"><a href="#services" class="btn-primary text-base"> 探索我们的服务 <svg class="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a><a href="#trade-map" class="btn-secondary text-base"> 查看贸易数据 </a></div></div><div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"><span class="text-xs text-text-secondary">向下滚动</span><svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$6, { __name: "HeroSection" });
const _sfc_main$5 = {
  __name: "BusinessOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        id: "outbound",
        icon: "🌏",
        title: "企业出海",
        description: "覆盖全球顶尖科技展会，深度开拓中东、拉丁美洲、非洲等新兴市场，提供从市场调研、展位规划到落地执行的一站式服务。",
        gradient: "linear-gradient(135deg, #00D4FF20, #00D4FF05)",
        tags: ["GITEX", "CES", "新兴市场", "展会服务"]
      },
      {
        id: "cloud-ai",
        icon: "☁️",
        title: "企业上云",
        description: "AI数字员工智能客服，7×24小时多语言支持，深度适配各国法规与文化，提供私有化部署与定制化训练服务。",
        gradient: "linear-gradient(135deg, #6366F120, #6366F105)",
        tags: ["AI客服", "多语言", "私有化部署", "国别适配"]
      },
      {
        id: "trade-map",
        icon: "📊",
        title: "全球贸易热点图",
        description: "实时追踪全球贸易热点，动态可视化商品指数与市场趋势，智能匹配商机，让决策有据可依。",
        gradient: "linear-gradient(135deg, #10B98120, #10B98105)",
        tags: ["实时数据", "贸易分析", "商品指数", "商机洞察"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "section bg-primary relative"
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><h2 class="section-title">我们的核心业务</h2><p class="section-subtitle mx-auto"> 三大业务板块，助力企业全球化发展 </p></div><div class="grid md:grid-cols-3 gap-6 lg:gap-8"><!--[-->`);
      ssrRenderList(cards, (card, index) => {
        _push(`<a${ssrRenderAttr("href", `#${card.id}`)} class="group relative glass rounded-2xl p-8 card-hover border-glow" style="${ssrRenderStyle({ animationDelay: `${index * 100}ms` })}"><div class="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-3xl" style="${ssrRenderStyle({ background: card.gradient })}">${ssrInterpolate(card.icon)}</div><h3 class="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">${ssrInterpolate(card.title)}</h3><p class="text-text-secondary text-sm leading-relaxed mb-6">${ssrInterpolate(card.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(card.tags, (tag) => {
          _push(`<span class="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><div class="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"><svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div></a>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BusinessOverview.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "EnterpriseOutbound",
  __ssrInlineRender: true,
  setup(__props) {
    const majorExpos = [
      {
        name: "GITEX",
        location: "迪拜 · UAE",
        timing: "每年10月",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        description: "中东及北非地区规模最大、最具影响力的科技盛会，汇聚全球顶尖科技企业与创新解决方案，是进入中东市场的绝佳窗口。",
        highlights: ["中东市场", "科技前沿", " networking", "政府合作"]
      },
      {
        name: "CES",
        location: "拉斯维加斯 · 美国",
        timing: "每年1月",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
        description: "全球消费电子领域最具影响力的展会，涵盖AI、IoT、机器人、汽车科技等前沿领域，是展示创新实力和对接国际资源的顶级平台。",
        highlights: ["消费电子", "AI创新", "全球曝光", "投资对接"]
      }
    ];
    const emergingMarkets = [
      {
        region: "拉丁美洲",
        flag: "🌎",
        countries: "巴西 · 墨西哥 · 智利 · 哥伦比亚",
        description: "人口红利巨大，互联网渗透率快速增长，电商与金融科技需求旺盛，正处于数字化转型关键期。",
        opportunity: "电商平台 · 移动支付 · 企业服务"
      },
      {
        region: "非洲新兴",
        flag: "🌍",
        countries: "尼日利亚 · 肯尼亚 · 南非 · 埃及",
        description: "移动互联网用户爆发式增长，数字经济起步晚但空间巨大，是下一波全球增长的核心引擎。",
        opportunity: "移动金融 · 电商物流 · 数字基建"
      },
      {
        region: "东南亚",
        flag: "🌏",
        countries: "印尼 · 越南 · 泰国 · 马来西亚",
        description: "制造业转移承接地，数字支付快速普及，年轻人口结构带来消费市场蓬勃发展。",
        opportunity: "智能制造 · 跨境电商 · 数字娱乐"
      },
      {
        region: "中东中亚",
        flag: "🏜️",
        countries: "沙特 · 阿联酋 · 哈萨克斯坦",
        description: "石油国家积极推进经济多元化，Vision 2030等战略带动科技投资热潮，市场消费力强劲。",
        opportunity: "新能源 · 智慧城市 · 数字娱乐"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "outbound",
        class: "section bg-secondary/30 relative"
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"><span class="text-2xl">🌏</span><span class="text-sm text-text-secondary font-medium">企业出海</span></div><h2 class="section-title">全球顶尖展会资源</h2><p class="section-subtitle mx-auto"> 深度布局国际顶级科技展会，开拓新兴市场，共创全球布局新篇章 </p></div><div class="mb-20"><h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3"><span class="w-1 h-6 bg-accent rounded-full"></span> 主流展会 </h3><div class="grid md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(majorExpos, (expo) => {
        _push(`<div class="glass rounded-2xl overflow-hidden card-hover border-glow"><div class="aspect-video relative overflow-hidden"><img${ssrRenderAttr("src", expo.image)}${ssrRenderAttr("alt", expo.name)} class="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"><div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div><div class="absolute bottom-4 left-4 right-4"><div class="flex items-center gap-2 mb-2"><span class="px-2 py-1 rounded text-xs font-medium bg-accent/20 text-accent">${ssrInterpolate(expo.location)}</span><span class="px-2 py-1 rounded text-xs font-medium bg-accent2/20 text-accent2">${ssrInterpolate(expo.timing)}</span></div><h4 class="text-xl font-bold text-white">${ssrInterpolate(expo.name)}</h4></div></div><div class="p-6"><p class="text-text-secondary text-sm leading-relaxed mb-4">${ssrInterpolate(expo.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(expo.highlights, (highlight) => {
          _push(`<span class="text-xs px-3 py-1 rounded-full bg-white/5 text-accent border border-accent/20">${ssrInterpolate(highlight)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div><div><h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3"><span class="w-1 h-6 bg-accent2 rounded-full"></span> 新兴市场导航 </h3><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(emergingMarkets, (market) => {
        _push(`<div class="glass rounded-xl p-5 card-hover"><div class="flex items-center gap-3 mb-4"><span class="text-2xl">${ssrInterpolate(market.flag)}</span><div><h4 class="text-white font-semibold">${ssrInterpolate(market.region)}</h4><p class="text-xs text-text-secondary">${ssrInterpolate(market.countries)}</p></div></div><p class="text-text-secondary text-sm leading-relaxed">${ssrInterpolate(market.description)}</p><div class="mt-4 pt-4 border-t border-white/5"><p class="text-xs text-accent font-medium">${ssrInterpolate(market.opportunity)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EnterpriseOutbound.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "EnterpriseOutbound" });
const _sfc_main$3 = {
  __name: "CloudAI",
  __ssrInlineRender: true,
  setup(__props) {
    const valueProps = [
      { icon: "🕛", title: "7×24小时", desc: "全天候不间断服务，节假日无休" },
      { icon: "🌍", title: "多语言", desc: "覆盖50+语种，母语级对话体验" },
      { icon: "⚡", title: "秒级响应", desc: "平均响应时间<1秒，零等待" },
      { icon: "🎯", title: "99.9%准确", desc: "先进NLP引擎，理解意图精准" }
    ];
    const traditionalCons = [
      "人工成本高昂，招募培训周期长",
      "服务水平参差不齐，情绪波动大",
      "无法同时处理多语言需求",
      "夜间/节假日无法提供服务",
      "知识更新慢，答案一致性差",
      "难以进行数据分析和挖掘"
    ];
    const aiPros = [
      "边际成本趋近于零，ROI高达500%+",
      "服务标准化，情绪稳定，专业度高",
      "原生多语言切换，无缝衔接",
      "24小时在线，节假日无休",
      "实时学习更新，知识库持续进化",
      "自动生成服务报告，洞察客户需求"
    ];
    const countryCoverage = [
      {
        region: "中国",
        flag: "🇨🇳",
        language: "普通话 / 粤语 / 各地方言",
        features: ["符合《网络安全法》《数据安全法》", "支持微信/钉钉/企微多渠道", "本地化知识库即插即用"]
      },
      {
        region: "东南亚",
        flag: "🇸🇬",
        language: "英语 / 泰语 / 越南语 / 印尼语",
        features: ["适配ASEAN数据跨境规则", "支持Grab/Line等本地平台", "文化习惯深度适配"]
      },
      {
        region: "欧洲",
        flag: "🇪🇺",
        language: "英语 / 德语 / 法语 / 西班牙语",
        features: ["GDPR完全合规", "支持GDPR数据删除权", "本地化语境理解"]
      },
      {
        region: "中东",
        flag: "🇸🇦",
        language: "阿拉伯语 / 英语",
        features: ["适配GCC数据本地化要求", "宗教文化深度理解", "右向左阅读适配"]
      },
      {
        region: "拉美",
        flag: "🇧🇷",
        language: "西班牙语 / 葡萄牙语",
        features: ["符合LGPD数据法规", "本地节日/习俗自动适配", "时区智能切换"]
      },
      {
        region: "非洲",
        flag: "🇳🇬",
        language: "英语 / 法语 / 斯瓦希里语",
        features: ["适配各国家数据法规差异", "离线+在线双模式", "方言识别支持"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "cloud-ai",
        class: "section bg-primary relative"
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"><span class="text-2xl">☁️</span><span class="text-sm text-text-secondary font-medium">企业上云</span></div><h2 class="section-title">AI 数字员工</h2><p class="section-subtitle mx-auto"> 重新定义企业客服，7×24小时多语言智能服务，深度适配各国法规与文化 </p></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"><!--[-->`);
      ssrRenderList(valueProps, (prop, index) => {
        _push(`<div class="glass rounded-xl p-6 text-center card-hover"><div class="text-4xl mb-4">${ssrInterpolate(prop.icon)}</div><h4 class="text-white font-semibold mb-2">${ssrInterpolate(prop.title)}</h4><p class="text-text-secondary text-sm">${ssrInterpolate(prop.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mb-16"><h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3"><span class="w-1 h-6 bg-success rounded-full"></span> 传统客服 vs AI数字员工 </h3><div class="grid md:grid-cols-2 gap-6"><div class="glass rounded-2xl p-8 border border-red-500/20"><div class="flex items-center gap-3 mb-6"><span class="text-2xl">⚠️</span><h4 class="text-lg font-semibold text-red-400">传统客服</h4></div><ul class="space-y-4"><!--[-->`);
      ssrRenderList(traditionalCons, (item) => {
        _push(`<li class="flex items-start gap-3 text-text-secondary text-sm"><span class="text-red-400 mt-0.5">✕</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="glass rounded-2xl p-8 border border-success/20 glow-accent"><div class="flex items-center gap-3 mb-6"><span class="text-2xl">✨</span><h4 class="text-lg font-semibold text-success">AI数字员工</h4></div><ul class="space-y-4"><!--[-->`);
      ssrRenderList(aiPros, (item) => {
        _push(`<li class="flex items-start gap-3 text-text-secondary text-sm"><span class="text-success mt-0.5">✓</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div><div><h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3"><span class="w-1 h-6 bg-accent rounded-full"></span> 国别深度适配 </h3><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(countryCoverage, (country) => {
        _push(`<div class="glass rounded-xl p-5"><div class="flex items-center gap-3 mb-4"><span class="text-2xl">${ssrInterpolate(country.flag)}</span><div><h4 class="text-white font-semibold">${ssrInterpolate(country.region)}</h4><p class="text-xs text-text-secondary">${ssrInterpolate(country.language)}</p></div></div><ul class="space-y-2"><!--[-->`);
        ssrRenderList(country.features, (feature) => {
          _push(`<li class="text-text-secondary text-xs flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-accent"></span> ${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CloudAI.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "TradeMap",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    const form = ref({
      name: "",
      company: "",
      email: "",
      phone: "",
      region: "",
      interest: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const submitSuccess = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "trade-map",
        class: "section bg-secondary/30 relative"
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"><span class="text-2xl">📊</span><span class="text-sm text-text-secondary font-medium">全球贸易热点图</span></div><h2 class="section-title">实时贸易数据洞察</h2><p class="section-subtitle mx-auto"> 基于公开数据源，实时追踪全球贸易热点，让决策有据可依 </p></div><div class="grid lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-2 glass rounded-2xl overflow-hidden"><div class="p-4 border-b border-white/5"><h3 class="text-white font-semibold flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span> 全球贸易热度图 </h3></div><div class="h-[400px] lg:h-[500px]"></div></div><div class="space-y-6"><div class="glass rounded-2xl p-4"><h3 class="text-white font-semibold mb-4 flex items-center gap-2"><span class="text-sm">📈</span> 大宗商品指数 </h3><div class="h-[200px]"></div><p class="text-xs text-text-secondary mt-2">数据来源: World Bank API</p></div><div class="glass rounded-2xl p-4"><h3 class="text-white font-semibold mb-4 flex items-center gap-2"><span class="text-sm">🌍</span> 区域贸易量占比 </h3><div class="h-[200px]"></div></div></div></div><div id="contact" class="glass rounded-2xl p-8 lg:p-12"><div class="grid lg:grid-cols-2 gap-12"><div><h3 class="text-2xl font-bold text-white mb-2">获取定制化贸易报告</h3><p class="text-text-secondary mb-8"> 留下您的联系方式，我们将为您分析目标市场的贸易热点与机遇 </p><form class="space-y-4"><div class="grid sm:grid-cols-2 gap-4"><div><label class="block text-sm text-text-secondary mb-2">姓名 *</label><input${ssrRenderAttr("value", form.value.name)} type="text" required class="input-field" placeholder="您的姓名"></div><div><label class="block text-sm text-text-secondary mb-2">公司 *</label><input${ssrRenderAttr("value", form.value.company)} type="text" required class="input-field" placeholder="公司名称"></div></div><div class="grid sm:grid-cols-2 gap-4"><div><label class="block text-sm text-text-secondary mb-2">邮箱 *</label><input${ssrRenderAttr("value", form.value.email)} type="email" required class="input-field" placeholder="business@company.com"></div><div><label class="block text-sm text-text-secondary mb-2">电话</label><input${ssrRenderAttr("value", form.value.phone)} type="tel" class="input-field" placeholder="+86 xxx xxxx xxxx"></div></div><div class="grid sm:grid-cols-2 gap-4"><div><label class="block text-sm text-text-secondary mb-2">目标市场 *</label><select required class="input-field"><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "") : ssrLooseEqual(form.value.region, "")) ? " selected" : ""}>请选择</option><option value="latam"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "latam") : ssrLooseEqual(form.value.region, "latam")) ? " selected" : ""}>拉丁美洲</option><option value="africa"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "africa") : ssrLooseEqual(form.value.region, "africa")) ? " selected" : ""}>非洲</option><option value="southeast-asia"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "southeast-asia") : ssrLooseEqual(form.value.region, "southeast-asia")) ? " selected" : ""}>东南亚</option><option value="mena"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "mena") : ssrLooseEqual(form.value.region, "mena")) ? " selected" : ""}>中东中亚</option><option value="europe"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "europe") : ssrLooseEqual(form.value.region, "europe")) ? " selected" : ""}>欧洲</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "other") : ssrLooseEqual(form.value.region, "other")) ? " selected" : ""}>其他</option></select></div><div><label class="block text-sm text-text-secondary mb-2">感兴趣类目 *</label><select required class="input-field"><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "") : ssrLooseEqual(form.value.interest, "")) ? " selected" : ""}>请选择</option><option value="electronics"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "electronics") : ssrLooseEqual(form.value.interest, "electronics")) ? " selected" : ""}>消费电子</option><option value="manufacturing"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "manufacturing") : ssrLooseEqual(form.value.interest, "manufacturing")) ? " selected" : ""}>智能制造</option><option value="ecommerce"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "ecommerce") : ssrLooseEqual(form.value.interest, "ecommerce")) ? " selected" : ""}>跨境电商</option><option value="fintech"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "fintech") : ssrLooseEqual(form.value.interest, "fintech")) ? " selected" : ""}>金融科技</option><option value="cloud-ai"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "cloud-ai") : ssrLooseEqual(form.value.interest, "cloud-ai")) ? " selected" : ""}>云服务/AI</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "other") : ssrLooseEqual(form.value.interest, "other")) ? " selected" : ""}>其他</option></select></div></div><div><label class="block text-sm text-text-secondary mb-2">留言</label><textarea rows="3" class="input-field resize-none" placeholder="请描述您的需求...">${ssrInterpolate(form.value.message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(isSubmitting.value ? "提交中..." : "提交申请")}</button></form>`);
      if (submitSuccess.value) {
        _push(`<div class="mt-6 p-4 rounded-xl bg-success/10 border border-success/30"><p class="text-success font-medium">✓ 提交成功！</p><p class="text-text-secondary text-sm mt-1">我们的团队将在24小时内与您联系。</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col justify-center"><div class="space-y-6"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0"> 📧 </div><div><h4 class="text-white font-medium">邮箱</h4><p class="text-text-secondary text-sm">contact@nuevostec.com</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-accent2/10 flex items-center justify-center text-accent2 text-xl shrink-0"> 🌐 </div><div><h4 class="text-white font-medium">网址</h4><p class="text-text-secondary text-sm">www.nuevostec.com</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success text-xl shrink-0"> 📍 </div><div><h4 class="text-white font-medium">地址</h4><p class="text-text-secondary text-sm">四川省成都市高新区</p></div></div><div class="p-6 rounded-xl bg-white/5 border border-white/10"><p class="text-text-secondary text-sm leading-relaxed"><span class="text-accent font-medium">数据说明：</span>本页展示的贸易数据基于 World Bank Open API，免费公开数据，数据更新频率以数据源为准。我们不对数据做任何修改，力求展示最原始、最准确的信息。 </p></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TradeMap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "TradeMap" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary border-t border-white/5" }, _attrs))}><div class="container-custom py-16"><div class="grid md:grid-cols-4 gap-12"><div class="md:col-span-2"><div class="flex items-center gap-3 mb-6"><div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center"><span class="text-white font-bold text-xl">N</span></div><div><p class="text-white font-bold text-lg">Nuevos TEC</p><p class="text-text-secondary text-sm">成都瑞纳致一网络科技有限公司</p></div></div><p class="text-text-secondary text-sm leading-relaxed max-w-md mb-6"> 链接全球，智启未来。我们致力于帮助中国企业拓展全球市场，提供一站式出海服务、云端AI解决方案及实时贸易数据洞察。 </p><div class="flex items-center gap-4"><a href="#" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-white/10 transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a href="#" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-white/10 transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div></div><div><h4 class="text-white font-semibold mb-6">业务板块</h4><ul class="space-y-3"><li><a href="#outbound" class="text-text-secondary text-sm hover:text-accent transition-colors">企业出海</a></li><li><a href="#cloud-ai" class="text-text-secondary text-sm hover:text-accent transition-colors">企业上云</a></li><li><a href="#trade-map" class="text-text-secondary text-sm hover:text-accent transition-colors">全球贸易热点图</a></li></ul></div><div><h4 class="text-white font-semibold mb-6">联系方式</h4><ul class="space-y-3"><li class="text-text-secondary text-sm">📧 contact@nuevostec.com</li><li class="text-text-secondary text-sm">🌐 www.nuevostec.com</li><li class="text-text-secondary text-sm">📍 四川省成都市高新区</li></ul></div></div><div class="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"><p class="text-text-secondary text-sm"> © 2024-2026 成都瑞纳致一网络科技有限公司. All rights reserved. </p><p class="text-text-secondary text-xs"> 数据来源: World Bank Open API | 设计: Nuevos TEC </p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "FooterSection" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "成都瑞纳致一 | Nuevos TEC - 链接全球，智启未来"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_BusinessOverview = _sfc_main$5;
      const _component_EnterpriseOutbound = __nuxt_component_3;
      const _component_CloudAI = _sfc_main$3;
      const _component_TradeMap = __nuxt_component_5;
      const _component_FooterSection = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_BusinessOverview, null, null, _parent));
      _push(ssrRenderComponent(_component_EnterpriseOutbound, null, null, _parent));
      _push(ssrRenderComponent(_component_CloudAI, null, null, _parent));
      _push(ssrRenderComponent(_component_TradeMap, null, null, _parent));
      _push(ssrRenderComponent(_component_FooterSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B__dPvbO.js.map
