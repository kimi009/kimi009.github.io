import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const h='{"title":"\u6DF1\u5EA6\u5E7F\u5EA6\u904D\u5386","description":"","frontmatter":{},"headers":[],"relativePath":"js/\u6DF1\u5EA6\u5E7F\u5EA6\u904D\u5386.md"}',p={},o=t(`<h1 id="\u6DF1\u5EA6\u5E7F\u5EA6\u904D\u5386" tabindex="-1">\u6DF1\u5EA6\u5E7F\u5EA6\u904D\u5386 <a class="header-anchor" href="#\u6DF1\u5EA6\u5E7F\u5EA6\u904D\u5386" aria-hidden="true">#</a></h1><div class="language-typescript"><pre><code><span class="token keyword">const</span> data<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		name<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
		num<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		children<span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				name<span class="token operator">:</span> <span class="token string">&#39;a-1&#39;</span><span class="token punctuation">,</span>
				num<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
				children<span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						name<span class="token operator">:</span> <span class="token string">&#39;a-1-1&#39;</span><span class="token punctuation">,</span>
						num<span class="token operator">:</span> <span class="token number">111</span><span class="token punctuation">,</span>
						children<span class="token operator">:</span> <span class="token punctuation">[</span>
							<span class="token punctuation">{</span>
								name<span class="token operator">:</span> <span class="token string">&#39;a-1-1-1&#39;</span><span class="token punctuation">,</span>
								num<span class="token operator">:</span> <span class="token number">1111</span><span class="token punctuation">,</span>
								children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
							<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						name<span class="token operator">:</span> <span class="token string">&#39;a-1-2&#39;</span><span class="token punctuation">,</span>
						num<span class="token operator">:</span> <span class="token number">112</span><span class="token punctuation">,</span>
						children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				name<span class="token operator">:</span> <span class="token string">&#39;a-2&#39;</span><span class="token punctuation">,</span>
				num<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
				children<span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						name<span class="token operator">:</span> <span class="token string">&#39;a-2-1&#39;</span><span class="token punctuation">,</span>
						num<span class="token operator">:</span> <span class="token number">221</span><span class="token punctuation">,</span>
						children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span>
						name<span class="token operator">:</span> <span class="token string">&#39;a-2-2&#39;</span><span class="token punctuation">,</span>
						num<span class="token operator">:</span> <span class="token number">222</span><span class="token punctuation">,</span>
						children<span class="token operator">:</span> <span class="token punctuation">[</span>
							<span class="token punctuation">{</span>
								name<span class="token operator">:</span> <span class="token string">&#39;a-2-2-1&#39;</span><span class="token punctuation">,</span>
								num<span class="token operator">:</span> <span class="token number">2221</span><span class="token punctuation">,</span>
								children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
							<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">type</span> <span class="token class-name">TreeNode</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token builtin">string</span>
	num<span class="token operator">:</span> <span class="token builtin">number</span>
	children<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6DF1\u5EA6\u904D\u5386</span>
<span class="token comment">// \u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u2014\u2014\u662F\u6307\u4ECE\u67D0\u4E2A\u9876\u70B9\u51FA\u53D1\uFF0C\u9996\u5148\u8BBF\u95EE\u8FD9\u4E2A\u9876\u70B9\uFF0C\u7136\u540E\u627E\u51FA\u521A\u8BBF\u95EE</span>
<span class="token comment">// \u8FD9\u4E2A\u7ED3\u70B9\u7684\u7B2C\u4E00\u4E2A\u672A\u88AB\u8BBF\u95EE\u7684\u90BB\u7ED3\u70B9\uFF0C\u7136\u540E\u518D\u4EE5\u6B64\u90BB\u7ED3\u70B9\u4E3A\u9876\u70B9\uFF0C\u7EE7\u7EED\u627E\u5B83\u7684</span>
<span class="token comment">// \u4E0B\u4E00\u4E2A\u9876\u70B9\u8FDB\u884C\u8BBF\u95EE\u3002\u91CD\u590D\u6B64\u6B65\u9AA4\uFF0C\u76F4\u81F3\u6240\u6709\u7ED3\u70B9\u90FD\u88AB\u8BBF\u95EE\u5B8C\u4E3A\u6B62\u3002</span>
<span class="token comment">//\u9012\u5F52\u5199\u6CD5</span>
<span class="token keyword">const</span> <span class="token function-variable function">deepTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span>nodes<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> newData<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	nodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// console.log(node.name)</span>
		newData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token operator">?.</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">deepTraversal</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> newData<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> newNodes<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token function">deepTraversal</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> newNodes<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNodes<span class="token punctuation">)</span>
<span class="token comment">//2.\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u7684\u975E\u9012\u5F52\u5199\u6CD5</span>
<span class="token keyword">const</span> <span class="token function-variable function">deepNoTraversalPro</span> <span class="token operator">=</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> stack<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token comment">//\u540C\u6765\u5B58\u653E\u5C06\u6765\u8981\u8BBF\u95EE\u7684\u8282\u70B9</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> item <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token comment">//\u6B63\u5728\u8BBF\u95EE\u7684\u8282\u70B9</span>
			nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
			<span class="token keyword">let</span> childrens <span class="token operator">=</span> item<span class="token operator">!</span><span class="token punctuation">.</span>children
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> childrens<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">//\u5C06\u73B0\u5728\u8BBF\u95EE\u70B9\u7684\u8282\u70B9\u7684\u5B50\u8282\u70B9\u5B58\u5165 stack\uFF0C\u4F9B\u5C06\u6765\u8BBF\u95EE )</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>childrens<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nodes
<span class="token punctuation">}</span>

<span class="token comment">// console.log(deepNoTraversalPro(data[0]))</span>

<span class="token comment">// \u5E7F\u5EA6\u904D\u5386</span>
<span class="token comment">// \u5E7F\u5EA6\u4F18\u5148\u904D\u5386\u2014\u2014\u662F\u4ECE\u67D0\u4E2A\u9876\u70B9\u51FA\u53D1\uFF0C\u9996\u5148\u8BBF\u95EE\u8FD9\u4E2A\u9876\u70B9\uFF0C\u7136\u540E\u627E\u51FA\u521A\u8BBF\u95EE\u8FD9</span>
<span class="token comment">// \u4E2A\u7ED3\u70B9\u6240\u6709\u672A\u88AB\u8BBF\u95EE\u7684\u90BB\u7ED3\u70B9\uFF0C\u8BBF\u95EE\u5B8C\u540E\u518D\u8BBF\u95EE\u8FD9\u4E9B\u7ED3\u70B9\u4E2D\u7B2C\u4E00\u4E2A\u90BB\u7ED3\u70B9\u7684\u6240</span>
<span class="token comment">// \u6709\u7ED3\u70B9\uFF0C\u91CD\u590D\u6B64\u65B9\u6CD5\uFF0C\u76F4\u5230\u6240\u6709\u7ED3\u70B9\u90FD\u88AB\u8BBF\u95EE\u5B8C\u4E3A\u6B62\u3002</span>
<span class="token keyword">const</span> <span class="token function-variable function">wideTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span>nodes<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> temp<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	nodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>node<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token operator">?.</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// console.log(temp)</span>
		<span class="token function">wideTraversal</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">wideTraversal</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token comment">// \u975E\u9012\u5F52\u5E7F\u5EA6\u4F18\u5148</span>
<span class="token keyword">const</span> <span class="token function-variable function">wideNoTraversal</span> <span class="token operator">=</span> <span class="token punctuation">(</span>nodes<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> newNodes<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">let</span> stackChildNodes<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>stackChildNodes<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> item <span class="token operator">=</span> stackChildNodes<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> TreeNode
		newNodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
		<span class="token comment">//\u8FD9\u6837\u7528\u6808\u4F1A\u628A\u540E\u4E00\u6392\u7684\u513F\u5B50\u653E\u5230\u524D\u4E00\u6279\u7684\u540E\u9762\uFF0C\u7B49\u524D\u4E00\u6279\u6267\u884C\u5B8C\u6BD5\uFF0C\u81EA\u7136\u5C31\u4F1A\u5230\u540E\u4E00\u6279</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token operator">?.</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stackChildNodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> newNodes
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">wideNoTraversal</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>


</code></pre></div>`,2),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
