import{_ as s,c as t,o as n,d as a}from"./app.87eb6f1c.js";const m='{"title":"vscode\u672C\u5730\u8C03\u8BD5vue\u4EE3\u7801","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u6DFB\u52A0sourcemap\u914D\u7F6E","slug":"\u4E00\u3001\u6DFB\u52A0sourcemap\u914D\u7F6E"},{"level":2,"title":"\u4E8C\u3001\u6DFB\u52A0lanuch.json","slug":"\u4E8C\u3001\u6DFB\u52A0lanuch-json"},{"level":2,"title":"\u4E09\u3001\u6DFB\u52A0task","slug":"\u4E09\u3001\u6DFB\u52A0task"},{"level":2,"title":"\u56DB\u3001\u5F00\u59CB\u8C03\u8BD5","slug":"\u56DB\u3001\u5F00\u59CB\u8C03\u8BD5"}],"relativePath":"vscode/vscode\u672C\u5730\u8C03\u8BD5vue\u4EE3\u7801.md"}',o={},p=a(`<h1 id="vscode\u672C\u5730\u8C03\u8BD5vue\u4EE3\u7801" tabindex="-1">vscode\u672C\u5730\u8C03\u8BD5vue\u4EE3\u7801 <a class="header-anchor" href="#vscode\u672C\u5730\u8C03\u8BD5vue\u4EE3\u7801" aria-hidden="true">#</a></h1><p><a href="https://mp.weixin.qq.com/s/gkJOBklVFV9oBnq8-U-tKA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/gkJOBklVFV9oBnq8-U-tKA</a></p><h2 id="\u4E00\u3001\u6DFB\u52A0sourcemap\u914D\u7F6E" tabindex="-1">\u4E00\u3001\u6DFB\u52A0sourcemap\u914D\u7F6E <a class="header-anchor" href="#\u4E00\u3001\u6DFB\u52A0sourcemap\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-local.webpack.config.js"><pre><code>	configureWebpack: {
		// cache: {
		// 	type: &#39;filesystem&#39;
		// },
		output: {
			library: &#39;brokerMicroCrm&#39;,
			libraryTarget: &#39;umd&#39;
		},
		externals: assetsCDN.externals,
		resolve: {
			extensions: [&#39;.js&#39;, &#39;scss&#39;, &#39;.vue&#39;, &#39;.json&#39;, &#39;.ts&#39;, &#39;.tsx&#39;],
			fallback: {
				setImmediate: false,
				dgram: false,
				fs: false,
				net: false,
				tls: false,
				child_process: false,
				path: false,
				zlib: false
			},
			alias: {
				vue$: &#39;vue/dist/vue.esm.js&#39;,
				&#39;@&#39;: resolve(&#39;src&#39;),
				&#39;@api&#39;: resolve(&#39;src/api&#39;),
				&#39;@components&#39;: resolve(&#39;src/components&#39;),
				&#39;@modules&#39;: resolve(&#39;src/modules&#39;),
				&#39;@utils&#39;: resolve(&#39;src/utils&#39;),
				&#39;@common&#39;: resolve(&#39;src/common&#39;),
				&#39;@imgs&#39;: resolve(&#39;src/assets/imgs&#39;),
				&#39;@crm&#39;: resolve(&#39;src/modules/crm&#39;)
			}
		},
		module: {
			rules: [
				{
					test: /\\.tsx?$/,
					loader: &#39;ts-loader&#39;,
					exclude: /node_modules/,
					options: {}
				},
				{
					test: /\\.mjs$/,
					include: /node_modules/,
					type: &#39;javascript/auto&#39;
				}
			]
		},
		devtool: &#39;source-map&#39;  // **\u8FD9\u4E2A\u914D\u7F6E**
	},
</code></pre></div><h2 id="\u4E8C\u3001\u6DFB\u52A0lanuch-json" tabindex="-1">\u4E8C\u3001\u6DFB\u52A0lanuch.json <a class="header-anchor" href="#\u4E8C\u3001\u6DFB\u52A0lanuch-json" aria-hidden="true">#</a></h2><ul><li><p>\u5728vscode\u76EE\u5F55\u4E0B\u6DFB\u52A0launch.json</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// \u4F7F\u7528 IntelliSense \u4E86\u89E3\u76F8\u5173\u5C5E\u6027\u3002</span>
  <span class="token comment">// \u60AC\u505C\u4EE5\u67E5\u770B\u73B0\u6709\u5C5E\u6027\u7684\u63CF\u8FF0\u3002</span>
  <span class="token comment">// \u6B32\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u8BBF\u95EE: https://go.microsoft.com/fwlink/?linkid=830387</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9488\u5BF9 localhost \u542F\u52A8 Chrome&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost.newtest.huaxiacloud.com:9996/&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u8FD9\u4E2A\u662F\u542F\u52A8\u7684url</span>
      <span class="token property">&quot;webRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sourceMapPathOverrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;meteor://\u{1F4BB}app/*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}/*&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;webpack:///./~/*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}/node_modules/*&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;webpack://?:*/*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}/*&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;preLaunchTask&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u8FD9\u4E2A\u542F\u52A8\u524D\u8FD0\u884C\u7684\u811A\u6B65\u4EFB\u52A1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div></li></ul><h2 id="\u4E09\u3001\u6DFB\u52A0task" tabindex="-1">\u4E09\u3001\u6DFB\u52A0task <a class="header-anchor" href="#\u4E09\u3001\u6DFB\u52A0task" aria-hidden="true">#</a></h2><ul><li><p>\u5728vscode\u76EE\u5F55\u4E0B\u9762\u6DFB\u52A0tasks.json</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u8FD9\u4E2A\u540D\u5B57\u8981\u548C\u4E0A\u9762\u7684lanuch.json\u91CC\u9762\u7684preLanuchTask\u4E00\u81F4</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u8FD9\u4E2A\u5BF9\u5E94\u7684\u662Fpackage\u4E0B\u9762\u7684scripts</span>
      <span class="token property">&quot;isBackground&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;problemMatcher&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$tsc-watch&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;activeOnStart&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;beginsPattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Starting development server&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;endsPattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Compiled successfully&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;kind&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div></li></ul><h2 id="\u56DB\u3001\u5F00\u59CB\u8C03\u8BD5" tabindex="-1">\u56DB\u3001\u5F00\u59CB\u8C03\u8BD5 <a class="header-anchor" href="#\u56DB\u3001\u5F00\u59CB\u8C03\u8BD5" aria-hidden="true">#</a></h2><ul><li>F5\u5F00\u59CB\u6253\u65AD\u70B9\u8C03\u8BD5</li></ul>`,10),e=[p];function c(r,u,l,k,i,q){return n(),t("div",null,e)}var h=s(o,[["render",c]]);export{m as __pageData,h as default};
