import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const f='{"title":"\u9632\u6296\u51FD\u6570","description":"","frontmatter":{},"headers":[],"relativePath":"js/debounce.md"}',p={},o=t(`<h1 id="\u9632\u6296\u51FD\u6570" tabindex="-1">\u9632\u6296\u51FD\u6570 <a class="header-anchor" href="#\u9632\u6296\u51FD\u6570" aria-hidden="true">#</a></h1><ul><li>\u9632\u6296 \u4F60\u662F\u5426\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u9047\u5230\u4E00\u4E2A\u95EE\u9898\uFF0C\u5728\u6EDA\u52A8\u4E8B\u4EF6\u4E2D\u9700\u8981\u505A\u4E2A\u590D\u6742\u8BA1\u7B97\u6216\u8005\u5B9E\u73B0\u4E00\u4E2A\u6309\u94AE\u7684\u9632\u4E8C\u6B21\u70B9\u51FB\u64CD\u4F5C\u3002 \u8FD9\u4E9B\u9700\u6C42\u90FD\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u9632\u6296\u52A8\u6765\u5B9E\u73B0\u3002\u5C24\u5176\u662F\u7B2C\u4E00\u4E2A\u9700\u6C42\uFF0C\u5982\u679C\u5728\u9891\u7E41\u7684\u4E8B\u4EF6\u56DE\u8C03\u4E2D\u505A\u590D\u6742\u8BA1\u7B97\uFF0C\u5F88\u6709\u53EF\u80FD\u5BFC\u81F4\u9875\u9762\u5361\u987F\uFF0C\u4E0D\u5982\u5C06\u591A\u6B21\u8BA1\u7B97\u5408\u5E76\u4E3A\u4E00\u6B21\u8BA1\u7B97\uFF0C\u53EA\u5728\u4E00\u4E2A\u7CBE\u786E\u70B9\u505A\u64CD\u4F5C\u3002 PS\uFF1A\u9632\u6296\u548C\u8282\u6D41\u7684\u4F5C\u7528\u90FD\u662F\u9632\u6B62\u51FD\u6570\u591A\u6B21\u8C03\u7528\u3002\u533A\u522B\u5728\u4E8E\uFF0C\u5047\u8BBE\u4E00\u4E2A\u7528\u6237\u4E00\u76F4\u89E6\u53D1\u8FD9\u4E2A\u51FD\u6570\uFF0C\u4E14\u6BCF\u6B21\u89E6\u53D1\u51FD\u6570\u7684\u95F4\u9694\u5C0F\u4E8E\u9608\u503C\uFF0C\u9632\u6296\u7684\u60C5\u51B5\u4E0B\u53EA\u4F1A\u8C03\u7528\u4E00\u6B21\uFF0C\u800C\u8282\u6D41\u4F1A\u6BCF\u9694\u4E00\u5B9A\u65F6\u95F4\u8C03\u7528\u51FD\u6570\u3002 \u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u8896\u73CD\u7248\u7684\u9632\u6296\u7406\u89E3\u4E00\u4E0B\u9632\u6296\u7684\u5B9E\u73B0\uFF1A</li></ul><div class="language-js"><pre><code><span class="token comment">// func\u662F\u7528\u6237\u4F20\u5165\u9700\u8981\u9632\u6296\u7684\u51FD\u6570</span>
<span class="token comment">// wait\u662F\u7B49\u5F85\u65F6\u95F4</span>
<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait <span class="token operator">=</span> <span class="token number">50</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7F13\u5B58\u4E00\u4E2A\u5B9A\u65F6\u5668id</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// \u8FD9\u91CC\u8FD4\u56DE\u7684\u51FD\u6570\u662F\u6BCF\u6B21\u7528\u6237\u5B9E\u9645\u8C03\u7528\u7684\u9632\u6296\u51FD\u6570</span>
  <span class="token comment">// \u5982\u679C\u5DF2\u7ECF\u8BBE\u5B9A\u8FC7\u5B9A\u65F6\u5668\u4E86\u5C31\u6E05\u7A7A\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668</span>
  <span class="token comment">// \u5F00\u59CB\u4E00\u4E2A\u65B0\u7684\u5B9A\u65F6\u5668\uFF0C\u5EF6\u8FDF\u6267\u884C\u7528\u6237\u4F20\u5165\u7684\u65B9\u6CD5</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0D\u96BE\u770B\u51FA\u5982\u679C\u7528\u6237\u8C03\u7528\u8BE5\u51FD\u6570\u7684\u95F4\u9694\u5C0F\u4E8E wait \u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0A\u4E00\u6B21\u7684\u65F6\u95F4\u8FD8\u672A\u5230\u5C31\u88AB\u6E05\u9664\u4E86\uFF0C\u5E76\u4E0D\u4F1A\u6267\u884C\u51FD\u6570</span>
</code></pre></div><ul><li>\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7248\u7684\u9632\u6296\uFF0C\u4F46\u662F\u6709\u7F3A\u9677\uFF0C\u8FD9\u4E2A\u9632\u6296\u53EA\u80FD\u5728\u6700\u540E\u8C03\u7528\u3002\u4E00\u822C\u7684\u9632\u6296\u4F1A\u6709 immediate \u9009\u9879\uFF0C\u8868\u793A\u662F\u5426\u7ACB\u5373\u8C03\u7528\u3002\u8FD9\u4E24\u8005\u7684\u533A\u522B\uFF0C\u4E3E\u4E2A\u6817\u5B50\u6765\u8BF4\uFF1A \u4F8B\u5982\u5728\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5F53\u7136\u662F\u5E0C\u671B\u7528\u6237\u8F93\u5165\u5B8C\u6700\u540E\u4E00\u4E2A\u5B57\u624D\u8C03\u7528\u67E5\u8BE2\u63A5\u53E3\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9002\u7528\u5EF6\u8FDF\u6267\u884C\u7684\u9632\u6296\u51FD\u6570\uFF0C\u5B83\u603B\u662F\u5728\u4E00\u8FDE\u4E32\uFF08\u95F4\u9694\u5C0F\u4E8E wait \u7684\uFF09\u51FD\u6570\u89E6\u53D1\u4E4B\u540E\u8C03\u7528\u3002 \u4F8B\u5982\u7528\u6237\u7ED9 interviewMap \u70B9 star \u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u7528\u6237\u70B9\u7B2C\u4E00\u4E0B\u7684\u65F6\u5019\u5C31\u53BB\u8C03\u7528\u63A5\u53E3\uFF0C\u5E76\u4E14\u6210\u529F\u4E4B\u540E\u6539\u53D8 star \u6309\u94AE\u7684\u6837\u5B50\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u7ACB\u9A6C\u5F97\u5230\u53CD\u9988\u662F\u5426 star \u6210\u529F\u4E86\uFF0C\u8FD9\u4E2A\u60C5\u51B5\u9002\u7528\u7ACB\u5373\u6267\u884C\u7684\u9632\u6296\u51FD\u6570\uFF0C\u5B83\u603B\u662F\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\uFF0C\u5E76\u4E14\u4E0B\u4E00\u6B21\u8C03\u7528\u5FC5\u987B\u4E0E\u524D\u4E00\u6B21\u8C03\u7528\u7684\u65F6\u95F4\u95F4\u9694\u5927\u4E8E wait \u624D\u4F1A\u89E6\u53D1\u3002 \u4E0B\u9762\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E2A\u5E26\u6709\u7ACB\u5373\u6267\u884C\u9009\u9879\u7684\u9632\u6296\u51FD\u6570</li></ul><div class="language-js"><pre><code><span class="token comment">// \u8FD9\u4E2A\u662F\u7528\u6765\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u6233\u7684</span>
<span class="token keyword">function</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u9632\u6296\u51FD\u6570\uFF0C\u8FD4\u56DE\u51FD\u6570\u8FDE\u7EED\u8C03\u7528\u65F6\uFF0C\u7A7A\u95F2\u65F6\u95F4\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8E wait\uFF0Cfunc \u624D\u4F1A\u6267\u884C
 *
 * @param  {function} func        \u56DE\u8C03\u51FD\u6570
 * @param  {number}   wait        \u8868\u793A\u65F6\u95F4\u7A97\u53E3\u7684\u95F4\u9694
 * @param  {boolean}  immediate   \u8BBE\u7F6E\u4E3Ature\u65F6\uFF0C\u662F\u5426\u7ACB\u5373\u8C03\u7528\u51FD\u6570
 * @return {function}             \u8FD4\u56DE\u5BA2\u6237\u8C03\u7528\u51FD\u6570
 */</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">,</span> immediate <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer<span class="token punctuation">,</span> context<span class="token punctuation">,</span> args

  <span class="token comment">// \u5EF6\u8FDF\u6267\u884C\u51FD\u6570</span>
  <span class="token keyword">const</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5EF6\u8FDF\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u6E05\u7A7A\u7F13\u5B58\u7684\u5B9A\u65F6\u5668\u5E8F\u53F7</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token comment">// \u5EF6\u8FDF\u6267\u884C\u7684\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u4F1A\u5728\u5EF6\u8FDF\u51FD\u6570\u4E2D\u6267\u884C</span>
      <span class="token comment">// \u4F7F\u7528\u5230\u4E4B\u524D\u7F13\u5B58\u7684\u53C2\u6570\u548C\u4E0A\u4E0B\u6587</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>

  <span class="token comment">// \u8FD9\u91CC\u8FD4\u56DE\u7684\u51FD\u6570\u662F\u6BCF\u6B21\u5B9E\u9645\u8C03\u7528\u7684\u51FD\u6570</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u6CA1\u6709\u521B\u5EFA\u5EF6\u8FDF\u6267\u884C\u51FD\u6570\uFF08later\uFF09\uFF0C\u5C31\u521B\u5EFA\u4E00\u4E2A</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">later</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// \u5982\u679C\u662F\u7ACB\u5373\u6267\u884C\uFF0C\u8C03\u7528\u51FD\u6570</span>
      <span class="token comment">// \u5426\u5219\u7F13\u5B58\u53C2\u6570\u548C\u8C03\u7528\u4E0A\u4E0B\u6587</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        context <span class="token operator">=</span> <span class="token keyword">this</span>
        args <span class="token operator">=</span> params
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5982\u679C\u5DF2\u6709\u5EF6\u8FDF\u6267\u884C\u51FD\u6570\uFF08later\uFF09\uFF0C\u8C03\u7528\u7684\u65F6\u5019\u6E05\u9664\u539F\u6765\u7684\u5E76\u91CD\u65B0\u8BBE\u5B9A\u4E00\u4E2A</span>
      <span class="token comment">// \u8FD9\u6837\u505A\u5EF6\u8FDF\u51FD\u6570\u4F1A\u91CD\u65B0\u8BA1\u65F6</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
      timer <span class="token operator">=</span> <span class="token function">later</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;immediate execute&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>fun<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token function">temp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">temp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">temp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u6574\u4F53\u51FD\u6570\u5B9E\u73B0\u7684\u4E0D\u96BE\uFF0C\u603B\u7ED3\u4E00\u4E0B\u3002 \u5BF9\u4E8E\u6309\u94AE\u9632\u70B9\u51FB\u6765\u8BF4\u7684\u5B9E\u73B0\uFF1A\u5982\u679C\u51FD\u6570\u662F\u7ACB\u5373\u6267\u884C\u7684\uFF0C\u5C31\u7ACB\u5373\u8C03\u7528\uFF0C\u5982\u679C\u51FD\u6570\u662F\u5EF6\u8FDF\u6267\u884C\u7684\uFF0C\u5C31\u7F13\u5B58\u4E0A\u4E0B\u6587\u548C\u53C2\u6570\uFF0C\u653E\u5230\u5EF6\u8FDF\u51FD\u6570\u4E2D\u53BB\u6267\u884C\u3002\u4E00\u65E6\u6211\u5F00\u59CB\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u53EA\u8981\u6211\u5B9A\u65F6\u5668\u8FD8\u5728\uFF0C\u4F60\u6BCF\u6B21\u70B9\u51FB\u6211\u90FD\u91CD\u65B0\u8BA1\u65F6\u3002\u4E00\u65E6\u4F60\u70B9\u7D2F\u4E86\uFF0C\u5B9A\u65F6\u5668\u65F6\u95F4\u5230\uFF0C\u5B9A\u65F6\u5668\u91CD\u7F6E\u4E3A null\uFF0C\u5C31\u53EF\u4EE5\u518D\u6B21\u70B9\u51FB\u4E86\u3002 \u5BF9\u4E8E\u5EF6\u65F6\u6267\u884C\u51FD\u6570\u6765\u8BF4\u7684\u5B9E\u73B0\uFF1A\u6E05\u9664\u5B9A\u65F6\u5668 ID\uFF0C\u5982\u679C\u662F\u5EF6\u8FDF\u8C03\u7528\u5C31\u8C03\u7528\u51FD\u6570</li></ul>`,6),e=[o];function c(u,l,k,i,r,m){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{f as __pageData,w as default};