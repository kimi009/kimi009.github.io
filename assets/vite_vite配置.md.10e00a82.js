import{_ as n,c as s,o as a,d as p}from"./app.87eb6f1c.js";const g='{"title":"vite \u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"vite.config.js\u914D\u7F6E","slug":"vite-config-js\u914D\u7F6E"},{"level":2,"title":"postcss","slug":"postcss"}],"relativePath":"vite/vite\u914D\u7F6E.md"}',t={},o=p(`<h1 id="vite-\u914D\u7F6E" tabindex="-1">vite \u914D\u7F6E <a class="header-anchor" href="#vite-\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="vite-config-js\u914D\u7F6E" tabindex="-1">vite.config.js\u914D\u7F6E <a class="header-anchor" href="#vite-config-js\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u9879\u76EE\u6839\u76EE\u5F55\uFF08index.html \u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E\uFF09,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u53D1\u6216\u751F\u4EA7\u73AF\u5883\u670D\u52A1\u7684\u516C\u5171\u57FA\u7840\u8DEF\u5F84 \u914D\u7F6E\u5F15\u5165\u76F8\u5BF9\u8DEF\u5F84</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A21\u5F0F</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u9700\u8981\u7528\u5230\u7684\u63D2\u4EF6\u6570\u7EC4</span>
  <span class="token literal-property property">publicDir</span><span class="token operator">:</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9759\u6001\u8D44\u6E90\u670D\u52A1\u7684\u6587\u4EF6\u5939</span>
  <span class="token literal-property property">cacheDir</span><span class="token operator">:</span> <span class="token string">&#39;node_modules/.vite&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5B58\u50A8\u7F13\u5B58\u6587\u4EF6\u7684\u76EE\u5F55</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u6587\u4EF6\u7CFB\u7EDF\u8DEF\u5F84\u522B\u540D</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/@\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dedupe</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5F3A\u5236 Vite \u59CB\u7EC8\u5C06\u5217\u51FA\u7684\u4F9D\u8D56\u9879\u89E3\u6790\u4E3A\u540C\u4E00\u526F\u672C</span>
    <span class="token literal-property property">conditions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u89E3\u51B3\u7A0B\u5E8F\u5305\u4E2D \u60C5\u666F\u5BFC\u51FA \u65F6\u7684\u5176\u4ED6\u5141\u8BB8\u6761\u4EF6</span>
    <span class="token literal-property property">mainFields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u89E3\u6790\u5305\u5165\u53E3\u70B9\u5C1D\u8BD5\u7684\u5B57\u6BB5\u5217\u8868</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.mjs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5BFC\u5165\u65F6\u60F3\u8981\u5FFD\u7565\u7684\u6269\u5C55\u540D\u5217\u8868</span>
    <span class="token literal-property property">preserveSymlinks</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528\u6B64\u9009\u9879\u4F1A\u4F7F Vite \u901A\u8FC7\u539F\u59CB\u6587\u4EF6\u8DEF\u5F84\u786E\u5B9A\u6587\u4EF6\u8EAB\u4EFD</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//\u5BF9csss\u884C\u4E3A\u8FDB\u884C\u914D\u7F6E</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u4E0B\u9762\u5C31\u662F\u5F00\u59CBcss\u6A21\u5757\u5316\uFF0C\u8FD9\u4E2Amodules\u4F1A\u4F20\u7ED9postcss modules</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//\u662F\u5BF9css\u6A21\u5757\u5316\u7684\u9ED8\u8BA4\u884C\u4E3A\u8FDB\u884C\u914D\u7F6E\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u6700\u7EC8\u8FD8\u4E22\u7ED9postcss modules</span>
      <span class="token literal-property property">localsConvention</span><span class="token operator">:</span><span class="token string">&quot;camelCase&quot;</span><span class="token punctuation">,</span> <span class="token comment">//vite\u8F6C\u6362css\u540E\u7684\u5C55\u73B0\u5F62\u5F0F</span>
      <span class="token literal-property property">scopeBehaviour</span><span class="token operator">:</span> <span class="token string">&#39;global&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;local&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u914D\u7F6E\u5F53\u524D\u7684\u6A21\u5757\u5316\u884C\u4E3A\u662F\u6A21\u5757\u5316\u8FD8\u662F\u5168\u5C40\uFF0C\u9ED8\u8BA4\u662Flocal\uFF0C\uFF08\u6709hash\u503C\u5C31\u8868\u793A\u5F00\u542F\u4E86\u6A21\u5757\u5316\u6807\u5FD7\uFF09\uFF0C\u4E00\u822C\u662F\u4E0D\u53BB\u914D\u7F6Eglobal\u7684</span>
      <span class="token literal-property property">generateScopeName</span><span class="token operator">:</span><span class="token string">&#39;[name]_[local]_[hash:5]&#39;</span><span class="token punctuation">,</span><span class="token comment">//\u751F\u6210\u7684\u7C7B\u540D\u7684\u683C\u5F0F,\u4E5F\u53EF\u4EE5\u914D\u7F6E\u4E3A\u51FD\u6570\uFF0C\u4F46\u662F\u4E00\u822C\u4E0D\u53BB\u4FEE\u6539\uFF0C\u8FD9\u4E9Bname\u3001local \u6700\u7EC8\u90FD\u662F\u7ED9postcss modules\u914D\u7F6E\u7684</span>
      <span class="token literal-property property">hashPrefix</span><span class="token operator">:</span><span class="token string">&#39;kimi&#39;</span><span class="token punctuation">,</span><span class="token comment">//\u751F\u6210\u7684has\u4F1A\u628A\u4F60\u8FD9\u4E2A\u524D\u7F00\uFF0C\u53C2\u4E0E\u5230hash\u7684\u751F\u4EA7\u89C4\u5219\u91CC\u9762\u53BB\uFF08\u53EA\u8981\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u4E0D\u4E00\u6837\uFF0C\u751F\u6210\u7684hash\u503C\u5C31\u4E0D\u4E00\u6837\uFF1B\u53EA\u8981\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u4E00\u6837\uFF0C\u751F\u6210\u7684hash\u503C\u5C31\u4E00\u6837\uFF09</span>
      <span class="token literal-property property">globalModulePaths</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//\u8868\u793A\u4F60\u4E0D\u60F3\u53C2\u4E0E\u5230css\u6A21\u5757\u5316\u7684\u8DEF\u5F84</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5185\u8054\u7684 PostCSS \u914D\u7F6E \u5982\u679C\u63D0\u4F9B\u4E86\u8BE5\u5185\u8054\u914D\u7F6E\uFF0CVite \u5C06\u4E0D\u4F1A\u641C\u7D22\u5176\u4ED6 PostCSS \u914D\u7F6E\u6E90</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// css\u7684\u9884\u5904\u7406\u5668\u5168\u5C40\u53C2\u6570\u9009\u9879\u914D\u7F6E</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">math</span><span class="token operator">:</span><span class="token string">&quot;always&quot;</span> <span class="token comment">//\u8FD9\u4E2A\u662F\u6267\u884Clesssc\u7684\u65F6\u5019 \u4F20\u5165\u7684\u547D\u4EE4\u884C\u53C2\u6570  \u5982\uFF1Alessc index.less --math=&quot;always&quot;</span>
        <span class="token literal-property property">globalVars</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token comment">//webpack\u91CC\u9762\u662F\u5728less-loader\u91CC\u9762\u914D\u7F6E</span>
          <span class="token literal-property property">mainColor</span><span class="token operator">:</span><span class="token string">&#39;red&#39;</span> <span class="token comment">//\u8FD9\u4E2A\u53EF\u4EE5\u5168\u5C40\u4F7F\u7528\uFF0C\u907F\u514D\u7528@import url(&#39;xxx.less&#39;)</span>
        <span class="token punctuation">}</span> <span class="token comment">//\u5168\u5C40\u53D8\u91CF</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">/*
				\u5F15\u5165var.scss\u5168\u5C40\u9884\u5B9A\u4E49\u53D8\u91CF\uFF0C
				\u5982\u679C\u5F15\u5165\u591A\u4E2A\u6587\u4EF6\uFF0C
				\u53EF\u4EE5\u4F7F\u7528
				&#39;@import &quot;@/assets/scss/globalVariable1.scss&quot;;
        @import &quot;@/assets/scss/globalVariable2.scss&quot;;&#39;
				\u8FD9\u79CD\u683C\u5F0F
        webpack \u4E5F\u662F\u53EF\u4EE5\u914D\u7F6E\u7684\uFF0C\u5728sass-loader\u91CC\u9762\u914D\u7F6E
				 */</span>
		    <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token string">&#39;@import &quot;@/assets/scss/globalVariable.scss&quot;;&#39;</span>
        <span class="token comment">//additionalData: \`$injectedColor: orange;\`</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devSourceMap</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token comment">//\u5F00\u542Fcss\u7684sourcemap,\u5728css\u9762\u677F\u4F1A\u6709\u8BE6\u7EC6\u7684css\u8DEF\u5F84\uFF0C\u5426\u5219\u5C31\u4F1A\u5F15\u5BFC\u5230header\u7684style\u91CC\u9762\uFF0C\u6CA1\u6CD5\u5B9A\u4F4D\u95EE\u9898</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u652F\u6301\u4ECE.json\u6587\u4EF6\u4E2D\u8FDB\u884C\u6309\u540D\u5BFC\u5165</span>
    <span class="token literal-property property">stringify</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//  \u5F00\u542F\u6B64\u9879\uFF0C\u5BFC\u5165\u7684 JSON \u4F1A\u88AB\u8F6C\u6362\u4E3A export default JSON.parse(&quot;...&quot;) \u4F1A\u7981\u7528\u6309\u540D\u5BFC\u5165</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">esbuild</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u6700\u5E38\u89C1\u7684\u7528\u4F8B\u662F\u81EA\u5B9A\u4E49 JSX</span>
    <span class="token literal-property property">jsxFactory</span><span class="token operator">:</span> <span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jsxFragment</span><span class="token operator">:</span> <span class="token string">&#39;Fragment&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">assetsInclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/*.gltf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u989D\u5916\u7684 picomatch \u6A21\u5F0F \u4F5C\u4E3A\u9759\u6001\u8D44\u6E90\u5904\u7406</span>
  <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8C03\u6574\u63A7\u5236\u53F0\u8F93\u51FA\u7684\u7EA7\u522B &#39;info&#39; | &#39;warn&#39; | &#39;error&#39; | &#39;silent&#39;</span>
  <span class="token literal-property property">clearScreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u4E3A false \u53EF\u4EE5\u907F\u514D Vite \u6E05\u5C4F\u800C\u9519\u8FC7\u5728\u7EC8\u7AEF\u4E2D\u6253\u5370\u67D0\u4E9B\u5173\u952E\u4FE1\u606F</span>
  <span class="token literal-property property">envDir</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u4E8E\u52A0\u8F7D .env \u6587\u4EF6\u7684\u76EE\u5F55</span>
  <span class="token literal-property property">envPrefix</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u4EE5 envPrefix \u5F00\u5934\u7684\u73AF\u5883\u53D8\u91CF\u4F1A\u901A\u8FC7 import.<wbr>meta.env \u66B4\u9732\u5728\u4F60\u7684\u5BA2\u6237\u7AEF\u6E90\u7801\u4E2D</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u670D\u52A1\u5668\u5E94\u8BE5\u76D1\u542C\u54EA\u4E2A IP \u5730\u5740</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3</span>
    <span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u82E5\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\u5219\u4F1A\u76F4\u63A5\u9000\u51FA</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528 TLS + HTTP/2</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u52A8\u65F6\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528\u7A0B\u5E8F</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u914D\u7F6E\u81EA\u5B9A\u4E49\u4EE3\u7406\u89C4\u5219</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E CORS</span>
    <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5F3A\u5236\u4F7F\u4F9D\u8D56\u9884\u6784\u5EFA</span>
    <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u7981\u7528\u6216\u914D\u7F6E HMR \u8FDE\u63A5</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u4F20\u9012\u7ED9 chokidar \u7684\u6587\u4EF6\u7CFB\u7EDF\u76D1\u542C\u5668\u9009\u9879</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">middlewareMode</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4EE5\u4E2D\u95F4\u4EF6\u6A21\u5F0F\u521B\u5EFA Vite \u670D\u52A1\u5668</span>
    <span class="token literal-property property">fs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u9650\u5236\u4E3A\u5DE5\u4F5C\u533A root \u8DEF\u5F84\u4EE5\u5916\u7684\u6587\u4EF6\u7684\u8BBF\u95EE</span>
      <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u9650\u5236\u54EA\u4E9B\u6587\u4EF6\u53EF\u4EE5\u901A\u8FC7 /@fs/ \u8DEF\u5F84\u63D0\u4F9B\u670D\u52A1</span>
      <span class="token literal-property property">deny</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.env&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.env.*&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*.{pem,crt}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u4E8E\u9650\u5236 Vite \u5F00\u53D1\u670D\u52A1\u5668\u63D0\u4F9B\u654F\u611F\u6587\u4EF6\u7684\u9ED1\u540D\u5355</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:8080/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7528\u4E8E\u5B9A\u4E49\u5F00\u53D1\u8C03\u8BD5\u9636\u6BB5\u751F\u6210\u8D44\u4EA7\u7684 origin</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;modules&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u6700\u7EC8\u6784\u5EFA\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u76EE\u6807</span>
    <span class="token literal-property property">polyfillModulePreload</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u81EA\u52A8\u6CE8\u5165 module preload \u7684 polyfill</span>
    <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u8F93\u51FA\u8DEF\u5F84</span>
    <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u751F\u6210\u9759\u6001\u6587\u4EF6\u76EE\u5F55</span>
    <span class="token literal-property property">assetsInlineLimit</span><span class="token operator">:</span> <span class="token string">&#39;4096000&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5C0F\u4E8E\u6B64\u9608\u503C\u7684\u5BFC\u5165\u6216\u5F15\u7528\u8D44\u6E90\u5C06\u5185\u8054\u4E3A base64 \u7F16\u7801</span>
    <span class="token literal-property property">cssCodeSplit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528 CSS \u4EE3\u7801\u62C6\u5206</span>
    <span class="token literal-property property">cssTarget</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5141\u8BB8\u7528\u6237\u4E3A CSS \u7684\u538B\u7F29\u8BBE\u7F6E\u4E00\u4E2A\u4E0D\u540C\u7684\u6D4F\u89C8\u5668 target \u4E0E build.target \u4E00\u81F4</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u540E\u662F\u5426\u751F\u6210 source map \u6587\u4EF6</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//\u63A7\u5236\u8F93\u51FA</span>
        <span class="token comment">//\u5C06\u6587\u4EF6\u5185\u5BB9\u548C\u6587\u4EF6\u540D\u6DF7\u5408\u8BA1\u7B97\u800C\u5F97\u7684hash\u503C</span>
        <span class="token comment">//hash\u548Cname\u4F4D\u7F6E\u53EF\u4EE5\u4E92\u6362</span>
        <span class="token comment">// assetFileNames:&#39;[hash].[name].[ext]&#39;</span>
		<span class="token literal-property property">chunkFileNames</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]-[hash].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F15\u5165\u6587\u4EF6\u540D\u7684\u540D\u79F0</span>
        <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&#39;js/[name]-[hash].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5305\u7684\u5165\u53E3\u6587\u4EF6\u540D\u79F0</span>
        <span class="token literal-property property">assetFileNames</span><span class="token operator">:</span> <span class="token string">&#39;[ext]/[name]-[hash].[ext]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8D44\u6E90\u6587\u4EF6\u50CF \u5B57\u4F53\uFF0C\u56FE\u7247\u7B49</span>
        <span class="token comment">//\u62C6\u5305 </span>
        <span class="token function">manualChunks</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BA9\u6BCF\u4E2A\u63D2\u4EF6\u90FD\u6253\u5305\u6210\u72EC\u7ACB\u7684\u6587\u4EF6</span>
            <span class="token keyword">return</span> id <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;node_modules/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u544A\u8BC9\u6253\u5305\u5DE5\u5177 \u5728external\u914D\u7F6E\u7684 \u90FD\u662F\u5916\u90E8\u4F9D\u8D56\u9879  \u4E0D\u9700\u8981\u6253\u5305</span>
          <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">externalGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token comment">// &quot;\u5728\u9879\u76EE\u4E2D\u5F15\u5165\u7684\u53D8\u91CF\u540D\u79F0&quot;\uFF1A&quot;CDN\u5305\u5BFC\u51FA\u7684\u540D\u79F0\uFF0C\u4E00\u822C\u5728CDN\u5305\u4E2D\u90FD\u662F\u53EF\u89C1\u7684&quot;</span>
              <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token comment">// npm install vite-plugin-compression -D  \u6587\u4EF6\u538B\u7F29</span>
            <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">verbose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5728\u63A7\u5236\u53F0\u4E2D\u8F93\u51FA\u538B\u7F29\u7ED3\u679C</span>
              <span class="token literal-property property">disable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">// \u5982\u679C\u4F53\u79EF\u5927\u4E8E\u9608\u503C\uFF0C\u5C06\u88AB\u538B\u7F29\uFF0C\u5355\u4F4D\u4E3Ab\uFF0C\u4F53\u79EF\u8FC7\u5C0F\u65F6\u8BF7\u4E0D\u8981\u538B\u7F29\uFF0C\u4EE5\u514D\u9002\u5F97\u5176\u53CD</span>
              <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u538B\u7F29\u7B97\u6CD5\uFF0C\u53EF\u9009[&#39;gzip&#39;\uFF0C&#39; brotliccompress &#39;\uFF0C&#39;deflate &#39;\uFF0C&#39;deflateRaw&#39;]</span>
              <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;.gz&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">deleteOriginFile</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u6E90\u6587\u4EF6\u538B\u7F29\u540E\u662F\u5426\u5220\u9664(\u6211\u4E3A\u4E86\u770B\u538B\u7F29\u540E\u7684\u6548\u679C\uFF0C\u5148\u9009\u62E9\u4E86true)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token comment">//npm i vite-plugin-imagemin -D \u56FE\u7247\u538B\u7F29</span>
              <span class="token comment">//viteImagemin\u62A5\u9519</span>
              <span class="token comment">//\u4F7F\u7528 yarn \u5728 package.json \u5185\u914D\u7F6E(\u63A8\u8350)</span>
              <span class="token comment">//&quot;resolutions&quot;: { &quot;bin-wrapper&quot;: &quot;npm:bin-wrapper-china&quot; }</span>
              <span class="token comment">//\u4F7F\u7528 npm,\u5728\u7535\u8111 host \u6587\u4EF6\u52A0\u4E0A\u5982\u4E0B\u914D\u7F6E\u5373\u53EF 199.232.4.133 raw.githubusercontent.com</span>
              <span class="token comment">//\u4F7F\u7528 cnpm \u5B89\u88C5(\u4E0D\u63A8\u8350)</span>
              <span class="token function">viteImagemin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">gifsicle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">interlaced</span><span class="token operator">:</span> <span class="token boolean">false</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">optipng</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">7</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">mozjpeg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">20</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">pngquant</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">4</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">svgo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;removeViewBox&#39;</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;removeEmptyAttrs&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                  <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u5E95\u5C42\u7684 Rollup \u6253\u5305\u914D\u7F6E</span>
    <span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u4E3A\u5E93</span>
    <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5F53\u8BBE\u7F6E\u4E3A true\uFF0C\u6784\u5EFA\u540E\u5C06\u4F1A\u751F\u6210 manifest.json \u6587\u4EF6</span>
    <span class="token literal-property property">ssrManifest</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u4E0D\u751F\u6210 SSR \u7684 manifest \u6587\u4EF6</span>
    <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// \u751F\u6210\u9762\u5411 SSR \u7684\u6784\u5EFA</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;esbuild&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u4F7F\u7528\u54EA\u79CD\u6DF7\u6DC6\u5668</span>
    <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">drop_console</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u4F20\u9012\u7ED9 Terser \u7684\u66F4\u591A minify \u9009\u9879</span>
    <span class="token literal-property property">write</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528\u5C06\u6784\u5EFA\u540E\u7684\u6587\u4EF6\u5199\u5165\u78C1\u76D8</span>
    <span class="token literal-property property">emptyOutDir</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u6784\u5EFA\u65F6\u6E05\u7A7A\u8BE5\u76EE\u5F55</span>
    <span class="token literal-property property">brotliSize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528 brotli \u538B\u7F29\u5927\u5C0F\u62A5\u544A</span>
    <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// chunk \u5927\u5C0F\u8B66\u544A\u7684\u9650\u5236</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u4E3A {} \u5219\u4F1A\u542F\u7528 rollup \u7684\u76D1\u542C\u5668</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3</span>
    <span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u82E5\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\u5219\u4F1A\u76F4\u63A5\u9000\u51FA</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528 TLS + HTTP/2</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u52A8\u65F6\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528\u7A0B\u5E8F</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u914D\u7F6E\u81EA\u5B9A\u4E49\u4EE3\u7406\u89C4\u5219</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E CORS</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimizeDeps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entries</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u81EA\u5B9A\u4E49\u6761\u76EE\u2014\u2014\u8BE5\u503C\u9700\u8981\u9075\u5FAA fast-glob \u6A21\u5F0F</span>
    <span class="token comment">//**\u5728\u9884\u6784\u5EFA\u4E2D\u5F3A\u5236\u6392\u9664\u7684\u4F9D\u8D56\u9879,\u5982lodash-es,\u4E00\u65E6\u5F00\u542F\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u641C\u7D22\u6240\u6709\u7684\u4F9D\u8D56\uFF0C\u4F9D\u6B21\u52A0\u8F7D\uFF0C\u5173\u95ED\u4E4B\u540E\u5C31\u4F1A\u542F\u52A8\u4F9D\u8D56\u9884\u6784\u5EFA\uFF0Cvite\u4F1A\u5C3D\u53EF\u80FD\u5C06\u5176\u96C6\u6210\u5230node_modules/.vite/deps\u4E0B\u9762\u65B9\u4FBF\u6D4F\u89C8\u5668\u52A0\u8F7D**</span>
    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u5F3A\u5236\u9884\u6784\u5EFA\u94FE\u63A5\u7684\u5305</span>
    <span class="token literal-property property">keepNames</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// true \u53EF\u4EE5\u5728\u51FD\u6570\u548C\u7C7B\u4E0A\u4FDD\u7559 name \u5C5E\u6027</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5217\u51FA\u7684\u662F\u8981\u4E3A SSR \u5F3A\u5236\u5916\u90E8\u5316\u7684\u4F9D\u8D56,</span>
    <span class="token literal-property property">noExternal</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5217\u51FA\u7684\u662F\u9632\u6B62\u88AB SSR \u5916\u90E8\u5316\u4F9D\u8D56\u9879</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span> <span class="token comment">// SSR \u670D\u52A1\u5668\u7684\u6784\u5EFA\u76EE\u6807</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="postcss" tabindex="-1">postcss <a class="header-anchor" href="#postcss" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u4F3C\u4E8E\u5168\u5C4B\u51C0\u6C34\u7CFB\u7EDF\uFF0C\u662F\u5BF9less,scss\u7B49\u9AD8\u7EA7\u6837\u5F0F\u5904\u7406 ,\u672C\u8EAB\u4E0D\u4F1A\u518D\u5BF9less,sass\u7684\u8BED\u6CD5\u505A\u8F6C\u5316\uFF0C\u662F\u4E00\u4E2A\u540E\u5904\u7406\u5668 \u662F\u88ABless-loader\u6216\u8005\u662Fsass-loader\u8F6C\u5316\u540E\u518D\u4EA4\u7ED9postcss\u5904\u7406</li></ul><p>1\u3001\u5BF9\u672A\u6765css\u5C5E\u6027\u7684\u4E00\u4E9B\u4F7F\u7528\u964D\u7EA7 2\u3001\u524D\u7F00\u8865\u5168\uFF1A google\u91C7\u7528--webkit</p><ul><li><p>\u4F7F\u7528\uFF0C\u9700\u8981\u5B89\u88C5\u4E0B\u9762\u4E24\u4E2A\u5E93</p><blockquote><p>pnpm add postcss-cli postcss -D</p></blockquote></li><li><p>postcss.config.js</p><div class="language-js"><pre><code>  <span class="token comment">//postcss-preset-env \u9884\u8BBE\u63D2\u4EF6\u91CC\u9762\u5176\u5B9E\u662F\u5305\u542B\u4E86\u5F88\u591A\u7684\u63D2\u4EF6</span>

  <span class="token keyword">const</span> postcssPresetEnv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">postcssPresetEnv</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">//\u4E0B\u9762\u8FD9\u4E2A\u4E3B\u8981\u662F\u7528\u6765\u5904\u7406css\u4E2D\u4F7F\u7528\u5168\u5C40\u53D8\u91CF\u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u7F3A\u5C11\u5212\u7EBF\u6837\u5F0F\u7684\u95EE\u9898\uFF0C\u5176\u5B9E\u5C31\u662F\u517C\u5BB9\u6027\u95EE\u9898,\u5176\u4E3B\u8981\u539F\u56E0\u8FD8\u662F\u56E0\u4E3Apostcss\u6CA1\u6709\u8BB0\u5FC6\u529F\u80FD\uFF0C\u52A0\u4E0Avite\u662F\u6309\u9700\u52A0\u8F7D\uFF0C\u5F53\u52A0\u8F7D\u5B8C\u4E00\u4E2A\u6587\u4EF6\u540E\u5C31\u4E0D\u7BA1\u4E86\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u5F53\u52A0\u8F7D\u5B8C\u5168\u5C40\u53D8\u91CF\u6587\u4EF6\u540E\uFF0C\u6CA1\u6709\u88ABpostcss\u8BB0\u5FC6\u5C31\u4F1A\u9020\u6210\u540E\u7EED\u5904\u7406\u5176\u4ED6\u7684css\u6587\u4EF6\u4E2D\u7684\u5168\u5C40\u53D8\u91CF\u7684\u65F6\u5019\u6CA1\u6CD5\u8F6C\u6362</span>
        <span class="token literal-property property">importFrom</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/style.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">//\u4E0A\u9762\u7684\u8DEF\u5F84\u4E0D\u80FD\u7528\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5426\u5219\u5C31\u4F1A\u7528process.cwd()\u548C\u8FD9\u4E2A\u76F8\u5BF9\u8DEF\u5F84\u62FC\u63A5\uFF0C\u8FD9\u6837\u5982\u679C\u4E0D\u5728\u5F53\u524D\u7684\u76EE\u5F55\u6267\u884C\uFF0C\u5207\u6362\u5230\u522B\u7684\u76EE\u5F55\u6267\u884C\u5C31\u4F1A\u5BFC\u81F4\u6587\u4EF6\u627E\u4E0D\u5230</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

</code></pre></div><div class="language-css"><pre><code><span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>\u5C31\u662F\u628A\u4E0B\u9762\u7684\u6837\u5F0F\u901A\u8FC7\u4E0A\u9762\u914D\u7F6E\u7684importFrom\u8F6C\u6362\u4E3A\u4E0B\u9762\u7684\u6837\u5F0F</p></blockquote><p><s>background-color: #89ae23;</s></p><p>background-color: var(--bgcolor);</p></li><li><p>\u5206\u6790\u6253\u5305\u4F53\u79EF</p><div class="language-vue"><pre><code>rollup-plugin-visualizer\u662F\u4E00\u4E2A\u6253\u5305\u4F53\u79EF\u5206\u6790\u63D2\u4EF6\uFF0C\u5BF9\u5E94webpack\u4E2D\u7684webpack-bundle-analyzer\u3002\u914D\u7F6E\u597D\u540E\u8FD0\u884C\u6784\u5EFA\u547D\u4EE4\u4F1A\u751F\u6210\u4E00\u4E2Astats.html
</code></pre></div><div class="language-bash"><pre><code><span class="token function">npm</span> i rollup-plugin-visualizer -D

<span class="token function">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> from <span class="token string">&#39;rollup-plugin-visualizer&#39;</span>

plugins: <span class="token punctuation">[</span>
    visualizer<span class="token punctuation">(</span><span class="token punctuation">{</span>open: true<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

<span class="token function">npm</span> run build // \u6253\u5305\u7ED3\u675F\u540E\u4F1A\u51FA\u73B0\u4E0B\u56FE
</code></pre></div></li><li><p>vite.config.ts\u53C2\u8003\u914D\u7F6E</p></li></ul><div class="language-typescript"><pre><code>js
\u590D\u5236\u4EE3\u7801<span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createHtmlPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-html&#39;</span>
<span class="token keyword">import</span> viteImagemin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-imagemin&#39;</span>
<span class="token keyword">import</span> externalGlobals <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-external-globals&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-visualizer&#39;</span>
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5C06\u4E0B\u9762\u7684\u6DFB\u52A0\u5230plugin\u4E0B</span>
    <span class="token function">createHtmlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      minify<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      inject<span class="token operator">:</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
          vuescript<span class="token operator">:</span> <span class="token string">&#39;&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@3.2.25&quot;&gt;&lt;/script&gt;&#39;</span><span class="token punctuation">,</span>
          demiScript<span class="token operator">:</span> <span class="token string">&#39;&lt;script src=&quot;//cdn.jsdelivr.net/npm/vue-demi@0.13.7&quot;&gt;&lt;/script&gt;&#39;</span><span class="token punctuation">,</span>
          elementPlusScript<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            &lt;link href=&quot;https://cdn.jsdelivr.net/npm/element-plus@2.2.22/dist/index.min.css&quot; rel=&quot;stylesheet&quot;&gt;
            &lt;script src=&quot;https://cdn.jsdelivr.net/npm/element-plus@2.2.22/dist/index.full.min.js&quot;&gt;&lt;/script&gt;
          </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          echartsSciprt<span class="token operator">:</span> <span class="token string">&#39;&lt;script src=&quot;https://cdn.jsdelivr.net/npm/echarts@5.0.2/dist/echarts.min.js&quot;&gt;&lt;/script&gt;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">viteImagemin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      gifsicle<span class="token operator">:</span> <span class="token punctuation">{</span>
        optimizationLevel<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        interlaced<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      optipng<span class="token operator">:</span> <span class="token punctuation">{</span>
        optimizationLevel<span class="token operator">:</span> <span class="token number">7</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      mozjpeg<span class="token operator">:</span> <span class="token punctuation">{</span>
        quality<span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      pngquant<span class="token operator">:</span> <span class="token punctuation">{</span>
        quality<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        speed<span class="token operator">:</span> <span class="token number">4</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      svgo<span class="token operator">:</span> <span class="token punctuation">{</span>
        plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;removeViewBox&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;removeEmptyAttrs&#39;</span><span class="token punctuation">,</span>
            active<span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    target<span class="token operator">:</span> <span class="token string">&#39;es2020&#39;</span><span class="token punctuation">,</span>
    minify<span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// rollup \u914D\u7F6E</span>
    rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      output<span class="token operator">:</span> <span class="token punctuation">{</span>
        chunkFileNames<span class="token operator">:</span> <span class="token string">&#39;js/[name]-[hash].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F15\u5165\u6587\u4EF6\u540D\u7684\u540D\u79F0</span>
        entryFileNames<span class="token operator">:</span> <span class="token string">&#39;js/[name]-[hash].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5305\u7684\u5165\u53E3\u6587\u4EF6\u540D\u79F0</span>
        assetFileNames<span class="token operator">:</span> <span class="token string">&#39;[ext]/[name]-[hash].[ext]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8D44\u6E90\u6587\u4EF6\u50CF \u5B57\u4F53\uFF0C\u56FE\u7247\u7B49</span>
        <span class="token function">manualChunks</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&#39;vendor&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//  \u544A\u8BC9\u6253\u5305\u5DE5\u5177 \u5728external\u914D\u7F6E\u7684 \u90FD\u662F\u5916\u90E8\u4F9D\u8D56\u9879  \u4E0D\u9700\u8981\u6253\u5305</span>
      external<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;echarts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">externalGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          vue<span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;element-plus&#39;</span><span class="token operator">:</span> <span class="token string">&#39;ElementPlus&#39;</span><span class="token punctuation">,</span>
          echarts<span class="token operator">:</span> <span class="token string">&#39;echarts&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;vue-demi&#39;</span><span class="token operator">:</span> <span class="token string">&#39;VueDemi&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          verbose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5728\u63A7\u5236\u53F0\u4E2D\u8F93\u51FA\u538B\u7F29\u7ED3\u679C</span>
          disable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          threshold<span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">// \u5982\u679C\u4F53\u79EF\u5927\u4E8E\u9608\u503C\uFF0C\u5C06\u88AB\u538B\u7F29\uFF0C\u5355\u4F4D\u4E3Ab\uFF0C\u4F53\u79EF\u8FC7\u5C0F\u65F6\u8BF7\u4E0D\u8981\u538B\u7F29\uFF0C\u4EE5\u514D\u9002\u5F97\u5176\u53CD</span>
          algorithm<span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u538B\u7F29\u7B97\u6CD5\uFF0C\u53EF\u9009[&#39;gzip&#39;\uFF0C&#39; brotliccompress &#39;\uFF0C&#39;deflate &#39;\uFF0C&#39;deflateRaw&#39;]</span>
          ext<span class="token operator">:</span> <span class="token string">&#39;.gz&#39;</span><span class="token punctuation">,</span>
          deleteOriginFile<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// \u6E90\u6587\u4EF6\u538B\u7F29\u540E\u662F\u5426\u5220\u9664</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    terserOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      compress<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u751F\u4EA7\u73AF\u5883\u65F6\u79FB\u9664console</span>
        drop_console<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        drop_debugger<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,8),e=[o];function c(l,r,u,k,i,m){return a(),s("div",null,e)}var d=n(t,[["render",c]]);export{g as __pageData,d as default};
