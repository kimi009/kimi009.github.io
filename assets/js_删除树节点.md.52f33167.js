import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const f='{"title":"\u5220\u9664\u6811\u8282\u70B9","description":"","frontmatter":{},"headers":[],"relativePath":"js/\u5220\u9664\u6811\u8282\u70B9.md"}',p={},o=t(`<h1 id="\u5220\u9664\u6811\u8282\u70B9" tabindex="-1">\u5220\u9664\u6811\u8282\u70B9 <a class="header-anchor" href="#\u5220\u9664\u6811\u8282\u70B9" aria-hidden="true">#</a></h1><ul><li>for\u5FAA\u73AF\u5220\u9664\u8282\u70B9\u7684\u95EE\u9898</li></ul><div class="language-js"><pre><code><span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">1</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">2</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">3</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">4</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">5</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> item <span class="token operator">=</span> temp<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>index <span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>index <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		temp<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		i<span class="token operator">--</span>   <span class="token comment">//\u8FD9\u91CC\u7684i\u8981\u9000\u56DE\u53BB</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5220\u9664\u88AB\u7981\u7528\u7684\u6811\u8282\u70B9</li></ul><div class="language-js"><pre><code>		<span class="token comment">//\u9690\u85CF\u88AB\u7981\u7528\u7684\u8282\u70B9</span>
		<span class="token function">filterDisabledNode</span><span class="token punctuation">(</span><span class="token parameter">treeData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">function</span> <span class="token function">removeNode</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>data<span class="token punctuation">]</span>
				temp<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token operator">?.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">let</span> dataItem <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">o</span> <span class="token operator">=&gt;</span> o<span class="token punctuation">.</span>code <span class="token operator">===</span> item<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
						dataItem<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token operator">?.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
							data <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">o</span> <span class="token operator">=&gt;</span> o<span class="token punctuation">.</span>code <span class="token operator">!==</span> item<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
							data <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">o</span> <span class="token operator">=&gt;</span> o<span class="token punctuation">.</span>code <span class="token operator">!==</span> item<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> data
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>treeData<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
            
            
    
</code></pre></div><div class="language-js"><pre><code>    <span class="token function">filterDisabledNode</span><span class="token punctuation">(</span><span class="token parameter">treeData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">function</span> <span class="token function">removeNode</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">let</span> item <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token operator">?.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						item<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token operator">?.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
							data<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
							i<span class="token operator">--</span> <span class="token comment">//\u8FD9\u91CC\u8981i--</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
							data<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
							i<span class="token operator">--</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">return</span> data
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token function">removeNode</span><span class="token punctuation">(</span>treeData<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div>`,6),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{f as __pageData,y as default};
