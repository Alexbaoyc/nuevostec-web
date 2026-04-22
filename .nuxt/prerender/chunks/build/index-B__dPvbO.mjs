import { mergeProps, ref, unref, useSSRContext } from 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './composables-CqwvKiZK.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/h3/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/ufo/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/destr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/node-mock-http/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/unstorage/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/ohash/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/klona/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/defu/dist/defu.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/scule/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/unctx/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/pathe/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/unhead/dist/server.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/devalue/index.js';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/unhead/dist/utils.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/hookable/dist/index.mjs';
import 'file:///root/.openclaw/workspace/nuevostec-web/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$7 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const navRef = ref(null);
    const isScrolled = ref(false);
    const mobileMenuOpen = ref(false);
    const navItems = [
      { id: "services", label: "\u4E1A\u52A1\u677F\u5757" },
      { id: "outbound", label: "\u4F01\u4E1A\u51FA\u6D77" },
      { id: "cloud-ai", label: "\u4F01\u4E1A\u4E0A\u4E91" },
      { id: "trade-map", label: "\u8D38\u6613\u70ED\u70B9" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        ref_key: "navRef",
        ref: navRef,
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          unref(isScrolled) ? "glass-strong py-3" : "bg-transparent py-5"
        ]
      }, _attrs))}><div class="container-custom flex items-center justify-between"><a href="#" class="flex items-center gap-3 group"><div class="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center"><span class="text-white font-bold text-lg">N</span></div><div class="hidden sm:block"><p class="text-sm font-semibold text-white group-hover:text-accent transition-colors">Nuevos TEC</p><p class="text-xs text-text-secondary">\u745E\u7EB3\u81F4\u4E00</p></div></a><div class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a${ssrRenderAttr("href", `#${item.id}`)} class="text-sm font-medium text-text-secondary hover:text-accent transition-colors">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--><a href="#contact" class="btn-primary text-sm !px-5 !py-2"> \u8054\u7CFB\u6211\u4EEC </a></div><button class="md:hidden p-2 text-white">`);
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
        _push(`<!--]--><a href="#contact" class="btn-primary text-sm !px-5 !py-2 mt-4 inline-block"> \u8054\u7CFB\u6211\u4EEC </a></div>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center justify-center overflow-hidden" }, _attrs))}><div class="absolute inset-0 bg-primary"><div class="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"></div><div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/10 rounded-full blur-3xl animate-glow-pulse" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}"></div><div class="absolute top-1/2 right-1/3 w-64 h-64 bg-success/5 rounded-full blur-3xl animate-glow-pulse" style="${ssrRenderStyle({ "animation-delay": "0.8s" })}"></div><div class="absolute inset-0 opacity-5"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", "background-size": "60px 60px" })}"></div></div></div><div class="relative z-10 text-center px-4 max-w-5xl mx-auto"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-on-scroll"><span class="w-2 h-2 rounded-full bg-success animate-pulse"></span><span class="text-sm text-text-secondary">\u4F01\u4E1A\u51FA\u6D77 \xB7 \u4F01\u4E1A\u4E0A\u4E91 \xB7 \u5168\u7403\u8D38\u6613\u6D1E\u5BDF</span></div><h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-scroll"><span class="text-white">\u94FE\u63A5\u5168\u7403</span><span class="text-gradient"> \xB7 </span><span class="text-white">\u667A\u542F\u672A\u6765</span></h1><p class="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-4 animate-on-scroll"> \u6210\u90FD\u745E\u7EB3\u81F4\u4E00\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8 </p><p class="text-base md:text-lg text-text-secondary/70 mb-10 animate-on-scroll"> Chengdu Nuevos TEC Company </p><p class="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-on-scroll"> \u6211\u4EEC\u81F4\u529B\u4E8E\u5E2E\u52A9\u4E2D\u56FD\u4F01\u4E1A\u62D3\u5C55\u5168\u7403\u5E02\u573A\uFF0C\u63D0\u4F9B\u4E00\u7AD9\u5F0F\u51FA\u6D77\u670D\u52A1\u3001\u4E91\u7AEFAI\u89E3\u51B3\u65B9\u6848\u53CA\u5B9E\u65F6\u8D38\u6613\u6570\u636E\u6D1E\u5BDF\uFF0C\u8BA9\u5168\u7403\u5316\u89E6\u624B\u53EF\u53CA\u3002 </p><div class="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll"><a href="#services" class="btn-primary text-base"> \u63A2\u7D22\u6211\u4EEC\u7684\u670D\u52A1 <svg class="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a><a href="#trade-map" class="btn-secondary text-base"> \u67E5\u770B\u8D38\u6613\u6570\u636E </a></div></div><div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"><span class="text-xs text-text-secondary">\u5411\u4E0B\u6EDA\u52A8</span><svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div></section>`);
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
        icon: "\u{1F30F}",
        title: "\u4F01\u4E1A\u51FA\u6D77",
        description: "\u8986\u76D6\u5168\u7403\u9876\u5C16\u79D1\u6280\u5C55\u4F1A\uFF0C\u6DF1\u5EA6\u5F00\u62D3\u4E2D\u4E1C\u3001\u62C9\u4E01\u7F8E\u6D32\u3001\u975E\u6D32\u7B49\u65B0\u5174\u5E02\u573A\uFF0C\u63D0\u4F9B\u4ECE\u5E02\u573A\u8C03\u7814\u3001\u5C55\u4F4D\u89C4\u5212\u5230\u843D\u5730\u6267\u884C\u7684\u4E00\u7AD9\u5F0F\u670D\u52A1\u3002",
        gradient: "linear-gradient(135deg, #00D4FF20, #00D4FF05)",
        tags: ["GITEX", "CES", "\u65B0\u5174\u5E02\u573A", "\u5C55\u4F1A\u670D\u52A1"]
      },
      {
        id: "cloud-ai",
        icon: "\u2601\uFE0F",
        title: "\u4F01\u4E1A\u4E0A\u4E91",
        description: "AI\u6570\u5B57\u5458\u5DE5\u667A\u80FD\u5BA2\u670D\uFF0C7\xD724\u5C0F\u65F6\u591A\u8BED\u8A00\u652F\u6301\uFF0C\u6DF1\u5EA6\u9002\u914D\u5404\u56FD\u6CD5\u89C4\u4E0E\u6587\u5316\uFF0C\u63D0\u4F9B\u79C1\u6709\u5316\u90E8\u7F72\u4E0E\u5B9A\u5236\u5316\u8BAD\u7EC3\u670D\u52A1\u3002",
        gradient: "linear-gradient(135deg, #6366F120, #6366F105)",
        tags: ["AI\u5BA2\u670D", "\u591A\u8BED\u8A00", "\u79C1\u6709\u5316\u90E8\u7F72", "\u56FD\u522B\u9002\u914D"]
      },
      {
        id: "trade-map",
        icon: "\u{1F4CA}",
        title: "\u5168\u7403\u8D38\u6613\u70ED\u70B9\u56FE",
        description: "\u5B9E\u65F6\u8FFD\u8E2A\u5168\u7403\u8D38\u6613\u70ED\u70B9\uFF0C\u52A8\u6001\u53EF\u89C6\u5316\u5546\u54C1\u6307\u6570\u4E0E\u5E02\u573A\u8D8B\u52BF\uFF0C\u667A\u80FD\u5339\u914D\u5546\u673A\uFF0C\u8BA9\u51B3\u7B56\u6709\u636E\u53EF\u4F9D\u3002",
        gradient: "linear-gradient(135deg, #10B98120, #10B98105)",
        tags: ["\u5B9E\u65F6\u6570\u636E", "\u8D38\u6613\u5206\u6790", "\u5546\u54C1\u6307\u6570", "\u5546\u673A\u6D1E\u5BDF"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "services",
        class: "section bg-primary relative"
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><h2 class="section-title">\u6211\u4EEC\u7684\u6838\u5FC3\u4E1A\u52A1</h2><p class="section-subtitle mx-auto"> \u4E09\u5927\u4E1A\u52A1\u677F\u5757\uFF0C\u52A9\u529B\u4F01\u4E1A\u5168\u7403\u5316\u53D1\u5C55 </p></div><div class="grid md:grid-cols-3 gap-6 lg:gap-8"><!--[-->`);
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
        location: "\u8FEA\u62DC \xB7 UAE",
        timing: "\u6BCF\u5E7410\u6708",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        description: "\u4E2D\u4E1C\u53CA\u5317\u975E\u5730\u533A\u89C4\u6A21\u6700\u5927\u3001\u6700\u5177\u5F71\u54CD\u529B\u7684\u79D1\u6280\u76DB\u4F1A\uFF0C\u6C47\u805A\u5168\u7403\u9876\u5C16\u79D1\u6280\u4F01\u4E1A\u4E0E\u521B\u65B0\u89E3\u51B3\u65B9\u6848\uFF0C\u662F\u8FDB\u5165\u4E2D\u4E1C\u5E02\u573A\u7684\u7EDD\u4F73\u7A97\u53E3\u3002",
        highlights: ["\u4E2D\u4E1C\u5E02\u573A", "\u79D1\u6280\u524D\u6CBF", " networking", "\u653F\u5E9C\u5408\u4F5C"]
      },
      {
        name: "CES",
        location: "\u62C9\u65AF\u7EF4\u52A0\u65AF \xB7 \u7F8E\u56FD",
        timing: "\u6BCF\u5E741\u6708",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
        description: "\u5168\u7403\u6D88\u8D39\u7535\u5B50\u9886\u57DF\u6700\u5177\u5F71\u54CD\u529B\u7684\u5C55\u4F1A\uFF0C\u6DB5\u76D6AI\u3001IoT\u3001\u673A\u5668\u4EBA\u3001\u6C7D\u8F66\u79D1\u6280\u7B49\u524D\u6CBF\u9886\u57DF\uFF0C\u662F\u5C55\u793A\u521B\u65B0\u5B9E\u529B\u548C\u5BF9\u63A5\u56FD\u9645\u8D44\u6E90\u7684\u9876\u7EA7\u5E73\u53F0\u3002",
        highlights: ["\u6D88\u8D39\u7535\u5B50", "AI\u521B\u65B0", "\u5168\u7403\u66DD\u5149", "\u6295\u8D44\u5BF9\u63A5"]
      }
    ];
    const emergingMarkets = [
      {
        region: "\u62C9\u4E01\u7F8E\u6D32",
        flag: "\u{1F30E}",
        countries: "\u5DF4\u897F \xB7 \u58A8\u897F\u54E5 \xB7 \u667A\u5229 \xB7 \u54E5\u4F26\u6BD4\u4E9A",
        description: "\u4EBA\u53E3\u7EA2\u5229\u5DE8\u5927\uFF0C\u4E92\u8054\u7F51\u6E17\u900F\u7387\u5FEB\u901F\u589E\u957F\uFF0C\u7535\u5546\u4E0E\u91D1\u878D\u79D1\u6280\u9700\u6C42\u65FA\u76DB\uFF0C\u6B63\u5904\u4E8E\u6570\u5B57\u5316\u8F6C\u578B\u5173\u952E\u671F\u3002",
        opportunity: "\u7535\u5546\u5E73\u53F0 \xB7 \u79FB\u52A8\u652F\u4ED8 \xB7 \u4F01\u4E1A\u670D\u52A1"
      },
      {
        region: "\u975E\u6D32\u65B0\u5174",
        flag: "\u{1F30D}",
        countries: "\u5C3C\u65E5\u5229\u4E9A \xB7 \u80AF\u5C3C\u4E9A \xB7 \u5357\u975E \xB7 \u57C3\u53CA",
        description: "\u79FB\u52A8\u4E92\u8054\u7F51\u7528\u6237\u7206\u53D1\u5F0F\u589E\u957F\uFF0C\u6570\u5B57\u7ECF\u6D4E\u8D77\u6B65\u665A\u4F46\u7A7A\u95F4\u5DE8\u5927\uFF0C\u662F\u4E0B\u4E00\u6CE2\u5168\u7403\u589E\u957F\u7684\u6838\u5FC3\u5F15\u64CE\u3002",
        opportunity: "\u79FB\u52A8\u91D1\u878D \xB7 \u7535\u5546\u7269\u6D41 \xB7 \u6570\u5B57\u57FA\u5EFA"
      },
      {
        region: "\u4E1C\u5357\u4E9A",
        flag: "\u{1F30F}",
        countries: "\u5370\u5C3C \xB7 \u8D8A\u5357 \xB7 \u6CF0\u56FD \xB7 \u9A6C\u6765\u897F\u4E9A",
        description: "\u5236\u9020\u4E1A\u8F6C\u79FB\u627F\u63A5\u5730\uFF0C\u6570\u5B57\u652F\u4ED8\u5FEB\u901F\u666E\u53CA\uFF0C\u5E74\u8F7B\u4EBA\u53E3\u7ED3\u6784\u5E26\u6765\u6D88\u8D39\u5E02\u573A\u84EC\u52C3\u53D1\u5C55\u3002",
        opportunity: "\u667A\u80FD\u5236\u9020 \xB7 \u8DE8\u5883\u7535\u5546 \xB7 \u6570\u5B57\u5A31\u4E50"
      },
      {
        region: "\u4E2D\u4E1C\u4E2D\u4E9A",
        flag: "\u{1F3DC}\uFE0F",
        countries: "\u6C99\u7279 \xB7 \u963F\u8054\u914B \xB7 \u54C8\u8428\u514B\u65AF\u5766",
        description: "\u77F3\u6CB9\u56FD\u5BB6\u79EF\u6781\u63A8\u8FDB\u7ECF\u6D4E\u591A\u5143\u5316\uFF0CVision 2030\u7B49\u6218\u7565\u5E26\u52A8\u79D1\u6280\u6295\u8D44\u70ED\u6F6E\uFF0C\u5E02\u573A\u6D88\u8D39\u529B\u5F3A\u52B2\u3002",
        opportunity: "\u65B0\u80FD\u6E90 \xB7 \u667A\u6167\u57CE\u5E02 \xB7 \u6570\u5B57\u5A31\u4E50"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "outbound",
        class: "section bg-secondary/30 relative"
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"><span class="text-2xl">\u{1F30F}</span><span class="text-sm text-text-secondary font-medium">\u4F01\u4E1A\u51FA\u6D77</span></div><h2 class="section-title">\u5168\u7403\u9876\u5C16\u5C55\u4F1A\u8D44\u6E90</h2><p class="section-subtitle mx-auto"> \u6DF1\u5EA6\u5E03\u5C40\u56FD\u9645\u9876\u7EA7\u79D1\u6280\u5C55\u4F1A\uFF0C\u5F00\u62D3\u65B0\u5174\u5E02\u573A\uFF0C\u5171\u521B\u5168\u7403\u5E03\u5C40\u65B0\u7BC7\u7AE0 </p></div><div class="mb-20"><h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3"><span class="w-1 h-6 bg-accent rounded-full"></span> \u4E3B\u6D41\u5C55\u4F1A </h3><div class="grid md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(majorExpos, (expo) => {
        _push(`<div class="glass rounded-2xl overflow-hidden card-hover border-glow"><div class="aspect-video relative overflow-hidden"><img${ssrRenderAttr("src", expo.image)}${ssrRenderAttr("alt", expo.name)} class="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"><div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div><div class="absolute bottom-4 left-4 right-4"><div class="flex items-center gap-2 mb-2"><span class="px-2 py-1 rounded text-xs font-medium bg-accent/20 text-accent">${ssrInterpolate(expo.location)}</span><span class="px-2 py-1 rounded text-xs font-medium bg-accent2/20 text-accent2">${ssrInterpolate(expo.timing)}</span></div><h4 class="text-xl font-bold text-white">${ssrInterpolate(expo.name)}</h4></div></div><div class="p-6"><p class="text-text-secondary text-sm leading-relaxed mb-4">${ssrInterpolate(expo.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(expo.highlights, (highlight) => {
          _push(`<span class="text-xs px-3 py-1 rounded-full bg-white/5 text-accent border border-accent/20">${ssrInterpolate(highlight)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div><div><h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3"><span class="w-1 h-6 bg-accent2 rounded-full"></span> \u65B0\u5174\u5E02\u573A\u5BFC\u822A </h3><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
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
      { icon: "\u{1F55B}", title: "7\xD724\u5C0F\u65F6", desc: "\u5168\u5929\u5019\u4E0D\u95F4\u65AD\u670D\u52A1\uFF0C\u8282\u5047\u65E5\u65E0\u4F11" },
      { icon: "\u{1F30D}", title: "\u591A\u8BED\u8A00", desc: "\u8986\u76D650+\u8BED\u79CD\uFF0C\u6BCD\u8BED\u7EA7\u5BF9\u8BDD\u4F53\u9A8C" },
      { icon: "\u26A1", title: "\u79D2\u7EA7\u54CD\u5E94", desc: "\u5E73\u5747\u54CD\u5E94\u65F6\u95F4<1\u79D2\uFF0C\u96F6\u7B49\u5F85" },
      { icon: "\u{1F3AF}", title: "99.9%\u51C6\u786E", desc: "\u5148\u8FDBNLP\u5F15\u64CE\uFF0C\u7406\u89E3\u610F\u56FE\u7CBE\u51C6" }
    ];
    const traditionalCons = [
      "\u4EBA\u5DE5\u6210\u672C\u9AD8\u6602\uFF0C\u62DB\u52DF\u57F9\u8BAD\u5468\u671F\u957F",
      "\u670D\u52A1\u6C34\u5E73\u53C2\u5DEE\u4E0D\u9F50\uFF0C\u60C5\u7EEA\u6CE2\u52A8\u5927",
      "\u65E0\u6CD5\u540C\u65F6\u5904\u7406\u591A\u8BED\u8A00\u9700\u6C42",
      "\u591C\u95F4/\u8282\u5047\u65E5\u65E0\u6CD5\u63D0\u4F9B\u670D\u52A1",
      "\u77E5\u8BC6\u66F4\u65B0\u6162\uFF0C\u7B54\u6848\u4E00\u81F4\u6027\u5DEE",
      "\u96BE\u4EE5\u8FDB\u884C\u6570\u636E\u5206\u6790\u548C\u6316\u6398"
    ];
    const aiPros = [
      "\u8FB9\u9645\u6210\u672C\u8D8B\u8FD1\u4E8E\u96F6\uFF0CROI\u9AD8\u8FBE500%+",
      "\u670D\u52A1\u6807\u51C6\u5316\uFF0C\u60C5\u7EEA\u7A33\u5B9A\uFF0C\u4E13\u4E1A\u5EA6\u9AD8",
      "\u539F\u751F\u591A\u8BED\u8A00\u5207\u6362\uFF0C\u65E0\u7F1D\u8854\u63A5",
      "24\u5C0F\u65F6\u5728\u7EBF\uFF0C\u8282\u5047\u65E5\u65E0\u4F11",
      "\u5B9E\u65F6\u5B66\u4E60\u66F4\u65B0\uFF0C\u77E5\u8BC6\u5E93\u6301\u7EED\u8FDB\u5316",
      "\u81EA\u52A8\u751F\u6210\u670D\u52A1\u62A5\u544A\uFF0C\u6D1E\u5BDF\u5BA2\u6237\u9700\u6C42"
    ];
    const countryCoverage = [
      {
        region: "\u4E2D\u56FD",
        flag: "\u{1F1E8}\u{1F1F3}",
        language: "\u666E\u901A\u8BDD / \u7CA4\u8BED / \u5404\u5730\u65B9\u8A00",
        features: ["\u7B26\u5408\u300A\u7F51\u7EDC\u5B89\u5168\u6CD5\u300B\u300A\u6570\u636E\u5B89\u5168\u6CD5\u300B", "\u652F\u6301\u5FAE\u4FE1/\u9489\u9489/\u4F01\u5FAE\u591A\u6E20\u9053", "\u672C\u5730\u5316\u77E5\u8BC6\u5E93\u5373\u63D2\u5373\u7528"]
      },
      {
        region: "\u4E1C\u5357\u4E9A",
        flag: "\u{1F1F8}\u{1F1EC}",
        language: "\u82F1\u8BED / \u6CF0\u8BED / \u8D8A\u5357\u8BED / \u5370\u5C3C\u8BED",
        features: ["\u9002\u914DASEAN\u6570\u636E\u8DE8\u5883\u89C4\u5219", "\u652F\u6301Grab/Line\u7B49\u672C\u5730\u5E73\u53F0", "\u6587\u5316\u4E60\u60EF\u6DF1\u5EA6\u9002\u914D"]
      },
      {
        region: "\u6B27\u6D32",
        flag: "\u{1F1EA}\u{1F1FA}",
        language: "\u82F1\u8BED / \u5FB7\u8BED / \u6CD5\u8BED / \u897F\u73ED\u7259\u8BED",
        features: ["GDPR\u5B8C\u5168\u5408\u89C4", "\u652F\u6301GDPR\u6570\u636E\u5220\u9664\u6743", "\u672C\u5730\u5316\u8BED\u5883\u7406\u89E3"]
      },
      {
        region: "\u4E2D\u4E1C",
        flag: "\u{1F1F8}\u{1F1E6}",
        language: "\u963F\u62C9\u4F2F\u8BED / \u82F1\u8BED",
        features: ["\u9002\u914DGCC\u6570\u636E\u672C\u5730\u5316\u8981\u6C42", "\u5B97\u6559\u6587\u5316\u6DF1\u5EA6\u7406\u89E3", "\u53F3\u5411\u5DE6\u9605\u8BFB\u9002\u914D"]
      },
      {
        region: "\u62C9\u7F8E",
        flag: "\u{1F1E7}\u{1F1F7}",
        language: "\u897F\u73ED\u7259\u8BED / \u8461\u8404\u7259\u8BED",
        features: ["\u7B26\u5408LGPD\u6570\u636E\u6CD5\u89C4", "\u672C\u5730\u8282\u65E5/\u4E60\u4FD7\u81EA\u52A8\u9002\u914D", "\u65F6\u533A\u667A\u80FD\u5207\u6362"]
      },
      {
        region: "\u975E\u6D32",
        flag: "\u{1F1F3}\u{1F1EC}",
        language: "\u82F1\u8BED / \u6CD5\u8BED / \u65AF\u74E6\u5E0C\u91CC\u8BED",
        features: ["\u9002\u914D\u5404\u56FD\u5BB6\u6570\u636E\u6CD5\u89C4\u5DEE\u5F02", "\u79BB\u7EBF+\u5728\u7EBF\u53CC\u6A21\u5F0F", "\u65B9\u8A00\u8BC6\u522B\u652F\u6301"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "cloud-ai",
        class: "section bg-primary relative"
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"><span class="text-2xl">\u2601\uFE0F</span><span class="text-sm text-text-secondary font-medium">\u4F01\u4E1A\u4E0A\u4E91</span></div><h2 class="section-title">AI \u6570\u5B57\u5458\u5DE5</h2><p class="section-subtitle mx-auto"> \u91CD\u65B0\u5B9A\u4E49\u4F01\u4E1A\u5BA2\u670D\uFF0C7\xD724\u5C0F\u65F6\u591A\u8BED\u8A00\u667A\u80FD\u670D\u52A1\uFF0C\u6DF1\u5EA6\u9002\u914D\u5404\u56FD\u6CD5\u89C4\u4E0E\u6587\u5316 </p></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"><!--[-->`);
      ssrRenderList(valueProps, (prop, index) => {
        _push(`<div class="glass rounded-xl p-6 text-center card-hover"><div class="text-4xl mb-4">${ssrInterpolate(prop.icon)}</div><h4 class="text-white font-semibold mb-2">${ssrInterpolate(prop.title)}</h4><p class="text-text-secondary text-sm">${ssrInterpolate(prop.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mb-16"><h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3"><span class="w-1 h-6 bg-success rounded-full"></span> \u4F20\u7EDF\u5BA2\u670D vs AI\u6570\u5B57\u5458\u5DE5 </h3><div class="grid md:grid-cols-2 gap-6"><div class="glass rounded-2xl p-8 border border-red-500/20"><div class="flex items-center gap-3 mb-6"><span class="text-2xl">\u26A0\uFE0F</span><h4 class="text-lg font-semibold text-red-400">\u4F20\u7EDF\u5BA2\u670D</h4></div><ul class="space-y-4"><!--[-->`);
      ssrRenderList(traditionalCons, (item) => {
        _push(`<li class="flex items-start gap-3 text-text-secondary text-sm"><span class="text-red-400 mt-0.5">\u2715</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="glass rounded-2xl p-8 border border-success/20 glow-accent"><div class="flex items-center gap-3 mb-6"><span class="text-2xl">\u2728</span><h4 class="text-lg font-semibold text-success">AI\u6570\u5B57\u5458\u5DE5</h4></div><ul class="space-y-4"><!--[-->`);
      ssrRenderList(aiPros, (item) => {
        _push(`<li class="flex items-start gap-3 text-text-secondary text-sm"><span class="text-success mt-0.5">\u2713</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div><div><h3 class="text-xl font-semibold text-white mb-8 flex items-center gap-3"><span class="w-1 h-6 bg-accent rounded-full"></span> \u56FD\u522B\u6DF1\u5EA6\u9002\u914D </h3><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
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
      }, _attrs))}><div class="container-custom"><div class="text-center mb-16"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"><span class="text-2xl">\u{1F4CA}</span><span class="text-sm text-text-secondary font-medium">\u5168\u7403\u8D38\u6613\u70ED\u70B9\u56FE</span></div><h2 class="section-title">\u5B9E\u65F6\u8D38\u6613\u6570\u636E\u6D1E\u5BDF</h2><p class="section-subtitle mx-auto"> \u57FA\u4E8E\u516C\u5F00\u6570\u636E\u6E90\uFF0C\u5B9E\u65F6\u8FFD\u8E2A\u5168\u7403\u8D38\u6613\u70ED\u70B9\uFF0C\u8BA9\u51B3\u7B56\u6709\u636E\u53EF\u4F9D </p></div><div class="grid lg:grid-cols-3 gap-6 mb-12"><div class="lg:col-span-2 glass rounded-2xl overflow-hidden"><div class="p-4 border-b border-white/5"><h3 class="text-white font-semibold flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span> \u5168\u7403\u8D38\u6613\u70ED\u5EA6\u56FE </h3></div><div class="h-[400px] lg:h-[500px]"></div></div><div class="space-y-6"><div class="glass rounded-2xl p-4"><h3 class="text-white font-semibold mb-4 flex items-center gap-2"><span class="text-sm">\u{1F4C8}</span> \u5927\u5B97\u5546\u54C1\u6307\u6570 </h3><div class="h-[200px]"></div><p class="text-xs text-text-secondary mt-2">\u6570\u636E\u6765\u6E90: World Bank API</p></div><div class="glass rounded-2xl p-4"><h3 class="text-white font-semibold mb-4 flex items-center gap-2"><span class="text-sm">\u{1F30D}</span> \u533A\u57DF\u8D38\u6613\u91CF\u5360\u6BD4 </h3><div class="h-[200px]"></div></div></div></div><div id="contact" class="glass rounded-2xl p-8 lg:p-12"><div class="grid lg:grid-cols-2 gap-12"><div><h3 class="text-2xl font-bold text-white mb-2">\u83B7\u53D6\u5B9A\u5236\u5316\u8D38\u6613\u62A5\u544A</h3><p class="text-text-secondary mb-8"> \u7559\u4E0B\u60A8\u7684\u8054\u7CFB\u65B9\u5F0F\uFF0C\u6211\u4EEC\u5C06\u4E3A\u60A8\u5206\u6790\u76EE\u6807\u5E02\u573A\u7684\u8D38\u6613\u70ED\u70B9\u4E0E\u673A\u9047 </p><form class="space-y-4"><div class="grid sm:grid-cols-2 gap-4"><div><label class="block text-sm text-text-secondary mb-2">\u59D3\u540D *</label><input${ssrRenderAttr("value", form.value.name)} type="text" required class="input-field" placeholder="\u60A8\u7684\u59D3\u540D"></div><div><label class="block text-sm text-text-secondary mb-2">\u516C\u53F8 *</label><input${ssrRenderAttr("value", form.value.company)} type="text" required class="input-field" placeholder="\u516C\u53F8\u540D\u79F0"></div></div><div class="grid sm:grid-cols-2 gap-4"><div><label class="block text-sm text-text-secondary mb-2">\u90AE\u7BB1 *</label><input${ssrRenderAttr("value", form.value.email)} type="email" required class="input-field" placeholder="business@company.com"></div><div><label class="block text-sm text-text-secondary mb-2">\u7535\u8BDD</label><input${ssrRenderAttr("value", form.value.phone)} type="tel" class="input-field" placeholder="+86 xxx xxxx xxxx"></div></div><div class="grid sm:grid-cols-2 gap-4"><div><label class="block text-sm text-text-secondary mb-2">\u76EE\u6807\u5E02\u573A *</label><select required class="input-field"><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "") : ssrLooseEqual(form.value.region, "")) ? " selected" : ""}>\u8BF7\u9009\u62E9</option><option value="latam"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "latam") : ssrLooseEqual(form.value.region, "latam")) ? " selected" : ""}>\u62C9\u4E01\u7F8E\u6D32</option><option value="africa"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "africa") : ssrLooseEqual(form.value.region, "africa")) ? " selected" : ""}>\u975E\u6D32</option><option value="southeast-asia"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "southeast-asia") : ssrLooseEqual(form.value.region, "southeast-asia")) ? " selected" : ""}>\u4E1C\u5357\u4E9A</option><option value="mena"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "mena") : ssrLooseEqual(form.value.region, "mena")) ? " selected" : ""}>\u4E2D\u4E1C\u4E2D\u4E9A</option><option value="europe"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "europe") : ssrLooseEqual(form.value.region, "europe")) ? " selected" : ""}>\u6B27\u6D32</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(form.value.region) ? ssrLooseContain(form.value.region, "other") : ssrLooseEqual(form.value.region, "other")) ? " selected" : ""}>\u5176\u4ED6</option></select></div><div><label class="block text-sm text-text-secondary mb-2">\u611F\u5174\u8DA3\u7C7B\u76EE *</label><select required class="input-field"><option value=""${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "") : ssrLooseEqual(form.value.interest, "")) ? " selected" : ""}>\u8BF7\u9009\u62E9</option><option value="electronics"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "electronics") : ssrLooseEqual(form.value.interest, "electronics")) ? " selected" : ""}>\u6D88\u8D39\u7535\u5B50</option><option value="manufacturing"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "manufacturing") : ssrLooseEqual(form.value.interest, "manufacturing")) ? " selected" : ""}>\u667A\u80FD\u5236\u9020</option><option value="ecommerce"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "ecommerce") : ssrLooseEqual(form.value.interest, "ecommerce")) ? " selected" : ""}>\u8DE8\u5883\u7535\u5546</option><option value="fintech"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "fintech") : ssrLooseEqual(form.value.interest, "fintech")) ? " selected" : ""}>\u91D1\u878D\u79D1\u6280</option><option value="cloud-ai"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "cloud-ai") : ssrLooseEqual(form.value.interest, "cloud-ai")) ? " selected" : ""}>\u4E91\u670D\u52A1/AI</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(form.value.interest) ? ssrLooseContain(form.value.interest, "other") : ssrLooseEqual(form.value.interest, "other")) ? " selected" : ""}>\u5176\u4ED6</option></select></div></div><div><label class="block text-sm text-text-secondary mb-2">\u7559\u8A00</label><textarea rows="3" class="input-field resize-none" placeholder="\u8BF7\u63CF\u8FF0\u60A8\u7684\u9700\u6C42...">${ssrInterpolate(form.value.message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(isSubmitting.value ? "\u63D0\u4EA4\u4E2D..." : "\u63D0\u4EA4\u7533\u8BF7")}</button></form>`);
      if (submitSuccess.value) {
        _push(`<div class="mt-6 p-4 rounded-xl bg-success/10 border border-success/30"><p class="text-success font-medium">\u2713 \u63D0\u4EA4\u6210\u529F\uFF01</p><p class="text-text-secondary text-sm mt-1">\u6211\u4EEC\u7684\u56E2\u961F\u5C06\u572824\u5C0F\u65F6\u5185\u4E0E\u60A8\u8054\u7CFB\u3002</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col justify-center"><div class="space-y-6"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0"> \u{1F4E7} </div><div><h4 class="text-white font-medium">\u90AE\u7BB1</h4><p class="text-text-secondary text-sm">contact@nuevostec.com</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-accent2/10 flex items-center justify-center text-accent2 text-xl shrink-0"> \u{1F310} </div><div><h4 class="text-white font-medium">\u7F51\u5740</h4><p class="text-text-secondary text-sm">www.nuevostec.com</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-success text-xl shrink-0"> \u{1F4CD} </div><div><h4 class="text-white font-medium">\u5730\u5740</h4><p class="text-text-secondary text-sm">\u56DB\u5DDD\u7701\u6210\u90FD\u5E02\u9AD8\u65B0\u533A</p></div></div><div class="p-6 rounded-xl bg-white/5 border border-white/10"><p class="text-text-secondary text-sm leading-relaxed"><span class="text-accent font-medium">\u6570\u636E\u8BF4\u660E\uFF1A</span>\u672C\u9875\u5C55\u793A\u7684\u8D38\u6613\u6570\u636E\u57FA\u4E8E World Bank Open API\uFF0C\u514D\u8D39\u516C\u5F00\u6570\u636E\uFF0C\u6570\u636E\u66F4\u65B0\u9891\u7387\u4EE5\u6570\u636E\u6E90\u4E3A\u51C6\u3002\u6211\u4EEC\u4E0D\u5BF9\u6570\u636E\u505A\u4EFB\u4F55\u4FEE\u6539\uFF0C\u529B\u6C42\u5C55\u793A\u6700\u539F\u59CB\u3001\u6700\u51C6\u786E\u7684\u4FE1\u606F\u3002 </p></div></div></div></div></div></div></section>`);
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
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary border-t border-white/5" }, _attrs))}><div class="container-custom py-16"><div class="grid md:grid-cols-4 gap-12"><div class="md:col-span-2"><div class="flex items-center gap-3 mb-6"><div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center"><span class="text-white font-bold text-xl">N</span></div><div><p class="text-white font-bold text-lg">Nuevos TEC</p><p class="text-text-secondary text-sm">\u6210\u90FD\u745E\u7EB3\u81F4\u4E00\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8</p></div></div><p class="text-text-secondary text-sm leading-relaxed max-w-md mb-6"> \u94FE\u63A5\u5168\u7403\uFF0C\u667A\u542F\u672A\u6765\u3002\u6211\u4EEC\u81F4\u529B\u4E8E\u5E2E\u52A9\u4E2D\u56FD\u4F01\u4E1A\u62D3\u5C55\u5168\u7403\u5E02\u573A\uFF0C\u63D0\u4F9B\u4E00\u7AD9\u5F0F\u51FA\u6D77\u670D\u52A1\u3001\u4E91\u7AEFAI\u89E3\u51B3\u65B9\u6848\u53CA\u5B9E\u65F6\u8D38\u6613\u6570\u636E\u6D1E\u5BDF\u3002 </p><div class="flex items-center gap-4"><a href="#" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-white/10 transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a href="#" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-white/10 transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div></div><div><h4 class="text-white font-semibold mb-6">\u4E1A\u52A1\u677F\u5757</h4><ul class="space-y-3"><li><a href="#outbound" class="text-text-secondary text-sm hover:text-accent transition-colors">\u4F01\u4E1A\u51FA\u6D77</a></li><li><a href="#cloud-ai" class="text-text-secondary text-sm hover:text-accent transition-colors">\u4F01\u4E1A\u4E0A\u4E91</a></li><li><a href="#trade-map" class="text-text-secondary text-sm hover:text-accent transition-colors">\u5168\u7403\u8D38\u6613\u70ED\u70B9\u56FE</a></li></ul></div><div><h4 class="text-white font-semibold mb-6">\u8054\u7CFB\u65B9\u5F0F</h4><ul class="space-y-3"><li class="text-text-secondary text-sm">\u{1F4E7} contact@nuevostec.com</li><li class="text-text-secondary text-sm">\u{1F310} www.nuevostec.com</li><li class="text-text-secondary text-sm">\u{1F4CD} \u56DB\u5DDD\u7701\u6210\u90FD\u5E02\u9AD8\u65B0\u533A</li></ul></div></div><div class="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"><p class="text-text-secondary text-sm"> \xA9 2024-2026 \u6210\u90FD\u745E\u7EB3\u81F4\u4E00\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8. All rights reserved. </p><p class="text-text-secondary text-xs"> \u6570\u636E\u6765\u6E90: World Bank Open API | \u8BBE\u8BA1: Nuevos TEC </p></div></div></footer>`);
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
      title: "\u6210\u90FD\u745E\u7EB3\u81F4\u4E00 | Nuevos TEC - \u94FE\u63A5\u5168\u7403\uFF0C\u667A\u542F\u672A\u6765"
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

export { _sfc_main as default };
//# sourceMappingURL=index-B__dPvbO.mjs.map
