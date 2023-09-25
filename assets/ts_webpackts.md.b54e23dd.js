import{_ as s,c as n,o as a,d as p}from"./app.87eb6f1c.js";const h='{"title":"webpack\u6253\u5305ts","description":"","frontmatter":{},"headers":[{"level":2,"title":"webpack\u6253\u5305ts","slug":"webpack\u6253\u5305ts"},{"level":3,"title":"1. \u4E0B\u8F7D\u4F9D\u8D56","slug":"_1-\u4E0B\u8F7D\u4F9D\u8D56"},{"level":3,"title":"2. \u5165\u53E3JS: src/main.ts","slug":"_2-\u5165\u53E3js-src-main-ts"},{"level":3,"title":"3. index\u9875\u9762: public/index.html","slug":"_3-index\u9875\u9762-public-index-html"},{"level":3,"title":"4. build/webpack.config.js","slug":"_4-build-webpack-config-js"},{"level":3,"title":"5. \u914D\u7F6E\u6253\u5305\u547D\u4EE4","slug":"_5-\u914D\u7F6E\u6253\u5305\u547D\u4EE4"},{"level":3,"title":"6. \u8FD0\u884C\u4E0E\u6253\u5305","slug":"_6-\u8FD0\u884C\u4E0E\u6253\u5305"}],"relativePath":"ts/webpackts.md"}',t={},e=p(`<h2 id="webpack\u6253\u5305ts" tabindex="-1">webpack\u6253\u5305ts <a class="header-anchor" href="#webpack\u6253\u5305ts" aria-hidden="true">#</a></h2><h3 id="_1-\u4E0B\u8F7D\u4F9D\u8D56" tabindex="-1">1. \u4E0B\u8F7D\u4F9D\u8D56 <a class="header-anchor" href="#_1-\u4E0B\u8F7D\u4F9D\u8D56" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> typescript
yarn add <span class="token operator">-</span><span class="token constant">D</span> webpack webpack<span class="token operator">-</span>cli
yarn add <span class="token operator">-</span><span class="token constant">D</span> webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server
yarn add <span class="token operator">-</span><span class="token constant">D</span> html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin clean<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin
yarn add <span class="token operator">-</span><span class="token constant">D</span> ts<span class="token operator">-</span>loader
yarn add <span class="token operator">-</span><span class="token constant">D</span> cross<span class="token operator">-</span>env
</code></pre></div><h3 id="_2-\u5165\u53E3js-src-main-ts" tabindex="-1">2. \u5165\u53E3JS: src/main.ts <a class="header-anchor" href="#_2-\u5165\u53E3js-src-main-ts" aria-hidden="true">#</a></h3><div class="language-js"><pre><code> <span class="token comment">// import &#39;./01_helloworld&#39;</span>

 document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;Hello Webpack TS!&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_3-index\u9875\u9762-public-index-html" tabindex="-1">3. index\u9875\u9762: public/index.html <a class="header-anchor" href="#_3-index\u9875\u9762-public-index-html" aria-hidden="true">#</a></h3><div class="language-js"><pre><code> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>webpack <span class="token operator">&amp;</span> <span class="token constant">TS</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
   
 <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre></div><h3 id="_4-build-webpack-config-js" tabindex="-1">4. build/webpack.config.js <a class="header-anchor" href="#_4-build-webpack-config-js" aria-hidden="true">#</a></h3><div class="language-js"><pre><code> <span class="token keyword">const</span> <span class="token punctuation">{</span>CleanWebpackPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
 <span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
 <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

 <span class="token keyword">const</span> isProd <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token comment">// \u662F\u5426\u751F\u4EA7\u73AF\u5883</span>

 <span class="token keyword">function</span> <span class="token function">resolve</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">mode</span><span class="token operator">:</span> isProd <span class="token operator">?</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.ts&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contenthash:8].js&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
         <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;ts-loader&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

     <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./public/index.html&#39;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>

   <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token literal-property property">devtool</span><span class="token operator">:</span> isProd <span class="token operator">?</span> <span class="token string">&#39;cheap-module-source-map&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;cheap-module-eval-source-map&#39;</span><span class="token punctuation">,</span>

   <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E3B\u673A\u540D</span>
     <span class="token literal-property property">stats</span><span class="token operator">:</span> <span class="token string">&#39;errors-only&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u65E5\u5FD7\u8F93\u51FA\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F</span>
     <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8081</span><span class="token punctuation">,</span>
     <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-\u914D\u7F6E\u6253\u5305\u547D\u4EE4" tabindex="-1">5. \u914D\u7F6E\u6253\u5305\u547D\u4EE4 <a class="header-anchor" href="#_5-\u914D\u7F6E\u6253\u5305\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-js"><pre><code> <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js&quot;</span><span class="token punctuation">,</span>
 <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack --config build/webpack.config.js&quot;</span>
</code></pre></div><h3 id="_6-\u8FD0\u884C\u4E0E\u6253\u5305" tabindex="-1">6. \u8FD0\u884C\u4E0E\u6253\u5305 <a class="header-anchor" href="#_6-\u8FD0\u884C\u4E0E\u6253\u5305" aria-hidden="true">#</a></h3><div class="language-js"><pre><code> yarn dev
 yarn build
</code></pre></div>`,13),o=[e];function c(r,l,k,i,u,d){return a(),n("div",null,o)}var y=s(t,[["render",c]]);export{h as __pageData,y as default};
