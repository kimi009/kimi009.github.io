import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const f='{"title":"\u8282\u6D41","description":"","frontmatter":{},"headers":[],"relativePath":"js/throttle.md"}',p={},o=t(`<h1 id="\u8282\u6D41" tabindex="-1">\u8282\u6D41 <a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a></h1><ul><li>\u9632\u6296\u52A8\u548C\u8282\u6D41\u672C\u8D28\u662F\u4E0D\u4E00\u6837\u7684\u3002\u9632\u6296\u52A8\u662F\u5C06\u591A\u6B21\u6267\u884C\u53D8\u4E3A\u6700\u540E\u4E00\u6B21\u6267\u884C\uFF0C\u8282\u6D41\u662F\u5C06\u591A\u6B21\u6267\u884C\u53D8\u6210\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C</li></ul><div class="language-js"><pre><code><span class="token comment">/**
 * underscore \u8282\u6D41\u51FD\u6570\uFF0C\u8FD4\u56DE\u51FD\u6570\u8FDE\u7EED\u8C03\u7528\u65F6\uFF0Cfunc \u6267\u884C\u9891\u7387\u9650\u5B9A\u4E3A \u6B21 / wait
 *
 * @param  {function}   func      \u56DE\u8C03\u51FD\u6570
 * @param  {number}     wait      \u8868\u793A\u65F6\u95F4\u7A97\u53E3\u7684\u95F4\u9694
 * @param  {object}     options   \u5982\u679C\u60F3\u5FFD\u7565\u5F00\u59CB\u51FD\u6570\u7684\u7684\u8C03\u7528\uFF0C\u4F20\u5165{leading: false}\u3002
 *                                \u5982\u679C\u60F3\u5FFD\u7565\u7ED3\u5C3E\u51FD\u6570\u7684\u8C03\u7528\uFF0C\u4F20\u5165{trailing: false}
 *                                \u4E24\u8005\u4E0D\u80FD\u5171\u5B58\uFF0C\u5426\u5219\u51FD\u6570\u4E0D\u80FD\u6267\u884C
 * @return {function}             \u8FD4\u56DE\u5BA2\u6237\u8C03\u7528\u51FD\u6570   
 */</span>
_<span class="token punctuation">.</span><span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> context<span class="token punctuation">,</span> args<span class="token punctuation">,</span> result<span class="token punctuation">;</span>
    <span class="token keyword">var</span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4E4B\u524D\u7684\u65F6\u95F4\u6233</span>
    <span class="token keyword">var</span> previous <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5982\u679C options \u6CA1\u4F20\u5219\u8BBE\u4E3A\u7A7A\u5BF9\u8C61</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">)</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5B9A\u65F6\u5668\u56DE\u8C03\u51FD\u6570</span>
    <span class="token keyword">var</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u8BBE\u7F6E\u4E86 leading\uFF0C\u5C31\u5C06 previous \u8BBE\u4E3A 0</span>
      <span class="token comment">// \u7528\u4E8E\u4E0B\u9762\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A if \u5224\u65AD</span>
      previous <span class="token operator">=</span> options<span class="token punctuation">.</span>leading <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> _<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u7F6E\u7A7A\u4E00\u662F\u4E3A\u4E86\u9632\u6B62\u5185\u5B58\u6CC4\u6F0F\uFF0C\u4E8C\u662F\u4E3A\u4E86\u4E0B\u9762\u7684\u5B9A\u65F6\u5668\u5224\u65AD</span>
      timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u5F97\u5F53\u524D\u65F6\u95F4\u6233</span>
      <span class="token keyword">var</span> now <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u9996\u6B21\u8FDB\u5165\u524D\u8005\u80AF\u5B9A\u4E3A true</span>
	  <span class="token comment">// \u5982\u679C\u9700\u8981\u7B2C\u4E00\u6B21\u4E0D\u6267\u884C\u51FD\u6570</span>
	  <span class="token comment">// \u5C31\u5C06\u4E0A\u6B21\u65F6\u95F4\u6233\u8BBE\u4E3A\u5F53\u524D\u7684</span>
      <span class="token comment">// \u8FD9\u6837\u5728\u63A5\u4E0B\u6765\u8BA1\u7B97 remaining \u7684\u503C\u65F6\u4F1A\u5927\u4E8E0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>previous <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>leading <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> previous <span class="token operator">=</span> now<span class="token punctuation">;</span>
      <span class="token comment">// \u8BA1\u7B97\u5269\u4F59\u65F6\u95F4</span>
      <span class="token keyword">var</span> remaining <span class="token operator">=</span> wait <span class="token operator">-</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous<span class="token punctuation">)</span><span class="token punctuation">;</span>
      context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
      <span class="token comment">// \u5982\u679C\u5F53\u524D\u8C03\u7528\u5DF2\u7ECF\u5927\u4E8E\u4E0A\u6B21\u8C03\u7528\u65F6\u95F4 + wait</span>
      <span class="token comment">// \u6216\u8005\u7528\u6237\u624B\u52A8\u8C03\u4E86\u65F6\u95F4</span>
 	  <span class="token comment">// \u5982\u679C\u8BBE\u7F6E\u4E86 trailing\uFF0C\u53EA\u4F1A\u8FDB\u5165\u8FD9\u4E2A\u6761\u4EF6</span>
	  <span class="token comment">// \u5982\u679C\u6CA1\u6709\u8BBE\u7F6E leading\uFF0C\u90A3\u4E48\u7B2C\u4E00\u6B21\u4F1A\u8FDB\u5165\u8FD9\u4E2A\u6761\u4EF6</span>
	  <span class="token comment">// \u8FD8\u6709\u4E00\u70B9\uFF0C\u4F60\u53EF\u80FD\u4F1A\u89C9\u5F97\u5F00\u542F\u4E86\u5B9A\u65F6\u5668\u90A3\u4E48\u5E94\u8BE5\u4E0D\u4F1A\u8FDB\u5165\u8FD9\u4E2A if \u6761\u4EF6\u4E86</span>
	  <span class="token comment">// \u5176\u5B9E\u8FD8\u662F\u4F1A\u8FDB\u5165\u7684\uFF0C\u56E0\u4E3A\u5B9A\u65F6\u5668\u7684\u5EF6\u65F6</span>
	  <span class="token comment">// \u5E76\u4E0D\u662F\u51C6\u786E\u7684\u65F6\u95F4\uFF0C\u5F88\u53EF\u80FD\u4F60\u8BBE\u7F6E\u4E862\u79D2</span>
	  <span class="token comment">// \u4F46\u662F\u4ED6\u9700\u89812.2\u79D2\u624D\u89E6\u53D1\uFF0C\u8FD9\u65F6\u5019\u5C31\u4F1A\u8FDB\u5165\u8FD9\u4E2A\u6761\u4EF6</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> remaining <span class="token operator">&gt;</span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u5B58\u5728\u5B9A\u65F6\u5668\u5C31\u6E05\u7406\u6389\u5426\u5219\u4F1A\u8C03\u7528\u4E8C\u6B21\u56DE\u8C03</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
          timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        previous <span class="token operator">=</span> now<span class="token punctuation">;</span>
        result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>trailing <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65AD\u662F\u5426\u8BBE\u7F6E\u4E86\u5B9A\u65F6\u5668\u548C trailing</span>
	    <span class="token comment">// \u6CA1\u6709\u7684\u8BDD\u5C31\u5F00\u542F\u4E00\u4E2A\u5B9A\u65F6\u5668</span>
        <span class="token comment">// \u5E76\u4E14\u4E0D\u80FD\u4E0D\u80FD\u540C\u65F6\u8BBE\u7F6E leading \u548C trailing</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> remaining<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3),e=[o];function c(l,u,k,i,r,m){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{f as __pageData,w as default};
