import{_ as n,c as s,o as a,d as p}from"./app.87eb6f1c.js";const h='{"title":"centos \u67E5\u627Ejdk\u76EE\u5F55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BC6\u7801\u4FDD\u5B58\u8DEF\u5F84","slug":"\u5BC6\u7801\u4FDD\u5B58\u8DEF\u5F84"},{"level":2,"title":"\u53CD\u5411\u4EE3\u7406\u9519\u8BEF\u5BFC\u81F4\u4E0D\u80FD\u7ED9git\u6DFB\u52A0\u8D26\u6237\u5BC6\u7801","slug":"\u53CD\u5411\u4EE3\u7406\u9519\u8BEF\u5BFC\u81F4\u4E0D\u80FD\u7ED9git\u6DFB\u52A0\u8D26\u6237\u5BC6\u7801"},{"level":2,"title":"\u90E8\u7F72vue","slug":"\u90E8\u7F72vue"}],"relativePath":"linux/centos.md"}',o={},e=p(`<h1 id="centos-\u67E5\u627Ejdk\u76EE\u5F55" tabindex="-1">centos \u67E5\u627Ejdk\u76EE\u5F55 <a class="header-anchor" href="#centos-\u67E5\u627Ejdk\u76EE\u5F55" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token punctuation">[</span>root@<span class="token constant">VM</span><span class="token operator">-</span><span class="token number">24</span><span class="token operator">-</span><span class="token number">5</span><span class="token operator">-</span>centos <span class="token operator">/</span><span class="token punctuation">]</span># which java
 <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>java
</code></pre></div><div class="language-js"><pre><code><span class="token punctuation">[</span>root@<span class="token constant">VM</span><span class="token operator">-</span><span class="token number">24</span><span class="token operator">-</span><span class="token number">5</span><span class="token operator">-</span>centos <span class="token operator">/</span><span class="token punctuation">]</span># ls <span class="token operator">-</span>lr <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>java
 lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">22</span> Feb <span class="token number">19</span> <span class="token number">22</span><span class="token operator">:</span><span class="token number">09</span> <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>java <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>alternatives<span class="token operator">/</span>java
</code></pre></div><div class="language-js"><pre><code><span class="token punctuation">[</span>root@<span class="token constant">VM</span><span class="token operator">-</span><span class="token number">24</span><span class="token operator">-</span><span class="token number">5</span><span class="token operator">-</span>centos <span class="token operator">/</span><span class="token punctuation">]</span># ls <span class="token operator">-</span>lrt <span class="token operator">/</span>etc<span class="token operator">/</span>alternatives<span class="token operator">/</span>java
 lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">73</span> Feb <span class="token number">19</span> <span class="token number">22</span><span class="token operator">:</span><span class="token number">09</span> <span class="token operator">/</span>etc<span class="token operator">/</span>alternatives<span class="token operator">/</span>java <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token operator">/</span>usr<span class="token operator">/</span>lib<span class="token operator">/</span>jvm<span class="token operator">/</span>java<span class="token operator">-</span><span class="token number">1.8</span><span class="token number">.0</span><span class="token operator">-</span>openjdk<span class="token operator">-</span><span class="token number">1.8</span><span class="token number">.0</span><span class="token number">.322</span><span class="token punctuation">.</span>b06<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">.</span>el7_9<span class="token punctuation">.</span>x86_64<span class="token operator">/</span>jre<span class="token operator">/</span>bin<span class="token operator">/</span>java
</code></pre></div><h1 id="centos-\u67E5\u627E\u6587\u4EF6\u76EE\u5F55" tabindex="-1">centos \u67E5\u627E\u6587\u4EF6\u76EE\u5F55 <a class="header-anchor" href="#centos-\u67E5\u627E\u6587\u4EF6\u76EE\u5F55" aria-hidden="true">#</a></h1><ul><li><p>\u67E5\u627E\u6587\u4EF6</p><div class="language-js"><pre><code>find <span class="token operator">/</span> <span class="token operator">-</span>name <span class="token string">&#39;filename&#39;</span>
</code></pre></div></li><li><p>\u67E5\u627E\u76EE\u5F55</p><div class="language-js"><pre><code>find <span class="token operator">/</span> <span class="token operator">-</span>name <span class="token string">&#39;path&#39;</span> <span class="token operator">-</span>type d
</code></pre></div></li><li><p>\u67E5\u627E\u5185\u5BB9</p><div class="language-js"><pre><code>find <span class="token punctuation">.</span> <span class="token operator">|</span> xargs grep <span class="token operator">-</span>ri <span class="token string">&#39;content&#39;</span>
<span class="token comment">//\u53EA\u663E\u793A\u6587\u4EF6\u540D\u79F0</span>
</code></pre></div></li></ul><h1 id="jenkins-\u5B89\u88C5" tabindex="-1">jenkins \u5B89\u88C5 <a class="header-anchor" href="#jenkins-\u5B89\u88C5" aria-hidden="true">#</a></h1><p><a href="https://cloud.tencent.com/developer/article/1333792" target="_blank" rel="noopener noreferrer">CentOS 7 \u4E0BJenkins\u5B89\u88C5\u90E8\u7F72\u6559\u7A0B - \u4E91+\u793E\u533A - \u817E\u8BAF\u4E91 (tencent.com)</a></p><h2 id="\u5BC6\u7801\u4FDD\u5B58\u8DEF\u5F84" tabindex="-1">\u5BC6\u7801\u4FDD\u5B58\u8DEF\u5F84 <a class="header-anchor" href="#\u5BC6\u7801\u4FDD\u5B58\u8DEF\u5F84" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token punctuation">[</span>root@<span class="token constant">VM</span><span class="token operator">-</span><span class="token number">24</span><span class="token operator">-</span><span class="token number">5</span><span class="token operator">-</span>centos <span class="token operator">/</span><span class="token punctuation">]</span># vi <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>lib<span class="token operator">/</span>jenkins<span class="token operator">/</span>secrets<span class="token operator">/</span>initialAdminPassword
</code></pre></div><h2 id="\u53CD\u5411\u4EE3\u7406\u9519\u8BEF\u5BFC\u81F4\u4E0D\u80FD\u7ED9git\u6DFB\u52A0\u8D26\u6237\u5BC6\u7801" tabindex="-1">\u53CD\u5411\u4EE3\u7406\u9519\u8BEF\u5BFC\u81F4\u4E0D\u80FD\u7ED9git\u6DFB\u52A0\u8D26\u6237\u5BC6\u7801 <a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406\u9519\u8BEF\u5BFC\u81F4\u4E0D\u80FD\u7ED9git\u6DFB\u52A0\u8D26\u6237\u5BC6\u7801" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>\u4FEE\u6539nginx\u914D\u7F6E
server<span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name jenkins<span class="token punctuation">.</span>kimi009<span class="token punctuation">.</span>top<span class="token punctuation">;</span>
        access_log <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>jenkins<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
        error_log <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>jenkins<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span>

        location <span class="token operator">/</span> <span class="token punctuation">{</span>
                proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> <span class="token operator">/</span>50x<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> <span class="token operator">/</span>50x<span class="token punctuation">.</span>html<span class="token punctuation">{</span>
                root <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\u4FEE\u6539\u4E3A
server<span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name jenkins<span class="token punctuation">.</span>kimi009<span class="token punctuation">.</span>top<span class="token punctuation">;</span>
        access_log <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>jenkins<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>access<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
        error_log <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>jenkins<span class="token operator">/</span>jenkins<span class="token punctuation">.</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span>

        location <span class="token operator">/</span> <span class="token punctuation">{</span>
                proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">;</span>
                proxy_read_timeout  <span class="token number">90</span><span class="token punctuation">;</span>
                proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>Host $host<span class="token operator">:</span>$server_port<span class="token punctuation">;</span>
                proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>Server $host<span class="token punctuation">;</span>
                proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
                proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto $scheme<span class="token punctuation">;</span>
                proxy_set_header <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token constant">IP</span> $remote_addr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> <span class="token operator">/</span>50x<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> <span class="token operator">/</span>50x<span class="token punctuation">.</span>html<span class="token punctuation">{</span>
                root <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u90E8\u7F72vue" tabindex="-1">\u90E8\u7F72vue <a class="header-anchor" href="#\u90E8\u7F72vue" aria-hidden="true">#</a></h2><p><a href="https://www.jianshu.com/p/1d07b986ab2c" target="_blank" rel="noopener noreferrer">\u4F7F\u7528jenkins\u81EA\u52A8\u5316\u6253\u5305\u90E8\u7F72Vue\u9879\u76EE\uFF0C\u8BE6\u7EC6\u6559\u7A0B\u3002 - \u7B80\u4E66 (jianshu.com)</a></p><p>jenkins\u5DE5\u4F5C\u76EE\u5F55</p><ul><li><p>/var/lib/jenkins/workspace</p></li><li><p>\u7F51\u7AD9\u6DFB\u52A0\u4E86https\u540E\u4E0D\u80FD\u8BBF\u95EE\uFF0C\u7ED3\u679C\u662F\u9632\u706B\u5899\u628A443\u7AEF\u53E3\u7ED9\u7981\u7528\u4E86</p><p><a href="https://coderschool.cn/2389.html" target="_blank" rel="noopener noreferrer">Centos7\u4E0B\u9632\u706B\u5899\u5F00\u542F</a></p><p><a href="https://cloud.tencent.com/developer/article/1406558" target="_blank" rel="noopener noreferrer">\u9632\u706B\u5899\u77E5\u8BC6</a></p><div class="language-bash"><pre><code>\u5F00\u542F <span class="token number">80</span> <span class="token number">443</span> \u7AEF\u53E3   
<span class="token punctuation">[</span>root@dfdf ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --zone=public --add-port=80/tcp --permanent </span>
<span class="token punctuation">[</span>root@dfdf ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --zone=public --add-port=443/tcp --permanent  </span>

\u91CD\u542F\u9632\u706B\u5899  
<span class="token punctuation">[</span>root@dfdf ~<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --reload</span>

\u5173\u95ED\u9632\u706B\u5899\uFF1A
systemctl stop firewalld.service
</code></pre></div></li></ul>`,16),t=[e];function r(c,l,k,u,i,d){return a(),s("div",null,t)}var b=n(o,[["render",r]]);export{h as __pageData,b as default};