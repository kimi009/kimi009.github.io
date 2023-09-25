import{_ as e,c as a,o as s,d as t}from"./app.87eb6f1c.js";var n="/assets/1.0dda2c7b.png";const f='{"title":"mysql","description":"","frontmatter":{},"headers":[],"relativePath":"mysql/index.md"}',r={},o=t('<h1 id="mysql" tabindex="-1">mysql <a class="header-anchor" href="#mysql" aria-hidden="true">#</a></h1><p><a href="https://www.runoob.com/mysql/mysql-administration.html" target="_blank" rel="noopener noreferrer">MySQL \u7BA1\u7406 | \u83DC\u9E1F\u6559\u7A0B (runoob.com)</a></p><ul><li><p>\u5B9D\u5854\u9762\u677F\u5FD8\u8BB0\u5BC6\u7801</p><p><a href="https://blog.csdn.net/qq_42991839/article/details/125294403" target="_blank" rel="noopener noreferrer">(51\u6761\u6D88\u606F) \u5B9D\u5854\u9762\u677F\u5B89\u88C5\u4E86mysql5.7\uFF0C\u91CD\u65B0\u8BBE\u7F6Eroot\u7528\u6237\u5BC6\u7801_\u7231\u5317\u7684\u7433\u513F\u7684\u535A\u5BA2-CSDN\u535A\u5BA2_\u5B9D\u5854\u5B89\u88C5mysql5.7</a></p></li><li><p>\u53C2\u8003\u6307\u5357</p><p><a href="https://cloud.tencent.com/developer/article/1755081" target="_blank" rel="noopener noreferrer">CentOS 8 \u4E0AMySQL 8.0 \u5B89\u88C5\u90E8\u7F72\u4E0E\u914D\u7F6E\u6559\u7A0B - \u817E\u8BAF\u4E91\u5F00\u53D1\u8005\u793E\u533A-\u817E\u8BAF\u4E91 (tencent.com)</a></p></li></ul><p>\u200B <img src="'+n+`" alt=""></p><div class="language-"><pre><code>ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY&#39;newPassword&#39;;
</code></pre></div><ul><li><p>\u8BB0\u5F97\u6253\u5F00\u9632\u706B\u5899</p><div class="language-bash"><pre><code>firewall-cmd --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp --permanent
firewall-cmd --reload
</code></pre></div></li><li><p>\u65B0\u5EFA\u6570\u636E\u5E93\u7684\u65F6\u5019\uFF0C\u7F16\u7801\u9009\u62E9utf8mb4</p><blockquote><p>\u65B0\u5EFA\u7684\u6570\u636E\u5E93\u8981\u7528\u8FD9\u4E2A\u7F16\u7801\uFF0C\u56E0\u4E3A\u73B0\u5728\u5FAE\u4FE1\u53F7\u6709\u8868\u60C5\u7B26\u53F7\uFF0C\u53EA\u6709\u8FD9\u4E2A\u7F16\u7801\u53EF\u4EE5\u8BC6\u522B\u5230</p><p>utf-8\u4F1A\u5B58\u4E3A\u4E71\u7801</p></blockquote></li><li><p>You must reset your password using ALTER USER statement before executing this statement.\u610F\u601D\u5C31\u662F\u8981\u4FEE\u6539\u5BC6\u7801</p><blockquote><p>alter user user() identified by &#39;xxx&#39;;</p></blockquote></li><li><p>\u63D2\u5165\u7528\u6237</p><p>\u4EE5\u4E0B\u4E3A\u6DFB\u52A0\u7528\u6237\u7684\u5B9E\u4F8B\uFF0C\u7528\u6237\u540D\u4E3Akimi\uFF0C\u5BC6\u7801\u4E3A123456\uFF0C\u5E76\u6388\u6743\u7528\u6237\u53EF\u8FDB\u884C SELECT, INSERT \u548C UPDATE\u64CD\u4F5C\u6743\u9650\uFF1A</p><div class="language-sql"><pre><code><span class="token keyword">create</span> <span class="token keyword">user</span> kimi<span class="token variable">@localhost</span> identified <span class="token keyword">by</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>s</p></li></ul>`,6),p=[o];function l(i,c,d,_,m,u){return s(),a("div",null,p)}var h=e(r,[["render",l]]);export{f as __pageData,h as default};
