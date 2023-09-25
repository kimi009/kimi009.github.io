import{_ as n,c as s,o as a,d as e}from"./app.87eb6f1c.js";const h='{"title":"roolup \u4F7F\u7528\u6307\u5357","description":"","frontmatter":{},"headers":[],"relativePath":"roolup/index.md"}',p={},o=e(`<h1 id="roolup-\u4F7F\u7528\u6307\u5357" tabindex="-1">roolup \u4F7F\u7528\u6307\u5357 <a class="header-anchor" href="#roolup-\u4F7F\u7528\u6307\u5357" aria-hidden="true">#</a></h1><p><a href="https://www.rollupjs.com/" target="_blank" rel="noopener noreferrer">\u7B80\u4ECB | rollup.js \u4E2D\u6587\u6587\u6863 | rollup.js \u4E2D\u6587\u7F51 (rollupjs.com)</a></p><h1 id="unresolved-dependencies-\u6253\u5305\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898" tabindex="-1">Unresolved dependencies \u6253\u5305\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898 <a class="header-anchor" href="#unresolved-dependencies-\u6253\u5305\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898" aria-hidden="true">#</a></h1><ul><li>\u5F53\u6253\u5305 format \u683C\u5F0F\u4E3A iife \u7684\u65F6\u5019\u51FA\u73B0\u4E0A\u8FF0\u95EE\u9898\uFF0C\u7B2C\u4E09\u65B9\u5305\u4E0D\u4F1A\u88AB\u6253\u5305\u5230 bundles.js \u91CC\u9762\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5B89\u88C5 rollup-plugin-node-resolve</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-node-resolve&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span><span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span><span class="token string">&#39;iife&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// globals:{</span>
    <span class="token comment">//   &#39;lodash-es&#39;:&#39;lodashEs&#39;</span>
    <span class="token comment">// },</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;myBundle&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),t=[o];function r(l,c,i,u,d,k){return a(),s("div",null,t)}var m=n(p,[["render",r]]);export{h as __pageData,m as default};
