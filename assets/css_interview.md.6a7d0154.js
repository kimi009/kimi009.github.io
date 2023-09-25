import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const m='{"title":"css\u5E38\u89C1\u9762\u8BD5\u6C47\u603B","description":"","frontmatter":{},"headers":[],"relativePath":"css/interview.md"}',p={},o=t(`<h1 id="css\u5E38\u89C1\u9762\u8BD5\u6C47\u603B" tabindex="-1">css\u5E38\u89C1\u9762\u8BD5\u6C47\u603B <a class="header-anchor" href="#css\u5E38\u89C1\u9762\u8BD5\u6C47\u603B" aria-hidden="true">#</a></h1><ul><li><p>\u672A\u77E5\u9AD8\u5EA6\u7684\u5143\u7D20\u5728\u5BB9\u5668\u4E2D\u5C45\u4E2D\uFF1A table-cell transform:translate flex</p></li><li><p>\u4E09\u79CD\u9690\u85CF\u65B9\u5F0F\u5DEE\u522B: \u4EC0\u4E48\u64CD\u4F5C\u4F1A\u5F15\u8D77\u9875\u9762\u7684\u91CD\u7ED8\u548C\u56DE\u6D41 visibility:hidden, \u91CD\u7ED8 display:none, \u56DE\u6D41\u91CD\u7ED8 opacity:0, \u91CD\u7ED8</p></li><li><p>inline\u548Cblock\u5143\u7D20\u5217\u4E3E, block\u548Cinline-block\u533A\u522B? block \u72EC\u5360\u4E00\u884C\uFF0C\u81EA\u52A8\u586B\u6EE1\u7236\u5143\u7D20\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5BBD\u9AD8\uFF0C\u53EF\u4EE5\u8BBE\u7F6Emargin padding inlineblock \u65E2\u5177\u6709inline\u7684\u5C5E\u6027\u8FD8\u6709block\u7684\u5C5E\u6027</p></li><li><p>scss\u91CC\u9762\u6837\u5F0F\u7EE7\u627F @extend</p></li><li><p>::first-letter \u9009\u62E9\u6307\u5B9A\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u5355\u8BCD 1</p></li><li><p>::first-line \u9009\u62E9\u6307\u5B9A\u5143\u7D20\u7684\u7B2C\u4E00\u884C 1</p></li><li><p>::after \u5728\u6307\u5B9A\u5143\u7D20\u7684\u5185\u5BB9\u524D\u9762\u63D2\u5165\u5185\u5BB9 2</p></li><li><p>::before \u5728\u6307\u5B9A\u5143\u7D20\u7684\u5185\u5BB9\u540E\u9762\u63D2\u5165\u5185\u5BB9 2</p></li><li><p>::selection \u9009\u62E9\u6307\u5B9A\u5143\u7D20\u4E2D\u88AB\u7528\u6237\u9009\u4E2D\u7684\u5185\u5BB9 3</p></li></ul><div class="language-js"><pre><code>\u901A\u8FC7<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rel=&quot;preload&quot;</span><span class="token template-punctuation string">\`</span></span>\u8FDB\u884C\u5185\u5BB9\u9884\u52A0\u8F7D
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;preload&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;style.css&quot;</span> <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">&quot;style&quot;</span><span class="token operator">&gt;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token number">1.</span> flex\u5E03\u5C40\u91CC\u9762\u7684align<span class="token operator">-</span>items  align<span class="token operator">-</span>content\u6709\u5565\u533A\u522B

	\u53EA\u6709\u591A\u884C\u7684\u65F6\u5019align<span class="token operator">-</span>content\u624D\u4F1A\u751F\u6548

<span class="token number">2.</span> \u9009\u62E9\u5668\uFF1A<span class="token number">1</span>\uFF0C\u7C7B\u9009\u62E9\u5668\uFF0C<span class="token number">2</span>\uFF0C<span class="token constant">ID</span>\u9009\u62E9\u5668\uFF0C<span class="token number">3</span>\uFF0C\u5C5E\u6027\u9009\u62E9\u5668\uFF0C<span class="token number">4</span>\uFF0C\u4F2A\u7C7B\u9009\u62E9\u5668\uFF0C<span class="token number">5</span>\uFF0C\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u3002

</code></pre></div><div class="language-css"><pre><code><span class="token comment">/*\u6E05\u9664\u6D6E\u52A8*/</span>
<span class="token selector">.clear:after</span> <span class="token punctuation">{</span>
<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span> // \u53EF\u4EE5\u662Fblock<span class="token punctuation">,</span> list-item
<span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*1px*/</span>
<span class="token selector">.u-border-top-bottom</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.u-border-top-bottom:after</span><span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
	<span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
	// \u591A\u52A00.1%\uFF0C\u80FD\u89E3\u51B3\u6709\u65F6\u5019\u8FB9\u6846\u7F3A\u5931\u7684\u95EE\u9898
	<span class="token property">width</span><span class="token punctuation">:</span> 199.8%<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 199.7%<span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 0 solid #edeae5<span class="token punctuation">;</span>
	<span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),e=[o];function c(l,i,r,u,k,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};
