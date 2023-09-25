import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const g='{"title":"\u81EA\u5B9A\u4E49\u63D2\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"webpack/plugin.md"}',p={},o=t(`<h1 id="\u81EA\u5B9A\u4E49\u63D2\u4EF6" tabindex="-1">\u81EA\u5B9A\u4E49\u63D2\u4EF6 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u63D2\u4EF6" aria-hidden="true">#</a></h1><p><a href="https://blog.csdn.net/qq_35430000/article/details/130247546" target="_blank" rel="noopener noreferrer">\u524D\u7AEF\u90E8\u7F72\u53D1\u5E03\u9879\u76EE\u540E\uFF0C\u5982\u4F55\u901A\u77E5\u7528\u6237\u5237\u65B0\u9875\u9762\u3001\u6E05\u9664\u7F13\u5B58_\u98DE\u6B4CFly\u7684\u535A\u5BA2-CSDN\u535A\u5BA2</a></p><ul><li><p>\u5728\u9879\u76EE\u76EE\u5F55\u65B0\u5EFAplugins\u6587\u4EF6\u5939\uFF0C\u6DFB\u52A0generate.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">GenerateJson</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(compiler.hooks)</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&quot;version Plugin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>options<span class="token punctuation">.</span>output<span class="token punctuation">)</span>
      <span class="token keyword">const</span> outputPath <span class="token operator">=</span> compiler<span class="token punctuation">.</span>path <span class="token operator">||</span> compilation<span class="token punctuation">.</span>options<span class="token punctuation">.</span>output<span class="token punctuation">.</span>path
      <span class="token keyword">const</span> versionFile <span class="token operator">=</span> outputPath <span class="token operator">+</span> <span class="token string">&quot;/version.json&quot;</span>
      <span class="token keyword">const</span> timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u65F6\u95F4\u6233\u4F5C\u4E3A\u7248\u672C\u53F7</span>
      <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{&quot;version&quot;: &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;}</span><span class="token template-punctuation string">\`</span></span>

      <span class="token comment">/** \u5982\u679C\u8DEF\u5F84\u5B58\u5728\u5219\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002 */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>outputPath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u540C\u6B65\u5730\u521B\u5EFA\u76EE\u5F55\u3002 \u8FD4\u56DE undefined \u6216\u521B\u5EFA\u7684\u7B2C\u4E00\u4E2A\u76EE\u5F55\u8DEF\u5F84\uFF08\u5982\u679C recursive \u4E3A true\uFF09\u3002 \u8FD9\u662F fs.mkdir() \u7684\u540C\u6B65\u7248\u672C\u3002</span>
        fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>outputPath<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">recursive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u751F\u6210json\u6587\u4EF6</span>
      fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>versionFile<span class="token punctuation">,</span> content<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">encoding</span><span class="token operator">:</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> GenerateJson <span class="token punctuation">}</span>

</code></pre></div></li><li><p>webpack.config.js\u914D\u7F6E\u5982\u4E0B</p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;clean-webpack-plugin&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> GenerateJson <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./plugins/generateJson&quot;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].[contenthash].js&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">GenerateJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div></li><li><p>.babelrc\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div></li><li><p>Package.json</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo01&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack &quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@babel/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.22.20&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/preset-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.22.20&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^9.1.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;clean-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.88.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.1.4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.15.1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div></li></ul>`,3),e=[o];function c(u,l,r,k,i,q){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
