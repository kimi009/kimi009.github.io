import{_ as n,c as a,o as s,d as t}from"./app.87eb6f1c.js";const g='{"title":"\u521D\u63A2React","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u521D\u63A2React","slug":"\u521D\u63A2react"}],"relativePath":"react/index.md"}',p={},o=t(`<h3 id="\u521D\u63A2react" tabindex="-1">\u521D\u63A2React <a class="header-anchor" href="#\u521D\u63A2react" aria-hidden="true">#</a></h3><div class="language-"><pre><code>react\u5224\u65AD\u662FHTML \u5143\u7D20\u8FD8\u662F\u7EC4\u4EF6\u7684\u89C4\u5219\u662F\u770B\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u662F\u5426\u662F\u5927\u5199  \uFF0C\u5927\u5199\u5C31\u662F\u7EC4\u4EF6
</code></pre></div><div class="language-"><pre><code>react\u6784\u9020\u51FD\u6570\u4E2D\u5FC5\u987B\u8981\u5199super(props)\uFF0C\u5982\u679C\u6CA1\u6709\u5199\uFF0C\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u6784\u9020\u51FA\u6765\u4E4B\u540E\uFF0C
\u7C7B\u5B9E\u4F8B\u7684\u6240\u6709\u6210\u5458\u51FD\u6570\u5C31\u65E0\u6CD5\u901A\u8FC7this.props\u8BBF\u95EE\u5230\u7236\u7EC4\u4EF6\u4F20\u9012\u8FDB\u6765\u7684props\u3002
\u5F88\u660E\u663Ethis.props\u662F\u5728React.Component\u4E2D\u5B8C\u6210\u7684\u5DE5\u4F5C\u4E4B\u4E00
</code></pre></div><div class="language-"><pre><code>react \u4E2DpropTyps\u5173\u4E8E\u5BF9\u4F20\u5165\u7684props\u7684\u7C7B\u578B\u9650\u5236\uFF0C\u8FD9\u4E2A\u4E1C\u897F\u53EA\u6709\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u624D\u6709\u7528\uFF0C
\u53EA\u662F\u7ED9\u5F00\u53D1\u8005\u81EA\u5DF1\u770B\u7684\uFF0C\u4E00\u65E6\u5230\u4E86\u751F\u4EA7\u73AF\u5883\u8FD9\u4E2A\u662F\u6CA1\u4EC0\u4E48\u7528\u7684\uFF0C
\u6240\u4EE5\u4E3A\u4E86\u4F18\u5316\u7F29\u51CF\u4EE3\u7801\u8FD8\u662F\u53BB\u6389\u6BD4\u8F83\u597D\uFF0C\u53EF\u4EE5\u7528
babel-react-optimize\u8FD9\u4E2A\u63D2\u4EF6\u53EF\u4EE5
</code></pre></div><div class="language-"><pre><code>react\u4E2D\u7684componentWillReceiveProps\u94A9\u5B50\u51FD\u6570\u53EA\u8981\u662F\u7236\u7EC4\u4EF6\u53D1\u751F\u91CD\u65B0\u6E32\u67D3\u5C31\u662F\u6267\u884C
</code></pre></div><div class="language-"><pre><code>react\u4E2D\u89E6\u53D1\u5F3A\u5236\u66F4\u65B0 
&lt;button onClick={() =&gt; this.forceUpdate()}&gt;\u5F3A\u5236\u66F4\u65B0forceUpdate&lt;/button&gt;
\u4E0A\u9762\u7684\u533F\u540D\u51FD\u6570\u7684\u5199\u6CD5\u4E0D\u63A8\u8350\uFF0C\u56E0\u4E3A\u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u533F\u540D\u65B9\u6CD5\u5BF9\u8C61\uFF0C
\u800C\u4E14\u5F15\u53D1\u5B50\u7EC4\u4EF6\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3
</code></pre></div><div class="language-"><pre><code>shouldComponentUpdate(nextProps, nextState) {return true;}
\u8FD9\u4E2A\u94A9\u5B50\u53EF\u4EE5\u7528\u6765\u63A7\u5236\u662F\u5426\u8981\u6E32\u67D3\u754C\u9762\uFF0C\u53EF\u4EE5\u4EE3\u66FF\u4E00\u4E9Bif else\u8BED\u53E5
</code></pre></div><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">ADD_TODO</span><span class="token operator">:</span>
      <span class="token comment">//\u8FD9\u4E2A\u4E0D\u80FD\u7528push unshift \u56E0\u4E3Areducer \u5FC5\u987B\u662F\u4E00\u4E2Apure function  \u4E0D\u80FD\u6709\u4EFB\u4F55\u7684\u526F\u4F5C\u7528\uFF0Cpush unshift\u4F1A\u6539\u53D8\u539F\u6765\u7684\u6570\u636E</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> action<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> action<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
          <span class="token literal-property property">complete</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>state
      <span class="token punctuation">]</span>
    <span class="token keyword">case</span> <span class="token constant">REMOVE_TODO</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todoItem</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> todoItem<span class="token punctuation">.</span>id <span class="token operator">!==</span> action<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token constant">TOGGLE_TODO</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todoItem</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>todoItem<span class="token punctuation">.</span>id <span class="token operator">===</span> action<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todoItem<span class="token punctuation">,</span> <span class="token literal-property property">complete</span><span class="token operator">:</span> <span class="token operator">!</span>todoItem<span class="token punctuation">.</span>complete <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> todoItem
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token comment">//\u8FD9\u53E5\u4EE3\u7801\u4E0D\u80FD\u7701\u7565\uFF0C\u56E0\u4E3Areducer\u51FD\u6570\u4F1A\u63A5\u53D7\u4EFB\u610Faction\uFF0C\u5305\u62EC\u5B83\u4E0D\u611F\u5174\u8DA3\u7684action \u8FD9\u6837\u4F1A\u6267\u884Cdefault \u8BA9state\u539F\u6837\u8FD4\u56DE\u8868\u793A\u4E0D\u4FEE\u6539state</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript"><pre><code> <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">&quot;todo-list&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u8FD9\u91CC\u53EA\u80FD\u662Fjavascript\u8868\u8FBE\u5F0F\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7528for while\u5FAA\u73AF\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u4EA7\u751F\u7684\u662F\u8BED\u53E5</span>
        <span class="token comment">//\u4E0D\u662F\u8868\u8FBE\u5F0F</span>
      todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>TodoItem
          key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
          text<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
          completed<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>completed<span class="token punctuation">}</span>
          onToggle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">onToggleTodo</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span>
          onRemove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">onRemoveTodo</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
</code></pre></div>`,9),e=[o];function c(l,u,r,k,i,d){return s(),a("div",null,e)}var _=n(p,[["render",c]]);export{g as __pageData,_ as default};
