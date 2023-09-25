import{_ as n,c as s,o as a,d as p}from"./app.87eb6f1c.js";const g='{"title":"Cookie\u76F8\u5173","description":"","frontmatter":{},"headers":[],"relativePath":"js/cookie.md"}',t={},o=p(`<h1 id="cookie\u76F8\u5173" tabindex="-1">Cookie\u76F8\u5173 <a class="header-anchor" href="#cookie\u76F8\u5173" aria-hidden="true">#</a></h1><blockquote><p>\u5982\u679C\u8981\u4E3B\u57DF\u540D\u548C\u4E8C\u7EA7\u57DF\u540D\u5171\u4EAB\u8FD9\u4E2ACookie\uFF0C\u53EA\u9700\u8981\u8BBE\u7F6E\u4E3B\u57DF\u540D\u7684Cookie\u5C31\u597D\u4E86\uFF0C\u4ED6\u4EEC\u662F\u5171\u4EAB\u7684</p></blockquote><blockquote><p>\u5728\u6D4F\u89C8\u5668\u7684\u68C0\u67E5\u9879\u91CC\u9762\u770B\u5230Cookie\u7684expires\u662Fsession,\u8868\u793A\u8FD9\u4E2ACookie\u662F\u4E2A\u4F1A\u8BDDCookie\uFF0C\u7F51\u9875\u5173\u95ED\u4F1A\u81EA\u52A8\u4E22\u5931\uFF0C\u662F\u6574\u4E2A\u7F51\u7AD9\u5173\u95ED</p></blockquote><div class="language-js"><pre><code><span class="token keyword">var</span> decode <span class="token operator">=</span> decodeURIComponent
<span class="token keyword">var</span> encode <span class="token operator">=</span> encodeURIComponent

<span class="token keyword">function</span> <span class="token function">parseCookieString</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> shouldDecode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> cookies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> text<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> decodeValue <span class="token operator">=</span> shouldDecode <span class="token operator">?</span> decode <span class="token operator">:</span> same
    <span class="token keyword">var</span> cookieParts <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">;\\s</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> cookieName
    <span class="token keyword">var</span> cookieValue
    <span class="token keyword">var</span> cookieNameValue

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> cookieParts<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Check for normally-formatted cookie (name-value)</span>
      cookieNameValue <span class="token operator">=</span> cookieParts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([^=]+)=</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cookieNameValue <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          cookieName <span class="token operator">=</span> <span class="token function">decode</span><span class="token punctuation">(</span>cookieNameValue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
          cookieValue <span class="token operator">=</span> <span class="token function">decodeValue</span><span class="token punctuation">(</span>
            cookieParts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>cookieNameValue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Intentionally ignore the cookie -</span>
          <span class="token comment">// the encoding is wrong</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Means the cookie does not have an &quot;=&quot;, so treat it as</span>
        <span class="token comment">// a boolean flag</span>
        cookieName <span class="token operator">=</span> <span class="token function">decode</span><span class="token punctuation">(</span>cookieParts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        cookieValue <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>cookieName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cookies<span class="token punctuation">[</span>cookieName<span class="token punctuation">]</span> <span class="token operator">=</span> cookieValue
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> cookies
<span class="token punctuation">}</span>

<span class="token comment">// Helpers</span>

<span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> o <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isNonEmptyString</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> s <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">validateCookieName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNonEmptyString</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Cookie name must be a non-empty string&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">same</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">validateCookieName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">converter</span><span class="token operator">:</span> options
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> cookies <span class="token operator">=</span> <span class="token function">parseCookieString</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">,</span> <span class="token operator">!</span>options<span class="token punctuation">[</span><span class="token string">&#39;raw&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>converter <span class="token operator">||</span> same<span class="token punctuation">)</span><span class="token punctuation">(</span>cookies<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">validateCookieName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

  options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">var</span> expires <span class="token operator">=</span> options<span class="token punctuation">[</span><span class="token string">&#39;expires&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> domain <span class="token operator">=</span> options<span class="token punctuation">[</span><span class="token string">&#39;domain&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> path <span class="token operator">=</span> options<span class="token punctuation">[</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">]</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">[</span><span class="token string">&#39;raw&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> text <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> value

  <span class="token comment">// expires</span>
  <span class="token keyword">var</span> date <span class="token operator">=</span> expires
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> date <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    date<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> expires<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">+=</span> <span class="token string">&#39;; expires=&#39;</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// domain</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNonEmptyString</span><span class="token punctuation">(</span>domain<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">+=</span> <span class="token string">&#39;; domain=&#39;</span> <span class="token operator">+</span> domain
  <span class="token punctuation">}</span>

  <span class="token comment">// path</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNonEmptyString</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">+=</span> <span class="token string">&#39;; path=&#39;</span> <span class="token operator">+</span> path
  <span class="token punctuation">}</span>

  <span class="token comment">// secure</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">[</span><span class="token string">&#39;secure&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">+=</span> <span class="token string">&#39;; secure&#39;</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> text
  <span class="token keyword">return</span> text
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  options<span class="token punctuation">[</span><span class="token string">&#39;expires&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
  options<span class="token punctuation">[</span><span class="token string">&#39;Max-Age&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">return</span> <span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> get<span class="token punctuation">,</span> set<span class="token punctuation">,</span> remove <span class="token punctuation">}</span>

</code></pre></div>`,4),e=[o];function c(k,u,l,i,r,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{g as __pageData,y as default};
