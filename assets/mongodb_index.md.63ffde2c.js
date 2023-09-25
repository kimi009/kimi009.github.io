import{_ as e,c as a,o as n,d as o}from"./app.87eb6f1c.js";const u='{"title":"centos mongodb \u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57511","slug":"\u57511"},{"level":2,"title":"\u6570\u636E\u6062\u590D","slug":"\u6570\u636E\u6062\u590D"}],"relativePath":"mongodb/index.md"}',s={},t=o(`<h1 id="centos-mongodb-\u914D\u7F6E" tabindex="-1">centos mongodb \u914D\u7F6E <a class="header-anchor" href="#centos-mongodb-\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u8FDC\u7A0B\u8FDE\u63A5\u9700\u8981\u5F00\u542F\u9632\u706B\u5899</p><div class="language-code"><pre><code>[root@VM-24-5-centos bin]# firewall-cmd --zone=public --add-port=27017/tcp --permanent

[root@VM-24-5-centos bin]# firewall-cmd --reload
</code></pre></div><h2 id="\u57511" tabindex="-1">\u57511 <a class="header-anchor" href="#\u57511" aria-hidden="true">#</a></h2><ul><li>\u5982\u679C\u9047\u5230\u542F\u52A8\u4E0D\u4E86mongodb \u9700\u8981\u6E05\u7406\u4E0Blog\u65E5\u5FD7\uFF0C\u53EF\u80FD\u65E5\u5FD7\u8D85\u6807\u4E86</li></ul><h2 id="\u6570\u636E\u6062\u590D" tabindex="-1">\u6570\u636E\u6062\u590D <a class="header-anchor" href="#\u6570\u636E\u6062\u590D" aria-hidden="true">#</a></h2><div class="language-sql"><pre><code>mongorestore <span class="token operator">-</span>u root <span class="token operator">-</span>p kimi009 <span class="token operator">-</span>h <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>   <span class="token comment">--authenticationDatabase admin -d cms --drop /www/server/mongodb/doracms2</span>
\u8BB0\u5F97\u8981\u5199<span class="token operator">-</span>u \u7528\u6237\u540D <span class="token operator">-</span>p \u5BC6\u7801
</code></pre></div>`,7),r=[t];function c(d,p,i,l,_,m){return n(),a("div",null,r)}var b=e(s,[["render",c]]);export{u as __pageData,b as default};