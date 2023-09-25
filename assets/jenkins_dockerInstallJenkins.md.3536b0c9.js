import{_ as e,c as n,o as s,d as o}from"./app.87eb6f1c.js";const p='{"title":"\u5B89\u88C5\u6B65\u9AA4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001 \u5B89\u88C5 docker","slug":"\u4E00\u3001-\u5B89\u88C5-docker"},{"level":2,"title":"\u4E8C\u3001\u955C\u50CF\u5B89\u88C5 jenkins","slug":"\u4E8C\u3001\u955C\u50CF\u5B89\u88C5-jenkins"}],"relativePath":"jenkins/dockerInstallJenkins.md"}',r={},a=o(`<h1 id="\u5B89\u88C5\u6B65\u9AA4" tabindex="-1">\u5B89\u88C5\u6B65\u9AA4 <a class="header-anchor" href="#\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001-\u5B89\u88C5-docker" tabindex="-1">\u4E00\u3001 \u5B89\u88C5 docker <a class="header-anchor" href="#\u4E00\u3001-\u5B89\u88C5-docker" aria-hidden="true">#</a></h2><h2 id="\u4E8C\u3001\u955C\u50CF\u5B89\u88C5-jenkins" tabindex="-1">\u4E8C\u3001\u955C\u50CF\u5B89\u88C5 jenkins <a class="header-anchor" href="#\u4E8C\u3001\u955C\u50CF\u5B89\u88C5-jenkins" aria-hidden="true">#</a></h2><blockquote><p>docker run -d -u 0 --privileged --name psb_jenkins -p 49003:8080 -v /root/jenkins_home:/var/jenkins_home jenkins/jenkins:lts</p></blockquote><div class="language-"><pre><code>\u4E0A\u9762\u7684\u547D\u4EE4\u7684\u610F\u601D\uFF1A\u8FD0\u884C\u4E00\u4E2A\u955C\u50CF\u4E3Ajenkins/jenkins:lst\u7684\u5BB9\u5668 \u547D\u540D\u4E3Apsb_jenkins  \u4F7F\u7528root\u8D26\u53F7\u8986\u76D6\u5BB9\u5668\u4E2D\u7684\u8D26\u53F7\uFF0C\u8D4B\u4E88\u6700\u9AD8\u6743\u9650 \u5C06\u5BB9\u5668\u7684/var/jenkins_home
                \u6620\u5C04\u5230\u5BBF\u4E3B\u4E3B\u673A\u7684/root/jenkins_home\u76EE\u5F55\u4E0B\uFF0C\u6620\u5C04\u5BB9\u5668\u4E2D\u76848080\u7AEF\u53E3\u5230\u4E3B\u673A\u768449003\u7AEF\u53E3
-u 0 \u6307\u7684\u662F\u4F20\u5165root\u8D26\u53F7ID\uFF0C\u8986\u76D6\u5BB9\u5668\u4E2D\u5185\u7F6E\u7684\u8D26\u53F7
-v /root/jenkins_home:/var/jenkins_home  \u6307\u7684\u662F\u5C06docker\u5BB9\u5668\u5185\u7684\u76EE\u5F55/var/jenkins_home\u6620\u5C04\u5230\u4E3B\u673A /root/jenkins_home\u76EE\u5F55\u4E0A
--name jenkins \u5C06\u5BB9\u5668\u7684\u540D\u5B57\u547D\u540D\u4E3Apsb_jenkins
-p 49003:8080  \u7AEF\u53E3\u6620\u5C04 \u5C06\u5BB9\u5668\u76848080\u7AEF\u53E3\u6620\u5C04\u5230\u4E3B\u673A\u768449003\u7AEF\u53E3
--privileged  \u8D4B\u4E88\u6700\u9AD8\u6743\u9650
</code></pre></div>`,5),i=[a];function t(d,c,_,k,h,l){return s(),n("div",null,i)}var m=e(r,[["render",t]]);export{p as __pageData,m as default};