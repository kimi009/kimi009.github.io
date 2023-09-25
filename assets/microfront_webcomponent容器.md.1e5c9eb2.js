import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const m='{"title":"webcomponent \u5BB9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u4F7F\u7528\u65B9\u6CD5","slug":"\u4E00\u3001\u4F7F\u7528\u65B9\u6CD5"},{"level":2,"title":"\u521D\u6B21\u4F7F\u7528","slug":"\u521D\u6B21\u4F7F\u7528"},{"level":2,"title":"\u5E26\u6A21\u677F\u7684 shadow","slug":"\u5E26\u6A21\u677F\u7684-shadow"}],"relativePath":"microfront/webcomponent\u5BB9\u5668.md"}',p={},o=t(`<h1 id="webcomponent-\u5BB9\u5668" tabindex="-1">webcomponent \u5BB9\u5668 <a class="header-anchor" href="#webcomponent-\u5BB9\u5668" aria-hidden="true">#</a></h1><p><a href="https://zhuanlan.zhihu.com/p/268732230" target="_blank" rel="noopener noreferrer">\u4EC0\u4E48\u662F web components\uFF1F - \u77E5\u4E4E (zhihu.com)</a></p><h2 id="\u4E00\u3001\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4E00\u3001\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4E00\u3001\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><ul><li>1.1\u3001\u521B\u5EFA\u4E00\u4E2A\u7C7B\u6216\u51FD\u6570\u6765\u6307\u5B9A web \u7EC4\u4EF6\u7684\u529F\u80FD\uFF0C\u63A8\u8350\u8BF7\u4F7F\u7528 ECMAScript 2015 \u7684\u7C7B\u8BED\u6CD5\u3002</li><li>1.2\u3001\u4F7F\u7528 CustomElementRegistry.define() \u65B9\u6CD5\u6CE8\u518C\u81EA\u5DF1\u7684\u65B0\u81EA\u5B9A\u4E49\u5143\u7D20 \uFF0C\u5E76\u5411\u5176\u4F20\u9012\u8981\u5B9A\u4E49\u7684\u5143\u7D20\u540D\u79F0\u3001\u6307\u5B9A\u5143\u7D20\u529F\u80FD\u7684\u7C7B\u3001\u4EE5\u53CA\u53EF\u9009\u7684\u5176\u6240\u7EE7\u627F\u81EA\u7684\u5143\u7D20\u3002</li><li>1.3\u3001\u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u4F7F\u7528Element.attachShadow() \u65B9\u6CD5\u5C06\u4E00\u4E2Ashadow DOM\u9644\u52A0\u5230\u81EA\u5B9A\u4E49\u5143\u7D20\u4E0A\u3002\u4F7F\u7528\u539F\u751F\u7684DOM\u65B9\u6CD5\u5411shadow DOM\u4E2D\u6DFB\u52A0\u5B50\u5143\u7D20\u3001\u4E8B\u4EF6\u76D1\u542C\u5668\u7B49\u3002</li><li>1.4\u3001\u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u4F7F\u7528 &lt;template&gt;\u548C&lt;slot&gt; \u5B9A\u4E49\u4E00\u4E2AHTML\u6A21\u677F\u3002\u518D\u6B21\u4F7F\u7528\u5E38\u89C4DOM\u65B9\u6CD5\u514B\u9686\u6A21\u677F\u5E76\u5C06\u5176\u9644\u52A0\u5230shadow DOM\u4E2D\u3002</li><li>1.5\u3001\u6700\u540E\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u5C31\u50CF\u4F7F\u7528\u539F\u751FHTML\u5143\u7D20\u4E00\u6837</li></ul><h2 id="\u521D\u6B21\u4F7F\u7528" tabindex="-1">\u521D\u6B21\u4F7F\u7528 <a class="header-anchor" href="#\u521D\u6B21\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>webcomponent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>company-card</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>company-card</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">class</span> <span class="token class-name">CompanyCard</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
      <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//this\u8868\u793A\u5F53\u524D\u7684\u5B9E\u4F8B\u81EA\u5B9A\u4E49\u5143\u7D20</span>
        <span class="token comment">//\u5F00\u59CB\u521B\u5EFA\u5143\u7D20</span>
        <span class="token keyword">let</span> image <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        image<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;./1.png&quot;</span><span class="token punctuation">;</span>
        image<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&quot;200px&quot;</span><span class="token punctuation">;</span>
        image<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&quot;200px&quot;</span><span class="token punctuation">;</span>
        image<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        container<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> name <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        name<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        name<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&quot;\u6D4B\u8BD5webcomponent&quot;</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> email <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        email<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;email&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        email<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&quot;kimi@nb.com&quot;</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        btn<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        btn<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&quot;\u5F00\u59CB&quot;</span><span class="token punctuation">;</span>

        container<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> name<span class="token punctuation">,</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u4F7F\u7528customerElements.define()\u65B9\u6CD5\uFF0C\u5C06\u9875\u9762\u4E2D\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u548C</span>
    <span class="token comment">//\u7C7B\u5173\u8054\u8D77\u6765</span>
    window<span class="token punctuation">.</span>customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&quot;company-card&quot;</span><span class="token punctuation">,</span> CompanyCard<span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><p>:host</p><p><strong><code>:host</code></strong> CSS \u4F2A\u7C7B\u9009\u62E9\u5305\u542B\u5176\u5185\u90E8\u4F7F\u7528\u7684 CSS \u7684 shadow DOM \u7684\u6839\u5143\u7D20 - \u6362\u53E5\u8BDD\u8BF4\uFF0C\u8FD9\u5141\u8BB8\u4F60\u4ECE\u5176 shadow DOM \u4E2D\u9009\u62E9\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5143\u7D20\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host</a></p></li></ul><h2 id="\u5E26\u6A21\u677F\u7684-shadow" tabindex="-1">\u5E26\u6A21\u677F\u7684 shadow <a class="header-anchor" href="#\u5E26\u6A21\u677F\u7684-shadow" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>webcomponent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662Fshadow\u5916\u7684\u5143\u7D20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userCard<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">:host</span> <span class="token punctuation">{</span>
          <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
          <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
          <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
          <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
          <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 1px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.image</span> <span class="token punctuation">{</span>
          <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 auto<span class="token punctuation">;</span>
          <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.container</span> <span class="token punctuation">{</span>
          <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
          <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.container &gt; .name</span> <span class="token punctuation">{</span>
          <span class="token property">color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.container &gt; .ipt</span> <span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.btn</span> <span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
          <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ipt<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-card</span> <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./1.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5927\u540D\uFF1A<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user-card</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">class</span> <span class="token class-name">UserCard</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
      <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u81EA\u5B9A\u4E49\u5143\u7D20\u7684this.attachShadow\u65B9\u6CD5\uFF0C\u5F00\u542FShadow DOM</span>
        <span class="token comment">//\u53C2\u6570\u8868\u793Ashadow dom \u662F\u5C01\u95ED\u7684\uFF0C\u4E0D\u5141\u8BB8\u5916\u90E8\u8BBF\u95EE</span>
        <span class="token keyword">let</span> shadow <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;closed&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> tem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;userCard&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">,</span> tem<span class="token punctuation">,</span> tem<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> content <span class="token operator">=</span> tem<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> imgEle <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        imgEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;image&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        imgEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;width:46px;height:20px;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        content<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.container&gt;.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        shadow<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>

        shadow<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// console.log(document.querySelector(&#39;.ipt&#39;)) //\u62FF\u4E0D\u5230\uFF0Cshadow\u662F\u9694\u79BB\u7684</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parentElement<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.ipt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53EF\u4EE5\u62FF\u5230</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53 custom element \u9996\u6B21\u88AB\u63D2\u5165\u6587\u6863dom\u65F6\uFF0C\u88AB\u8C03\u7528&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">disconnectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53 custom element \u4ECE\u6587\u6863\u4E2D\u5220\u9664\u65F6\uFF0C\u88AB\u8C03\u7528&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">adoptedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53 custom element \u88AB\u79FB\u5230\u65B0\u7684\u6587\u6863\u4E2D\u65F6\uFF0C\u88AB\u8C03\u7528&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">attributeChangedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53 custom element \u589E\u52A0\uFF0C\u5220\u9664\uFF0C\u4FEE\u6539\u81EA\u8EAB\u5C5E\u6027\u65F6\uFF0C\u88AB\u8C03\u7528&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u4F7F\u7528customerElements.define()\u65B9\u6CD5\uFF0C\u5C06\u9875\u9762\u4E2D\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u548C</span>
    <span class="token comment">//\u7C7B\u5173\u8054\u8D77\u6765</span>
    window<span class="token punctuation">.</span>customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&quot;user-card&quot;</span><span class="token punctuation">,</span> UserCard<span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,9),c=[o];function e(u,l,k,i,r,g){return a(),s("div",null,c)}var q=n(p,[["render",e]]);export{m as __pageData,q as default};
