import{_ as n,c as s,o as a,d as p}from"./app.87eb6f1c.js";const d='{"title":"eslint\u4F7F\u7528\u6307\u5357","description":"","frontmatter":{},"headers":[],"relativePath":"eslint/index.md"}',t={},e=p(`<h1 id="eslint\u4F7F\u7528\u6307\u5357" tabindex="-1">eslint\u4F7F\u7528\u6307\u5357 <a class="header-anchor" href="#eslint\u4F7F\u7528\u6307\u5357" aria-hidden="true">#</a></h1><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528 eslint-plugin-vue \u89E3\u51B3 Vue3 defineProps\u3001defineEmits\u3001no-undef \u89C4\u5219\u8B66\u544A</span>
    <span class="token comment">// https://eslint.vuejs.org/user-guide/#usage</span>
    <span class="token string-property property">&#39;vue/setup-compiler-macros&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;vue-eslint-parser&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/vue3-recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;prettier&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&#39;latest&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@typescript-eslint&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;prettier/prettier&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-v-html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-multiple-template-root&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/component-definition-name-casing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;kebab-case&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">defineOptions</span><span class="token operator">:</span> <span class="token string">&#39;writable&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),o=[e];function r(c,l,i,u,k,y){return a(),s("div",null,o)}var m=n(t,[["render",r]]);export{d as __pageData,m as default};
