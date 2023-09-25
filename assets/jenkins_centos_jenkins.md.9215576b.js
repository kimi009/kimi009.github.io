import{_ as n,c as e,o as s,d as a}from"./app.87eb6f1c.js";const u='{"title":"centos_jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"jenkins/centos_jenkins.md"}',t={},o=a(`<h1 id="centos-jenkins" tabindex="-1">centos_jenkins <a class="header-anchor" href="#centos-jenkins" aria-hidden="true">#</a></h1><p><a href="https://www.cnblogs.com/kerwincui/p/15202979.html" target="_blank" rel="noopener noreferrer">Centos\u5B89\u88C5\u548C\u5378\u8F7DJenkins</a></p><ul><li><p>\u5378\u8F7D</p><div class="language-bash"><pre><code>systemctl stop jenkins.service

<span class="token function">sudo</span> yum remove jenkins

<span class="token function">rm</span> -rf /etc/sysconfig/jenkins.rpmsave
<span class="token function">rm</span> -rf /var/cache/jenkins/
<span class="token function">rm</span> -rf /var/lib/jenkins/
<span class="token function">rm</span> -rf /var/log/jenkins
<span class="token function">rm</span> -rf /usr/lib/jenkins
</code></pre></div></li></ul>`,3),r=[o];function c(i,p,_,l,k,d){return s(),e("div",null,r)}var m=n(t,[["render",c]]);export{u as __pageData,m as default};
