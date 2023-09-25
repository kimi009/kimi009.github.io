import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const _='{"title":"qiankun","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E7E\u5764\u5B50\u5E94\u7528\u5F15\u5165\u7B2C\u4E09\u65B9js\u5E93\uFF0Ccdn\u5F15\u5165\u7684\u65F6\u5019\u4F1A\u5B58\u5728\u8DE8\u57DF\u7684\u95EE\u9898","slug":"\u4E7E\u5764\u5B50\u5E94\u7528\u5F15\u5165\u7B2C\u4E09\u65B9js\u5E93\uFF0Ccdn\u5F15\u5165\u7684\u65F6\u5019\u4F1A\u5B58\u5728\u8DE8\u57DF\u7684\u95EE\u9898"},{"level":2,"title":"\u52A8\u6001\u52A0\u8F7Dcdn\u6587\u4EF6","slug":"\u52A8\u6001\u52A0\u8F7Dcdn\u6587\u4EF6"}],"relativePath":"microfront/qiankun.md"}',p={},o=t(`<h1 id="qiankun" tabindex="-1">qiankun <a class="header-anchor" href="#qiankun" aria-hidden="true">#</a></h1><p><a href="https://qiankun.umijs.org/zh/guide/tutorial" target="_blank" rel="noopener noreferrer">\u4E7E\u5764\u5E38\u89C1\u95EE\u9898\u6C47\u603B</a></p><h2 id="\u4E7E\u5764\u5B50\u5E94\u7528\u5F15\u5165\u7B2C\u4E09\u65B9js\u5E93\uFF0Ccdn\u5F15\u5165\u7684\u65F6\u5019\u4F1A\u5B58\u5728\u8DE8\u57DF\u7684\u95EE\u9898" tabindex="-1">\u4E7E\u5764\u5B50\u5E94\u7528\u5F15\u5165\u7B2C\u4E09\u65B9js\u5E93\uFF0Ccdn\u5F15\u5165\u7684\u65F6\u5019\u4F1A\u5B58\u5728\u8DE8\u57DF\u7684\u95EE\u9898 <a class="header-anchor" href="#\u4E7E\u5764\u5B50\u5E94\u7528\u5F15\u5165\u7B2C\u4E09\u65B9js\u5E93\uFF0Ccdn\u5F15\u5165\u7684\u65F6\u5019\u4F1A\u5B58\u5728\u8DE8\u57DF\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><ul><li><p>\u4E7E\u5764\u7684\u4E3B\u5E94\u7528\u548C\u5B50\u5E94\u7528\u867D\u7136\u662F\u540C\u4E00\u4E2Awindow\uFF0C\u4F46\u662F\u5B50\u5E94\u7528\u4F7F\u7528\u7684\u662F\u4EE3\u7406\u7684window\u5BF9\u8C61</p></li><li><p>\u5B50\u5E94\u7528\u901A\u8FC7cdn\u65B9\u5F0F\u52A0\u8F7D\u7B2C\u4E09\u65B9js\u5E93\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5EF6\u8FDF\u52A0\u8F7D</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">let</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token constant">BROKER</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			
			<span class="token function">onlyRender</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
			<span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="\u52A8\u6001\u52A0\u8F7Dcdn\u6587\u4EF6" tabindex="-1">\u52A8\u6001\u52A0\u8F7Dcdn\u6587\u4EF6 <a class="header-anchor" href="#\u52A8\u6001\u52A0\u8F7Dcdn\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createScript</span><span class="token punctuation">(</span><span class="token parameter">src<span class="token punctuation">,</span> target<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span>
  script<span class="token punctuation">.</span>src <span class="token operator">=</span> src
  parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>script<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createLink</span><span class="token punctuation">(</span><span class="token parameter">href<span class="token punctuation">,</span> target<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span>
  link<span class="token punctuation">.</span>href <span class="token operator">=</span> href
  link<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">&#39;stylesheet&#39;</span>
  parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>link<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> <span class="token punctuation">{</span> vue<span class="token punctuation">,</span> brokerui<span class="token punctuation">,</span> brokerui_css <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">DOMAIN_NAME</span><span class="token punctuation">.</span>obs
<span class="token keyword">const</span> obsContent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;obsContent&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parentNode <span class="token operator">=</span> obsContent<span class="token punctuation">.</span>parentNode
<span class="token function">createLink</span><span class="token punctuation">(</span>brokerui_css<span class="token punctuation">,</span> obsContent<span class="token punctuation">,</span> parentNode<span class="token punctuation">)</span>
<span class="token function">createScript</span><span class="token punctuation">(</span>vue<span class="token punctuation">,</span> obsContent<span class="token punctuation">,</span> parentNode<span class="token punctuation">)</span>
<span class="token function">createScript</span><span class="token punctuation">(</span>brokerui<span class="token punctuation">,</span> obsContent<span class="token punctuation">,</span> parentNode<span class="token punctuation">)</span>




</code></pre></div>`,6),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{_ as __pageData,h as default};