import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const g='{"title":"\u5927\u5C4F\u54CD\u5E94\u5F0F\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001vm vh","slug":"\u4E00\u3001vm-vh"},{"level":3,"title":"1.1\u3001vm vh","slug":"_1-1\u3001vm-vh"},{"level":3,"title":"1.2\u3001less\u65B9\u6848","slug":"_1-2\u3001less\u65B9\u6848"},{"level":3,"title":"1.3\u3001\u5B9A\u4E49js\u6837\u5F0F\u5904\u7406\u51FD\u6570","slug":"_1-3\u3001\u5B9A\u4E49js\u6837\u5F0F\u5904\u7406\u51FD\u6570"},{"level":3,"title":"1.4\u3001\u5C4F\u5E55\u53D8\u5316\u540E\uFF0C\u56FE\u8868\u81EA\u52A8\u8C03\u6574","slug":"_1-4\u3001\u5C4F\u5E55\u53D8\u5316\u540E\uFF0C\u56FE\u8868\u81EA\u52A8\u8C03\u6574"},{"level":3,"title":"1.5\u3001\u56FE\u8868\u5B57\u4F53\u3001\u95F4\u8DDD\u3001\u4F4D\u79FB\u7B49\u5C3A\u5BF8\u81EA\u9002\u5E94","slug":"_1-5\u3001\u56FE\u8868\u5B57\u4F53\u3001\u95F4\u8DDD\u3001\u4F4D\u79FB\u7B49\u5C3A\u5BF8\u81EA\u9002\u5E94"},{"level":2,"title":"\u4E8C\u3001scale\u65B9\u6848","slug":"\u4E8C\u3001scale\u65B9\u6848"},{"level":3,"title":"2.1\u3001html \u90E8\u5206","slug":"_2-1\u3001html-\u90E8\u5206"},{"level":3,"title":"2.2\u3001js\u90E8\u5206","slug":"_2-2\u3001js\u90E8\u5206"},{"level":3,"title":"2.3\u3001css","slug":"_2-3\u3001css"},{"level":3,"title":"\u5B9E\u73B0\u601D\u8DEF","slug":"\u5B9E\u73B0\u601D\u8DEF"},{"level":3,"title":"\u5077\u61D2\u65B9\u6CD5-\u63D2\u4EF6","slug":"\u5077\u61D2\u65B9\u6CD5-\u63D2\u4EF6"},{"level":2,"title":"\u4E09\u3001rem+vh+vw","slug":"\u4E09\u3001rem-vh-vw"},{"level":3,"title":"3.1\u3001\u5B9E\u73B0\u601D\u8DEF","slug":"_3-1\u3001\u5B9E\u73B0\u601D\u8DEF"},{"level":3,"title":"3.2\u3001\u5B9E\u73B0\u65B9\u6848","slug":"_3-2\u3001\u5B9E\u73B0\u65B9\u6848"}],"relativePath":"css/\u5927\u5C4F\u54CD\u5E94\u5F0F\u5E03\u5C40.md"}',p={},o=t(`<h1 id="\u5927\u5C4F\u54CD\u5E94\u5F0F\u5E03\u5C40" tabindex="-1">\u5927\u5C4F\u54CD\u5E94\u5F0F\u5E03\u5C40 <a class="header-anchor" href="#\u5927\u5C4F\u54CD\u5E94\u5F0F\u5E03\u5C40" aria-hidden="true">#</a></h1><p><a href="https://blog.csdn.net/hucbmz/article/details/127105020" target="_blank" rel="noopener noreferrer">(73\u6761\u6D88\u606F) \u5168\u7F51echarts\u6848\u4F8B\u8D44\u6E90\u5927\u603B\u7ED3\u548Cecharts\u7684\u9AD8\u6548\u4F7F\u7528\u6280\u5DE7\uFF08\u7EC6\u8282\u7248\uFF09_hucbmz\u7684\u535A\u5BA2-CSDN\u535A\u5BA2_echarts\u793E\u533A\u6848\u4F8B</a></p><p><a href="https://blog.csdn.net/qq_18932003/article/details/120596333" target="_blank" rel="noopener noreferrer">(73\u6761\u6D88\u606F) Vue+Echarts\u4F01\u4E1A\u7EA7\u5927\u5C4F\u9879\u76EE\u9002\u914D\u65B9\u6848_qq_18932003\u7684\u535A\u5BA2-CSDN\u535A\u5BA2_echarts\u5927\u5C4F\u9002\u914D</a></p><p><a href="https://juejin.cn/post/7075253747567296548" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7075253747567296548</a></p><h2 id="\u4E00\u3001vm-vh" tabindex="-1">\u4E00\u3001vm vh <a class="header-anchor" href="#\u4E00\u3001vm-vh" aria-hidden="true">#</a></h2><h3 id="_1-1\u3001vm-vh" tabindex="-1">1.1\u3001vm vh <a class="header-anchor" href="#_1-1\u3001vm-vh" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>\u5047\u8BBE\u8BBE\u8BA1\u7A3F\u5C3A\u5BF8\u4E3A <span class="token number">1920</span><span class="token operator">*</span><span class="token number">1080</span>\uFF08\u505A\u4E4B\u524D\u4E00\u5B9A\u95EE\u6E05\u695A ui \u8BBE\u8BA1\u7A3F\u7684\u5C3A\u5BF8\uFF09

\u5373\uFF1A
\u7F51\u9875\u5BBD\u5EA6<span class="token operator">=</span>1920px
\u7F51\u9875\u9AD8\u5EA6<span class="token operator">=</span>1080px

\u6211\u4EEC\u90FD\u77E5\u9053
\u7F51\u9875\u5BBD\u5EA6<span class="token operator">=</span>100vw
\u7F51\u9875\u5BBD\u5EA6<span class="token operator">=</span>100vh

\u6240\u4EE5\uFF0C\u5728 1920px<span class="token operator">*</span>1080px \u7684\u5C4F\u5E55\u5206\u8FA8\u7387\u4E0B

1920px <span class="token operator">=</span> 100vw

1080px <span class="token operator">=</span> 100vh

\u8FD9\u6837\u4E00\u6765\uFF0C\u4EE5\u4E00\u4E2A\u5BBD 300px \u548C 200px \u7684 div \u6765\u8BF4\uFF0C\u5176\u6240\u5360\u7684\u5BBD\u9AD8\uFF0C\u4EE5 vw \u548C vh \u4E3A\u5355\u4F4D\uFF0C\u8BA1\u7B97\u65B9\u5F0F\u5982\u4E0B<span class="token operator">:</span>

vwDiv <span class="token operator">=</span> <span class="token punctuation">(</span>300px <span class="token operator">/</span> 1920px <span class="token punctuation">)</span> <span class="token operator">*</span> 100vw
vhDiv <span class="token operator">=</span> <span class="token punctuation">(</span>200px <span class="token operator">/</span> 1080px <span class="token punctuation">)</span> <span class="token operator">*</span> 100vh

\u6240\u4EE5\uFF0C\u5C31\u5728 <span class="token number">1920</span><span class="token operator">*</span><span class="token number">1080</span> \u7684\u5C4F\u5E55\u5206\u8FA8\u7387\u4E0B\uFF0C\u8BA1\u7B97\u51FA\u4E86\u5355\u4E2A div \u7684\u5BBD\u9AD8

\u5F53\u5C4F\u5E55\u653E\u5927\u6216\u8005\u7F29\u5C0F\u65F6\uFF0Cdiv \u8FD8\u662F\u4EE5 vw \u548C vh \u4F5C\u4E3A\u5BBD\u9AD8\u7684\uFF0C\u5C31\u4F1A\u81EA\u52A8\u9002\u5E94\u4E0D\u540C\u5206\u8FA8\u7387\u7684\u5C4F\u5E55
</code></pre></div><h4 id="_1-1-1\u3001util-sass" tabindex="-1">1.1.1\u3001util.sass <a class="header-anchor" href="#_1-1-1\u3001util-sass" aria-hidden="true">#</a></h4><div class="language-less"><pre><code><span class="token comment">// \u4F7F\u7528 scss \u7684 math \u51FD\u6570\uFF0Chttps://sass-lang.com/documentation/breaking-changes/slash-div</span>
<span class="token variable">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u9ED8\u8BA4\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6</span>
$<span class="token property">designWidth</span><span class="token punctuation">:</span> 1920<span class="token punctuation">;</span>
<span class="token comment">// \u9ED8\u8BA4\u8BBE\u8BA1\u7A3F\u7684\u9AD8\u5EA6</span>
$<span class="token property">designHeight</span><span class="token punctuation">:</span> 1080<span class="token punctuation">;</span>

<span class="token comment">// px \u8F6C\u4E3A vw \u7684\u51FD\u6570</span>
<span class="token atrule">@function vw<span class="token punctuation">(</span>$px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token variable">@return</span> math.<span class="token function">div</span><span class="token punctuation">(</span>$px<span class="token punctuation">,</span> $designWidth<span class="token punctuation">)</span> <span class="token operator">*</span> 100vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// px \u8F6C\u4E3A vh \u7684\u51FD\u6570</span>
<span class="token atrule">@function vh<span class="token punctuation">(</span>$px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token variable">@return</span> math.<span class="token function">div</span><span class="token punctuation">(</span>$px<span class="token punctuation">,</span> $designHeight<span class="token punctuation">)</span> <span class="token operator">*</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_1-1-2\u3001vue-config-js" tabindex="-1">1.1.2\u3001vue.config.js <a class="header-anchor" href="#_1-1-2\u3001vue-config-js" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;app name&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5168\u5C40\u914D\u7F6E utils.scs\uFF0C\u8BE6\u7EC6\u914D\u7F6E\u53C2\u8003 vue-cli \u5B98\u7F51</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">prependData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &quot;@/styles/utils.scss&quot;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_1-1-3\u3001vue\u4E2D\u4F7F\u7528" tabindex="-1">1.1.3\u3001vue\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#_1-1-3\u3001vue\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>   
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Box&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scoped<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 
 \u76F4\u63A5\u4F7F\u7528 vw \u548C vh \u51FD\u6570\uFF0C\u5C06\u50CF\u7D20\u503C\u4F20\u8FDB\u53BB\uFF0C\u5F97\u5230\u7684\u5C31\u662F\u5177\u4F53\u7684 vw vh \u5355\u4F4D   
 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">vw</span><span class="token punctuation">(</span>300<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">vh</span><span class="token punctuation">(</span>100<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">vh</span><span class="token punctuation">(</span>16<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">vw</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token function">vh</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token function">vh</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span> solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_1-2\u3001less\u65B9\u6848" tabindex="-1">1.2\u3001less\u65B9\u6848 <a class="header-anchor" href="#_1-2\u3001less\u65B9\u6848" aria-hidden="true">#</a></h3><h4 id="_1-2-1\u3001util-less" tabindex="-1">1.2.1\u3001util.less <a class="header-anchor" href="#_1-2-1\u3001util-less" aria-hidden="true">#</a></h4><div class="language-less"><pre><code><span class="token variable">@charset</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u9ED8\u8BA4\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6</span>
<span class="token variable">@designWidth<span class="token punctuation">:</span></span> 1920<span class="token punctuation">;</span>

<span class="token comment">// \u9ED8\u8BA4\u8BBE\u8BA1\u7A3F\u7684\u9AD8\u5EA6</span>
<span class="token variable">@designHeight<span class="token punctuation">:</span></span> 1080<span class="token punctuation">;</span>

<span class="token selector">.px2vw(<span class="token variable">@name</span>, <span class="token variable">@px</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">@{name}</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@px</span> <span class="token operator">/</span> <span class="token variable">@designWidth</span><span class="token punctuation">)</span> <span class="token operator">*</span> 100vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.px2vh(<span class="token variable">@name</span>, <span class="token variable">@px</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">@{name}</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@px</span> <span class="token operator">/</span> <span class="token variable">@designHeight</span><span class="token punctuation">)</span> <span class="token operator">*</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.px2font(<span class="token variable">@px</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@px</span> <span class="token operator">/</span> <span class="token variable">@designWidth</span><span class="token punctuation">)</span> <span class="token operator">*</span> 100vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_1-2-2\u3001vue-config-js" tabindex="-1">1.2.2\u3001vue.config.js <a class="header-anchor" href="#_1-2-2\u3001vue-config-js" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;app name&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5168\u5C40\u914D\u7F6Eutils.scss</span>
    <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &quot;@/styles/utils.less&quot;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_1-2-3\u3001vue\u6587\u4EF6\u4E2D\u4F7F\u7528" tabindex="-1">1.2.3\u3001vue\u6587\u4EF6\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#_1-2-3\u3001vue\u6587\u4EF6\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>   
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Box&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scoped<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 
 \u76F4\u63A5\u4F7F\u7528 vw \u548C vh \u51FD\u6570\uFF0C\u5C06\u50CF\u7D20\u503C\u4F20\u8FDB\u53BB\uFF0C\u5F97\u5230\u7684\u5C31\u662F\u5177\u4F53\u7684 vw vh\u5355\u4F4D   
 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    .<span class="token function">px2vw</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> 300<span class="token punctuation">)</span><span class="token punctuation">;</span>
    .<span class="token function">px2vh</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> 100<span class="token punctuation">)</span><span class="token punctuation">;</span>
    .<span class="token function">px2font</span><span class="token punctuation">(</span>16<span class="token punctuation">)</span><span class="token punctuation">;</span>
    .<span class="token function">px2vw</span><span class="token punctuation">(</span>margin-left<span class="token punctuation">,</span> 300<span class="token punctuation">)</span><span class="token punctuation">;</span>
    .<span class="token function">px2vh</span><span class="token punctuation">(</span>margin-top<span class="token punctuation">,</span> 100<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_1-3\u3001\u5B9A\u4E49js\u6837\u5F0F\u5904\u7406\u51FD\u6570" tabindex="-1">1.3\u3001\u5B9A\u4E49js\u6837\u5F0F\u5904\u7406\u51FD\u6570 <a class="header-anchor" href="#_1-3\u3001\u5B9A\u4E49js\u6837\u5F0F\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u9AD8</span>
<span class="token keyword">const</span> designWidth <span class="token operator">=</span> <span class="token number">1920</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> designHeight <span class="token operator">=</span> <span class="token number">1080</span><span class="token punctuation">;</span>

<span class="token comment">// px\u8F6Cvw</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">px2vw</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_px</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>_px <span class="token operator">*</span> <span class="token number">100.0</span><span class="token punctuation">)</span> <span class="token operator">/</span> designWidth <span class="token operator">+</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">px2vh</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_px</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>_px <span class="token operator">*</span> <span class="token number">100.0</span><span class="token punctuation">)</span> <span class="token operator">/</span> designHeight <span class="token operator">+</span> <span class="token string">&#39;vh&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">px2font</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_px</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>_px <span class="token operator">*</span> <span class="token number">100.0</span><span class="token punctuation">)</span> <span class="token operator">/</span> designWidth <span class="token operator">+</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_1-4\u3001\u5C4F\u5E55\u53D8\u5316\u540E\uFF0C\u56FE\u8868\u81EA\u52A8\u8C03\u6574" tabindex="-1">1.4\u3001\u5C4F\u5E55\u53D8\u5316\u540E\uFF0C\u56FE\u8868\u81EA\u52A8\u8C03\u6574 <a class="header-anchor" href="#_1-4\u3001\u5C4F\u5E55\u53D8\u5316\u540E\uFF0C\u56FE\u8868\u81EA\u52A8\u8C03\u6574" aria-hidden="true">#</a></h3><blockquote><p>\u8FD9\u79CD\u4F7F\u7528\u65B9\u5F0F\u6709\u4E2A\u5F0A\u7AEF\uFF0C\u5C31\u662F\u5C4F\u5E55\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316\u540E\uFF0C\u9700\u8981\u624B\u52A8\u5237\u65B0\u4E00\u4E0B\u624D\u80FD\u5B8C\u6210\u81EA\u9002\u5E94\u8C03\u6574</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F60\u9700\u8981\u5728\u5404\u4E2A\u56FE\u8868\u4E2D\u76D1\u542C\u9875\u9762\u5C3A\u5BF8\u53D8\u5316\uFF0C\u91CD\u65B0\u8C03\u6574\u56FE\u8868\uFF0C</p><p>\u5728 vue \u9879\u76EE\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u501F\u52A9<code>element-resize-detector</code>\uFF0C\u6700\u597D\u5C01\u88C5\u4E2A resize \u7684\u6307\u4EE4\uFF0C\u5728\u5404\u56FE\u8868\u4E2D\u5C31\u53EA\u8981\u4F7F\u7528\u8BE5\u6307\u4EE4\u5C31\u53EF\u4EE5\u4E86\uFF0C\u6BD5\u7ADF\u4F5C\u4E3A\u7A0B\u5E8F\u5458\uFF0C\u80FD\u5077\u61D2\u5C31\u5077\u61D2</p></blockquote><ul><li><p>\u5B89\u88C5</p><blockquote><p>npm install element-resize-detector --save</p></blockquote></li><li><p>\u5F15\u5165\u5DE5\u5177\u5305\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u6216\u8005\u5728\u5355\u72EC\u7684 js \u4E2D\u4F7F\u7528</p><blockquote><p>import resizeDetector from &#39;element-resize-detector&#39;</p></blockquote></li><li><p>\u5C01\u88C5dirctive</p><div class="language-js"><pre><code><span class="token comment">// directive.js</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ECharts <span class="token keyword">from</span> <span class="token string">&quot;echarts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> elementResizeDetectorMaker <span class="token keyword">from</span> <span class="token string">&quot;element-resize-detector&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">HANDLER</span> <span class="token operator">=</span> <span class="token string">&quot;_vue_resize_handler&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">[</span><span class="token constant">HANDLER</span><span class="token punctuation">]</span> <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
    <span class="token operator">?</span> binding<span class="token punctuation">.</span><span class="token function-variable function">value</span>
    <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> chart <span class="token operator">=</span> ECharts<span class="token punctuation">.</span><span class="token function">getInstanceByDom</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        chart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u76D1\u542C\u7ED1\u5B9A\u7684div\u5927\u5C0F\u53D8\u5316\uFF0C\u66F4\u65B0 echarts \u5927\u5C0F</span>
  <span class="token function">elementResizeDetectorMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listenTo</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> el<span class="token punctuation">[</span><span class="token constant">HANDLER</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">unbind</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// window.removeEventListener(&quot;resize&quot;, el[HANDLER]);</span>
  <span class="token function">elementResizeDetectorMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> el<span class="token punctuation">[</span><span class="token constant">HANDLER</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">delete</span> el<span class="token punctuation">[</span><span class="token constant">HANDLER</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u81EA\u5B9A\u4E49\u6307\u4EE4\uFF1Av-chart-resize \u793A\u4F8B\uFF1Av-chart-resize=&quot;fn&quot;</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;chart-resize&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> bind<span class="token punctuation">,</span> unbind <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p>main.js\u5F15\u5165</p><blockquote><p>import &#39;@/directive/directive&#39;;</p></blockquote></li><li><p>html\u4EE3\u7801</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>linechart<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-chart-resize</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><strong>\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u56FE\u8868\u4E2D\u5982\u679C\u9700\u8981 tab \u5207\u6362\u52A8\u6001\u66F4\u65B0\u56FE\u8868\u6570\u636E\uFF0C\u5728\u66F4\u65B0\u6570\u636E\u65F6\u4E00\u5B9A\u4E0D\u8981\u7528 echarts \u7684 dispose \u65B9\u6CD5\u5148\u5C06\u56FE\u8868\u79FB\u9664\uFF0C\u518D\u91CD\u65B0\u7ED8\u5236\uFF0C\u56E0\u4E3A resize \u6307\u4EE4\u4E2D\u6302\u8F7D\u5230\u7684\u56FE\u8868\u5B9E\u4F8B\u8FD8\u662F\u65E7\u7684\uFF0C\u5C31\u76D1\u542C\u4E0D\u5230\u65B0\u7684 chart \u5143\u7D20\u7684 resize \u4E86\uFF0C\u66F4\u65B0\u6570\u636E\u53EA\u9700\u8981\u7528 chart \u7684 setOption \u65B9\u6CD5\u91CD\u65B0\u8BBE\u7F6E\u914D\u7F6E\u9879\u5373\u53EF\u3002</strong></li></ul></li></ul><h3 id="_1-5\u3001\u56FE\u8868\u5B57\u4F53\u3001\u95F4\u8DDD\u3001\u4F4D\u79FB\u7B49\u5C3A\u5BF8\u81EA\u9002\u5E94" tabindex="-1">1.5\u3001\u56FE\u8868\u5B57\u4F53\u3001\u95F4\u8DDD\u3001\u4F4D\u79FB\u7B49\u5C3A\u5BF8\u81EA\u9002\u5E94 <a class="header-anchor" href="#_1-5\u3001\u56FE\u8868\u5B57\u4F53\u3001\u95F4\u8DDD\u3001\u4F4D\u79FB\u7B49\u5C3A\u5BF8\u81EA\u9002\u5E94" aria-hidden="true">#</a></h3><ul><li><strong>echarts \u7684\u5B57\u4F53\u5927\u5C0F\u53EA\u652F\u6301\u5177\u4F53\u6570\u503C\uFF08\u50CF\u7D20\uFF09\uFF0C\u4E0D\u80FD\u7528\u767E\u5206\u6BD4\u6216\u8005 vw \u7B49\u5C3A\u5BF8\uFF0C\u4E00\u822C\u5B57\u4F53\u4E0D\u4F1A\u53BB\u505A\u81EA\u9002\u5E94\uFF0C\u5F53\u5BBD\u9AD8\u6BD4\u8DDF ui \u7A3F\u6BD4\u4F8B\u51FA\u5165\u592A\u5927\u65F6\uFF0C\u4F1A\u51FA\u73B0\u6587\u5B57\u8DDF\u56FE\u8868\u91CD\u53E0\u7684\u60C5\u51B5</strong></li></ul><p>\u8FD9\u91CC\u6211\u4EEC\u5C31\u9700\u8981\u5C01\u88C5\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\uFF0C\u6765\u5904\u7406\u56FE\u8868\u4E2D\u6587\u5B57\u81EA\u9002\u5E94\u4E86\u{1F447}</p><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u91CC\u4EE5\u4F60\u7684\u8BBE\u8BA1\u7A3F\u662F 1920*1080 \u4E3A\u4F8B\uFF0C\u5373\u7F51\u9875\u5BBD\u5EA6\u662F 1920px (<strong>\u505A\u4E4B\u524D\u4E00\u5B9A\u95EE\u6E05\u695A ui \u8BBE\u8BA1\u7A3F\u7684\u5C3A\u5BF8</strong>\uFF09</li><li>\u628A\u8FD9\u4E2A\u51FD\u6570\u5199\u5728\u4E00\u4E2A\u5355\u72EC\u7684\u5DE5\u5177\u6587\u4EF6<code>dataUtil.js</code>\u91CC\u9762\uFF0C\u5728\u9700\u8981\u7684\u65F6\u5019\u8C03\u7528</li><li>\u5176\u539F\u7406\u662F\u8BA1\u7B97\u51FA\u5F53\u524D\u5C4F\u5E55\u5BBD\u5EA6\u548C\u9ED8\u8BA4\u8BBE\u8BA1\u5BBD\u5EA6\u7684\u6BD4\u503C\uFF0C\u5C06\u539F\u59CB\u7684\u5C3A\u5BF8\u4E58\u4EE5\u8BE5\u503C</li><li>\u53E6\u5916\uFF0C\u5176\u5B83 echarts \u7684\u914D\u7F6E\u9879\uFF0C\u6BD4\u5982\u95F4\u8DDD\u3001\u5B9A\u4F4D\u3001\u8FB9\u8DDD\u4E5F\u53EF\u4EE5\u7528\u8BE5\u51FD\u6570</li></ul><h4 id="_1-5-1\u3001datautil-js" tabindex="-1">1.5.1\u3001dataUtil.js <a class="header-anchor" href="#_1-5-1\u3001datautil-js" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token comment">// Echarts\u56FE\u8868\u5B57\u4F53\u3001\u95F4\u8DDD\u81EA\u9002\u5E94</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">fitChartSize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">size<span class="token punctuation">,</span>defalteWidth <span class="token operator">=</span> <span class="token number">1920</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> clientWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token operator">||</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token operator">||</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clientWidth<span class="token punctuation">)</span> <span class="token keyword">return</span> size<span class="token punctuation">;</span>
  <span class="token keyword">let</span> scale <span class="token operator">=</span> <span class="token punctuation">(</span>clientWidth <span class="token operator">/</span> defalteWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">(</span>size<span class="token operator">*</span>scale<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_1-5-2\u3001\u5C06\u51FD\u6570\u6302\u8F7D\u5230\u539F\u578B\u4E0A" tabindex="-1">1.5.2\u3001\u5C06\u51FD\u6570\u6302\u8F7D\u5230\u539F\u578B\u4E0A <a class="header-anchor" href="#_1-5-2\u3001\u5C06\u51FD\u6570\u6302\u8F7D\u5230\u539F\u578B\u4E0A" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>fitChartSize<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@src/utils/dataUtil.js&#39;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>fitChartFont <span class="token operator">=</span> fitChartSize<span class="token punctuation">;</span>
</code></pre></div><h4 id="_1-5-3\u3001\u8FD9\u6837\u4F60\u53EF\u4EE5\u5728-vue\u6587\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528this-fitchartsize-\u8C03\u7528" tabindex="-1">1.5.3\u3001\u8FD9\u6837\u4F60\u53EF\u4EE5\u5728<code>.vue</code>\u6587\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528<code>this.fitChartSize()</code>\u8C03\u7528 <a class="header-anchor" href="#_1-5-3\u3001\u8FD9\u6837\u4F60\u53EF\u4EE5\u5728-vue\u6587\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528this-fitchartsize-\u8C03\u7528" aria-hidden="true">#</a></h4><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartsdom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-chart-resize</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;dashboardChart&quot;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEchart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getEchart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> myChart <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>chart<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;transparent&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;{a} &lt;br/&gt;{b} : {c}%&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fitChartSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fitChartSize</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fitChartSize</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fitChartSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">containLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">calculable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#0db1cdcc&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u8BA1\u5212\u6295\u5165&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;funnel&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;45%&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;70%&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&quot;5%&quot;</span><span class="token punctuation">,</span>

            <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">funnelAlign</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>

            <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// for pie</span>

            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0B\u535530%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u54A8\u8BE255%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">65</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u70B9\u51FB65%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u8BBF\u95EE62%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C55\u73B080%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> a<span class="token punctuation">.</span>value <span class="token operator">-</span> b<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;inside&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fitChartSize</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fitChartSize</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.3)&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>

          <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#0C66FF&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5B9E\u9645\u6295\u5165&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;funnel&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;45%&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;70%&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>

            <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">funnelAlign</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>

            <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// for pie</span>

            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0B\u535535%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u54A8\u8BE240%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u8BBF\u95EE70%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u70B9\u51FB90%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">95</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C55\u73B095%&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> a<span class="token punctuation">.</span>value <span class="token operator">-</span> b<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;inside&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fitChartSize</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowOffsetY</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fitChartSize</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.3)&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.chartsdom</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u4E8C\u3001scale\u65B9\u6848" tabindex="-1">\u4E8C\u3001scale\u65B9\u6848 <a class="header-anchor" href="#\u4E8C\u3001scale\u65B9\u6848" aria-hidden="true">#</a></h2><ul><li>\u901A\u8FC7 css \u7684 scale \u5C5E\u6027\uFF0C\u6839\u636E\u5C4F\u5E55\u5927\u5C0F\uFF0C\u5BF9\u56FE\u8868\u8FDB\u884C\u6574\u4F53\u7684\u7B49\u6BD4\u7F29\u653E\uFF0C\u4ECE\u800C\u8FBE\u5230\u81EA\u9002\u5E94\u6548\u679C <ul><li>\u5F53\u5C4F\u5E55\u7684\u5C3A\u5BF8\u6BD4\u4F8B\u521A\u597D\u662F 16:9 \u65F6\uFF0C\u9875\u9762\u80FD\u521A\u597D\u5168\u5C4F\u5C55\u793A\uFF0C\u5185\u5BB9\u5360\u6EE1\u663E\u793A\u5668</li><li>\u5F53\u5C4F\u5E55\u7684\u5C3A\u5BF8\u6BD4\u4F8B\u5C0F\u4E8E 16:9 \u65F6\uFF0C\u9875\u9762\u4E0A\u4E0B\u7559\u767D\uFF0C\u5DE6\u53F3\u5360\u6EE1\u5E76\u4E0A\u4E0B\u5C45\u4E2D\uFF0C\u663E\u793A\u6BD4\u4F8B\u4FDD\u6301 16:9</li><li>\u5F53\u5C4F\u5E55\u5C3A\u5BF8\u6BD4\u4F8B\u5927\u4E8E 16:9 \u65F6\uFF0C\u9875\u9762\u5DE6\u53F3\u7559\u767D\uFF0C\u4E0A\u4E0B\u5360\u6EE1\u5E76\u5C45\u4E2D\uFF0C\u663E\u793A\u6BD4\u4F8B\u4FDD\u6301 16:9</li></ul></li></ul><h3 id="_2-1\u3001html-\u90E8\u5206" tabindex="-1">2.1\u3001<strong>html \u90E8\u5206</strong> <a class="header-anchor" href="#_2-1\u3001html-\u90E8\u5206" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="_2-2\u3001js\u90E8\u5206" tabindex="-1">2.2\u3001js\u90E8\u5206 <a class="header-anchor" href="#_2-2\u3001js\u90E8\u5206" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u5316\u81EA\u9002\u5E94  ----\u5728\u521A\u663E\u793A\u7684\u65F6\u5019\u5C31\u5F00\u59CB\u9002\u914D\u4E00\u6B21</span>
  <span class="token function">handleScreenAuto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7ED1\u5B9A\u81EA\u9002\u5E94\u51FD\u6570   ---\u9632\u6B62\u6D4F\u89C8\u5668\u680F\u53D8\u5316\u540E\u4E0D\u518D\u9002\u914D</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleScreenAuto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">deleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>onresize <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6570\u636E\u5927\u5C4F\u81EA\u9002\u5E94\u51FD\u6570</span>
  <span class="token function">handleScreenAuto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> designDraftWidth <span class="token operator">=</span> <span class="token number">1920</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6</span>
    <span class="token keyword">const</span> designDraftHeight <span class="token operator">=</span> <span class="token number">960</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u8BA1\u7A3F\u7684\u9AD8\u5EA6</span>
    <span class="token comment">// \u6839\u636E\u5C4F\u5E55\u7684\u53D8\u5316\u9002\u914D\u7684\u6BD4\u4F8B</span>
    <span class="token keyword">const</span> scale <span class="token operator">=</span>
      document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">&lt;</span>
      designDraftWidth <span class="token operator">/</span> designDraftHeight
        <span class="token operator">?</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span> designDraftWidth
        <span class="token operator">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">/</span> designDraftHeight<span class="token punctuation">;</span>
    <span class="token comment">// \u7F29\u653E\u6BD4\u4F8B</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>
      <span class="token string">&#39;#screen&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">scale(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>scale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) translate(-50%, -50%)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h3 id="_2-3\u3001css" tabindex="-1">2.3\u3001css <a class="header-anchor" href="#_2-3\u3001css" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token comment">/*
  \u9664\u4E86\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u9AD8\u662F\u6839\u636E\u60A8\u81EA\u5DF1\u7684\u8BBE\u8BA1\u7A3F\u51B3\u5B9A\u4EE5\u5916\uFF0C\u5176\u4ED6\u590D\u5236\u7C98\u8D34\u5C31\u5B8C\u4E8B
*/</span>  
<span class="token selector">.screen-root</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token selector">.screen</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span>  //\u8BBE\u8BA1\u7A3F\u7684\u5BBD\u5EA6
        <span class="token property">height</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>  //\u8BBE\u8BA1\u7A3F\u7684\u9AD8\u5EA6
        <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> -50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1">\u5B9E\u73B0\u601D\u8DEF <a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a></h3><p><strong>\u5982\u4F55\u7F29\u653E</strong></p><p>\u5F53<code>\u5C4F\u5E55\u5BBD\u9AD8\u6BD4 &lt; \u8BBE\u8BA1\u7A3F\u5BBD\u9AD8\u6BD4</code>\uFF0C\u6211\u4EEC\u9700\u8981\u7F29\u653E\u7684\u6BD4\u4F8B\u662F<code>\u5C4F\u5E55\u5BBD\u5EA6 / \u8BBE\u8BA1\u7A3F\u5BBD\u5EA6</code>\u5F53<code>\u5C4F\u5E55\u5BBD\u9AD8\u6BD4 &gt; \u8BBE\u8BA1\u7A3F\u5BBD\u9AD8\u6BD4</code>\uFF0C\u6211\u4EEC\u9700\u8981\u7F29\u653E\u7684\u6BD4\u4F8B\u662F<code>\u5C4F\u5E55\u9AD8\u5EA6 / \u8BBE\u8BA1\u7A3F\u9AD8\u5EA6</code></p><div class="language-"><pre><code>const scale = document.documentElement.clientWidth / document.documentElement.clientHeight &lt; designDraftWidth / designDraftHeight ?
            (document.documentElement.clientWidth / designDraftWidth) :
            (document.documentElement.clientHeight / designDraftHeight);
</code></pre></div><p>\u5982\u679C\u6211\u4EEC\u62FF\u5230\u7684\u8BBE\u8BA1\u7A3F\u5BBD\u9AD8\u4E3A: 1920 * 960 px \uFF0C\u800C\u6211\u4EEC\u7684\u5C4F\u5E55\u5927\u5C0F\u662F 1440 * 900 px\uFF0C\u90A3\u4E48 1440/900 = 1.6\uFF0C920/960 = 2</p><p>\u56E0\u4E3A 1.6 &lt; 2 \uFF08\u5F53\u524D\u5C4F\u5E55\u5BBD\u9AD8\u6BD4\u5C0F\u4E8E\u8BBE\u8BA1\u7A3F\u5BBD\u9AD8\u6BD4\uFF09</p><p>\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u7F29\u653E\u7684\u6BD4\u4F8B\u662F\uFF1A\u5C4F\u5E55\u5BBD\u5EA6\u9664\u4EE5\u8BBE\u8BA1\u7A3F\u5BBD\u5EA6 = 1440/1920 = 0.75</p><p><strong>\u5982\u4F55\u5C45\u4E2D</strong></p><p>\u9996\u5148\u6211\u4EEC\u5229\u7528 <code>transform:translate(-50%,-50%)</code> \uFF0C\u5C06\u52A8\u753B\u7684\u57FA\u70B9\u8BBE\u4E3A\u5DE6\u4E0A\u89D2</p><blockquote><p>transform-origin\uFF1A\u8BBE\u7F6E\u52A8\u753B\u7684\u57FA\u70B9(\u4E2D\u5FC3\u70B9)\uFF0C\u9ED8\u8BA4\u70B9\u662F\u5143\u7D20\u7684\u4E2D\u5FC3\u70B9</p></blockquote><p>\u8BED\u6CD5</p><blockquote><p>transform-origin: x-axis y-axis z-axis;</p></blockquote><p>\u7136\u540E\u5229\u7528<code>transform:translate(-50%,-50%)</code>\uFF0C\u5C06\u56FE\u8868\u6CBF x\uFF0Cy \u8F74\u79FB\u52A8 50%</p><p><img src="https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib1j8AHuIib4lRjg7Iibbib1ODYHJ9SXbeT6aZ0VzVQub68U4zbt5R76VhZAHqDujhxbFRZgicMebzkSvQ/640?wx_fmt=jpeg&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt=""></p><p>\u63A5\u4E0B\u6765\u5229\u7528<code>\u7EDD\u5BF9\u5B9A\u4F4D</code>\u5C06\u56FE\u8868\u5B9A\u4F4D\u5230\u4E2D\u95F4\u4F4D\u7F6E</p><div class="language-"><pre><code>position: absolute;
left: 50%;
top: 50%;
</code></pre></div><h3 id="\u5077\u61D2\u65B9\u6CD5-\u63D2\u4EF6" tabindex="-1">\u5077\u61D2\u65B9\u6CD5-\u63D2\u4EF6 <a class="header-anchor" href="#\u5077\u61D2\u65B9\u6CD5-\u63D2\u4EF6" aria-hidden="true">#</a></h3><p><code>v-scale-screen</code>\u662F\u4F7F\u7528 css \u5C5E\u6027 transform \u5B9E\u73B0\u7F29\u653E\u6548\u679C\u7684\u4E00\u4E2A\u5927\u5C4F\u81EA\u9002\u5E94\u7EC4\u4EF6\uFF0C\u901A\u8FC7 scale \u8FDB\u884C\u7B49\u6BD4\u4F8B\u8BA1\u7B97\uFF0C\u8FBE\u5230\u7B49\u6BD4\u4F8B\u7F29\u653E\u7684\u6548\u679C\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u94FA\u6EE1\u5168\u5C4F\uFF0C\u5BBD\u5EA6\u7B49\u6BD4\uFF0C\u9AD8\u5EA6\u7B49\u6BD4\uFF0C\u7B49\u81EA\u9002\u5E94\u65B9\u6848,\u5177\u4F53\u53EF\u67E5<strong>\u5927\u5C4F\u81EA\u9002\u5E94\u7EC8\u6781\u89E3\u51B3\u65B9\u6848</strong>[1]</p><h2 id="\u4E09\u3001rem-vh-vw" tabindex="-1">\u4E09\u3001rem+vh+vw <a class="header-anchor" href="#\u4E09\u3001rem-vh-vw" aria-hidden="true">#</a></h2><ul><li>\u5F53\u5C4F\u5E55\u7684\u5C3A\u5BF8\u6BD4\u4F8B\u521A\u597D\u662F 16:9 \u65F6\uFF0C\u9875\u9762\u80FD\u521A\u597D\u5168\u5C4F\u5C55\u793A\uFF0C\u5185\u5BB9\u5360\u6EE1\u663E\u793A\u5668</li><li>\u5F53\u5C4F\u5E55\u7684\u5C3A\u5BF8\u6BD4\u4F8B\u5C0F\u4E8E 16:9 \u65F6\uFF0C\u9875\u9762\u4E0A\u4E0B\u7559\u767D\uFF0C\u5DE6\u53F3\u5360\u6EE1\u5E76\u4E0A\u4E0B\u5C45\u4E2D\uFF0C\u663E\u793A\u6BD4\u4F8B\u4FDD\u6301 16:9</li><li>\u5F53\u5C4F\u5E55\u5C3A\u5BF8\u6BD4\u4F8B\u5927\u4E8E 16:9 \u65F6\uFF0C\u9875\u9762\u5DE6\u53F3\u7559\u767D\uFF0C\u4E0A\u4E0B\u5360\u6EE1\u5E76\u5C45\u4E2D\uFF0C\u663E\u793A\u6BD4\u4F8B\u4FDD\u6301 16:9</li></ul><h3 id="_3-1\u3001\u5B9E\u73B0\u601D\u8DEF" tabindex="-1">3.1\u3001\u5B9E\u73B0\u601D\u8DEF <a class="header-anchor" href="#_3-1\u3001\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a></h3><p><strong>\u5173\u4E8E rem</strong></p><p><code>rem(font size of the root element)</code>\uFF0C\u662F css3 \u4E2D\u65B0\u589E\u7684\u4E00\u4E2A\u5927\u5C0F\u5355\u4F4D\uFF0C\u5373\u76F8\u5BF9\u4E8E\u6839\u5143\u7D20 font-size \u503C\u7684\u5927\u5C0F\u3002</p><p><strong>\u81EA\u9002\u5E94\u601D\u8DEF</strong></p><p>\u52A8\u6001\u7684\u8BA1\u7B97\u51FA\u9875\u9762\u7684 fontsize \u4ECE\u800C\u6539\u53D8 rem \u7684\u5927\u5C0F\u3002</p><ol><li><p>\u62FF 1920 * 1080 \u7684\u6807\u51C6\u5C4F\u5E55\u5927\u5C0F\u4E3A\u4F8B\uFF0C\u5C06\u5C4F\u5E55\u5206\u4E3A<code>10</code>\u4EFD\uFF0C\u5148\u8BA1\u7B97<code>rem \u7684\u57FA\u51C6\u503C:</code> 1920 / 10 = 192\uFF1B</p></li><li><p>\u628A\u6240\u6709\u5143\u7D20\u7684\u957F\u3001\u5BBD\u3001\u4F4D\u7F6E\u3001\u5B57\u4F53\u5927\u5C0F\u7B49\u539F\u6765\u7684 px \u5355\u4F4D\u5168\u90E8\u8F6C\u6362\u6210 rem\uFF1B</p></li><li><p>\u7F51\u9875\u52A0\u8F7D\u540E\uFF0C\u7528 js \u53BB\u8BA1\u7B97\u5F53\u524D\u6D4F\u89C8\u5668\u7684\u5BBD\u5EA6\uFF0C\u5E76\u8BBE\u7F6E html \u7684 font-size \u4E3A (<code>\u5F53\u524D\u6D4F\u89C8\u5668\u7A97\u53E3\u5BBD\u5EA6 / 10</code>) \u3002</p><p>\u8FD9\u6837\u7684\u8BDD 10rem \u5C31\u521A\u597D\u7B49\u4E8E\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5BBD\u5EA6\uFF0C\u4E5F\u5C31\u53EF\u4EE5\u4FDD\u8BC1 100% \u5BBD\u5EA6\uFF0C\u7B49\u6BD4\u4F8B\u7F29\u653E\u8BBE\u8BA1\u7A3F\u7684\u9875\u9762\u4E86\u3002</p></li></ol><p><strong>\u56E0\u6B64 rem + vm vh \u65B9\u6848\u8981\u89E3\u51B3\u4E09\u4EF6\u4E8B</strong></p><ol><li>\u83B7\u5F97 rem \u7684\u57FA\u51C6\u503C\uFF1B</li><li>\u9875\u9762\u5185\u5199\u4E00\u6BB5 js \u4EE3\u7801\uFF0C\u52A8\u6001\u7684\u8BA1\u7B97<code>html\u6839\u5143\u7D20\u7684font-size</code>\uFF1B</li><li>\u5C4F\u5E55\u53D8\u5316\u540E\uFF0C\u56FE\u8868\u81EA\u52A8\u8C03\u6574\u548C\u56FE\u8868\u5B57\u4F53\u3001\u95F4\u8DDD\u3001\u4F4D\u79FB\u7B49\u7684\u81EA\u9002\u5E94\u3002</li></ol><h3 id="_3-2\u3001\u5B9E\u73B0\u65B9\u6848" tabindex="-1">3.2\u3001\u5B9E\u73B0\u65B9\u6848 <a class="header-anchor" href="#_3-2\u3001\u5B9E\u73B0\u65B9\u6848" aria-hidden="true">#</a></h3><h4 id="_3-2-1\u7B2C\u4E00\u70B9\uFF1A\u83B7\u5F97-rem-\u7684\u57FA\u51C6\u503C" tabindex="-1">3.2.1<strong>\u7B2C\u4E00\u70B9\uFF1A\u83B7\u5F97 rem \u7684\u57FA\u51C6\u503C</strong> <a class="header-anchor" href="#_3-2-1\u7B2C\u4E00\u70B9\uFF1A\u83B7\u5F97-rem-\u7684\u57FA\u51C6\u503C" aria-hidden="true">#</a></h4><ol><li>\u9996\u5148\u5B89\u88C5 <code>@njleonzhang/postcss-px-to-rem</code> \u8FD9\u4E2A\u5305</li></ol><div class="language-"><pre><code>npm i @njleonzhang/postcss-px-to-rem -D
</code></pre></div><ol><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA<code>.postcssrc.js</code>\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-"><pre><code>module.exports = {
  plugins: {
    autoprefixer: {},
    &quot;@njleonzhang/postcss-px-to-rem&quot;: {
      unitToConvert: &#39;px&#39;, // (String) \u8981\u8F6C\u6362\u7684\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u662F px\u3002
      widthOfDesignLayout: 1920, // (Number) \u8BBE\u8BA1\u5E03\u5C40\u7684\u5BBD\u5EA6\u3002\u5BF9\u4E8Epc\u4EEA\u8868\u76D8\uFF0C\u4E00\u822C\u662F 1920.
      unitPrecision: 3, // (Number) \u5141\u8BB8 rem \u5355\u4F4D\u589E\u957F\u5230\u7684\u5341\u8FDB\u5236\u6570\u5B57.
      selectorBlackList: [&#39;.ignore&#39;, &#39;.hairlines&#39;], // (Array) \u8981\u5FFD\u7565\u5E76\u4FDD\u7559\u4E3A px \u7684\u9009\u62E9\u5668.
      minPixelValue: 1, // (Number) \u8BBE\u7F6E\u8981\u66FF\u6362\u7684\u6700\u5C0F\u50CF\u7D20\u503C.
      mediaQuery: false // (Boolean) \u5141\u8BB8\u5728\u5A92\u4F53\u67E5\u8BE2\u4E2D\u8F6C\u6362 px.
    }
  }
}
</code></pre></div><ol><li>\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u9875\u9762\u5185\u7684 px \u5C31\u4F1A\u88AB\u8F6C\u6362\u6210 rem \u4E86</li></ol><p><strong>\u7B2C\u4E8C\u70B9\uFF1A\u52A8\u6001\u7684\u8BA1\u7B97<code>html\u6839\u5143\u7D20\u7684font-size</code></strong></p><ol><li>\u5728\u5DE5\u5177\u51FD\u6570\u6587\u4EF6\u4E2D\u65B0\u5EFA\u4E00\u4E2A rem.js \u6587\u4EF6\uFF0C\u7528\u4E8E\u52A8\u6001\u8BA1\u7B97 font-size</li></ol><div class="language-"><pre><code>(function init(screenRatioByDesign = 16 / 9) {
  let docEle = document.documentElement
  function setHtmlFontSize() {
    var screenRatio = docEle.clientWidth / docEle.clientHeight;
    var fontSize = (
      screenRatio &gt; screenRatioByDesign
        ? (screenRatioByDesign / screenRatio)
        : 1
    ) * docEle.clientWidth / 10;
    docEle.style.fontSize = fontSize.toFixed(3) + &quot;px&quot;;
    console.log(docEle.style.fontSize);
  }
  setHtmlFontSize()
  window.addEventListener(&#39;resize&#39;, setHtmlFontSize)
})()
</code></pre></div><p>\\2. \u5728\u5165\u53E3\u6587\u4EF6 main.js \u4E2D\u5F15\u5165 rem.js \u6587\u4EF6</p><div class="language-"><pre><code>import &#39;./utils/rem.js&#39;;
</code></pre></div><p>\u81F3\u6B64\uFF0C\u9875\u9762\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u5B9E\u73B0 16:9 \u81EA\u9002\u5E94\u4E86\u3002</p><p><strong>\u7B2C\u4E09\u70B9\uFF1A\u5C4F\u5E55\u53D8\u5316\uFF0C\u56FE\u8868\u81EA\u9002\u5E94</strong></p><p>\u5C4F\u5E55\u53D8\u5316\u540E\uFF0C\u56FE\u8868\u81EA\u52A8\u8C03\u6574\u5B57\u4F53\u3001\u95F4\u8DDD\u3001\u4F4D\u79FB\u7B49\uFF0C\u6B64\u5904\u53C2\u8003\u4E0A\u9762 vm vh \u7684\u5B9E\u73B0\u65B9\u5F0F\u5373\u53EF\uFF0C\u5728\u6B64\u5C31\u4E0D\u91CD\u590D\u8D58\u8FF0\u4E86</p>`,86),e=[o];function c(l,u,r,i,k,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
