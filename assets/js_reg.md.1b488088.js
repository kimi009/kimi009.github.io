import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const d='{"title":"\u5E38\u7528\u6B63\u5219\u6C47\u603B","description":"","frontmatter":{},"headers":[],"relativePath":"js/reg.md"}',p={},o=t(`<h1 id="\u5E38\u7528\u6B63\u5219\u6C47\u603B" tabindex="-1">\u5E38\u7528\u6B63\u5219\u6C47\u603B <a class="header-anchor" href="#\u5E38\u7528\u6B63\u5219\u6C47\u603B" aria-hidden="true">#</a></h1><div class="language-js"><pre><code> <span class="token keyword">const</span> inBrowser <span class="token operator">=</span> <span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> inWeex <span class="token operator">=</span> <span class="token keyword">typeof</span> WXEnvironment <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token operator">!</span>WXEnvironment<span class="token punctuation">.</span>platform<span class="token punctuation">;</span>
 <span class="token keyword">const</span> weexPlatform <span class="token operator">=</span> inWeex <span class="token operator">&amp;&amp;</span> WXEnvironment<span class="token punctuation">.</span>platform<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> <span class="token constant">UA</span> <span class="token operator">=</span> inBrowser <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> isIE <span class="token operator">=</span> <span class="token constant">UA</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">msie|trident</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">UA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> isIE9 <span class="token operator">=</span> <span class="token constant">UA</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">UA</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;msie 9.0&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> isEdge <span class="token operator">=</span> <span class="token constant">UA</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">UA</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;edge/&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> isAndroid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token constant">UA</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">UA</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;android&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>weexPlatform <span class="token operator">===</span> <span class="token string">&#39;android&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> isIOS <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token constant">UA</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod|ios</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">UA</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>weexPlatform <span class="token operator">===</span> <span class="token string">&#39;ios&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> isChrome <span class="token operator">=</span> <span class="token constant">UA</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">chrome\\/\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">UA</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isEdge<span class="token punctuation">;</span>
 <span class="token keyword">const</span> isPhantomJS <span class="token operator">=</span> <span class="token constant">UA</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">phantomjs</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token constant">UA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> isFF <span class="token operator">=</span> <span class="token constant">UA</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">UA</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">firefox\\/(\\d+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(\\-|\\+)?0(\\.[0-9]{1,2})?$|(^(\\-|\\+)?([1-9][0-9]*)+(\\.[0-9]{1,2})?$)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;0.33&#39;</span><span class="token punctuation">)</span>
<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">:</span><span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">.</span>\\<span class="token operator">*</span><span class="token operator">?</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">:</span><span class="token operator">&lt;</span>\\<span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">span&gt;)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;span&gt;fsfdf&lt;/span&gt;&lt;p&gt;jflsjfl&lt;/p&gt;&#39;</span><span class="token punctuation">)</span>

\u200B<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js
&#39;test&#39;.match(/(?&lt;=&lt;span&gt;).*?(?=&lt;\\/span&gt;)/);
\u6B64\u65B9\u6CD5IE \u4E0D\u652F\u6301
//\u7528\u6CD5\uFF1A maxEmail:200
// \u7EDF\u4E00\u7684\u4E0D\u80FD\u4F20\u5165\u957F\u5EA6\uFF0C \u53E6\u8D77\u4E00\u4E2A\u52A8\u6001\u4F20\u5165\u957F\u5EA6\u5224\u65AD
extend(&#39;maxEmail&#39;,{
  validate(value, args) {
    const maxCount = args.length||0
    let re = /^([a-zA-Z]|[0-9])(\\w|\\-|\\.)+@(([a-zA-Z0-9]|\\-|\\.)*([a-zA-Z0-9]|\\-))$/
    const endStrArr = value.split(/\\./),
          endDotStr = endStrArr.length&gt;1?endStrArr.pop():&#39;&#39;;
    if ( !(re.test(value)&amp;&amp;Array.from(endDotStr).length&gt;1&amp;&amp;/^[a-zA-Z]+$/.test(endDotStr)&amp;&amp;!/(\\.\\.)|(@\\.)/g.test(value)) ) {
      return &#39;{_field_}\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165&#39;
    } else if (maxCount&gt;0&amp;&amp;value.length &gt; maxCount) {
      return </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">{</span>_field_<span class="token punctuation">}</span>\u6700\u591A\u4E3A$<span class="token punctuation">{</span>args<span class="token punctuation">.</span>length<span class="token punctuation">}</span>\u4E2A\u5B57\u7B26\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\`
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;length&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u6700\u591A\u4E3A {length} \u4E2A\u5B57\u7B26\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">extend</span><span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//let re = /^([a-zA-Z0-9]+[_|\\-|\\.]?)+@([a-zA-Z0-9]+[_|\\-|\\.]?)+([a-zA-Z0-9]{1,})+\\.[a-zA-Z]{2,}$/;</span>
  <span class="token comment">// let re = /^[a-zA-Z0-9_-|\\.|\\-]+@[a-zA-Z0-9_-|\\.|\\-]+(\\.[a-zA-Z]+)+$/;</span>
  <span class="token comment">// let re = /^([a-zA-Z]|[0-9])(\\w|\\-)+@[a-zA-Z0-9]+\\.([a-zA-Z]{2,4})$/;</span>
  <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([a-zA-Z]|[0-9])(\\w|\\-|\\.)+@(([a-zA-Z0-9]|\\-|\\.)*([a-zA-Z0-9]|\\-))+\\.[a-zA-Z]{2,}$</span><span class="token regex-delimiter">/</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;{_field_}\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165&#39;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;{_field_}\u6700\u591A\u4E3A50\u4E2A\u5B57\u7B26\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165&#39;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code>a \u2014 <span class="token function">\u5339\u914D\u4E00\u4E2A\u5B57\u7B26a</span><span class="token punctuation">(</span>\u4E0D\u80FD\u5339\u914D b<span class="token punctuation">,</span>  aa\u7B49\u7B49<span class="token punctuation">.</span><span class="token punctuation">)</span>
abc \u2014 \u5339\u914D a<span class="token punctuation">,</span> \u5176\u6B21 b<span class="token punctuation">,</span> \u6700\u540E  c<span class="token punctuation">.</span>
a<span class="token operator">*</span> \u2014 \u5339\u914D<span class="token number">0</span>\u4E2A\u6216\u8005\u591A\u4E2A\u5B57\u7B26 <span class="token function">a</span> <span class="token punctuation">(</span><span class="token operator">+</span> \u4EE3\u8868\u81F3\u5C11\u5339\u914D\u4E00\u4E2A\u6216\u8005\u591A\u4E2A<span class="token punctuation">)</span><span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token operator">^</span>a<span class="token punctuation">]</span> \u2014 \u5339\u914D\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4F46\u5B83\u4E0D\u80FD\u662Fa<span class="token punctuation">.</span>
a<span class="token operator">|</span>b \u2014 \u5339\u914D\u4E00\u4E2A\u5B57\u7B26 a \u6216\u8005 b<span class="token punctuation">.</span>
<span class="token punctuation">[</span>abc<span class="token punctuation">]</span> \u2014 \u5339\u914D\u4E00\u4E2A\u5B57\u7B26\uFF0C\u5B83\u53EF\u4EE5\u662Fa<span class="token punctuation">,</span>b\u6216c<span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token operator">^</span>abc<span class="token punctuation">]</span> \u2014 \u5339\u914D\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4F46\u5B83\u4E0D\u53EF\u4EE5\u662Fa<span class="token punctuation">,</span>b\u6216c<span class="token punctuation">.</span>
<span class="token punctuation">[</span>a<span class="token operator">-</span>z<span class="token punctuation">]</span> \u2014 \u5339\u914D\u5B57\u7B26\u8303\u56F4 a<span class="token operator">-</span><span class="token function">z\u4E14\u5168\u90E8\u5C0F\u5199</span>  <span class="token punctuation">(</span>\u4F60\u53EF\u4EE5\u4F7F\u7528 <span class="token punctuation">[</span><span class="token constant">A</span><span class="token operator">-</span>Za<span class="token operator">-</span>z<span class="token punctuation">]</span> \u6DB5\u76D6\u5927\u5C0F\u5199<span class="token punctuation">,</span> \u6216 <span class="token punctuation">[</span><span class="token constant">A</span><span class="token operator">-</span><span class="token constant">Z</span><span class="token punctuation">]</span> \u6765\u9650\u5236\u5FC5\u987B\u5927\u5199<span class="token punctuation">)</span><span class="token punctuation">.</span>
a<span class="token punctuation">.</span>c \u2014 \u5339\u914D\u5B57\u7B26 a<span class="token punctuation">,</span>\u4E2D\u95F4\u5339\u914D\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26<span class="token punctuation">,</span>\u6700\u540E\u5339\u914D\u5B57\u7B26 c<span class="token punctuation">.</span>
a<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span> \u2014 \u5339\u914D\u5B57\u7B26 a\u4E94\u6B21<span class="token punctuation">.</span>
a<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span> \u2014 \u5339\u914D\u5B57\u7B26 a\u4E94\u5230\u4E03\u6B21<span class="token punctuation">,</span>\u4E0D\u80FD\u591A\u6216\u8005\u5C11<span class="token punctuation">.</span>


</code></pre></div><div class="language-js"><pre><code><span class="token comment">/**
 * \u91D1\u989D\u5343\u5206\u4F4D\u683C\u5F0F\u5316
 * @param {*} amount
 * @param {*} returnIs \u662F\u5426\u539F\u6837\u8FD4\u56DE
 * @param {*} precision \u7CBE\u5EA6
 * @returns
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">formatAmount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">amount<span class="token punctuation">,</span> precision <span class="token operator">=</span> <span class="token number">2</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>amount <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> amount <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span>
	<span class="token punctuation">}</span>
	amount <span class="token operator">=</span> amount<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">let</span> <span class="token punctuation">[</span>pre<span class="token punctuation">,</span> aft<span class="token punctuation">]</span> <span class="token operator">=</span> amount<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u5904\u7406\u6574\u6570\u90E8\u5206</span>
	pre <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+(?!\\d))</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$1,</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
	<span class="token comment">//\u5904\u7406\u5C0F\u6570\u90E8\u5206</span>
	aft <span class="token operator">=</span> aft <span class="token operator">??</span> <span class="token string">&#39;&#39;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>precision <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u9700\u8981\u7CBE\u5EA6</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>aft<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> precision<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			aft <span class="token operator">=</span> aft<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> precision<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u8865\u5168\u7CBE\u5EA6</span>
			aft <span class="token operator">=</span> aft<span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span>precision<span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		aft <span class="token operator">=</span> aft<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span>aft<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u4E0D\u9700\u8981\u7CBE\u5EA6</span>
		aft <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pre<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>aft<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u7ED9\u91D1\u989D\u8BBE\u7F6E\u9ED8\u8BA4\u503C
 * @param {*} type
 * @returns
 */</span>
<span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">amountDefault</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u8FD9\u91CC\u4E00\u5B9A\u8981\u6CE8\u610F\u4E0D\u80FD\u5199\u7BAD\u5934\u51FD\u6570\uFF0C\u5426\u5219this\u6307\u5411\u6709\u95EE\u9898</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
				<span class="token keyword">return</span> <span class="token string">&#39;0.00&#39;</span>
			<span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
				<span class="token keyword">return</span> <span class="token string">&#39;--&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span>
<span class="token punctuation">}</span>
<span class="token comment">// console.log(formatAmount(2324.2))</span>
<span class="token comment">// console.log(formatAmount(2324))</span>
<span class="token comment">// console.log(formatAmount(23245235))</span>
<span class="token comment">// console.log(formatAmount(23245235, 4))</span>
<span class="token comment">// console.log(formatAmount(2324333.2234))</span>
<span class="token comment">// console.log(formatAmount(2324.422))</span>
<span class="token comment">// console.log(formatAmount(2324.422, 0))</span>
<span class="token comment">// console.log(formatAmount(&#39;2341412.52543&#39;, 3))</span>
<span class="token comment">// console.log(formatAmount(&#39;2341412.525523525&#39;, 4))</span>
<span class="token comment">// console.log(formatAmount(&#39;2341412.5252222&#39;))</span>
<span class="token comment">// console.log(formatAmount(&#39;2341412.5252222&#39;, 0))</span>
<span class="token comment">// console.log(formatAmount(null))</span>
<span class="token comment">// console.log(formatAmount(null, 3))</span>
<span class="token comment">// console.log(formatAmount(null, 4, &#39;0&#39;))</span>
<span class="token comment">// console.log(formatAmount(null, 1))</span>

</code></pre></div>`,4),e=[o];function c(l,u,k,r,i,m){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{d as __pageData,f as default};
