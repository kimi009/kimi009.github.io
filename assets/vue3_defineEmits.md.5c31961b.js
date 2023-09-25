import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const m='{"title":"defineEmits","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u57FA\u672C\u4F7F\u7528","slug":"\u4E00\u3001\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u4E8C\u3001\u4E8B\u4EF6\u53C2\u6570\u6821\u9A8C","slug":"\u4E8C\u3001\u4E8B\u4EF6\u53C2\u6570\u6821\u9A8C"},{"level":2,"title":"\u4E09\u3001v-model\u6A21\u62DF","slug":"\u4E09\u3001v-model\u6A21\u62DF"}],"relativePath":"vue3/defineEmits.md"}',p={},o=t(`<h1 id="defineemits" tabindex="-1">defineEmits <a class="header-anchor" href="#defineemits" aria-hidden="true">#</a></h1><ul><li>\u6587\u6863\u5730\u5740 <a href="https://cn.vuejs.org/guide/components/events.html" target="_blank" rel="noopener noreferrer">\u7EC4\u4EF6\u4E8B\u4EF6 | Vue.js (vuejs.org)</a></li></ul><h2 id="\u4E00\u3001\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u4E00\u3001\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u4E00\u3001\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><ul><li><p>\u5B50\u7EC4\u4EF6</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> emit <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>emit<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div></li><li><p>\u7236\u7EC4\u4EF6</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> CustomComp <span class="token keyword">from</span> <span class="token string">&quot;./components/CustomComp.vue&quot;</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomComp</span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CustomComp</span><span class="token punctuation">&gt;</span></span>
  //<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomComp</span> <span class="token attr-name">@change.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CustomComp</span><span class="token punctuation">&gt;</span></span> //\u4E5F\u662F\u652F\u6301once\uFF0C\u53EA\u89E6\u53D1\u4E00\u6B21
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>



</code></pre></div></li></ul><h2 id="\u4E8C\u3001\u4E8B\u4EF6\u53C2\u6570\u6821\u9A8C" tabindex="-1">\u4E8C\u3001\u4E8B\u4EF6\u53C2\u6570\u6821\u9A8C <a class="header-anchor" href="#\u4E8C\u3001\u4E8B\u4EF6\u53C2\u6570\u6821\u9A8C" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payload <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;change \u53C2\u6570\u4E0D\u80FD\u5927\u4E8E3&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="\u4E09\u3001v-model\u6A21\u62DF" tabindex="-1">\u4E09\u3001v-model\u6A21\u62DF <a class="header-anchor" href="#\u4E09\u3001v-model\u6A21\u62DF" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">/**
const emit = defineEmits({
  &quot;update:modelValue&quot;(val: string) {
    return true;
  },
});
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">input</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> Event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> e <span class="token operator">=</span> event <span class="token keyword">as</span> InputEvent<span class="token punctuation">;</span>
  <span class="token keyword">const</span> i <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">;</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;update:modelValue&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><ul><li><p>\u7236\u7EC4\u4EF6</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CustomComp <span class="token keyword">from</span> <span class="token string">&quot;./components/CustomComp.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> txt <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">updateModelValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  txt<span class="token punctuation">.</span>value <span class="token operator">=</span> val
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{txt}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomComp</span> <span class="token attr-name">:modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>txt<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">@update:</span>modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateModelValue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CustomComp</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>


</code></pre></div></li><li><p>\u5904\u7406eslint\u62A5\u9519\u95EE\u9898</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
\u4E0A\u9762\u7684\u4EE3\u7801\u7531\u4E8Eprops\u6CA1\u7528\u5230\u4F1A\u62A5\u672A\u4F7F\u7528\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u7528\u4E0B\u9762\u7684\u65B9\u5F0F\u5904\u7406
<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u884C\u7684\u610F\u601D\u5C31\u662F\uFF0C\u5F53\u53C2\u6570\u7684\u53D8\u91CF\u540D\u4EE5\u4E0B\u5212\u7EBF _ \u5F00\u5934\u7684\u65F6\u5019\uFF0C\u8DF3\u8FC7 \`no-unused-vars\` \u68C0\u67E5</span>
        <span class="token comment">// \u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u5176\u4ED6\u7684\u5B57\u7B26\u4E32\u6B63\u5219\u89C4\u5219</span>
        <span class="token literal-property property">argsIgnorePattern</span><span class="token operator">:</span> <span class="token string">&#39;^_&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul>`,9),e=[o];function c(l,u,k,i,r,g){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{m as __pageData,v as default};
