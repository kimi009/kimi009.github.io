import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const f='{"title":"infer \u5B66\u4E60","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7C7B\u578B\u63A8\u65AD","slug":"\u7C7B\u578B\u63A8\u65AD"}],"relativePath":"ts/infer\u5B66\u4E60.md"}',p={},o=t(`<h1 id="infer-\u5B66\u4E60" tabindex="-1">infer \u5B66\u4E60 <a class="header-anchor" href="#infer-\u5B66\u4E60" aria-hidden="true">#</a></h1><h2 id="\u7C7B\u578B\u63A8\u65AD" tabindex="-1">\u7C7B\u578B\u63A8\u65AD <a class="header-anchor" href="#\u7C7B\u578B\u63A8\u65AD" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>  <span class="token comment">/**
   * \u6210\u529F\u5C31\u83B7\u53D6infer \u540E\u9762\u7684\u7C7B\u578B\uFF0C\u5426\u5219\u8FD4\u56DE\u539F\u7C7B\u578B
   * infer\u53EA\u80FD\u653E\u5728true\u7684\u6761\u4EF6\u7AEF
   */</span>
  <span class="token comment">// type ParamType&lt;T&gt; = T extends (param: infer P) =&gt;  ? P : T</span>
  type ParamType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">param</span><span class="token operator">:</span> infer <span class="token constant">P</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number <span class="token operator">?</span> <span class="token constant">P</span> <span class="token operator">:</span> <span class="token constant">T</span>

  <span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string
    age<span class="token operator">?</span><span class="token operator">:</span> number
  <span class="token punctuation">}</span>
  type <span class="token function-variable function">C</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cat</span><span class="token operator">:</span> Cat</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

  type <span class="token constant">P</span> <span class="token operator">=</span> ParamType<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">&gt;</span>

  <span class="token keyword">const</span> <span class="token literal-property property">p1</span><span class="token operator">:</span> <span class="token function-variable function">P</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">cat</span><span class="token operator">:</span> Cat</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cat<span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
  <span class="token comment">/**
   * \u6B63\u5E38\u7684ts\u91CC\u9762\u662F\u4E0D\u652F\u6301console\u7684\u9700\u8981\u4FEE\u6539tsconfig.json  lib \u6DFB\u52A0dom\u5E93
  */</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">%c </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">p1</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;k&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;color:red;font-size:18px&#39;</span><span class="token punctuation">)</span>

  type <span class="token constant">K</span> <span class="token operator">=</span> ParamType<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>

  <span class="token keyword">const</span> <span class="token literal-property property">kk</span><span class="token operator">:</span> <span class="token constant">K</span> <span class="token operator">=</span> <span class="token string">&#39;fs&#39;</span>

  <span class="token comment">/**
   * \u63A8\u65AD\u6570\u7EC4\u5143\u7D20\u7C7B\u578B
   * infer \u53EA\u80FD\u5728\u6761\u4EF6\u8BED\u53E5\u7684\u5B50\u53E5\u4E2D\u4F7F\u7528\uFF0C\u800C\u4E14\u5FC5\u987B\u662F\u5728\u771F\u7684\u4E00\u4FA7
   * \u9047\u5230\u51FD\u6570\u91CD\u8F7D\u7684\u8BDD\uFF0C\u4F7F\u7528\u6700\u540E\u4E00\u4E2A\u51FD\u6570\u8FDB\u884C\u7C7B\u578B\u63A8\u65AD
   */</span>
  type UnpackedArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span>infer <span class="token constant">U</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token constant">U</span> <span class="token operator">:</span> <span class="token constant">T</span>

  type <span class="token constant">T0</span> <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>

  type u0 <span class="token operator">=</span> UnpackedArray<span class="token operator">&lt;</span><span class="token constant">T0</span><span class="token operator">&gt;</span>
</code></pre></div>`,3),e=[o];function c(r,l,k,i,u,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
