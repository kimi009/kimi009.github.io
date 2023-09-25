import{_ as n,c as s,o as t,d as a}from"./app.87eb6f1c.js";const g='{"title":"BeautifulSoup","description":"","frontmatter":{},"headers":[],"relativePath":"python/BeautifulSoup.md"}',p={},o=a(`<h1 id="beautifulsoup" tabindex="-1">BeautifulSoup <a class="header-anchor" href="#beautifulsoup" aria-hidden="true">#</a></h1><p><a href="https://beautifulsoup.cn/" target="_blank" rel="noopener noreferrer">Beautiful Soup \u4E2D\u6587\u6587\u6863</a></p><ul><li><p>python\u89E3\u6790html\u7684\u5E93</p></li><li><p>\u5B89\u88C5</p><blockquote><p>pip install -i <a href="https://pypi.tuna.tsinghua.edu.cn/simple" target="_blank" rel="noopener noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple</a> bs4</p></blockquote></li><li><p>\u521D\u4F53\u9A8C</p><div class="language-python"><pre><code><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

fs <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;jiandan.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

content <span class="token operator">=</span> fs<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># for link in soup.find_all(&#39;a&#39;):</span>
<span class="token comment">#   print(link.get(&#39;href&#39;))</span>

<span class="token comment"># html \u5B9E\u4F8B\u4EE3\u7801</span>
<span class="token comment"># &lt;div class=&quot;post f list-post&quot;&gt;</span>
<span class="token comment">#   &lt;div class=&quot;thumbs&quot;&gt;</span>
<span class="token comment">#     &lt;a href=&quot;http://jandan.net/p/112848&quot; target=&quot;_blank&quot;&gt;</span>
<span class="token comment">#       &lt;img src=&quot;//img.jandan.net/news/2019/01/901f119b8c2ed3c6df284e0a704e1b4c.jpg!square&quot; width=&quot;175&quot; height=&quot;98&quot; /&gt;</span>
<span class="token comment">#     &lt;/a&gt;</span>
<span class="token comment">#   &lt;/div&gt;</span>
<span class="token comment"># 	&lt;div class=&quot;indexs&quot;&gt;</span>
<span class="token comment"># 		&lt;span class=&quot;comment-link&quot;&gt;6&lt;/span&gt;</span>
<span class="token comment">#     &lt;h2&gt;</span>
<span class="token comment">#       &lt;a href=&quot;http://jandan.net/p/112848&quot; target=&quot;_blank&quot;&gt;\u67D0\u7248\u672C\u7684\u5F26\u8BBA\u9884\u8A00\u4E86\u4E00\u79CD\u7C7B\u4F3C\u9ED1\u6D1E\u7684\u5929\u4F53\uFF1A\u62D3\u6251\u5B64\u5B50&lt;/a&gt;</span>
<span class="token comment">#     &lt;/h2&gt;</span>
<span class="token comment">#     &lt;div class=&quot;time_s&quot;&gt;</span>
<span class="token comment">#       &lt;strong&gt;</span>
<span class="token comment">#         &lt;a href=&quot;http://jandan.net/p/tag/%e8%b5%b0%e8%bf%9b%e7%a7%91%e5%ad%a6&quot; rel=&quot;tag&quot;&gt;\u8D70\u8FDB\u79D1\u5B66&lt;/a&gt;</span>
<span class="token comment">#       &lt;/strong&gt; / </span>
<span class="token comment">#       &lt;a href=&quot;http://jandan.net/p/author/majer&quot;&gt;majer&lt;/a&gt; / 04.22</span>
<span class="token comment">#     &lt;/div&gt;\u8FDC\u770B\u50CF\u9ED1\u6D1E	</span>
<span class="token comment">#   &lt;/div&gt;</span>
<span class="token comment"># &lt;/div&gt;</span>
<span class="token comment"># a_list = soup.find_all(&#39;a&#39;,target=&quot;_blank&quot;)</span>
<span class="token comment"># print(a_list[0].get_text())</span>

indexs_list <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>class_<span class="token operator">=</span><span class="token string">&quot;indexs&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># for i in indexs_list:</span>
<span class="token comment">#   temp = BeautifulSoup(str(i))</span>
<span class="token comment">#   print(temp.h2.a.get_text())</span>

<span class="token comment"># \u8FD9\u4E2A\u5730\u65B9\u53EF\u4EE5\u7528\u70B9\u7684\u65B9\u5F0F\u8BFB\u53D6\u6807\u7B7E</span>
a_list <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span>BeautifulSoup<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>h2<span class="token punctuation">.</span>a<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>indexs_list<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> a_list<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre></div></li><li><p><strong>\u4E0A\u9762\u7684BeautifulSoup(str(x))\u4E2Dstr\u4E0D\u80FD\u5C11\uFF0C\u5426\u5219\u62A5\u9519</strong></p></li></ul>`,3),e=[o];function c(l,u,i,k,r,m){return t(),s("div",null,e)}var _=n(p,[["render",c]]);export{g as __pageData,_ as default};
