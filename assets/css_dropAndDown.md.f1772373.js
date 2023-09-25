import{_ as n,c as s,o as a,d as p}from"./app.87eb6f1c.js";const y='{"title":"\u6839\u636E\u5185\u5BB9\u5927\u5C0F\u52A8\u6001\u663E\u793A\u5C55\u5F00\u6536\u8D77","description":"","frontmatter":{},"headers":[],"relativePath":"css/dropAndDown.md"}',t={},o=p(`<h1 id="\u6839\u636E\u5185\u5BB9\u5927\u5C0F\u52A8\u6001\u663E\u793A\u5C55\u5F00\u6536\u8D77" tabindex="-1">\u6839\u636E\u5185\u5BB9\u5927\u5C0F\u52A8\u6001\u663E\u793A\u5C55\u5F00\u6536\u8D77 <a class="header-anchor" href="#\u6839\u636E\u5185\u5BB9\u5927\u5C0F\u52A8\u6001\u663E\u793A\u5C55\u5F00\u6536\u8D77" aria-hidden="true">#</a></h1><blockquote><p>\u4E0B\u9762\u662F\u57FA\u4E8E vue \u5199\u7684\uFF0C\u76F4\u63A5\u4E0A\u4EE3\u7801\u2764</p></blockquote><div class="language-js"><pre><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
      body <span class="token punctuation">{</span>
        <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span>wrapper <span class="token punctuation">{</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> 120px<span class="token punctuation">;</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> 5px<span class="token punctuation">;</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> black<span class="token punctuation">;</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
        <span class="token literal-property property">transition</span><span class="token operator">:</span> height <span class="token number">0</span><span class="token punctuation">.</span>5s ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span>wrapper <span class="token operator">&gt;</span> <span class="token punctuation">.</span>content <span class="token punctuation">{</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span>wrapper <span class="token operator">&gt;</span> <span class="token punctuation">.</span>arrow<span class="token operator">-</span>down <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>

      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span>arrow<span class="token operator">-</span>down<span class="token operator">-</span>container <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span>arrow<span class="token operator">-</span>down<span class="token operator">-</span>container<span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> 30px<span class="token punctuation">;</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* margin: -30px; */</span>
      <span class="token punctuation">}</span>
      img <span class="token punctuation">{</span>
        vertical<span class="token operator">-</span>align<span class="token operator">:</span> middle<span class="token punctuation">;</span>
        transition<span class="token operator">-</span>duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3s<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;wrapper&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;wrapper&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> content <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div
        ref<span class="token operator">=</span><span class="token string">&quot;arrowDown&quot;</span>
        <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;arrow-down&quot;</span>
        v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;hiddenDetail&quot;</span>
        @click<span class="token operator">=</span><span class="token string">&quot;lookAllData&quot;</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;arrow-down-container&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>img
            ref<span class="token operator">=</span><span class="token string">&quot;arrowPng&quot;</span>
            width<span class="token operator">=</span><span class="token string">&quot;20&quot;</span>
            height<span class="token operator">=</span><span class="token string">&quot;20&quot;</span>
            src<span class="token operator">=</span><span class="token string">&quot;arrow-down.svg&quot;</span>
            alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
      <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">hiddenDetail</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lookAll</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">let</span> r1 <span class="token operator">=</span>
                <span class="token string">&#39;f\u9644\u4EF6\u662F\u6D6A\u8D39\u5C31\u662F\u4E86\u7684\u89E3\u653E\u62C9\u8428\u89E3\u653E\u5386\u53F2\u4EA4\u950B\u5C01\u5EFA\u52BF\u529B\u9644\u4EF6\u91CC\u662F\u57FA\u8F85\u7F57\u65AF\u89E3\u653E\u4E86f\u9644\u4EF6\u662F\u6D6A\u8D39\u5C31\u662F\u4E86\u7684\u89E3\u653E\u62C9\u8428\u89E3\u653E\u5386\u53F2\u4EA4\u950B\u5C01\u5EFA\u52BF\u529B\u9644\u4EF6\u91CC\u662F\u57FA\u8F85\u7F57\u65AF\u89E3\u653E\u4E86f\u9644\u4EF6\u662F\u6D6A\u8D39\u5C31\u662F\u4E86\u7684\u89E3\u653E\u62C9\u8428\u89E3\u653E\u5386\u53F2\u4EA4\u950B\u5C01\u5EFA\u52BF\u529B\u9644\u4EF6\u91CC\u662F\u57FA\u8F85\u7F57\u65AF\u89E3\u653E\u4E86f\u9644\u4EF6\u662F\u6D6A\u8D39\u5C31\u662F\u4E86\u7684\u89E3\u653E\u62C9\u8428\u89E3\u653E\u5386\u53F2\u4EA4\u950B\u5C01\u5EFA\u52BF\u529B\u9644\u4EF6\u91CC\u662F\u57FA\u8F85\u7F57\u65AF\u89E3\u653E\u4E86f\u9644\u4EF6\u662F\u6D6A\u8D39\u5C31\u662F\u4E86\u7684\u89E3\u653E\u62C9\u8428\u89E3\u653E\u5386\u53F2\u4EA4\u950B\u5C01\u5EFA\u52BF\u529B\u9644\u4EF6\u91CC\u662F\u57FA\u8F85\u7F57\u65AF\u89E3\u653E\u4E86&#39;</span>
              <span class="token keyword">let</span> r2 <span class="token operator">=</span> <span class="token string">&#39;\u9644\u4EF6\u662F\u6D6A\u8D39\u5C31\u7F57\u65AF\u798F\u5956\u52B1\u5341\u5206\u6FC0\u70C8&#39;</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>content <span class="token operator">=</span> r1
              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> clientHeight <span class="token operator">=</span>
                  document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">||</span>
                  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight
                <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>wrapper
                <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>content
                <span class="token keyword">this</span><span class="token punctuation">.</span>hiddenDetail <span class="token operator">=</span> content<span class="token punctuation">.</span>scrollHeight <span class="token operator">&gt;</span> wrapper<span class="token punctuation">.</span>clientHeight
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
                  content<span class="token punctuation">.</span>clientHeight<span class="token punctuation">,</span>
                  content<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">,</span>
                  wrapper<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">,</span>
                  wrapper<span class="token punctuation">.</span>clientHeight
                <span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>hiddenDetail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  wrapper<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;100%&#39;</span>
                  wrapper<span class="token punctuation">.</span>style<span class="token punctuation">.</span>marginBottom <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">lookAllData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> wrapperEle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>wrapper
            <span class="token keyword">const</span> arrowDownEle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>arrowDown
            <span class="token keyword">const</span> arrowPngEle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>arrowPng
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lookAll<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> wrapperScrollHeight <span class="token operator">=</span> wrapperEle<span class="token punctuation">.</span>scrollHeight
              wrapperEle<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>wrapperScrollHeight <span class="token operator">+</span> <span class="token number">20</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span>
              <span class="token comment">// arrowDownEle.style.position = &#39;static&#39;</span>
              <span class="token comment">// arrowDownEle.style.paddingTop = &#39;0&#39;</span>
              arrowPngEle<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rotate(180deg)</span><span class="token template-punctuation string">\`</span></span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>lookAll <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
              wrapperEle<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;120px&#39;</span>
              arrowDownEle<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">&#39;absolute&#39;</span>
              arrowPngEle<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rotate(0deg)</span><span class="token template-punctuation string">\`</span></span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>lookAll <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre></div>`,3),e=[o];function c(r,l,k,u,i,g){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{y as __pageData,w as default};
