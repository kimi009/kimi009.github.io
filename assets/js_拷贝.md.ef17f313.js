import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const h='{"title":"\u62F7\u8D1D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6D45\u62F7\u8D1D","slug":"\u6D45\u62F7\u8D1D"},{"level":2,"title":"\u6DF1\u62F7\u8D1D","slug":"\u6DF1\u62F7\u8D1D"}],"relativePath":"js/\u62F7\u8D1D.md"}',p={},e=t(`<h1 id="\u62F7\u8D1D" tabindex="-1">\u62F7\u8D1D <a class="header-anchor" href="#\u62F7\u8D1D" aria-hidden="true">#</a></h1><ul><li>JS \u7684\u6D45\u62F7\u8D1D\u4E0E\u6DF1\u62F7\u8D1D\u4E3B\u8981\u662F\u4F5C\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u7EC4\u6216\u5BF9\u8C61\u4E2D\u3002\u6D45\u62F7\u8D1D\u662F\u53EA\u590D\u5236\u521B\u5EFA\u6570\u7EC4\u6216\u5BF9\u8C61\u7684\u7B2C\u4E00\u5C42\uFF0C\u5176\u4ED6\u5C42\u7EA7\u548C\u539F\u6570\u7EC4\u6216\u5BF9\u8C61\u62E5\u6709\u76F8\u540C\u5730\u5740\u503C\uFF0C\u56E0\u6B64\u4FEE\u6539\u6D45\u62F7\u8D1D\u7684\u6570\u7EC4\u6216\u5BF9\u8C61\u7684\u6DF1\u5C42\u7684\u6570\u503C\u5C31\u4F1A\u5F71\u54CD\u539F\u6570\u7EC4\u6216\u5BF9\u8C61\u7684\u503C\u3002\u800C\u6DF1\u62F7\u8D1D\u5219\u662F\u62F7\u8D1D\u4E00\u4E2A\u5168\u65B0\u7684\u6570\u7EC4\u6216\u5BF9\u8C61\uFF0C\u6BCF\u4E00\u4E2A\u5C42\u7EA7\u90FD\u5728\u5806\u5185\u5B58\u4E2D\u5F00\u8F9F\u4E86\u65B0\u7684\u7A7A\u95F4\uFF0C\u548C\u539F\u6570\u7EC4\u6216\u5BF9\u8C61\u76F8\u4E92\u4E0D\u5F71\u54CD\u3002</li></ul><h2 id="\u6D45\u62F7\u8D1D" tabindex="-1">\u6D45\u62F7\u8D1D <a class="header-anchor" href="#\u6D45\u62F7\u8D1D" aria-hidden="true">#</a></h2><ul><li>ES6 \u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26\uFF0C\u6570\u7EC4\u6269\u5C55\u8FD0\u7B97\u7B26</li><li>Object.assign()</li></ul><h2 id="\u6DF1\u62F7\u8D1D" tabindex="-1">\u6DF1\u62F7\u8D1D <a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a></h2><ul><li>JSON.stringify()</li><li>\u9012\u5F52\u62F7\u8D1D</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u4F20\u5165\u53C2\u6570\u4E0D\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u65F6\u76F4\u63A5\u8FD4\u56DE\u4F20\u5165\u7684\u503C\uFF0C\u4E0D\u518D\u6267\u884C\u51FD\u6570</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">||</span> value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u5B9A\u4E49\u51FD\u6570\u7684\u8FD4\u56DE\u503C</span>
  <span class="token keyword">let</span> result<span class="token punctuation">;</span>
  <span class="token comment">// \u5224\u65AD\u4F20\u8FDB\u6765\u7684\u6570\u636E\u7C7B\u578B\u6570\u7EC4\u8FD8\u662F\u5BF9\u8C61\uFF0C\u5BF9\u5E94\u521B\u5EFA\u65B0\u7684\u7A7A\u6570\u7EC4\u6216\u5BF9\u8C61</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5FAA\u73AF\u904D\u5386\u62F7\u8D1D</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u51FD\u6570\u9012\u5F52\u5B9E\u73B0\u6DF1\u5C42\u62F7\u8D1D</span>
    result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5C06\u62F7\u8D1D\u7684\u7ED3\u679C\u8FD4\u56DE\u51FA\u53BB</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> newObj <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,7),o=[e];function c(l,u,k,i,r,d){return a(),s("div",null,o)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
