import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";var p="/assets/1.5e6fe8a2.png";const m='{"title":"python","description":"","frontmatter":{},"headers":[],"relativePath":"python/python.md"}',o={},e=t(`<h1 id="python" tabindex="-1">python <a class="header-anchor" href="#python" aria-hidden="true">#</a></h1><div class="language-python"><pre><code><span class="token keyword">import</span> urllib3
<span class="token keyword">import</span> certifi

<span class="token keyword">def</span> <span class="token function">download_content</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
  http <span class="token operator">=</span> urllib3<span class="token punctuation">.</span>PoolManager<span class="token punctuation">(</span>ca_certs<span class="token operator">=</span>certifi<span class="token punctuation">.</span>where<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  response <span class="token operator">=</span> http<span class="token punctuation">.</span>request<span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>url<span class="token punctuation">)</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">save_file</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
  fs <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  fs<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
  fs<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


url <span class="token operator">=</span> <span class="token string">&#39;https://huaxiacloud.com&#39;</span>
html_content <span class="token operator">=</span> download_content<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
save_file<span class="token punctuation">(</span><span class="token string">&#39;blog.html&#39;</span><span class="token punctuation">,</span>html_content<span class="token punctuation">)</span>
</code></pre></div><ul><li><p>windows\u5728Anaconda prompt\u91CC\u9762\u6267\u884C</p><blockquote><p>conda install selenium</p><p>\u4E4B\u540E\u8FD8\u662F\u62A5\u9519ModuleNotFoundError: No module named &#39;selenium&#39;</p><p>\u7EE7\u7EED\u4E0B\u9762\u7684\u64CD\u4F5C</p><p>pip install -i <a href="https://pypi.tuna.tsinghua.edu.cn/simple" target="_blank" rel="noopener noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple</a> selenium</p><p>\u4E4B\u540E\u8FD0\u884C\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u6253\u5F00\u6D4F\u89C8\u5668</p></blockquote></li></ul><div class="language-python"><pre><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

brew <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>

url <span class="token operator">=</span> <span class="token string">&#39;https://huaxiacloud.com&#39;</span>

brew<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

html_content <span class="token operator">=</span> brew<span class="token punctuation">.</span>page_source

save_file<span class="token punctuation">(</span><span class="token string">&#39;xxx.html&#39;</span><span class="token punctuation">,</span>html_content<span class="token punctuation">)</span>
</code></pre></div><p><img src="`+p+`" alt=""></p><ul><li><p>\u5982\u679C\u8FD8\u662F\u4E0D\u80FD\u6B63\u5E38\u6253\u5F00\u6D4F\u89C8\u5668\u7F3A\u5C11chromedriver\uFF0C\u5728conda\u91CC\u9762\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4</p><blockquote><p>pip install --upgrade --force-reinstall chromedriver-binary-auto</p></blockquote><div class="language-python"><pre><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver

<span class="token keyword">import</span> chromedriver_binary

brew <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span><span class="token punctuation">)</span>

url <span class="token operator">=</span> <span class="token string">&#39;https://huaxiacloud.com&#39;</span>

brew<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
</code></pre></div></li></ul>`,6),c=[e];function l(u,r,i,k,d,h){return a(),s("div",null,c)}var f=n(o,[["render",l]]);export{m as __pageData,f as default};
