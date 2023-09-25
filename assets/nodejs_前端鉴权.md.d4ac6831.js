import{_ as e,c as o,o as s,d as n}from"./app.87eb6f1c.js";var i="/assets/1.0f93e8d1.png",t="/assets/2.1d771dc1.png",a="/assets/3.7fee9e9f.png",p="/assets/4.561f229d.png",c="/assets/5.acceb942.png",l="/assets/6.e9c9990f.png",r="/assets/7.768301c2.png",k="/assets/8.b5cfb63c.png";const C='{"title":"\u524D\u7AEF\u9274\u6743","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001cookie","slug":"\u4E00\u3001cookie"},{"level":2,"title":"\u4E8C\u3001session","slug":"\u4E8C\u3001session"},{"level":2,"title":"\u4E09\u3001\u5E94\u7528\u65B9\u6848\uFF1Atoken","slug":"\u4E09\u3001\u5E94\u7528\u65B9\u6848\uFF1Atoken"},{"level":3,"title":"token \u7684\u7F16\u7801","slug":"token-\u7684\u7F16\u7801"},{"level":3,"title":"refresh token","slug":"refresh-token"},{"level":3,"title":"session \u548C token","slug":"session-\u548C-token"},{"level":2,"title":"\u56DB\u3001\u5355\u70B9\u767B\u5F55","slug":"\u56DB\u3001\u5355\u70B9\u767B\u5F55"},{"level":3,"title":"\u201C\u865A\u5047\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u76F8\u540C\uFF09","slug":"\u201C\u865A\u5047\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u76F8\u540C\uFF09"},{"level":3,"title":"\u201C\u771F\u5B9E\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u4E0D\u540C\uFF09","slug":"\u201C\u771F\u5B9E\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u4E0D\u540C\uFF09"},{"level":2,"title":"\u4E94\u3001\u603B\u7ED3","slug":"\u4E94\u3001\u603B\u7ED3"}],"relativePath":"nodejs/\u524D\u7AEF\u9274\u6743.md"}',d={},u=n(`<h1 id="\u524D\u7AEF\u9274\u6743" tabindex="-1">\u524D\u7AEF\u9274\u6743 <a class="header-anchor" href="#\u524D\u7AEF\u9274\u6743" aria-hidden="true">#</a></h1><p><a href="https://mp.weixin.qq.com/s/3nmr-lawC44nm8Gg9EY1FA" target="_blank" rel="noopener noreferrer">\u53C2\u8003\u6587\u7AE0</a></p><h2 id="\u4E00\u3001cookie" tabindex="-1">\u4E00\u3001cookie <a class="header-anchor" href="#\u4E00\u3001cookie" aria-hidden="true">#</a></h2><ul><li><p>cookie \u4E5F\u662F\u524D\u7AEF\u5B58\u50A8\u7684\u4E00\u79CD\uFF0C\u4F46\u76F8\u6BD4\u4E8E localStorage \u7B49\u5176\u4ED6\u65B9\u5F0F\uFF0C\u501F\u52A9 HTTP \u5934\u3001\u6D4F\u89C8\u5668\u80FD\u529B\uFF0Ccookie \u53EF\u4EE5\u505A\u5230\u524D\u7AEF\u65E0\u611F\u77E5\u3002</p><ul><li><p>\u4E00\u822C\u8FC7\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A</p><blockquote><ul><li>\u5728\u63D0\u4F9B\u6807\u8BB0\u7684\u63A5\u53E3\uFF0C\u901A\u8FC7 HTTP \u8FD4\u56DE\u5934\u7684 Set-Cookie \u5B57\u6BB5\uFF0C\u76F4\u63A5\u300C\u79CD\u300D\u5230\u6D4F\u89C8\u5668\u4E0A</li><li>\u6D4F\u89C8\u5668\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u4F1A\u81EA\u52A8\u628A cookie \u901A\u8FC7 HTTP \u8BF7\u6C42\u5934\u7684 Cookie \u5B57\u6BB5\uFF0C\u5E26\u7ED9\u63A5\u53E3</li></ul></blockquote></li></ul></li><li><p><strong>\u300C\u914D\u7F6E\uFF1ADomain / Path\u300D</strong></p><p>Domain\u5C5E\u6027\u6307\u5B9A\u6D4F\u89C8\u5668\u53D1\u51FA HTTP \u8BF7\u6C42\u65F6\uFF0C\u54EA\u4E9B\u57DF\u540D\u8981\u9644\u5E26\u8FD9\u4E2A Cookie\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u8BE5\u5C5E\u6027\uFF0C\u6D4F\u89C8\u5668\u4F1A\u9ED8\u8BA4\u5C06\u5176\u8BBE\u4E3A\u5F53\u524D URL \u7684\u4E00\u7EA7\u57DF\u540D\uFF0C\u6BD4\u5982 <a href="http://www.example.com" target="_blank" rel="noopener noreferrer">www.example.com</a> \u4F1A\u8BBE\u4E3A <a href="http://example.com" target="_blank" rel="noopener noreferrer">example.com</a>\uFF0C\u800C\u4E14\u4EE5\u540E\u5982\u679C\u8BBF\u95EEexample.com\u7684\u4EFB\u4F55\u5B50\u57DF\u540D\uFF0CHTTP \u8BF7\u6C42\u4E5F\u4F1A\u5E26\u4E0A\u8FD9\u4E2A Cookie\u3002\u5982\u679C\u670D\u52A1\u5668\u5728Set-Cookie\u5B57\u6BB5\u6307\u5B9A\u7684\u57DF\u540D\uFF0C\u4E0D\u5C5E\u4E8E\u5F53\u524D\u57DF\u540D\uFF0C\u6D4F\u89C8\u5668\u4F1A\u62D2\u7EDD\u8FD9\u4E2A Cookie\u3002</p><p>Path\u5C5E\u6027\u6307\u5B9A\u6D4F\u89C8\u5668\u53D1\u51FA HTTP \u8BF7\u6C42\u65F6\uFF0C\u54EA\u4E9B\u8DEF\u5F84\u8981\u9644\u5E26\u8FD9\u4E2A Cookie\u3002\u53EA\u8981\u6D4F\u89C8\u5668\u53D1\u73B0\uFF0CPath\u5C5E\u6027\u662F HTTP \u8BF7\u6C42\u8DEF\u5F84\u7684\u5F00\u5934\u4E00\u90E8\u5206\uFF0C\u5C31\u4F1A\u5728\u5934\u4FE1\u606F\u91CC\u9762\u5E26\u4E0A\u8FD9\u4E2A Cookie\u3002\u6BD4\u5982\uFF0CPATH\u5C5E\u6027\u662F/\uFF0C\u90A3\u4E48\u8BF7\u6C42/docs\u8DEF\u5F84\u4E5F\u4F1A\u5305\u542B\u8BE5 Cookie\u3002\u5F53\u7136\uFF0C\u524D\u63D0\u662F\u57DF\u540D\u5FC5\u987B\u4E00\u81F4\u3002</p></li><li><p><strong>\u914D\u7F6E\uFF1AExpires / Max-Age</strong></p><p>Expires\u5C5E\u6027\u6307\u5B9A\u4E00\u4E2A\u5177\u4F53\u7684\u5230\u671F\u65F6\u95F4\uFF0C\u5230\u4E86\u6307\u5B9A\u65F6\u95F4\u4EE5\u540E\uFF0C\u6D4F\u89C8\u5668\u5C31\u4E0D\u518D\u4FDD\u7559\u8FD9\u4E2A Cookie\u3002\u5B83\u7684\u503C\u662F UTC \u683C\u5F0F\u3002\u5982\u679C\u4E0D\u8BBE\u7F6E\u8BE5\u5C5E\u6027\uFF0C\u6216\u8005\u8BBE\u4E3Anull\uFF0CCookie \u53EA\u5728\u5F53\u524D\u4F1A\u8BDD\uFF08session\uFF09\u6709\u6548\uFF0C\u6D4F\u89C8\u5668\u7A97\u53E3\u4E00\u65E6\u5173\u95ED\uFF0C\u5F53\u524D Session \u7ED3\u675F\uFF0C\u8BE5 Cookie \u5C31\u4F1A\u88AB\u5220\u9664\u3002\u53E6\u5916\uFF0C\u6D4F\u89C8\u5668\u6839\u636E\u672C\u5730\u65F6\u95F4\uFF0C\u51B3\u5B9A Cookie \u662F\u5426\u8FC7\u671F\uFF0C\u7531\u4E8E\u672C\u5730\u65F6\u95F4\u662F\u4E0D\u7CBE\u786E\u7684\uFF0C\u6240\u4EE5\u6CA1\u6709\u529E\u6CD5\u4FDD\u8BC1 Cookie \u4E00\u5B9A\u4F1A\u5728\u670D\u52A1\u5668\u6307\u5B9A\u7684\u65F6\u95F4\u8FC7\u671F\u3002</p><p>Max-Age\u5C5E\u6027\u6307\u5B9A\u4ECE\u73B0\u5728\u5F00\u59CB Cookie \u5B58\u5728\u7684\u79D2\u6570\uFF0C\u6BD4\u598260 * 60 * 24 * 365\uFF08\u5373\u4E00\u5E74\uFF09\u3002\u8FC7\u4E86\u8FD9\u4E2A\u65F6\u95F4\u4EE5\u540E\uFF0C\u6D4F\u89C8\u5668\u5C31\u4E0D\u518D\u4FDD\u7559\u8FD9\u4E2A Cookie\u3002</p><p>\u5982\u679C\u540C\u65F6\u6307\u5B9A\u4E86Expires\u548CMax-Age\uFF0C\u90A3\u4E48Max-Age\u7684\u503C\u5C06\u4F18\u5148\u751F\u6548\u3002</p><p>\u5982\u679CSet-Cookie\u5B57\u6BB5\u6CA1\u6709\u6307\u5B9AExpires\u6216Max-Age\u5C5E\u6027\uFF0C\u90A3\u4E48\u8FD9\u4E2A Cookie \u5C31\u662F Session Cookie\uFF0C\u5373\u5B83\u53EA\u5728\u672C\u6B21\u5BF9\u8BDD\u5B58\u5728\uFF0C\u4E00\u65E6\u7528\u6237\u5173\u95ED\u6D4F\u89C8\u5668\uFF0C\u6D4F\u89C8\u5668\u5C31\u4E0D\u4F1A\u518D\u4FDD\u7559\u8FD9\u4E2A Cookie\u3002</p></li><li><p><strong>\u300C\u914D\u7F6E\uFF1ASecure / HttpOnly\u300D</strong></p><p>Secure\u5C5E\u6027\u6307\u5B9A\u6D4F\u89C8\u5668\u53EA\u6709\u5728\u52A0\u5BC6\u534F\u8BAE HTTPS \u4E0B\uFF0C\u624D\u80FD\u5C06\u8FD9\u4E2A Cookie \u53D1\u9001\u5230\u670D\u52A1\u5668\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u5982\u679C\u5F53\u524D\u534F\u8BAE\u662F HTTP\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u5FFD\u7565\u670D\u52A1\u5668\u53D1\u6765\u7684Secure\u5C5E\u6027\u3002\u8BE5\u5C5E\u6027\u53EA\u662F\u4E00\u4E2A\u5F00\u5173\uFF0C\u4E0D\u9700\u8981\u6307\u5B9A\u503C\u3002\u5982\u679C\u901A\u4FE1\u662F HTTPS \u534F\u8BAE\uFF0C\u8BE5\u5F00\u5173\u81EA\u52A8\u6253\u5F00\u3002</p><p>HttpOnly\u5C5E\u6027\u6307\u5B9A\u8BE5 Cookie \u65E0\u6CD5\u901A\u8FC7 JavaScript \u811A\u672C\u62FF\u5230\uFF0C\u4E3B\u8981\u662FDocument.cookie\u5C5E\u6027\u3001XMLHttpRequest\u5BF9\u8C61\u548C Request API \u90FD\u62FF\u4E0D\u5230\u8BE5\u5C5E\u6027\u3002\u8FD9\u6837\u5C31\u9632\u6B62\u4E86\u8BE5 Cookie \u88AB\u811A\u672C\u8BFB\u5230\uFF0C\u53EA\u6709\u6D4F\u89C8\u5668\u53D1\u51FA HTTP \u8BF7\u6C42\u65F6\uFF0C\u624D\u4F1A\u5E26\u4E0A\u8BE5 Cookie\u3002</p></li><li><p><strong>\u300CHTTP \u5934\u5BF9 cookie \u7684\u8BFB\u5199\u300D</strong></p><p>HTTP \u8FD4\u56DE\u7684\u4E00\u4E2A Set-Cookie \u5934\u7528\u4E8E\u5411\u6D4F\u89C8\u5668\u5199\u5165\u300C\u4E00\u6761\uFF08\u4E14\u53EA\u80FD\u662F\u4E00\u6761\uFF09\u300Dcookie\uFF0C\u683C\u5F0F\u4E3A cookie \u952E\u503C + \u914D\u7F6E\u952E\u503C</p><div class="language-js"><pre><code>Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> username<span class="token operator">=</span>jimu<span class="token punctuation">;</span> domain<span class="token operator">=</span>jimu<span class="token punctuation">.</span>com<span class="token punctuation">;</span> path<span class="token operator">=</span><span class="token operator">/</span>blog<span class="token punctuation">;</span> Expires<span class="token operator">=</span>Wed<span class="token punctuation">,</span> <span class="token number">21</span> Oct <span class="token number">2015</span> <span class="token number">07</span><span class="token operator">:</span><span class="token number">28</span><span class="token operator">:</span><span class="token number">00</span> <span class="token constant">GMT</span><span class="token punctuation">;</span> Secure<span class="token punctuation">;</span> HttpOnly
</code></pre></div><p>\u90A3\u6211\u60F3\u4E00\u6B21\u591A set \u51E0\u4E2A cookie \u600E\u4E48\u529E\uFF1F\u591A\u7ED9\u51E0\u4E2A Set-Cookie \u5934\uFF08\u4E00\u6B21 HTTP \u8BF7\u6C42\u4E2D\u5141\u8BB8\u91CD\u590D\uFF09</p><div class="language-js"><pre><code>Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> username<span class="token operator">=</span>jimu<span class="token punctuation">;</span> domain<span class="token operator">=</span>jimu<span class="token punctuation">.</span>com
Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> height<span class="token operator">=</span><span class="token number">180</span><span class="token punctuation">;</span> domain<span class="token operator">=</span>me<span class="token punctuation">.</span>jimu<span class="token punctuation">.</span>com
Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> weight<span class="token operator">=</span><span class="token number">80</span><span class="token punctuation">;</span> domain<span class="token operator">=</span>me<span class="token punctuation">.</span>jimu<span class="token punctuation">.</span>com 
</code></pre></div><p>HTTP \u8BF7\u6C42\u7684 Cookie \u5934\u7528\u4E8E\u6D4F\u89C8\u5668\u628A\u7B26\u5408\u5F53\u524D\u300C\u7A7A\u95F4\u3001\u65F6\u95F4\u3001\u4F7F\u7528\u65B9\u5F0F\u300D\u914D\u7F6E\u7684\u6240\u6709 cookie \u4E00\u5E76\u53D1\u7ED9\u670D\u52A1\u7AEF\u3002\u56E0\u4E3A\u7531\u6D4F\u89C8\u5668\u505A\u4E86\u7B5B\u9009\u5224\u65AD\uFF0C\u5C31\u4E0D\u9700\u8981\u5F52\u8FD8\u914D\u7F6E\u5185\u5BB9\u4E86\uFF0C\u53EA\u8981\u53D1\u9001\u952E\u503C\u5C31\u53EF\u4EE5</p><div class="language-js"><pre><code><span class="token literal-property property">Cookie</span><span class="token operator">:</span> username<span class="token operator">=</span>jimu<span class="token punctuation">;</span> height<span class="token operator">=</span><span class="token number">180</span><span class="token punctuation">;</span> weight<span class="token operator">=</span><span class="token number">80</span> 
</code></pre></div></li><li><p><strong>\u300C\u524D\u7AEF\u5BF9 cookie \u7684\u8BFB\u5199\u300D</strong></p><p>\u524D\u7AEF\u53EF\u4EE5\u81EA\u5DF1\u521B\u5EFA cookie\uFF0C\u5982\u679C\u670D\u52A1\u7AEF\u521B\u5EFA\u7684 cookie \u6CA1\u52A0<code>HttpOnly</code>\uFF0C\u90A3\u606D\u559C\u4F60\u4E5F\u53EF\u4EE5\u4FEE\u6539\u4ED6\u7ED9\u7684 cookie\u3002</p><p>\u8C03\u7528<code>document.cookie</code>\u53EF\u4EE5\u521B\u5EFA\u3001\u4FEE\u6539 cookie\uFF0C\u548C HTTP \u4E00\u6837\uFF0C\u4E00\u6B21<code>document.cookie</code>\u80FD\u4E14\u53EA\u80FD\u64CD\u4F5C\u4E00\u4E2A cookie\u3002</p><div class="language-"><pre><code>document.cookie = &#39;username=jimu; domain=jimu.com; path=/blog; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly&#39;; 
</code></pre></div><p>\u8C03\u7528<code>document.cookie</code>\u4E5F\u53EF\u4EE5\u8BFB\u5230 cookie\uFF0C\u4E5F\u548C HTTP \u4E00\u6837\uFF0C\u80FD\u8BFB\u5230\u6240\u6709\u7684\u975E<code>HttpOnly</code> cookie\u3002</p><div class="language-"><pre><code>console.log(document.cookie);
// username=jimu; height=180; weight=80 

</code></pre></div></li><li><p><strong>\u300Ccookie \u662F\u7EF4\u6301 HTTP \u8BF7\u6C42\u72B6\u6001\u7684\u57FA\u77F3\u300D</strong></p><p>\u4E86\u89E3\u4E86 cookie \u540E\uFF0C\u6211\u4EEC\u77E5\u9053 cookie \u662F\u6700\u4FBF\u6377\u7684\u7EF4\u6301 HTTP \u8BF7\u6C42\u72B6\u6001\u7684\u65B9\u5F0F\uFF0C\u5927\u591A\u6570\u524D\u7AEF\u9274\u6743\u95EE\u9898\u90FD\u662F\u9760 cookie \u89E3\u51B3\u7684\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u9009\u7528\u522B\u7684\u5B58\u50A8\u65B9\u5F0F\uFF08\u540E\u9762\u4E5F\u4F1A\u591A\u591A\u5C11\u5C11\u63D0\u5230\uFF09\u3002</p></li></ul><h2 id="\u4E8C\u3001session" tabindex="-1">\u4E8C\u3001session <a class="header-anchor" href="#\u4E8C\u3001session" aria-hidden="true">#</a></h2><p><img src="`+i+'" alt=""></p><ul><li>\u6D4F\u89C8\u5668\u767B\u5F55\u53D1\u9001\u8D26\u53F7\u5BC6\u7801\uFF0C\u670D\u52A1\u7AEF\u67E5\u7528\u6237\u5E93\uFF0C\u6821\u9A8C\u7528\u6237</li><li>\u670D\u52A1\u7AEF\u628A\u7528\u6237\u767B\u5F55\u72B6\u6001\u5B58\u4E3A Session\uFF0C\u751F\u6210\u4E00\u4E2A sessionId</li><li>\u901A\u8FC7\u767B\u5F55\u63A5\u53E3\u8FD4\u56DE\uFF0C\u628A sessionId set \u5230 cookie \u4E0A</li><li>\u6B64\u540E\u6D4F\u89C8\u5668\u518D\u8BF7\u6C42\u4E1A\u52A1\u63A5\u53E3\uFF0CsessionId \u968F cookie \u5E26\u4E0A</li><li>\u670D\u52A1\u7AEF\u67E5 sessionId \u6821\u9A8C session</li><li>\u6210\u529F\u540E\u6B63\u5E38\u505A\u4E1A\u52A1\u5904\u7406\uFF0C\u8FD4\u56DE\u7ED3\u679C</li></ul><p><strong>\u300CSession \u7684\u5B58\u50A8\u65B9\u5F0F\u300D</strong></p><p>\u663E\u7136\uFF0C\u670D\u52A1\u7AEF\u53EA\u662F\u7ED9 cookie \u4E00\u4E2A sessionId\uFF0C\u800C session \u7684\u5177\u4F53\u5185\u5BB9\uFF08\u53EF\u80FD\u5305\u542B\u7528\u6237\u4FE1\u606F\u3001session \u72B6\u6001\u7B49\uFF09\uFF0C\u8981\u81EA\u5DF1\u5B58\u4E00\u4E0B\u3002\u5B58\u50A8\u7684\u65B9\u5F0F\u6709\u51E0\u79CD\uFF1A</p><ul><li>Redis\uFF08\u63A8\u8350\uFF09\uFF1A\u5185\u5B58\u578B\u6570\u636E\u5E93\uFF0Credis\u4E2D\u6587\u5B98\u65B9\u7F51\u7AD9\u3002\u4EE5 key-value \u7684\u5F62\u5F0F\u5B58\uFF0C\u6B63\u5408 sessionId-sessionData \u7684\u573A\u666F\uFF1B\u4E14\u8BBF\u95EE\u5FEB\u3002</li><li>\u5185\u5B58\uFF1A\u76F4\u63A5\u653E\u5230\u53D8\u91CF\u91CC\u3002\u4E00\u65E6\u670D\u52A1\u91CD\u542F\u5C31\u6CA1\u4E86</li><li>\u6570\u636E\u5E93\uFF1A\u666E\u901A\u6570\u636E\u5E93\u3002\u6027\u80FD\u4E0D\u9AD8\u3002</li></ul><p><strong>\u300CSession \u7684\u8FC7\u671F\u548C\u9500\u6BC1\u300D</strong></p><p>\u5F88\u7B80\u5355\uFF0C\u53EA\u8981\u628A\u5B58\u50A8\u7684 session \u6570\u636E\u9500\u6BC1\u5C31\u53EF\u4EE5\u3002</p><p><strong>\u300CSession \u7684\u5206\u5E03\u5F0F\u95EE\u9898\u300D</strong></p><p>\u901A\u5E38\u670D\u52A1\u7AEF\u662F\u96C6\u7FA4\uFF0C\u800C\u7528\u6237\u8BF7\u6C42\u8FC7\u6765\u4F1A\u8D70\u4E00\u6B21\u8D1F\u8F7D\u5747\u8861\uFF0C\u4E0D\u4E00\u5B9A\u6253\u5230\u54EA\u53F0\u673A\u5668\u4E0A\u3002\u90A3\u4E00\u65E6\u7528\u6237\u540E\u7EED\u63A5\u53E3\u8BF7\u6C42\u5230\u7684\u673A\u5668\u548C\u4ED6\u767B\u5F55\u8BF7\u6C42\u7684\u673A\u5668\u4E0D\u4E00\u81F4\uFF0C\u6216\u8005\u767B\u5F55\u8BF7\u6C42\u7684\u673A\u5668\u5B95\u673A\u4E86\uFF0Csession \u4E0D\u5C31\u5931\u6548\u4E86\u5417\uFF1F</p><p>\u8FD9\u4E2A\u95EE\u9898\u73B0\u5728\u6709\u51E0\u79CD\u89E3\u51B3\u65B9\u5F0F\u3002</p><ul><li>\u4E00\u662F\u4ECE\u300C\u5B58\u50A8\u300D\u89D2\u5EA6\uFF0C\u628A session \u96C6\u4E2D\u5B58\u50A8\u3002\u5982\u679C\u6211\u4EEC\u7528\u72EC\u7ACB\u7684 Redis \u6216\u666E\u901A\u6570\u636E\u5E93\uFF0C\u5C31\u53EF\u4EE5\u628A session \u90FD\u5B58\u5230\u4E00\u4E2A\u5E93\u91CC\u3002</li><li>\u4E8C\u662F\u4ECE\u300C\u5206\u5E03\u300D\u89D2\u5EA6\uFF0C\u8BA9\u76F8\u540C IP \u7684\u8BF7\u6C42\u5728\u8D1F\u8F7D\u5747\u8861\u65F6\u90FD\u6253\u5230\u540C\u4E00\u53F0\u673A\u5668\u4E0A\u3002\u4EE5 nginx \u4E3A\u4F8B\uFF0C\u53EF\u4EE5\u914D\u7F6E ip_hash \u6765\u5B9E\u73B0\u3002</li></ul><p>\u4F46\u901A\u5E38\u8FD8\u662F\u91C7\u7528\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u7B2C\u4E8C\u79CD\u76F8\u5F53\u4E8E\u9609\u5272\u4E86\u8D1F\u8F7D\u5747\u8861\uFF0C\u4E14\u4ECD\u6CA1\u6709\u89E3\u51B3\u300C\u7528\u6237\u8BF7\u6C42\u7684\u673A\u5668\u5B95\u673A\u300D\u7684\u95EE\u9898\u3002</p><p><strong>\u300Cnode.js \u4E0B\u7684 session \u5904\u7406\u300D</strong></p><p>\u524D\u9762\u7684\u56FE\u5F88\u6E05\u695A\u4E86\uFF0C\u670D\u52A1\u7AEF\u8981\u5B9E\u73B0\u5BF9 cookie \u548C session \u7684\u5B58\u53D6\uFF0C\u5B9E\u73B0\u8D77\u6765\u8981\u505A\u7684\u4E8B\u8FD8\u662F\u5F88\u591A\u7684\u3002\u5728<code>npm</code>\u4E2D\uFF0C\u5DF2\u7ECF\u6709\u5C01\u88C5\u597D\u7684\u4E2D\u95F4\u4EF6\uFF0C\u6BD4\u5982 express-session - npm</p><p>express-session - npm \u4E3B\u8981\u5B9E\u73B0\u4E86\uFF1A</p><ul><li>\u5C01\u88C5\u4E86\u5BF9cookie\u7684\u8BFB\u5199\u64CD\u4F5C\uFF0C\u5E76\u63D0\u4F9B\u914D\u7F6E\u9879\u914D\u7F6E\u5B57\u6BB5\u3001\u52A0\u5BC6\u65B9\u5F0F\u3001\u8FC7\u671F\u65F6\u95F4\u7B49\u3002</li><li>\u5C01\u88C5\u4E86\u5BF9session\u7684\u5B58\u53D6\u64CD\u4F5C\uFF0C\u5E76\u63D0\u4F9B\u914D\u7F6E\u9879\u914D\u7F6Esession\u5B58\u50A8\u65B9\u5F0F\uFF08\u5185\u5B58/redis\uFF09\u3001\u5B58\u50A8\u89C4\u5219\u7B49\u3002</li><li>\u7ED9req\u63D0\u4F9B\u4E86session\u5C5E\u6027\uFF0C\u63A7\u5236\u5C5E\u6027\u7684set/get\u5E76\u54CD\u5E94\u5230cookie\u548Csession\u5B58\u53D6\u4E0A\uFF0C\u5E76\u7ED9req.session\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u6CD5\u3002</li></ul><h2 id="\u4E09\u3001\u5E94\u7528\u65B9\u6848\uFF1Atoken" tabindex="-1">\u4E09\u3001\u5E94\u7528\u65B9\u6848\uFF1Atoken <a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u65B9\u6848\uFF1Atoken" aria-hidden="true">#</a></h2><p>session \u7684\u7EF4\u62A4\u7ED9\u670D\u52A1\u7AEF\u9020\u6210\u5F88\u5927\u56F0\u6270\uFF0C\u6211\u4EEC\u5FC5\u987B\u627E\u5730\u65B9\u5B58\u653E\u5B83\uFF0C\u53C8\u8981\u8003\u8651\u5206\u5E03\u5F0F\u7684\u95EE\u9898\uFF0C\u751A\u81F3\u8981\u5355\u72EC\u4E3A\u4E86\u5B83\u542F\u7528\u4E00\u5957 Redis \u96C6\u7FA4\u3002\u6709\u6CA1\u6709\u66F4\u597D\u7684\u529E\u6CD5\uFF1F</p><blockquote><p>\u6211\u53C8\u60F3\u5230\u5B66\u6821\uFF0C\u5728\u6CA1\u6709\u6821\u56ED\u5361\u6280\u672F\u4EE5\u524D\uFF0C\u6211\u4EEC\u90FD\u9760\u300C\u5B66\u751F\u8BC1\u300D\u3002\u95E8\u536B\u5C0F\u54E5\u76F4\u63A5\u5BF9\u7167\u6211\u548C\u5B66\u751F\u8BC1\u4E0A\u7684\u8138\uFF0C\u786E\u8BA4\u5B66\u751F\u8BC1\u6709\u6548\u671F\u3001\u5E74\u7EA7\u7B49\u4FE1\u606F\uFF0C\u5C31\u53EF\u4EE5\u653E\u884C\u4E86\u3002</p></blockquote><p>\u56DE\u8FC7\u5934\u6765\u60F3\u60F3\uFF0C\u4E00\u4E2A\u767B\u5F55\u573A\u666F\uFF0C\u4E5F\u4E0D\u5FC5\u5F80 session \u5B58\u592A\u591A\u4E1C\u897F\uFF0C\u90A3\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u6253\u5305\u5230 cookie \u4E2D\u5462\uFF1F\u8FD9\u6837\u670D\u52A1\u7AEF\u4E0D\u7528\u5B58\u4E86\uFF0C\u6BCF\u6B21\u53EA\u8981\u6838\u9A8C cookie \u5E26\u7684\u300C\u8BC1\u4EF6\u300D\u6709\u6548\u6027\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u643A\u5E26\u4E00\u4E9B\u8F7B\u91CF\u7684\u4FE1\u606F\u3002</p><p>\u8FD9\u79CD\u65B9\u5F0F\u901A\u5E38\u88AB\u53EB\u505A token\u3002</p><p><img src="'+t+`" alt=""></p><p>token \u7684\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A</p><ul><li>\u7528\u6237\u767B\u5F55\uFF0C\u670D\u52A1\u7AEF\u6821\u9A8C\u8D26\u53F7\u5BC6\u7801\uFF0C\u83B7\u5F97\u7528\u6237\u4FE1\u606F</li><li>\u628A\u7528\u6237\u4FE1\u606F\u3001token \u914D\u7F6E\u7F16\u7801\u6210 token\uFF0C\u901A\u8FC7 cookie set \u5230\u6D4F\u89C8\u5668</li><li>\u6B64\u540E\u7528\u6237\u8BF7\u6C42\u4E1A\u52A1\u63A5\u53E3\uFF0C\u901A\u8FC7 cookie \u643A\u5E26 token</li><li>\u63A5\u53E3\u6821\u9A8C token \u6709\u6548\u6027\uFF0C\u8FDB\u884C\u6B63\u5E38\u4E1A\u52A1\u63A5\u53E3\u5904\u7406</li></ul><p><strong>\u5BA2\u6237\u7AEF token \u7684\u5B58\u50A8\u65B9\u5F0F\u300D</strong></p><p>\u5728\u524D\u9762 cookie \u8BF4\u8FC7\uFF0Ccookie \u5E76\u4E0D\u662F\u5BA2\u6237\u7AEF\u5B58\u50A8\u51ED\u8BC1\u7684\u552F\u4E00\u65B9\u5F0F\u3002token \u56E0\u4E3A\u5B83\u7684\u300C\u65E0\u72B6\u6001\u6027\u300D\uFF0C\u6709\u6548\u671F\u3001\u4F7F\u7528\u9650\u5236\u90FD\u5305\u5728 token \u5185\u5BB9\u91CC\uFF0C\u5BF9 cookie \u7684\u7BA1\u7406\u80FD\u529B\u4F9D\u8D56\u8F83\u5C0F\uFF0C\u5BA2\u6237\u7AEF\u5B58\u8D77\u6765\u5C31\u663E\u5F97\u66F4\u81EA\u7531\u3002\u4F46 web \u5E94\u7528\u7684\u4E3B\u6D41\u65B9\u5F0F\u4ECD\u662F\u653E\u5728 cookie \u91CC\uFF0C\u6BD5\u7ADF\u5C11\u64CD\u5FC3\u3002</p><p><strong>\u300Ctoken \u7684\u8FC7\u671F\u300D</strong></p><p>\u90A3\u6211\u4EEC\u5982\u4F55\u63A7\u5236 token \u7684\u6709\u6548\u671F\u5462\uFF1F\u5F88\u7B80\u5355\uFF0C\u628A\u300C\u8FC7\u671F\u65F6\u95F4\u300D\u548C\u6570\u636E\u4E00\u8D77\u585E\u8FDB\u53BB\uFF0C\u9A8C\u8BC1\u65F6\u5224\u65AD\u5C31\u597D\u3002</p><h3 id="token-\u7684\u7F16\u7801" tabindex="-1">token \u7684\u7F16\u7801 <a class="header-anchor" href="#token-\u7684\u7F16\u7801" aria-hidden="true">#</a></h3><p>\u7F16\u7801\u7684\u65B9\u5F0F\u4E30\u4FED\u7531\u4EBA\u3002</p><p><strong>\u300Cbase64\u300D</strong></p><p>\u6BD4\u5982 node \u7AEF\u7684 cookie-session - npm \u5E93</p><blockquote><p>\u4E0D\u8981\u7EA0\u7ED3\u540D\u5B57\uFF0C\u5176\u5B9E\u662F\u4E2A token \u5E93\uFF0C\u4F46\u4FDD\u6301\u4E86\u548C express-session - npm \u9AD8\u5EA6\u4E00\u81F4\u7684\u7528\u6CD5\uFF0C\u628A\u8981\u5B58\u7684\u6570\u636E\u6302\u5728 session \u4E0A</p></blockquote><p><strong>\u300C\u9632\u7BE1\u6539\u300D</strong></p><blockquote><p>\u90A3\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u679C\u7528\u6237 cdd \u62FF<code>{&quot;userid&quot;:&quot;abb\u201D}</code>\u8F6C\u4E86\u4E2A base64\uFF0C\u518D\u624B\u52A8\u4FEE\u6539\u4E86\u81EA\u5DF1\u7684 token \u4E3A <code>eyJ1c2VyaWQiOiJhIn0=</code>\uFF0C\u662F\u4E0D\u662F\u5C31\u80FD\u76F4\u63A5\u8BBF\u95EE\u5230 abb \u7684\u6570\u636E\u4E86\uFF1F</p></blockquote><p>\u662F\u7684\u3002\u6240\u4EE5\u770B\u60C5\u51B5\uFF0C\u5982\u679C token \u6D89\u53CA\u5230\u654F\u611F\u6743\u9650\uFF0C\u5C31\u8981\u60F3\u529E\u6CD5\u907F\u514D token \u88AB\u7BE1\u6539\u3002</p><p>\u89E3\u51B3\u65B9\u6848\u5C31\u662F\u7ED9 token \u52A0\u7B7E\u540D\uFF0C\u6765\u8BC6\u522B token \u662F\u5426\u88AB\u7BE1\u6539\u8FC7\u3002\u4F8B\u5982\u5728 cookie-session - npm \u5E93\u4E2D\uFF0C\u589E\u52A0\u4E24\u9879\u914D\u7F6E\uFF1A</p><div class="language-"><pre><code>secret: &#39;iAmSecret&#39;,
signed: true, 
</code></pre></div><p>\u8FD9\u6837\u4F1A\u591A\u79CD\u4E00\u4E2A .sig cookie\uFF0C\u91CC\u9762\u7684\u503C\u5C31\u662F <code>{&quot;userid&quot;:&quot;abb\u201D}</code> \u548C <code>iAmSecret</code>\u901A\u8FC7\u52A0\u5BC6\u7B97\u6CD5\u8BA1\u7B97\u51FA\u6765\u7684\uFF0C\u5E38\u89C1\u7684\u6BD4\u5982HMACSHA256 \u7C7B (System.Security.Cryptography) | Microsoft Docs\u3002</p><p><img src="`+a+'" alt=""></p><p>\u597D\u4E86\uFF0C\u73B0\u5728 cdd \u867D\u7136\u80FD\u4F2A\u9020\u51FA<code>eyJ1c2VyaWQiOiJhIn0=</code>\uFF0C\u4F46\u4F2A\u9020\u4E0D\u51FA sig \u7684\u5185\u5BB9\uFF0C\u56E0\u4E3A\u4ED6\u4E0D\u77E5\u9053 secret\u3002</p><p><strong>\u300CJWT\u300D</strong></p><p>\u4F46\u4E0A\u9762\u7684\u505A\u6CD5\u989D\u5916\u589E\u52A0\u4E86 cookie \u6570\u91CF\uFF0C\u6570\u636E\u672C\u8EAB\u4E5F\u6CA1\u6709\u89C4\u8303\u7684\u683C\u5F0F\uFF0C\u6240\u4EE5 JSON Web Token Introduction - <a href="http://jwt.io" target="_blank" rel="noopener noreferrer">jwt.io</a> \u6A2A\u7A7A\u51FA\u4E16\u4E86\u3002</p><blockquote><p>JSON Web Token (JWT) \u662F\u4E00\u4E2A\u5F00\u653E\u6807\u51C6\uFF0C\u5B9A\u4E49\u4E86\u4E00\u79CD\u4F20\u9012 JSON \u4FE1\u606F\u7684\u65B9\u5F0F\u3002\u8FD9\u4E9B\u4FE1\u606F\u901A\u8FC7\u6570\u5B57\u7B7E\u540D\u786E\u4FDD\u53EF\u4FE1\u3002</p></blockquote><p>\u5B83\u662F\u4E00\u79CD\u6210\u719F\u7684 token \u5B57\u7B26\u4E32\u751F\u6210\u65B9\u6848\uFF0C\u5305\u542B\u4E86\u6211\u4EEC\u524D\u9762\u63D0\u5230\u7684\u6570\u636E\u3001\u7B7E\u540D\u3002\u4E0D\u5982\u76F4\u63A5\u770B\u4E00\u4E0B\u4E00\u4E2A JWT token \u957F\u4EC0\u4E48\u6837\uFF1A</p><blockquote><p>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJhIiwiaWF0IjoxNTUxOTUxOTk4fQ.2jf3kl_uKWRkwjOP6uQRJFqMlwSABcgqqcJofFH5XCo</p></blockquote><p><img src="'+p+'" alt=""></p><p>node \u4E0A\u540C\u6837\u6709\u76F8\u5173\u7684\u5E93\u5B9E\u73B0\uFF1Aexpress-jwt - npm koa-jwt - npm</p><h3 id="refresh-token" tabindex="-1">refresh token <a class="header-anchor" href="#refresh-token" aria-hidden="true">#</a></h3><p>token\uFF0C\u4F5C\u4E3A\u6743\u9650\u5B88\u62A4\u8005\uFF0C\u6700\u91CD\u8981\u7684\u5C31\u662F\u300C\u5B89\u5168\u300D\u3002</p><p>\u4E1A\u52A1\u63A5\u53E3\u7528\u6765\u9274\u6743\u7684 token\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A access token\u3002\u8D8A\u662F\u6743\u9650\u654F\u611F\u7684\u4E1A\u52A1\uFF0C\u6211\u4EEC\u8D8A\u5E0C\u671B access token \u6709\u6548\u671F\u8DB3\u591F\u77ED\uFF0C\u4EE5\u907F\u514D\u88AB\u76D7\u7528\u3002\u4F46\u8FC7\u77ED\u7684\u6709\u6548\u671F\u4F1A\u9020\u6210 access token \u7ECF\u5E38\u8FC7\u671F\uFF0C\u8FC7\u671F\u540E\u600E\u4E48\u529E\u5462\uFF1F</p><p>\u4E00\u79CD\u529E\u6CD5\u662F\uFF0C\u8BA9\u7528\u6237\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\u65B0 token\uFF0C\u663E\u7136\u4E0D\u591F\u53CB\u597D\uFF0C\u8981\u77E5\u9053\u6709\u7684 access token \u8FC7\u671F\u65F6\u95F4\u53EF\u80FD\u53EA\u6709\u51E0\u5206\u949F\u3002</p><p>\u53E6\u5916\u4E00\u79CD\u529E\u6CD5\u662F\uFF0C\u518D\u6765\u4E00\u4E2A token\uFF0C\u4E00\u4E2A\u4E13\u95E8\u751F\u6210 access token \u7684 token\uFF0C\u6211\u4EEC\u79F0\u4E3A refresh token\u3002</p><ul><li>access token \u7528\u6765\u8BBF\u95EE\u4E1A\u52A1\u63A5\u53E3\uFF0C\u7531\u4E8E\u6709\u6548\u671F\u8DB3\u591F\u77ED\uFF0C\u76D7\u7528\u98CE\u9669\u5C0F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u8BF7\u6C42\u65B9\u5F0F\u66F4\u5BBD\u677E\u7075\u6D3B</li><li>refresh token \u7528\u6765\u83B7\u53D6 access token\uFF0C\u6709\u6548\u671F\u53EF\u4EE5\u957F\u4E00\u4E9B\uFF0C\u901A\u8FC7\u72EC\u7ACB\u670D\u52A1\u548C\u4E25\u683C\u7684\u8BF7\u6C42\u65B9\u5F0F\u589E\u52A0\u5B89\u5168\u6027\uFF1B\u7531\u4E8E\u4E0D\u5E38\u9A8C\u8BC1\uFF0C\u4E5F\u53EF\u4EE5\u5982\u524D\u9762\u7684 session \u4E00\u6837\u5904\u7406</li></ul><p><img src="'+c+'" alt=""></p><h3 id="session-\u548C-token" tabindex="-1">session \u548C token <a class="header-anchor" href="#session-\u548C-token" aria-hidden="true">#</a></h3><p>session \u548C token \u90FD\u662F\u8FB9\u754C\u5F88\u6A21\u7CCA\u7684\u6982\u5FF5\uFF0C\u5C31\u50CF\u524D\u9762\u8BF4\u7684\uFF0Crefresh token \u4E5F\u53EF\u80FD\u4EE5 session \u7684\u5F62\u5F0F\u7EC4\u7EC7\u7EF4\u62A4\u3002</p><p>\u72ED\u4E49\u4E0A\uFF0C\u6211\u4EEC\u901A\u5E38\u8BA4\u4E3A session \u662F\u300C\u79CD\u5728 cookie \u4E0A\u3001\u6570\u636E\u5B58\u5728\u670D\u52A1\u7AEF\u300D\u7684\u8BA4\u8BC1\u65B9\u6848\uFF0Ctoken \u662F\u300C\u5BA2\u6237\u7AEF\u5B58\u54EA\u90FD\u884C\u3001\u6570\u636E\u5B58\u5728 token \u91CC\u300D\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u5BF9 session \u548C token \u7684\u5BF9\u6BD4\u672C\u8D28\u4E0A\u662F\u300C\u5BA2\u6237\u7AEF\u5B58 cookie / \u5B58\u522B\u5730\u513F\u300D\u3001\u300C\u670D\u52A1\u7AEF\u5B58\u6570\u636E / \u4E0D\u5B58\u6570\u636E\u300D\u7684\u5BF9\u6BD4\u3002</p><p><strong>\u300C\u5BA2\u6237\u7AEF\u5B58 cookie / \u5B58\u522B\u5730\u513F\u300D</strong></p><p>\u5B58 cookie \u56FA\u7136\u65B9\u4FBF\u4E0D\u64CD\u5FC3\uFF0C\u4F46\u95EE\u9898\u4E5F\u5F88\u660E\u663E\uFF1A</p><ul><li>\u5728\u6D4F\u89C8\u5668\u7AEF\uFF0C\u53EF\u4EE5\u7528 cookie\uFF08\u5B9E\u9645\u4E0A token \u5C31\u5E38\u7528 cookie\uFF09\uFF0C\u4F46\u51FA\u4E86\u6D4F\u89C8\u5668\u7AEF\uFF0C\u6CA1\u6709 cookie \u600E\u4E48\u529E\uFF1F</li><li>cookie \u662F\u6D4F\u89C8\u5668\u5728\u57DF\u4E0B\u81EA\u52A8\u643A\u5E26\u7684\uFF0C\u8FD9\u5C31\u5BB9\u6613\u5F15\u53D1 CSRF \u653B\u51FB\uFF08\u524D\u7AEF\u5B89\u5168\u7CFB\u5217\uFF08\u4E8C\uFF09\uFF1A\u5982\u4F55\u9632\u6B62CSRF\u653B\u51FB\uFF1F- \u7F8E\u56E2\u6280\u672F\u56E2\u961F\uFF09</li></ul><p>\u5B58\u522B\u7684\u5730\u65B9\uFF0C\u53EF\u4EE5\u89E3\u51B3\u6CA1\u6709 cookie \u7684\u573A\u666F\uFF1B\u901A\u8FC7\u53C2\u6570\u7B49\u65B9\u5F0F\u624B\u52A8\u5E26\uFF0C\u53EF\u4EE5\u907F\u514D CSRF \u653B\u51FB\u3002</p><p><strong>\u300C\u670D\u52A1\u7AEF\u5B58\u6570\u636E / \u4E0D\u5B58\u6570\u636E\u300D</strong></p><ul><li>\u5B58\u6570\u636E\uFF1A\u8BF7\u6C42\u53EA\u9700\u643A\u5E26 id\uFF0C\u53EF\u4EE5\u5927\u5E45\u7F29\u77ED\u8BA4\u8BC1\u5B57\u7B26\u4E32\u957F\u5EA6\uFF0C\u51CF\u5C0F\u8BF7\u6C42\u4F53\u79EF</li><li>\u4E0D\u5B58\u6570\u636E\uFF1A\u4E0D\u9700\u8981\u670D\u52A1\u7AEF\u6574\u5957\u7684\u89E3\u51B3\u65B9\u6848\u548C\u5206\u5E03\u5F0F\u5904\u7406\uFF0C\u964D\u4F4E\u786C\u4EF6\u6210\u672C\uFF1B\u907F\u514D\u67E5\u5E93\u5E26\u6765\u7684\u9A8C\u8BC1\u5EF6\u8FDF</li></ul><h2 id="\u56DB\u3001\u5355\u70B9\u767B\u5F55" tabindex="-1">\u56DB\u3001\u5355\u70B9\u767B\u5F55 <a class="header-anchor" href="#\u56DB\u3001\u5355\u70B9\u767B\u5F55" aria-hidden="true">#</a></h2><p>\u524D\u9762\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\u4E86\uFF0C\u5728\u540C\u57DF\u4E0B\u7684\u5BA2\u6237\u7AEF/\u670D\u52A1\u7AEF\u8BA4\u8BC1\u7CFB\u7EDF\u4E2D\uFF0C\u901A\u8FC7\u5BA2\u6237\u7AEF\u643A\u5E26\u51ED\u8BC1\uFF0C\u7EF4\u6301\u4E00\u6BB5\u65F6\u95F4\u5185\u7684\u767B\u5F55\u72B6\u6001\u3002</p><p>\u4F46\u5F53\u6211\u4EEC\u4E1A\u52A1\u7EBF\u8D8A\u6765\u8D8A\u591A\uFF0C\u5C31\u4F1A\u6709\u66F4\u591A\u4E1A\u52A1\u7CFB\u7EDF\u5206\u6563\u5230\u4E0D\u540C\u57DF\u540D\u4E0B\uFF0C\u5C31\u9700\u8981\u300C\u4E00\u6B21\u767B\u5F55\uFF0C\u5168\u7EBF\u901A\u7528\u300D\u7684\u80FD\u529B\uFF0C\u53EB\u505A\u300C\u5355\u70B9\u767B\u5F55\u300D\u3002</p><h3 id="\u201C\u865A\u5047\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u76F8\u540C\uFF09" tabindex="-1">\u201C\u865A\u5047\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u76F8\u540C\uFF09 <a class="header-anchor" href="#\u201C\u865A\u5047\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u76F8\u540C\uFF09" aria-hidden="true">#</a></h3><p>\u7B80\u5355\u7684\uFF0C\u5982\u679C\u4E1A\u52A1\u7CFB\u7EDF\u90FD\u5728\u540C\u4E00\u4E3B\u57DF\u540D\u4E0B\uFF0C\u6BD4\u5982<code>wenku.baidu.com</code> <code>tieba.baidu.com</code>\uFF0C\u5C31\u597D\u529E\u4E86\u3002\u53EF\u4EE5\u76F4\u63A5\u628A cookie domain \u8BBE\u7F6E\u4E3A\u4E3B\u57DF\u540D <code>baidu.com</code>\uFF0C\u767E\u5EA6\u4E5F\u5C31\u662F\u8FD9\u4E48\u5E72\u7684\u3002</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/TRiapJU3MMsZBgRKMl9Uor5iazd3BPKHxhpW7unnFC7LfJnWefCTqckpzrib7gbe1BJbiboUoJJ89TfibK2fQpKA0NQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt=""></p><h3 id="\u201C\u771F\u5B9E\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u4E0D\u540C\uFF09" tabindex="-1">\u201C\u771F\u5B9E\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u4E0D\u540C\uFF09 <a class="header-anchor" href="#\u201C\u771F\u5B9E\u201D\u7684\u5355\u70B9\u767B\u5F55\uFF08\u4E3B\u57DF\u540D\u4E0D\u540C\uFF09" aria-hidden="true">#</a></h3><p>\u6BD4\u5982\u6EF4\u6EF4\u8FD9\u4E48\u6F6E\u7684\u516C\u53F8\uFF0C\u540C\u65F6\u62E5\u6709<code>didichuxing.com</code> <code>xiaojukeji.com</code> <code>didiglobal.com</code>\u7B49\u57DF\u540D\uFF0C\u79CD cookie \u662F\u5B8C\u5168\u7ED5\u4E0D\u5F00\u7684\u3002</p><p>\u8FD9\u8981\u80FD\u5B9E\u73B0\u300C\u4E00\u6B21\u767B\u5F55\uFF0C\u5168\u7EBF\u901A\u7528\u300D\uFF0C\u624D\u662F\u771F\u6B63\u7684\u5355\u70B9\u767B\u5F55\u3002</p><p>\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u72EC\u7ACB\u7684\u8BA4\u8BC1\u670D\u52A1\uFF0C\u901A\u5E38\u88AB\u79F0\u4E3A SSO\u3002</p><p><strong>\u300C\u4E00\u6B21\u300C\u4ECE A \u7CFB\u7EDF\u5F15\u53D1\u767B\u5F55\uFF0C\u5230 B \u7CFB\u7EDF\u4E0D\u7528\u767B\u5F55\u300D\u7684\u5B8C\u6574\u6D41\u7A0B\u300D</strong></p><p><img src="'+l+'" alt=""></p><ul><li>\u7528\u6237\u8FDB\u5165 A \u7CFB\u7EDF\uFF0C\u6CA1\u6709\u767B\u5F55\u51ED\u8BC1\uFF08ticket\uFF09\uFF0CA \u7CFB\u7EDF\u7ED9\u4ED6\u8DF3\u5230 SSO</li><li>SSO \u6CA1\u767B\u5F55\u8FC7\uFF0C\u4E5F\u5C31\u6CA1\u6709 sso \u7CFB\u7EDF\u4E0B\u6CA1\u6709\u51ED\u8BC1\uFF08\u6CE8\u610F\u8FD9\u4E2A\u548C\u524D\u9762 A ticket \u662F\u4E24\u56DE\u4E8B\uFF09\uFF0C\u8F93\u5165\u8D26\u53F7\u5BC6\u7801\u767B\u5F55</li><li>SSO \u8D26\u53F7\u5BC6\u7801\u9A8C\u8BC1\u6210\u529F\uFF0C\u901A\u8FC7\u63A5\u53E3\u8FD4\u56DE\u505A\u4E24\u4EF6\u4E8B\uFF1A\u4E00\u662F\u79CD\u4E0B sso \u7CFB\u7EDF\u4E0B\u51ED\u8BC1\uFF08\u8BB0\u5F55\u7528\u6237\u5728 SSO \u767B\u5F55\u72B6\u6001\uFF09\uFF1B\u4E8C\u662F\u4E0B\u53D1\u4E00\u4E2A ticket</li><li>\u5BA2\u6237\u7AEF\u62FF\u5230 ticket\uFF0C\u4FDD\u5B58\u8D77\u6765\uFF0C\u5E26\u7740\u8BF7\u6C42\u7CFB\u7EDF A \u63A5\u53E3</li><li>\u7CFB\u7EDF A \u6821\u9A8C ticket\uFF0C\u6210\u529F\u540E\u6B63\u5E38\u5904\u7406\u4E1A\u52A1\u8BF7\u6C42</li><li>\u6B64\u65F6\u7528\u6237\u7B2C\u4E00\u6B21\u8FDB\u5165\u7CFB\u7EDF B\uFF0C\u6CA1\u6709\u767B\u5F55\u51ED\u8BC1\uFF08ticket\uFF09\uFF0CB \u7CFB\u7EDF\u7ED9\u4ED6\u8DF3\u5230 SSO</li><li>SSO \u767B\u5F55\u8FC7\uFF0C\u7CFB\u7EDF\u4E0B\u6709\u51ED\u8BC1\uFF0C\u4E0D\u7528\u518D\u6B21\u767B\u5F55\uFF0C\u53EA\u9700\u8981\u4E0B\u53D1 ticket</li><li>\u5BA2\u6237\u7AEF\u62FF\u5230 ticket\uFF0C\u4FDD\u5B58\u8D77\u6765\uFF0C\u5E26\u7740\u8BF7\u6C42\u7CFB\u7EDF B \u63A5\u53E3</li></ul><p><strong>\u300C\u5B8C\u6574\u7248\u672C\uFF1A\u8003\u8651\u6D4F\u89C8\u5668\u7684\u573A\u666F\u300D</strong></p><p>\u4E0A\u9762\u7684\u8FC7\u7A0B\u770B\u8D77\u6765\u6CA1\u95EE\u9898\uFF0C\u5B9E\u9645\u4E0A\u5F88\u591A APP \u7B49\u7AEF\u4E0A\u8FD9\u6837\u5C31\u591F\u4E86\u3002\u4F46\u5728\u6D4F\u89C8\u5668\u4E0B\u4E0D\u89C1\u5F97\u597D\u7528\u3002</p><p>\u770B\u8FD9\u91CC\uFF1A</p><p><img src="'+r+'" alt=""></p><p>\u5BF9\u6D4F\u89C8\u5668\u6765\u8BF4\uFF0CSSO \u57DF\u4E0B\u8FD4\u56DE\u7684\u6570\u636E\u8981\u600E\u4E48\u5B58\uFF0C\u624D\u80FD\u5728\u8BBF\u95EE A \u7684\u65F6\u5019\u5E26\u4E0A\uFF1F\u6D4F\u89C8\u5668\u5BF9\u8DE8\u57DF\u6709\u4E25\u683C\u9650\u5236\uFF0Ccookie\u3001localStorage \u7B49\u65B9\u5F0F\u90FD\u662F\u6709\u57DF\u9650\u5236\u7684\u3002</p><p>\u8FD9\u5C31\u9700\u8981\u4E5F\u53EA\u80FD\u7531 A \u63D0\u4F9B A \u57DF\u4E0B\u5B58\u50A8\u51ED\u8BC1\u7684\u80FD\u529B\u3002\u4E00\u822C\u6211\u4EEC\u662F\u8FD9\u4E48\u505A\u7684\uFF1A</p><p><img src="'+k+'" alt=""></p><p>\u56FE\u4E2D\u6211\u4EEC\u901A\u8FC7\u989C\u8272\u628A\u6D4F\u89C8\u5668\u5F53\u524D\u6240\u5904\u7684\u57DF\u540D\u6807\u8BB0\u51FA\u6765\u3002\u6CE8\u610F\u56FE\u4E2D\u7070\u5E95\u6587\u5B57\u8BF4\u660E\u90E8\u5206\u7684\u53D8\u5316\u3002</p><ul><li>\u5728 SSO \u57DF\u4E0B\uFF0CSSO \u4E0D\u662F\u901A\u8FC7\u63A5\u53E3\u628A ticket \u76F4\u63A5\u8FD4\u56DE\uFF0C\u800C\u662F\u901A\u8FC7\u4E00\u4E2A\u5E26 code \u7684 URL \u91CD\u5B9A\u5411\u5230\u7CFB\u7EDF A \u7684\u63A5\u53E3\u4E0A\uFF0C\u8FD9\u4E2A\u63A5\u53E3\u901A\u5E38\u5728 A \u5411 SSO \u6CE8\u518C\u65F6\u7EA6\u5B9A</li><li>\u6D4F\u89C8\u5668\u88AB\u91CD\u5B9A\u5411\u5230 A \u57DF\u4E0B\uFF0C\u5E26\u7740 code \u8BBF\u95EE\u4E86 A \u7684 callback \u63A5\u53E3\uFF0Ccallback \u63A5\u53E3\u901A\u8FC7 code \u6362\u53D6 ticket</li><li>\u8FD9\u4E2A code \u4E0D\u540C\u4E8E ticket\uFF0Ccode \u662F\u4E00\u6B21\u6027\u7684\uFF0C\u66B4\u9732\u5728 URL \u4E2D\uFF0C\u53EA\u4E3A\u4E86\u4F20\u4E00\u4E0B\u6362 ticket\uFF0C\u6362\u5B8C\u5C31\u5931\u6548</li><li>callback \u63A5\u53E3\u62FF\u5230 ticket \u540E\uFF0C\u5728\u81EA\u5DF1\u7684\u57DF\u4E0B set cookie \u6210\u529F</li><li>\u5728\u540E\u7EED\u8BF7\u6C42\u4E2D\uFF0C\u53EA\u9700\u8981\u628A cookie \u4E2D\u7684 ticket \u89E3\u6790\u51FA\u6765\uFF0C\u53BB SSO \u9A8C\u8BC1\u5C31\u597D</li><li>\u8BBF\u95EE B \u7CFB\u7EDF\u4E5F\u662F\u4E00\u6837</li></ul><h2 id="\u4E94\u3001\u603B\u7ED3" tabindex="-1">\u4E94\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u4E94\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>HTTP \u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4E3A\u4E86\u7EF4\u6301\u524D\u540E\u8BF7\u6C42\uFF0C\u9700\u8981\u524D\u7AEF\u5B58\u50A8\u6807\u8BB0</li><li>cookie \u662F\u4E00\u79CD\u5B8C\u5584\u7684\u6807\u8BB0\u65B9\u5F0F\uFF0C\u901A\u8FC7 HTTP \u5934\u6216 js \u64CD\u4F5C\uFF0C\u6709\u5BF9\u5E94\u7684\u5B89\u5168\u7B56\u7565\uFF0C\u662F\u5927\u591A\u6570\u72B6\u6001\u7BA1\u7406\u65B9\u6848\u7684\u57FA\u77F3</li><li>session \u662F\u4E00\u79CD\u72B6\u6001\u7BA1\u7406\u65B9\u6848\uFF0C\u524D\u7AEF\u901A\u8FC7 cookie \u5B58\u50A8 id\uFF0C\u540E\u7AEF\u5B58\u50A8\u6570\u636E\uFF0C\u4F46\u540E\u7AEF\u8981\u5904\u7406\u5206\u5E03\u5F0F\u95EE\u9898</li><li>token \u662F\u53E6\u4E00\u79CD\u72B6\u6001\u7BA1\u7406\u65B9\u6848\uFF0C\u76F8\u6BD4\u4E8E session \u4E0D\u9700\u8981\u540E\u7AEF\u5B58\u50A8\uFF0C\u6570\u636E\u5168\u90E8\u5B58\u5728\u524D\u7AEF\uFF0C\u89E3\u653E\u540E\u7AEF\uFF0C\u91CA\u653E\u7075\u6D3B\u6027</li><li>token \u7684\u7F16\u7801\u6280\u672F\uFF0C\u901A\u5E38\u57FA\u4E8E base64\uFF0C\u6216\u589E\u52A0\u52A0\u5BC6\u7B97\u6CD5\u9632\u7BE1\u6539\uFF0Cjwt \u662F\u4E00\u79CD\u6210\u719F\u7684\u7F16\u7801\u65B9\u6848</li><li>\u5728\u590D\u6742\u7CFB\u7EDF\u4E2D\uFF0Ctoken \u53EF\u901A\u8FC7 service token\u3001refresh token \u7684\u5206\u6743\uFF0C\u540C\u65F6\u6EE1\u8DB3\u5B89\u5168\u6027\u548C\u7528\u6237\u4F53\u9A8C</li><li>session \u548C token \u7684\u5BF9\u6BD4\u5C31\u662F\u300C\u7528\u4E0D\u7528cookie\u300D\u548C\u300C\u540E\u7AEF\u5B58\u4E0D\u5B58\u300D\u7684\u5BF9\u6BD4</li><li>\u5355\u70B9\u767B\u5F55\u8981\u6C42\u4E0D\u540C\u57DF\u4E0B\u7684\u7CFB\u7EDF\u300C\u4E00\u6B21\u767B\u5F55\uFF0C\u5168\u7EBF\u901A\u7528\u300D\uFF0C\u901A\u5E38\u7531\u72EC\u7ACB\u7684 SSO \u7CFB\u7EDF\u8BB0\u5F55\u767B\u5F55\u72B6\u6001\u3001\u4E0B\u53D1 ticket\uFF0C\u5404\u4E1A\u52A1\u7CFB\u7EDF\u914D\u5408\u5B58\u50A8\u548C\u8BA4\u8BC1 ticket</li></ul>',93),g=[u];function h(m,b,S,T,_,f){return s(),o("div",null,g)}var v=e(d,[["render",h]]);export{C as __pageData,v as default};
