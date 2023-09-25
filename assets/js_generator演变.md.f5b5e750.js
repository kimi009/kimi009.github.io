import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const f='{"title":"generator\u6F14\u53D8","description":"","frontmatter":{},"headers":[],"relativePath":"js/generator\u6F14\u53D8.md"}',p={},o=t(`<h1 id="generator\u6F14\u53D8" tabindex="-1">generator\u6F14\u53D8 <a class="header-anchor" href="#generator\u6F14\u53D8" aria-hidden="true">#</a></h1><p><a href="https://gitee.com/kimi009/study_base_webpack" target="_blank" rel="noopener noreferrer">\u4EE3\u7801\u5730\u5740</a></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;Get&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
			xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;json&#39;</span>
			xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
					<span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u9519\u8BEF&#39;</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
				<span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ajax(&#39;/a.json&#39;).then(</span>
<span class="token comment">// 	(res) =&gt; {</span>
<span class="token comment">// 		console.log(res)</span>
<span class="token comment">// 	},</span>
<span class="token comment">// 	(err) =&gt; {</span>
<span class="token comment">// 		console.log(err)</span>
<span class="token comment">// 	}</span>
<span class="token comment">// )</span>
<span class="token comment">//---------------------------Generator \u65B9\u5F0F---------------</span>
<span class="token comment">// function* request() {</span>
<span class="token comment">// 	const a_res = yield ajax(&#39;a.json&#39;)</span>
<span class="token comment">// 	console.log(a_res)</span>

<span class="token comment">// 	const b_res = yield ajax(&#39;b.json&#39;)</span>
<span class="token comment">// 	console.log(b_res)</span>
<span class="token comment">// }</span>

<span class="token comment">// const reqGenerate = request()</span>
<span class="token comment">// const first = reqGenerate.next()</span>

<span class="token comment">// first.value.then((res) =&gt; {</span>
<span class="token comment">// 	const b = reqGenerate.next(res)</span>
<span class="token comment">// 	b.value.then((res) =&gt; {</span>
<span class="token comment">// 		reqGenerate.next(res)</span>
<span class="token comment">// 	})</span>
<span class="token comment">// })</span>

<span class="token comment">//---------------------\u9012\u5F52\u65B9\u5F0F\u5904\u7406--------------------</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> a_res <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;a.json&#39;</span><span class="token punctuation">)</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a_res<span class="token punctuation">)</span>

		<span class="token comment">// const b_res = yield ajax(&#39;b2.json&#39;)  //\u8BF7\u6C42\u5F02\u5E38\u7684\u65F6\u5019\uFF0C\u76F4\u63A5reqGenerate.throw \u629B\u51FA\u5F02\u5E38\uFF0C\u7ED3\u675F\u8C03\u7528\uFF0C\u5426\u5219\u4F1A\u7EE7\u7EED</span>
    <span class="token keyword">const</span> b_res <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;b.json&#39;</span><span class="token punctuation">)</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b_res<span class="token punctuation">)</span>

		<span class="token keyword">const</span> c_res <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;c.json&#39;</span><span class="token punctuation">)</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c_res<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> reqGenerate <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> reqGenerate<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">co</span><span class="token punctuation">(</span><span class="token parameter">g</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>g<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		g<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
			<span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token function">co</span><span class="token punctuation">(</span>reqGenerate<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
				reqGenerate<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">co</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>

</code></pre></div>`,3),e=[o];function c(u,l,k,r,i,m){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{f as __pageData,_ as default};
