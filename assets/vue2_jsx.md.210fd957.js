import{_ as t,c as e,o as a,d as l}from"./app.87eb6f1c.js";const m='{"title":"jsx \u7528\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"jsx \u7528\u6CD5","slug":"jsx-\u7528\u6CD5"}],"relativePath":"vue2/jsx.md"}',o={},n=l(`<h2 id="jsx-\u7528\u6CD5" tabindex="-1">jsx \u7528\u6CD5 <a class="header-anchor" href="#jsx-\u7528\u6CD5" aria-hidden="true">#</a></h2><ol><li>\u51FD\u6570\u5F0F\u7EC4\u4EF6\uFF0C\u6CA1\u6709\u6A21\u677F\u5FC5\u987B\u8981\u6709\u4E2A render \u51FD\u6570</li></ol><div class="language-"><pre><code>xxx.js\u6587\u4EF6  \u6CE8\u610F\u662Fjs\u6587\u4EF6
export default{
  render(h){ // h\u5C31\u662FcreateElement
    return h(\u6807\u7B7E\u540D,\u6807\u7B7E\u5C5E\u6027,\u503C)
    //\u5199\u6CD5\u4E8C
    return &lt;h1 on-click={()=&gt;alert(1)} style={{color:&#39;red&#39;}}&gt;\u4F60\u597D&lt;/h1&gt;
  }
}

</code></pre></div><ol start="2"><li>this.$slots.default \u5C31\u662F\u9ED8\u8BA4\u7684\u63D2\u69FD\u5185\u5BB9</li></ol><p>3 \u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u91CC\u9762\u5B9A\u4E49\u5982\u4E0B</p><div class="language-"><pre><code>\u7EC4\u4EF6\u540D\u5B57\u662FList
&lt;div&gt;
  &lt;template v-for=&quot;(item,index) in data&quot;&gt;
      &lt;slot name=&quot;a&quot; :item=&quot;item&quot; :a=&quot;1&quot;&gt;&lt;/slot&gt;
  &lt;/template&gt;
&lt;/div&gt;
</code></pre></div><ol start="4"><li>\u6B63\u5E38\u4F7F\u7528\u4E0A\u9762\u7684\u7EC4\u4EF6</li></ol><div class="language-"><pre><code>  &lt;List :data=&quot;[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]&quot;&gt;
    &lt;template v-slot:a=&quot;{item,a}&quot;&gt; //\u8FD9\u4E2A:a\u662F\u4E0A\u9762\u5B9A\u4E49\u7684\u63D2\u69FD\u7684\u540D\u5B57\uFF0C\u6CA1\u6709\u5C31\u662Fdefault
      &lt;li&gt;{{item}} {{a}}&lt;/li&gt;
    &lt;/template&gt;
  &lt;/List&gt;
</code></pre></div><p>currentTarget \u6CE8\u518C\u65F6\u95F4\u6E90 target \u662F\u70B9\u51FB\u7684 dom \u8282\u70B9</p>`,9),r=[n];function s(i,d,c,u,_,g){return a(),e("div",null,r)}var h=t(o,[["render",s]]);export{m as __pageData,h as default};
