import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const m='{"title":"\u865A\u62DF\u6EDA\u52A8","description":"","frontmatter":{},"headers":[],"relativePath":"js/\u865A\u62DF\u6EDA\u52A8.md"}',p={},o=t(`<h1 id="\u865A\u62DF\u6EDA\u52A8" tabindex="-1">\u865A\u62DF\u6EDA\u52A8 <a class="header-anchor" href="#\u865A\u62DF\u6EDA\u52A8" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;list&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;infinite-list-container&quot;</span> @scroll<span class="token operator">=</span><span class="token string">&quot;scrollEvent($event)&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;scroll&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;infinite-list-phantom&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{ height: listHeight + &#39;px&#39; }&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;infinite-list&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{ transform: getTransform }&quot;</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>div
				ref<span class="token operator">=</span><span class="token string">&quot;items&quot;</span>
				<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;infinite-list-item&quot;</span>
				v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in visibleData&quot;</span>
				<span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.id&quot;</span>
				<span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{ height: itemSize + &#39;px&#39;, lineHeight: itemSize + &#39;px&#39; }&quot;</span><span class="token operator">&gt;</span>
				<span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">}</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;VirtualList&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u6240\u6709\u5217\u8868\u6570\u636E</span>
		<span class="token literal-property property">listData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
			<span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">//\u6BCF\u9879\u9AD8\u5EA6</span>
		<span class="token literal-property property">itemSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
			<span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">50</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u5217\u8868\u603B\u9AD8\u5EA6</span>
		<span class="token function">listHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listData<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemSize
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">//\u53EF\u663E\u793A\u7684\u5217\u8868\u9879\u6570</span>
		<span class="token function">visibleCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>screenHeight <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemSize<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">//\u504F\u79FB\u91CF\u5BF9\u5E94\u7684style</span>
		<span class="token function">getTransform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate3d(0,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>startOffset<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px,0)</span><span class="token template-punctuation string">\`</span></span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">//\u83B7\u53D6\u771F\u5B9E\u663E\u793A\u5217\u8868\u6570\u636E</span>
		<span class="token function">visibleData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>start<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>end<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listData<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listData<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>start<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>end<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listData<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>screenHeight <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>clientHeight
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>screenHeight<span class="token punctuation">)</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> <span class="token number">0</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>visibleCount
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u53EF\u89C6\u533A\u57DF\u9AD8\u5EA6</span>
			<span class="token literal-property property">screenHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token comment">//\u504F\u79FB\u91CF</span>
			<span class="token literal-property property">startOffset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token comment">//\u8D77\u59CB\u7D22\u5F15</span>
			<span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token comment">//\u7ED3\u675F\u7D22\u5F15</span>
			<span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token keyword">null</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token function">scrollEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u5F53\u524D\u6EDA\u52A8\u4F4D\u7F6E</span>
			<span class="token keyword">let</span> scrollTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>list<span class="token punctuation">.</span>scrollTop
			<span class="token comment">//\u6B64\u65F6\u7684\u5F00\u59CB\u7D22\u5F15</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>scrollTop <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemSize<span class="token punctuation">)</span>
			<span class="token comment">//\u6B64\u65F6\u7684\u7ED3\u675F\u7D22\u5F15</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>visibleCount
			<span class="token comment">//\u6B64\u65F6\u7684\u504F\u79FB\u91CF</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>startOffset <span class="token operator">=</span> scrollTop <span class="token operator">-</span> <span class="token punctuation">(</span>scrollTop <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>itemSize<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>infinite<span class="token operator">-</span>list<span class="token operator">-</span>container <span class="token punctuation">{</span>
	<span class="token literal-property property">width</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
	<span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
	<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
	background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
	z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">9999</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>infinite<span class="token operator">-</span>list<span class="token operator">-</span>phantom <span class="token punctuation">{</span>
	<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
	<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
	z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>infinite<span class="token operator">-</span>list <span class="token punctuation">{</span>
	<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
	text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>infinite<span class="token operator">-</span>list<span class="token operator">-</span>item <span class="token punctuation">{</span>
	<span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
	<span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">555</span><span class="token punctuation">;</span>
	box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
	border<span class="token operator">-</span>bottom<span class="token operator">:</span> 1px solid #<span class="token number">999</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre></div>`,2),e=[o];function c(l,r,k,u,i,y){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
