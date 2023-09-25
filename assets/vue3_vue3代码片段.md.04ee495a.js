import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const d='{"title":"vue3\u4EE3\u7801\u7247\u6BB5","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/vue3\u4EE3\u7801\u7247\u6BB5.md"}',p={},o=t(`<h1 id="vue3\u4EE3\u7801\u7247\u6BB5" tabindex="-1">vue3\u4EE3\u7801\u7247\u6BB5 <a class="header-anchor" href="#vue3\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a></h1><div class="language-json"><pre><code>	<span class="token property">&quot;create vue3 file&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript,vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span> 
      <span class="token string">&quot;  &lt;div class=\\&quot;$1\\&quot;&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">,</span> 
      <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;script setup lang=\\&quot;ts\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/script&gt;&quot;</span>
      <span class="token string">&quot;&lt;style lang=\\&quot;scss\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;.$1 {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/style&gt;&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u521B\u5EFAvue3\u6587\u4EF6\u7684\u6A21\u677F&quot;</span>
	<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u81EA\u52A8\u5F15\u5165vue api, \u540E\u7EED\u5728\u6A21\u677F\u6587\u4EF6\u4E2D\u5C31\u4E0D\u9700\u8981\u5728\u5199 import {ref} from &#39;vue&#39; \u7C7B\u4F3C\u4EE3\u7801\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528ref <ul><li>vite.config.ts</li></ul></li></ul><div class="language-vue"><pre><code>import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import AutoImport from &#39;unplugin-auto-import/vite&#39;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: &#39;vue&#39;, //\u5BFC\u5165vue  api
      		dts:&#39;src/auto-import.d.ts&#39; //\u81EA\u52A8\u751F\u6210\u58F0\u660E\u6587\u4EF6
		}),
	],
})

</code></pre></div><ul><li>vue3\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</li></ul><div class="language-vue"><pre><code>app.config.globalProperties.$env = &#39;dev&#39;
</code></pre></div><ul><li>vue3 \u6DFB\u52A0\u7C7B\u578B\u58F0\u660E\u6587\u4EF6</li></ul><div class="language-vue"><pre><code>type kimi = {
	show(): void
}

export declare module &#39;vue&#39; {
	export interface ComponentCustomProperties {
		$kimi: kimi
	}
}

</code></pre></div><ul><li>vue3 \u6837\u5F0F\u9A9A\u64CD\u4F5C</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[$style.a,$style.b]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   \u52A8\u6001\u6837\u5F0F 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scope</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.a</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token selector">.b</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

=================== \u6216\u8005\u662F\u4E0B\u9762\u7684\u5199\u6CD5 =====================

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[test.a,test.b]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   \u52A8\u6001\u6837\u5F0F 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.a</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token selector">.b</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>vue \u61D2\u52A0\u8F7D\u56FE\u7247\u81EA\u5B9A\u4E49\u6307\u4EE4</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
			<span class="token attr-name">v-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>
			<span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span>
			<span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span>
			<span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in arr<span class="token punctuation">&quot;</span></span>
			<span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
			<span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
		<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

//\u6279\u91CF\u52A0\u8F7D\u56FE\u7247\u5730\u5740
const imgList: Record<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string,</span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">default:</span></span> <span class="token attr-name">string</span> <span class="token attr-name">}</span><span class="token punctuation">&gt;</span></span> = import.<wbr>meta.glob(
	&#39;../assets/*.*&#39;,
	{ eager: true }
)
const vLazy: Directive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HTMLImageElement,</span> <span class="token attr-name">string</span><span class="token punctuation">&gt;</span></span> = async (el, binding) =&gt; {
	const def = (await import(&#39;../../public/vite.svg&#39;)).default 
	el.src = def  // \u8BBE\u7F6E\u9ED8\u8BA4\u56FE\u7247\u5730\u5740

	const obs = new IntersectionObserver((entries) =&gt; {
		const { intersectionRatio } = entries[0]
		if (intersectionRatio == 1) {
			el.src = binding.value
			obs.unobserve(el)
		} else if (intersectionRatio &gt; 0) {
			// \u51FA\u73B0\u5728\u89C6\u53E3
			setTimeout(() =&gt; {
				el.src = binding.value
				obs.unobserve(el)
			}, 2000)
		}
	})
	obs.observe(el)
}
</code></pre></div><ul><li>vue3.3 \u65B0\u589E\u5BF9\u63D2\u69FD\u53C2\u6570\u7EA6\u675F</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">generic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>T,K,V<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
defineSlots<span class="token operator">&lt;</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span><span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span> index<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
	<span class="token function">cus</span><span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-vue"><pre><code>- \u7236\u7EC4\u4EF6\u4F7F\u7528
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@hello</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>he<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ item, index }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{ item }} -- {{ index }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#cus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ num }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{ num }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HelloWorld</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>vue3\u6027\u80FD\u4F18\u5316 <ul><li>rollup-plugin-visualizer</li></ul></li><li>vuerouter \u589E\u52A0\u5143\u4FE1\u606F\u58F0\u660E\u6587\u4EF6</li></ul><div class="language-vue"><pre><code>declare module &#39;vue-router&#39;{
	interface RouteMeta{
		title:string  //\u6BD4\u5982\u4F60\u5728\u8DEF\u7531\u7684meta\u91CC\u9762\u52A0\u4E86title\uFF0C\u5C31\u9700\u8981\u5982\u6B64\u6765\u58F0\u660E
	}
}
</code></pre></div><ul><li>el-upload \u56FE\u7247\u538B\u7F29\u4E0A\u4F20</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-upload</span>
		<span class="token attr-name"><span class="token namespace">v-model:</span>file-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload-demo<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">:http-request</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadAction<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">multiple</span>
		<span class="token attr-name">:before-upload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeUpload<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click to upload<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tip</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-upload__tip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				jpg/png files with a size less than 500KB.
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-upload</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgSrc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage<span class="token punctuation">,</span> ElMessageBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
	UploadProps<span class="token punctuation">,</span>
	UploadRawFile<span class="token punctuation">,</span>
	UploadUserFile<span class="token punctuation">,</span>
	UploadRequestOptions<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

<span class="token keyword">const</span> fileList <span class="token operator">=</span> ref<span class="token operator">&lt;</span>UploadUserFile<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> imgSrc <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token literal-property property">beforeUpload</span><span class="token operator">:</span> UploadProps<span class="token punctuation">[</span><span class="token string">&#39;beforeUpload&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">rawFile</span><span class="token operator">:</span> UploadRawFile</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> isImg <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>rawFile<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isImg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u6587\u4EF6\u7C7B\u578B\u4E0D\u6B63\u786E&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span>
	<span class="token comment">// const formData = await compressImage(rawFile)</span>
	<span class="token comment">// console.log(formData as File)</span>
	<span class="token comment">// return formData as File</span>
	<span class="token comment">// return new Promise&lt;File&gt;((resolve) =&gt; {</span>
	<span class="token comment">// 	setTimeout(() =&gt; {</span>
	<span class="token comment">// 		resolve(rawFile as File)</span>
	<span class="token comment">// 	}, 3000)</span>
	<span class="token comment">// })</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">uploadAction</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">opt</span><span class="token operator">:</span> UploadRequestOptions</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>opt<span class="token punctuation">)</span>
	<span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">compressImage</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>file<span class="token punctuation">)</span>
	<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
		<span class="token comment">// transformRequest: [</span>
		<span class="token comment">// 	function (data, headers) {</span>
		<span class="token comment">// 		// \u53BB\u9664post\u8BF7\u6C42\u9ED8\u8BA4\u7684Content-Type</span>
		<span class="token comment">// 		delete headers[&#39;Content-Type&#39;]</span>
		<span class="token comment">// 		return data</span>
		<span class="token comment">// 	},</span>
		<span class="token comment">// ],</span>
		<span class="token literal-property property">data</span><span class="token operator">:</span> formData<span class="token punctuation">,</span>
		<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">300000</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;\u8D44\u4EA7\u6DFB\u52A0\u6210\u529F&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">compressImage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">raw</span><span class="token operator">:</span> File</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">let</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">//\u5C06\u8BFB\u5230\u7684\u6587\u4EF6\u7F16\u7801\u6210DataUrl</span>
		reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>raw<span class="token punctuation">)</span>
		reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token comment">//\u8BFB\u53D6\u56FE\u7247\u6765\u83B7\u53D6\u56FE\u7247\u7684\u5BBD\u9AD8</span>
				<span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				img<span class="token punctuation">.</span>src <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token operator">?.</span>result <span class="token keyword">as</span> string
				img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token comment">// \u7136\u540E\u5C06\u56FE\u7247\u753B\u5728\u753B\u5E03\u4E0A</span>
					<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
					<span class="token keyword">const</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>
					<span class="token comment">// let maxW = 1080</span>
					<span class="token comment">// let maxH = 720</span>

					<span class="token comment">// let ratio // \u56FE\u7247\u538B\u7F29\u6BD4</span>
					<span class="token comment">// let needCompress = false // \u662F\u5426\u9700\u8981\u538B\u7F29\u6807\u8BC6</span>
					<span class="token comment">// // \u5BBD\u5EA6\u8D85\u51FA\u8BBE\u7F6E\u8FDB\u884C\u538B\u7F29</span>
					<span class="token comment">// if (img.naturalWidth &gt; maxW) {</span>
					<span class="token comment">// 	needCompress = true</span>
					<span class="token comment">// 	ratio = img.naturalWidth / maxW</span>
					<span class="token comment">// 	maxH = img.naturalHeight / ratio</span>
					<span class="token comment">// }</span>
					<span class="token comment">// // \u9AD8\u5EA6\u8D85\u51FA\u8BBE\u7F6E\u8FDB\u884C\u538B\u7F29</span>
					<span class="token comment">// if (img.naturalHeight &gt; maxH) {</span>
					<span class="token comment">// 	needCompress = true</span>
					<span class="token comment">// 	ratio = img.naturalHeight / maxH</span>
					<span class="token comment">// 	maxW = img.naturalWidth / ratio</span>
					<span class="token comment">// }</span>
					<span class="token comment">// // \u4E0D\u9700\u8981\u538B\u7F29</span>
					<span class="token comment">// if (!needCompress) {</span>
					<span class="token comment">// 	maxW = img.naturalWidth</span>
					<span class="token comment">// 	maxH = img.naturalHeight</span>
					<span class="token comment">// }</span>
					<span class="token comment">// 			//\u7F29\u653E\u540E\u9AD8\u5EA6\u4ECD\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\u7EE7\u7EED\u6309\u6BD4\u4F8B\u7F29\u5C0F</span>
					<span class="token comment">// 			canvas.width = maxW //\u753B\u5E03\u7684\u5BBD = \u56FE\u7247\u7684\u5BBD</span>
					<span class="token comment">// canvas.height = maxH //\u753B\u5E03\u7684\u9AD8 = \u56FE\u7247\u7684\u9AD8</span>
					<span class="token comment">// context?.clearRect(0, 0, maxW, maxH)</span>
					<span class="token comment">// context?.drawImage(img, 0, 0, maxW, maxH)</span>
					<span class="token keyword">let</span> targetWidth <span class="token operator">=</span> img<span class="token punctuation">.</span>width
					<span class="token keyword">let</span> targetHeight <span class="token operator">=</span> img<span class="token punctuation">.</span>height

					<span class="token keyword">if</span> <span class="token punctuation">(</span>targetWidth <span class="token operator">&gt;</span> targetHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">let</span> scale <span class="token operator">=</span> targetHeight <span class="token operator">/</span> <span class="token number">1280</span>
						targetHeight <span class="token operator">=</span> <span class="token number">1280</span>
						targetWidth <span class="token operator">=</span> targetWidth <span class="token operator">/</span> scale
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						<span class="token keyword">let</span> scale <span class="token operator">=</span> targetWidth <span class="token operator">/</span> <span class="token number">1280</span>
						targetWidth <span class="token operator">=</span> <span class="token number">1280</span>
						targetHeight <span class="token operator">=</span> targetHeight <span class="token operator">/</span> scale
					<span class="token punctuation">}</span>
					<span class="token comment">//\u7F29\u653E\u540E\u9AD8\u5EA6\u4ECD\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\u7EE7\u7EED\u6309\u6BD4\u4F8B\u7F29\u5C0F</span>
					canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> targetWidth <span class="token comment">//\u753B\u5E03\u7684\u5BBD = \u56FE\u7247\u7684\u5BBD</span>
					canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> targetHeight <span class="token comment">//\u753B\u5E03\u7684\u9AD8 = \u56FE\u7247\u7684\u9AD8</span>
					context<span class="token operator">?.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> targetWidth<span class="token punctuation">,</span> targetHeight<span class="token punctuation">)</span>
					context<span class="token operator">?.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> targetWidth<span class="token punctuation">,</span> targetHeight<span class="token punctuation">)</span>
					<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>raw<span class="token punctuation">.</span>size <span class="token operator">&lt;=</span> <span class="token number">628288</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token comment">//0.6M</span>
						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u4E8E0.6M&#39;</span><span class="token punctuation">)</span>
						data <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">)</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						data <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
					imgSrc<span class="token punctuation">.</span>value <span class="token operator">=</span> data
					<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token function">dataURLToBlob</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> raw<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
					formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
					<span class="token function">resolve</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">dataURLToBlob</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">dataurl</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token literal-property property">fileName</span><span class="token operator">:</span> String</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> arr <span class="token operator">=</span> dataurl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		mime <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">:(.*?);</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		bstr <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		n <span class="token operator">=</span> bstr<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		u8arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		u8arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> bstr<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>u8arr<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> mime <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * base64\u56FE\u7247 \u8F6C\u56FE\u7247file\u5BF9\u8C61
 */</span>
<span class="token comment">// const dataURLToBlob = (dataurl: String, fileName: string) =&gt; {</span>
<span class="token comment">// 	let arr = dataurl.split(&#39;,&#39;)</span>
<span class="token comment">// 	// \u83B7\u53D6\u6587\u4EF6\u7C7B\u578B</span>
<span class="token comment">// 	let mime = (arr[0].match(/:(.*?);/) as any)[1]</span>
<span class="token comment">// 	// \u89E3\u7801base64\u5B57\u7B26\u4E32</span>
<span class="token comment">// 	let bstr = atob(arr[1])</span>
<span class="token comment">// 	let n = bstr.length</span>
<span class="token comment">// 	// \u521B\u5EFA\u4E00\u4E2A\u5185\u5BB9\u957F\u5EA6\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5143\u7D20\u4E3A\u5BF9\u5E94\u5B57\u7B26\u4E32\u7684Unicode\u7801</span>
<span class="token comment">// 	// \u6570\u7EC4\u7C7B\u578B\u8868\u793A\u4E00\u4E2A8\u4F4D\u65E0\u7B26\u53F7\u6574\u578B\u6570\u7EC4\uFF0C\u521B\u5EFA\u65F6\u5185\u5BB9\u88AB\u521D\u59CB\u5316\u4E3A0\u3002</span>
<span class="token comment">// 	let u8arr = new Uint8Array(n)</span>
<span class="token comment">// 	// UTF-16 \u7F16\u7801\u5355\u5143\u5339\u914D Unicode \u7F16\u7801\u5355\u5143</span>
<span class="token comment">// 	while (n--) {</span>
<span class="token comment">// 		u8arr[n] = bstr.charCodeAt(n)</span>
<span class="token comment">// 	}</span>
<span class="token comment">// 	return new File([u8arr], fileName, { type: mime })</span>
<span class="token comment">// }</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p><strong>\u540E\u7AEF\u4EE3\u7801\uFF08\u6CE8\u610Fnode\u7248\u672C\uFF0Cmulter\u8FD9\u4E2A\u5E93\u4E0D\u540C\u7684\u7248\u672C\u6709\u5DEE\u5F02\uFF0C\u4E0B\u9762\u662Fnode:14.18.3\uFF09</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> multer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;multer&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> storage <span class="token operator">=</span> multer<span class="token punctuation">.</span><span class="token function">diskStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token function">destination</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> file<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;uploads&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">filename</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> file<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fileName <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>originalname<span class="token punctuation">,</span><span class="token string">&#39;latin1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
		<span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> fileName<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> storage <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span> upload<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">)</span>
	res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;text/plain;charset=utf-8&#39;</span><span class="token punctuation">)</span>
	<span class="token comment">// es.writeHead(200, { &#39;Content-Type&#39;: &#39;text/plain;charset=utf-8&#39; })</span>
	<span class="token comment">// res.set(&#39;Content-Type&#39;, &#39;text/plain;charset=utf-8&#39;)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>files<span class="token punctuation">)</span>
	res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E0A\u4F20\u6210\u529F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server running...&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><ul><li>el-input type=number \u53F3\u8FB9\u7BAD\u5934\u95EE\u9898</li></ul><div class="language-vue"><pre><code>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ipInput<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>segment<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numrule<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>  
// \u5728el-input\u4E0A\u5B9A\u4E49numrule
/deep/ .numrule {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none !important;
    }
    input[type=&quot;number&quot;]{
      text-align: center;
      padding: 0px;
      -webkit-appearance: textfield;
      -moz-appearance: textfield !important;
      // \u89E3\u51B3el-input\u8BBE\u7F6E\u7C7B\u578B\u4E3Anumber\u65F6\uFF0C\u4E2D\u6587\u8F93\u5165\u6CD5\u5149\u6807\u4E0A\u79FB\u95EE\u9898
      line-height: 1px !important;
    }
  }
</code></pre></div>`,23),e=[o];function c(l,u,k,i,r,m){return a(),s("div",null,e)}var q=n(p,[["render",c]]);export{d as __pageData,q as default};
