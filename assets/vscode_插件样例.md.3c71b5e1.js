import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const w='{"title":"\u63D2\u4EF6\u6837\u4F8B","description":"","frontmatter":{},"headers":[],"relativePath":"vscode/\u63D2\u4EF6\u6837\u4F8B.md"}',p={},o=t(`<h1 id="\u63D2\u4EF6\u6837\u4F8B" tabindex="-1">\u63D2\u4EF6\u6837\u4F8B <a class="header-anchor" href="#\u63D2\u4EF6\u6837\u4F8B" aria-hidden="true">#</a></h1><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DecorationOptions<span class="token punctuation">,</span> Range<span class="token punctuation">,</span> TextEditor<span class="token punctuation">,</span> window<span class="token punctuation">,</span> workspace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span>

<span class="token keyword">const</span> smallNumDecoration <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">createTextEditorDecorationType</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	border<span class="token operator">:</span> <span class="token string">&#39;1px&#39;</span><span class="token punctuation">,</span>
	borderStyle<span class="token operator">:</span> <span class="token string">&#39;solid&#39;</span><span class="token punctuation">,</span>
	borderColor<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> bigNumDecoration <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">createTextEditorDecorationType</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	backgroundColor<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DecorationNumber</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> editor<span class="token operator">:</span> TextEditor <span class="token operator">|</span> <span class="token keyword">undefined</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> window<span class="token punctuation">.</span>activeTextEditor

		window<span class="token punctuation">.</span><span class="token function">onDidChangeActiveTextEditor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> window<span class="token punctuation">.</span>activeTextEditor
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">decNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		workspace<span class="token punctuation">.</span><span class="token function">onDidChangeTextDocument</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">decNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token function">decNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//\u83B7\u53D6\u5F53\u524D\u6587\u672C\u7684\u5168\u90E8\u4FE1\u606F</span>
		<span class="token keyword">let</span> doc <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>document

		<span class="token comment">//\u83B7\u53D6\u6587\u672C\u7684\u5185\u5BB9</span>
		<span class="token keyword">let</span> text <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token comment">//\u521B\u5EFA\u4E24\u4E2A\u7528\u6765\u5B58\u653E\u6B63\u5219\u5224\u65AD\u51FA\u6765\u7684\u6570\u5B57\u7684\u6570\u7EC4</span>
		<span class="token keyword">let</span> smallNumbers<span class="token operator">:</span> DecorationOptions<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token keyword">let</span> bigNumbers<span class="token operator">:</span> DecorationOptions<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

		<span class="token keyword">const</span> regExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

		<span class="token keyword">let</span> match
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>match <span class="token operator">=</span> regExp<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u83B7\u53D6\u6570\u5B57\u5F00\u59CB\u548C\u7ED3\u675F\u4F4D\u7F6E</span>
			<span class="token keyword">const</span> startPos <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">positionAt</span><span class="token punctuation">(</span>match<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
			<span class="token keyword">const</span> endPos <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">positionAt</span><span class="token punctuation">(</span>match<span class="token punctuation">.</span>index <span class="token operator">+</span> match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>

			<span class="token comment">//\u83B7\u53D6\u6570\u5B57\u7684\u4F4D\u7F6E\u8303\u56F4\uFF0C\u5E76\u4E14\u5F53\u9F20\u6807\u8981\u8986\u76D6\u65F6\uFF0C\u6709\u6211\u4EEC\u60F3\u8981\u7684\u6587\u5B57\u5C55\u793A</span>
			<span class="token keyword">const</span> decoration <span class="token operator">=</span> <span class="token punctuation">{</span>
				range<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Range</span><span class="token punctuation">(</span>startPos<span class="token punctuation">,</span> endPos<span class="token punctuation">)</span><span class="token punctuation">,</span>
				hoverMessage<span class="token operator">:</span> <span class="token string">&#39;Number **&#39;</span> <span class="token operator">+</span> match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;**&#39;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">//\u6839\u636E\u4E0D\u540C\u7684\u957F\u5EA6\uFF0C\u5206\u522B\u5B58\u5165\u4E0D\u540C\u7684\u6570\u7EC4\u4E2D</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				smallNumbers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>decoration<span class="token punctuation">)</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				bigNumbers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>decoration<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">setDecorations</span><span class="token punctuation">(</span>smallNumDecoration<span class="token punctuation">,</span> smallNumbers<span class="token punctuation">)</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">setDecorations</span><span class="token punctuation">(</span>bigNumDecoration<span class="token punctuation">,</span> bigNumbers<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,2),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{w as __pageData,g as default};
