import{_ as e,c as a,o as t,d as n}from"./app.87eb6f1c.js";const g='{"title":"\u5FEB\u901F\u5F00\u53D1 vue \u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u901F\u5F00\u53D1 vue \u7EC4\u4EF6","slug":"\u5FEB\u901F\u5F00\u53D1-vue-\u7EC4\u4EF6"},{"level":2,"title":"props \u4F20\u7ED9\u513F\u5B50\uFF0Cemit \u89E6\u53D1\u8001\u7238\u7684\u4E8B\u4EF6","slug":"props-\u4F20\u7ED9\u513F\u5B50\uFF0Cemit-\u89E6\u53D1\u8001\u7238\u7684\u4E8B\u4EF6"},{"level":2,"title":"\u591A\u7EA7\u4F20\u503C","slug":"\u591A\u7EA7\u4F20\u503C"},{"level":2,"title":"\u9694\u4EE3\u4F20\u503C","slug":"\u9694\u4EE3\u4F20\u503C"},{"level":2,"title":"\u6CE8\u5165\u6570\u636E\uFF0C\u53EF\u4EE5\u5427\u7236\u7EC4\u4EF6\u76F4\u63A5\u6CE8\u5165\u8FDB\u53BB","slug":"\u6CE8\u5165\u6570\u636E\uFF0C\u53EF\u4EE5\u5427\u7236\u7EC4\u4EF6\u76F4\u63A5\u6CE8\u5165\u8FDB\u53BB"},{"level":2,"title":"ref \u7528\u6CD5\uFF1Athis.$refs.ref \u540D\u5B57","slug":"ref-\u7528\u6CD5\uFF1Athis-refs-ref-\u540D\u5B57"},{"level":2,"title":"eventBus \u5B9A\u4E49\u5230\u4E86\u5168\u5C40\u4E0A\uFF0C\u5BB9\u6613\u6C61\u67D3\uFF0C\u614E\u7528","slug":"eventbus-\u5B9A\u4E49\u5230\u4E86\u5168\u5C40\u4E0A\uFF0C\u5BB9\u6613\u6C61\u67D3\uFF0C\u614E\u7528"},{"level":2,"title":"vuex \u72B6\u6001\u7BA1\u7406","slug":"vuex-\u72B6\u6001\u7BA1\u7406"}],"relativePath":"vue2/communication.md"}',r={},i=n(`<h2 id="\u5FEB\u901F\u5F00\u53D1-vue-\u7EC4\u4EF6" tabindex="-1">\u5FEB\u901F\u5F00\u53D1 vue \u7EC4\u4EF6 <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u53D1-vue-\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5FEB\u901F\u8BC6\u522B.vue \u6587\u4EF6\u5C01\u88C5\u7EC4\u4EF6\u63D2\u4EF6\u7B49\u529F\u80FD</p><div class="language-"><pre><code>npm install @vue/cli -g
npm install -g @vue/cli-service-global

vue serve App.vue
</code></pre></div><h2 id="props-\u4F20\u7ED9\u513F\u5B50\uFF0Cemit-\u89E6\u53D1\u8001\u7238\u7684\u4E8B\u4EF6" tabindex="-1">props \u4F20\u7ED9\u513F\u5B50\uFF0Cemit \u89E6\u53D1\u8001\u7238\u7684\u4E8B\u4EF6 <a class="header-anchor" href="#props-\u4F20\u7ED9\u513F\u5B50\uFF0Cemit-\u89E6\u53D1\u8001\u7238\u7684\u4E8B\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><pre><code>\u8001\u7238\u7684\u4EE3\u7801==\u300B
  @update:value=&quot;value=&gt;this.msg=value&quot;
  \u6216\u8005\u662F  :value.sync=&quot;msg&quot;
\u513F\u5B50\u7684\u4EE3\u7801==\u300B
  @emit(&quot;update:value&quot;,newVal)
</code></pre></div><div class="language-"><pre><code>v-mode \u5C31\u662F :value  @input\u7684\u7F29\u5199  \u8BED\u6CD5\u7CD6
</code></pre></div><h2 id="\u591A\u7EA7\u4F20\u503C" tabindex="-1">\u591A\u7EA7\u4F20\u503C <a class="header-anchor" href="#\u591A\u7EA7\u4F20\u503C" aria-hidden="true">#</a></h2><ol><li>this.$parent.$emit(eventName,value) \u5982\u679C\u662F\u5F88\u6DF1\u7684\u5C42\u7EA7\u5C31\u4F1A\u6709 this.$parent.$parent.... \u8FD9\u65F6\u5019\u53EF\u4EE5\u5728 vue \u7684 property \u4E0A\u6302\u8F7D\u4E00\u4E2A$dispatch \u65B9\u6CD5</li></ol><div class="language-"><pre><code>Vue.property.$dispatch = (eventName\uFF0Cvalue)=&gt;{
  let parent  = this.$parent
  while(parent){
    parent.$emit(eventName,value)
    parent = parent.$parent
  }
}
</code></pre></div><div class="language-"><pre><code>Vue.property.$broadcast = (eventName,value)=&gt;{
  //$children;//\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u4E0B\u7684\u6240\u6709\u5B69\u5B50
  const broadcast = (children)=&gt;{
    children.forEach(child=&gt;{
    child.$emit(eventName,value)
    if(child.$children){
      broadcast(this.$children)
    }
  })
  }
  broadcast(this.$children)
}

</code></pre></div><h2 id="\u9694\u4EE3\u4F20\u503C" tabindex="-1">\u9694\u4EE3\u4F20\u503C <a class="header-anchor" href="#\u9694\u4EE3\u4F20\u503C" aria-hidden="true">#</a></h2><ol><li>$attrs \u4F1A\u62FF\u5230\u8001\u7238\u7684\u6240\u6709\u5C5E\u6027</li><li>inheritAttrs:false \u8FD9\u4E2A\u503C\u53EF\u4EE5\u4FDD\u8BC1\u4E0D\u4F1A\u628A\u5C5E\u6027\u6302\u8F7D\u5230 dom \u7684 Attribute \u4E0A</li><li>\u4F20\u6240\u6709\u7684\u503C\u7ED9\u5B59\u5B50 v-bind=&quot;$attrs&quot; \u5B59\u5B50\u53EF\u4EE5\u901A\u8FC7 $attr \u62FF\u5230\u7237\u7237\u7684\u503C</li><li>\u4F20\u6240\u6709\u7684\u4E8B\u4EF6\u7ED9\u5B59\u5B50 v-on=&quot;$listeners&quot; \u5B59\u5B50\u53EF\u4EE5\u901A\u8FC7this.$listeners.eventName \u62FF\u5230\u7237\u7237\u7684\u4E8B\u4EF6\u65B9\u6CD5</li></ol><h2 id="\u6CE8\u5165\u6570\u636E\uFF0C\u53EF\u4EE5\u5427\u7236\u7EC4\u4EF6\u76F4\u63A5\u6CE8\u5165\u8FDB\u53BB" tabindex="-1">\u6CE8\u5165\u6570\u636E\uFF0C\u53EF\u4EE5\u5427\u7236\u7EC4\u4EF6\u76F4\u63A5\u6CE8\u5165\u8FDB\u53BB <a class="header-anchor" href="#\u6CE8\u5165\u6570\u636E\uFF0C\u53EF\u4EE5\u5427\u7236\u7EC4\u4EF6\u76F4\u63A5\u6CE8\u5165\u8FDB\u53BB" aria-hidden="true">#</a></h2><ol><li>\u7236\u7EC4\u4EF6</li></ol><div class="language-"><pre><code>provide(){
  return{
    parent: this;
  }
},
data(){
  return{
    msg:&#39;&#39;
  }
}
</code></pre></div><ol start="2"><li>\u513F\u5B50</li></ol><div class="language-"><pre><code>inject:[&#39;parent&#39;]
\u513F\u5B50\u91CC\u9762\u53D6\u503C\u7528 this.parent.msg
</code></pre></div><h2 id="ref-\u7528\u6CD5\uFF1Athis-refs-ref-\u540D\u5B57" tabindex="-1">ref \u7528\u6CD5\uFF1Athis.$refs.ref \u540D\u5B57 <a class="header-anchor" href="#ref-\u7528\u6CD5\uFF1Athis-refs-ref-\u540D\u5B57" aria-hidden="true">#</a></h2><ol><li>\u653E\u5230 dom \u4E0A\u83B7\u53D6\u5230\u7684\u662F\u5F53\u524D\u7684 dom \u5143\u7D20</li><li>\u653E\u5230\u7EC4\u4EF6\u4E0A\u662F\u83B7\u53D6\u5F53\u524D\u7684\u7EC4\u4EF6</li></ol><h2 id="eventbus-\u5B9A\u4E49\u5230\u4E86\u5168\u5C40\u4E0A\uFF0C\u5BB9\u6613\u6C61\u67D3\uFF0C\u614E\u7528" tabindex="-1">eventBus \u5B9A\u4E49\u5230\u4E86\u5168\u5C40\u4E0A\uFF0C\u5BB9\u6613\u6C61\u67D3\uFF0C\u614E\u7528 <a class="header-anchor" href="#eventbus-\u5B9A\u4E49\u5230\u4E86\u5168\u5C40\u4E0A\uFF0C\u5BB9\u6613\u6C61\u67D3\uFF0C\u614E\u7528" aria-hidden="true">#</a></h2><h2 id="vuex-\u72B6\u6001\u7BA1\u7406" tabindex="-1">vuex \u72B6\u6001\u7BA1\u7406 <a class="header-anchor" href="#vuex-\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a></h2>`,21),l=[i];function s(d,o,u,c,h,v){return t(),a("div",null,l)}var m=e(r,[["render",s]]);export{g as __pageData,m as default};
