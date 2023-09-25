import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const y='{"title":"bcrypt\u52A0\u76D0\u52A0\u5BC6\u5305","description":"","frontmatter":{},"headers":[],"relativePath":"nest/bcrypt\u52A0\u76D0\u52A0\u5BC6\u5305.md"}',c={},p=t(`<h1 id="bcrypt\u52A0\u76D0\u52A0\u5BC6\u5305" tabindex="-1">bcrypt\u52A0\u76D0\u52A0\u5BC6\u5305 <a class="header-anchor" href="#bcrypt\u52A0\u76D0\u52A0\u5BC6\u5305" aria-hidden="true">#</a></h1><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> bcryptjs
</code></pre></div><p><code>bcryptjs</code> \u662Fnodejs\u4E2D\u6BD4\u8F83\u597D\u7684\u4E00\u6B3E\u52A0\u76D0(<code>salt</code>)\u52A0\u5BC6\u7684\u5305, \u6211\u4EEC\u5904\u7406\u5BC6\u7801\u52A0\u5BC6\u3001\u6821\u9A8C\u8981\u4F7F\u7528\u5230\u7684\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-typescript"><pre><code><span class="token comment">/**
 * \u52A0\u5BC6\u5904\u7406 - \u540C\u6B65\u65B9\u6CD5
 * bcryptjs.hashSync(data, salt)
 *    - data  \u8981\u52A0\u5BC6\u7684\u6570\u636E
 *    - slat  \u7528\u4E8E\u54C8\u5E0C\u5BC6\u7801\u7684\u76D0\u3002\u5982\u679C\u6307\u5B9A\u4E3A\u6570\u5B57\uFF0C\u5219\u5C06\u4F7F\u7528\u6307\u5B9A\u7684\u8F6E\u6570\u751F\u6210\u76D0\u5E76\u5C06\u5176\u4F7F\u7528\u3002\u63A8\u8350 10
 */</span>
<span class="token keyword">const</span> hashPassword <span class="token operator">=</span> bcryptjs<span class="token punctuation">.</span><span class="token function">hashSync</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>


<span class="token comment">/**
 * \u6821\u9A8C - \u4F7F\u7528\u540C\u6B65\u65B9\u6CD5
 * bcryptjs.compareSync(data, encrypted)
 *    - data        \u8981\u6BD4\u8F83\u7684\u6570\u636E, \u4F7F\u7528\u767B\u5F55\u65F6\u4F20\u9012\u8FC7\u6765\u7684\u5BC6\u7801
 *    - encrypted   \u8981\u6BD4\u8F83\u7684\u6570\u636E, \u4F7F\u7528\u4ECE\u6570\u636E\u5E93\u4E2D\u67E5\u8BE2\u51FA\u6765\u7684\u52A0\u5BC6\u8FC7\u7684\u5BC6\u7801
 */</span>
<span class="token keyword">const</span> isOk <span class="token operator">=</span> bcryptjs<span class="token punctuation">.</span><span class="token function">compareSync</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> encryptPassword<span class="token punctuation">)</span>
</code></pre></div>`,4),e=[p];function o(r,d,l,i,_,u){return a(),s("div",null,e)}var h=n(c,[["render",o]]);export{y as __pageData,h as default};
