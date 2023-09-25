import{_ as e,c as n,o as t,d as r}from"./app.87eb6f1c.js";const g='{"title":"\u81EA\u52A8\u5316\u90E8\u7F72\u8FD0\u7EF4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u9762\u4EE5 ubuntu \u4E3A\u4F8B","slug":"\u4E0B\u9762\u4EE5-ubuntu-\u4E3A\u4F8B"},{"level":3,"title":"\u4E00\u3001 docker \u5B89\u88C5 jenkins","slug":"\u4E00\u3001-docker-\u5B89\u88C5-jenkins"},{"level":3,"title":"\u4E8C\u3001 \u666E\u901A\u5B89\u88C5","slug":"\u4E8C\u3001-\u666E\u901A\u5B89\u88C5"}],"relativePath":"jenkins/index.md"}',s={},o=r(`<h1 id="\u81EA\u52A8\u5316\u90E8\u7F72\u8FD0\u7EF4" tabindex="-1">\u81EA\u52A8\u5316\u90E8\u7F72\u8FD0\u7EF4 <a class="header-anchor" href="#\u81EA\u52A8\u5316\u90E8\u7F72\u8FD0\u7EF4" aria-hidden="true">#</a></h1><h2 id="\u4E0B\u9762\u4EE5-ubuntu-\u4E3A\u4F8B" tabindex="-1">\u4E0B\u9762\u4EE5 ubuntu \u4E3A\u4F8B <a class="header-anchor" href="#\u4E0B\u9762\u4EE5-ubuntu-\u4E3A\u4F8B" aria-hidden="true">#</a></h2><p><a href="https://jenkins.io/zh/" target="_blank" rel="noopener noreferrer">jenkins \u4E0B\u8F7D\u5730\u5740</a><a href="https://jenkins.io/zh/doc/" target="_blank" rel="noopener noreferrer">jenkins \u6587\u6863</a></p><h3 id="\u4E00\u3001-docker-\u5B89\u88C5-jenkins" tabindex="-1">\u4E00\u3001 docker \u5B89\u88C5 jenkins <a class="header-anchor" href="#\u4E00\u3001-docker-\u5B89\u88C5-jenkins" aria-hidden="true">#</a></h3><p>docker run -d -u 0 --privileged --name test -p 49003:8080 -v /root/test:/var/jenkins_home jenkins:latest</p><p>docker run -d -u 0 --privileged --name test -p 49003:8080 -v /root/test:/var/jenkins_home jenkins/jenkins:lts</p><h3 id="\u4E8C\u3001-\u666E\u901A\u5B89\u88C5" tabindex="-1">\u4E8C\u3001 \u666E\u901A\u5B89\u88C5 <a class="header-anchor" href="#\u4E8C\u3001-\u666E\u901A\u5B89\u88C5" aria-hidden="true">#</a></h3><blockquote><p>\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u6784\u5EFA\u5B89\u88C5\u73AF\u5883</p></blockquote><div class="language-"><pre><code>wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
\u5728/etc/apt/sources.list\u672B\u5C3E\u6DFB\u52A0\u4E0B\u9762\u7684\u4EE3\u7801
deb https://pkg.jenkins.io/debian-stable binary/
</code></pre></div><blockquote><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u5F00\u59CB\u5B89\u88C5</p></blockquote><div class="language-"><pre><code>sudo apt-get update
sudo apt-get install jenkins
</code></pre></div><blockquote><p>jenkins \u542F\u52A8\u547D\u4EE4</p></blockquote><div class="language-"><pre><code>\u542F\u52A8 service jenkins start
\u91CD\u542F service jenkins restart
\u505C\u6B62 service jenkins stop
</code></pre></div><blockquote><p>\u5378\u8F7D jenkins</p></blockquote><div class="language-"><pre><code>sudo service jenkins stop
sudo apt-get remove jenkins
sudo apt-get clean
sudo apt-get autoclean
</code></pre></div><blockquote><p>jenkins \u914D\u7F6E shell</p></blockquote><div class="language-"><pre><code>==&gt;\u6267\u884Cnode

echo $PATH
node -v
npm -v
npm install
npm run build

exit
</code></pre></div><div class="language-"><pre><code>//\u6267\u884Cdocker\u90E8\u7F72 vue
docker stop vuenginxapp || true \\
&amp;&amp; docker rm vuenginxapp || true \\
&amp;&amp; cd /root/test/workspace/vue-dp-test \\
&amp;&amp; docker build -t vuenginxapp .  \\
&amp;&amp; docker run -d -p 8083:80 --name vuenginxapp -v /root/test/workspace/vue-dp-test/dist:/usr/share/nginx/html/  -v /root/test/workspace/vue-dp-test/nginx.conf:/etc/nginx/nginx.conf vuenginxapp

</code></pre></div><div class="language-"><pre><code>//\u6267\u884Cdocker\u90E8\u7F72 vue
docker stop vuemergefirst
docker rm vuemergefirst
cd /root/test/workspace/vuemerge/first
docker build -t vuemergefirst .
docker run -d -p 8085:80 --name vuemergefirst -v /root/test/workspace/vuemerge/first/first:/usr/share/nginx/html/  -v /root/test/workspace/vuemerge/first/nginx.conf:/etc/nginx/nginx.conf vuemergefirst
</code></pre></div>`,19),a=[o];function i(d,c,p,u,l,k){return t(),n("div",null,a)}var h=e(s,[["render",i]]);export{g as __pageData,h as default};
