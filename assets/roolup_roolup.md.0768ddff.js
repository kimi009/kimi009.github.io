import{_ as n,c as s,o as a,d as p}from"./app.87eb6f1c.js";var t="/assets/1.3a242e81.png";const g='{"title":"roolup","description":"","frontmatter":{},"headers":[],"relativePath":"roolup/roolup.md"}',o={},e=p(`<h1 id="roolup" tabindex="-1">roolup <a class="header-anchor" href="#roolup" aria-hidden="true">#</a></h1><ul><li>\u57FA\u672C\u914D\u7F6E</li></ul><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span><span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span><span class="token string">&#39;cjs.bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">/**
     * iife  \u7ACB\u5373\u6267\u884C\u5305  \uFF0C\u9002\u7528\u4E8E\u4F5C\u4E3A&lt;script&gt;\u6807\u7B7E\uFF0C\u5982\u679C\u8981\u4E3A\u5E94\u7528\u7A0B\u5E8F\u521B\u5EFA\u4E00\u4E2A\u6346\u7ED1\u5305\uFF0C\u60A8\u53EF\u80FD\u60F3\u8981\u4F7F\u7528\u5B83\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u4F7F\u6587\u4EF6\u5927\u5C0F\u53D8\u5C0F
     * amd  \u5F02\u6B65\u6A21\u5757\u5B9A\u4E49\uFF0C\u7528\u4E8E\u50CFRequireJS \u8FD9\u6837\u7684\u6A21\u5757\u52A0\u8F7D\u5668
     * esm  \u6253\u5305\u4E3Aes module\u6A21\u5757\u6587\u4EF6- \u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u901A\u8FC7 &lt;script type=module&gt; \u6807\u7B7E\u5F15\u5165
     * cjs  commonJS \u9002\u7528\u4E8Enodejs
     * umd  \u901A\u7528\u6A21\u5757\u5B9A\u4E49\uFF0C\u4EE5amd cjs  iife\u4E3A\u4E00\u4F53
     * system SystemJS\u52A0\u8F7D\u5668\u683C\u5F0F  //\u751F\u6210\u7684\u6587\u4EF6\u4E2D\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2Aexecute\u6267\u884C\u5668
     */</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span><span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;myBundle&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u53EF\u4EE5\u7528\u4E0D\u540C\u7684\u547D\u4EE4\u542F\u52A8\u4E0D\u540C\u7684rollup\u914D\u7F6E\u6587\u4EF6</li></ul><p><img src="`+t+`" alt=""></p><ul><li>\u63D2\u4EF6\u914D\u7F6E</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> rollupPluginMyexample <span class="token keyword">from</span> <span class="token string">&quot;./plugins/rollup-plugin-my-example.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rollupNodeResolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rollupCommonJS <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-commonjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rollupTestPlugin <span class="token keyword">from</span> <span class="token string">&quot;./plugins/@rollup/plugin-test&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;src/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/**
     * \u63D2\u4EF6\u662F\u4ECE\u4E0A\u5F80\u4E0B\u6267\u884C
     * rollupCommonJS\u8981\u653E\u5230\u6700\u4E0A\u9762\uFF0C\u5E94\u8BE5\u7528\u5728\u5176\u4ED6\u63D2\u4EF6\u8F6C\u6362\u4F60\u7684\u6A21\u5757\u4E4B\u524D - \u8FD9\u662F\u4E3A\u4E86\u9632\u6B62\u5176\u4ED6\u63D2\u4EF6\u7684\u6539\u53D8\u7834\u574F\u6E90\u6587\u4EF6\uFF0C\u5BFC\u81F4CommonJS\u68C0\u6D4B\u5931\u6548\uFF0C\u8FD9\u4E2A\u63D2\u4EF6\u5C31\u6CA1\u5565\u7528\u4E86\u3002
     */</span>
    <span class="token function">rollupCommonJS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">rollupNodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u5C06\u81EA\u5B9A\u4E49\u9009\u9879\u4F20\u9012\u7ED9\u89E3\u6790\u63D2\u4EF6</span>
      <span class="token literal-property property">moduleDirectories</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">rollupTestPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">rollupPluginMyexample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&quot;bundlePlugin.js&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">/**
     * iife  \u7ACB\u5373\u6267\u884C\u5305  \uFF0C\u9002\u7528\u4E8E\u4F5C\u4E3A&lt;script&gt;\u6807\u7B7E\uFF0C\u5982\u679C\u8981\u4E3A\u5E94\u7528\u7A0B\u5E8F\u521B\u5EFA\u4E00\u4E2A\u6346\u7ED1\u5305\uFF0C\u60A8\u53EF\u80FD\u60F3\u8981\u4F7F\u7528\u5B83\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u4F7F\u6587\u4EF6\u5927\u5C0F\u53D8\u5C0F
     * amd  \u5F02\u6B65\u6A21\u5757\u5B9A\u4E49\uFF0C\u7528\u4E8E\u50CFRequireJS \u8FD9\u6837\u7684\u6A21\u5757\u52A0\u8F7D\u5668
     * esm  \u6253\u5305\u4E3Aes module\u6A21\u5757\u6587\u4EF6- \u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u901A\u8FC7 &lt;script type=module&gt; \u6807\u7B7E\u5F15\u5165
     * cjs  commonJS \u9002\u7528\u4E8Enodejs
     * umd  \u901A\u7528\u6A21\u5757\u5B9A\u4E49\uFF0C\u4EE5amd cjs  iife\u4E3A\u4E00\u4F53
     * system SystemJS\u52A0\u8F7D\u5668\u683C\u5F0F  //\u751F\u6210\u7684\u6587\u4EF6\u4E2D\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2Aexecute\u6267\u884C\u5668
     */</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;myBundle&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><ul><li>\u81EA\u5B9A\u4E49\u63D2\u4EF6</li></ul><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;@rollup/plugin-test&quot;</span><span class="token punctuation">,</span>
    <span class="token function">options</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u81EA\u5DF1\u5199\u7684\u63D2\u4EF6,\u6784\u5EFA\u7684\u7B2C\u4E00\u4E2A\u94A9\u5B50 &quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">buildStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u81EA\u5DF1\u5199\u7684\u63D2\u4EF6,\u5F00\u59CB\u6784\u5EFA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">resolveId</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u6211\u81EA\u5DF1\u5199\u7684\u63D2\u4EF6&quot;</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> source<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u81EA\u5DF1\u5199\u7684\u63D2\u4EF6\uFF0Cload\u94A9\u5B50 &quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;export default &#39;&#39;&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><ul><li>\u62C6\u5206\u7B2C\u4E09\u65B9\u5305</li></ul><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;src/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lodash&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,11),c=[e];function l(u,r,i,k,d,m){return a(),s("div",null,c)}var f=n(o,[["render",l]]);export{g as __pageData,f as default};
