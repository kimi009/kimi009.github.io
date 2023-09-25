import{_ as n,c as s,o as a,d as p}from"./app.87eb6f1c.js";const y='{"title":"\u6811\u8F6C\u5316","description":"","frontmatter":{},"headers":[],"relativePath":"js/\u6811\u8F6C\u5316.md"}',t={},o=p(`<h1 id="\u6811\u8F6C\u5316" tabindex="-1">\u6811\u8F6C\u5316 <a class="header-anchor" href="#\u6811\u8F6C\u5316" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E81&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E82&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E83&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E84&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E85&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment">// function convertTree(arr){</span>

<span class="token comment">//   arr.forEach(item=&gt;{</span>
<span class="token comment">//     if(!item.children){</span>
<span class="token comment">//       item.children = []</span>
<span class="token comment">//     }</span>
<span class="token comment">//     item.children = [...item.children,...findItem(item.id)]</span>
<span class="token comment">//   })</span>

<span class="token comment">//   function findItem(id){</span>
<span class="token comment">//     let res = arr.filter(o=&gt;o.pid == id)</span>
<span class="token comment">//     return res</span>
<span class="token comment">//   }</span>
<span class="token comment">//   console.log(JSON.stringify(arr.filter(o=&gt;o.pid ==0),null,&#39;\\t&#39;))</span>
<span class="token comment">// }</span>
<span class="token keyword">function</span> <span class="token function">arrayToTree</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">// \u5B58\u653E\u7ED3\u679C\u96C6</span>
  <span class="token keyword">const</span> itemMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">//</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> item<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">const</span> pid <span class="token operator">=</span> item<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>itemMap<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      itemMap<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    itemMap<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>item<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> itemMap<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;children&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> treeItem <span class="token operator">=</span>  itemMap<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pid <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>itemMap<span class="token punctuation">[</span>pid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        itemMap<span class="token punctuation">[</span>pid<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      itemMap<span class="token punctuation">[</span>pid<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeItem<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),e=[o];function c(l,r,u,k,i,m){return a(),s("div",null,e)}var _=n(t,[["render",c]]);export{y as __pageData,_ as default};
