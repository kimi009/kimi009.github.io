import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const _='{"title":"moment","description":"","frontmatter":{},"headers":[],"relativePath":"thirdLib/moment.md"}',o={},p=t(`<h1 id="moment" tabindex="-1">moment <a class="header-anchor" href="#moment" aria-hidden="true">#</a></h1><ul><li>cdn\u5F15\u5165</li></ul><p><a href="https://registry.npmmirror.com/moment/-/moment-2.29.4.tgz" target="_blank" rel="noopener noreferrer">moment\u4E0B\u8F7D\u5730\u5740</a></p><div class="language-js"><pre><code>  <span class="token comment">//\u6CE8\u610F\u8FD9\u91CC\u5F15\u5165\u7684\u662Fmin\u4E0B\u9762\u7684\u5305\uFF0C\u8FD9\u4E2A\u662F\u9488\u5BF9umd\u683C\u5F0F\u7684\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u7528\uFF0C\u5F15\u5165\u540E\u5C31\u4F1A\u6302\u8F7D\u5230window</span>
  <span class="token comment">// window.moment  \u4F1A\u6253\u5370\u51FA\u51FD\u6570\u8BF4\u660E\u6302\u8F7D\u6210\u529F</span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./min/moment.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./min/locales.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

  <span class="token comment">//\u4F7F\u7528</span>
  moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">&#39;de&#39;</span><span class="token punctuation">)</span>        <span class="token comment">// de  \u5207\u6362\u4E3A\u5FB7\u8BED</span>
  <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">&#39;2021-2-3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//&#39;vor 2 Jahren&#39;</span>

  moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">)</span>     <span class="token comment">//zh-cn \u5207\u6362\u4E3A\u4E2D\u6587</span>
  <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">&#39;2021-2-3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//&#39;2 \u5E74\u524D&#39;</span>
\xB7\xB7\xB7
</code></pre></div>`,4),e=[p];function c(r,l,i,m,u,k){return a(),s("div",null,e)}var f=n(o,[["render",c]]);export{_ as __pageData,f as default};
