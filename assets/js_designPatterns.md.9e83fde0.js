import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";var p="/js/6.png",o="/js/4.png";const y='{"title":"\u8BBE\u8BA1\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89C2\u5BDF\u8005\u6A21\u5F0F","slug":"\u89C2\u5BDF\u8005\u6A21\u5F0F"},{"level":2,"title":"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F","slug":"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F"},{"level":2,"title":"\u5355\u4F8B\u6A21\u5F0F","slug":"\u5355\u4F8B\u6A21\u5F0F"},{"level":2,"title":"\u7B56\u7565\u6A21\u5F0F\uFF08\u7C7B\u4F3C\u8868\u5355\u9A8C\u8BC1\uFF09","slug":"\u7B56\u7565\u6A21\u5F0F\uFF08\u7C7B\u4F3C\u8868\u5355\u9A8C\u8BC1\uFF09"},{"level":2,"title":"\u4EE3\u7406\u6A21\u5F0F","slug":"\u4EE3\u7406\u6A21\u5F0F"}],"relativePath":"js/designPatterns.md"}',c={},e=t('<h1 id="\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1">\u8BBE\u8BA1\u6A21\u5F0F <a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1">\u89C2\u5BDF\u8005\u6A21\u5F0F <a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF1A\u6709\u89C2\u5BDF\u8005\u5C31\u6709\u88AB\u89C2\u5BDF\u8005\uFF0C\u662F\u57FA\u4E8E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u4E24\u8005\u662F\u6709\u5173\u7CFB\u7684\u5176\u5B9E\u5728\u88AB\u89C2\u5BDF\u8005\u7C7B\u91CC\u9762\u8FD8\u662F\u5B9E\u73B0\u4E86\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u88AB\u89C2\u5BDF\u8005\u91CC\u9762\u5B58\u653E\u4E86\u89C2\u5BDF\u8005\u5B9E\u4F8B <img src="'+p+`" alt=""></p><div class="language-js"><pre><code><span class="token comment">// \u767B\u5F55\u6A21\u5757js</span>
<span class="token comment">// \u767B\u5F55\u6210\u529F\u540E\uFF0C\u53D1\u5E03\u201CloginSucc\u201D\u767B\u5F55\u6210\u529F\u6D88\u606F\uFF0C\u5E76\u4F20\u9012data\u6570\u636E</span>
login<span class="token punctuation">.</span><span class="token function">succ</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	login<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;loginSucc&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// header\u6A21\u5757js</span>
<span class="token comment">// \u8BA2\u9605\u201CloginSucc\u201D\u767B\u5F55\u6210\u529F\u6D88\u606F</span>
login<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&#39;loginSucc&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	header<span class="token punctuation">.</span><span class="token function">setAvatar</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>avatar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// nav\u6A21\u5757js</span>
<span class="token comment">// \u8BA2\u9605\u201CloginSucc\u201D\u767B\u5F55\u6210\u529F\u6D88\u606F</span>
login<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token string">&#39;loginSucc&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	nav<span class="token punctuation">.</span><span class="token function">setAvatar</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>avatar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Pubsub <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">subscrib</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ev<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>_callbacks <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_callbacks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_callbacks<span class="token punctuation">[</span>ev<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_callbacks<span class="token punctuation">[</span>ev<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function-variable function">publish</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> ev <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_callbacks<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_callbacks<span class="token punctuation">[</span>ev<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

		<span class="token keyword">this</span><span class="token punctuation">.</span>_callbacks<span class="token punctuation">[</span>ev<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token function">callback</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1">\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F <a class="header-anchor" href="#\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a></h2><p><img src="`+o+`" alt=""></p><h2 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1">\u5355\u4F8B\u6A21\u5F0F <a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">createLoginLayer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
	div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;\u6211\u662F\u767B\u5F55\u5F39\u7A97&#39;</span>
	div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>

	document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
	<span class="token keyword">return</span> div
<span class="token punctuation">}</span>

<span class="token keyword">const</span> createSingle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">[</span>fn<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			instance<span class="token punctuation">[</span>fn<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">[</span>fn<span class="token punctuation">.</span>name<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">createIframe</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span>
	document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span>
	iframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
	<span class="token keyword">return</span> iframe
<span class="token punctuation">}</span>

<span class="token keyword">const</span> createSingleLoginLayer <span class="token operator">=</span> <span class="token function">createSingle</span><span class="token punctuation">(</span>createLoginLayer<span class="token punctuation">)</span>
<span class="token keyword">const</span> createSingleIframe <span class="token operator">=</span> <span class="token function">createSingle</span><span class="token punctuation">(</span>createIframe<span class="token punctuation">)</span>

document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;loginBtn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> loginLayer <span class="token operator">=</span> createSingleLoginLayer
	<span class="token keyword">const</span> iframe <span class="token operator">=</span> createSingleIframe
	loginLayer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span>
	iframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span>
<span class="token punctuation">}</span>
\u5C06\u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C61 createLoginLayer <span class="token operator">/</span> createIframe \u7684\u804C\u8D23\u548C\u7BA1\u7406\u5355\u4F8B\u5BF9\u8C61 createSingle \u7684\u804C\u8D23\u5206\u79BB\uFF0C\u7B26\u5408\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF1B
\u901A\u8FC7\u95ED\u5305\u5B58\u50A8\u5B9E\u4F8B\uFF0C\u5E76\u8FDB\u884C\u5224\u65AD\uFF0C\u4E0D\u7BA1\u70B9\u51FB\u767B\u5F55\u6309\u94AE\u591A\u5C11\u6B21\uFF0C\u53EA\u521B\u5EFA\u4E00\u4E2A\u767B\u5F55\u6D6E\u7A97\u5B9E\u4F8B\uFF1B
\u6613\u4E8E\u6269\u5C55\uFF0C\u5F53\u4E0B\u6B21\u9700\u8981\u521B\u5EFA\u9875\u9762\u4E2D\u552F\u4E00\u7684 iframe <span class="token operator">/</span> script \u7B49\u5176\u4ED6\u6807\u7B7E\u65F6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u590D\u7528\u8BE5\u903B\u8F91
</code></pre></div><h2 id="\u7B56\u7565\u6A21\u5F0F\uFF08\u7C7B\u4F3C\u8868\u5355\u9A8C\u8BC1\uFF09" tabindex="-1">\u7B56\u7565\u6A21\u5F0F\uFF08\u7C7B\u4F3C\u8868\u5355\u9A8C\u8BC1\uFF09 <a class="header-anchor" href="#\u7B56\u7565\u6A21\u5F0F\uFF08\u7C7B\u4F3C\u8868\u5355\u9A8C\u8BC1\uFF09" aria-hidden="true">#</a></h2><h2 id="\u4EE3\u7406\u6A21\u5F0F" tabindex="-1">\u4EE3\u7406\u6A21\u5F0F <a class="header-anchor" href="#\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a></h2>`,10),u=[e];function l(i,k,r,d,f,g){return a(),s("div",null,u)}var m=n(c,[["render",l]]);export{y as __pageData,m as default};
