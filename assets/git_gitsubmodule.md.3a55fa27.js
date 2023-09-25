import{_ as e,c as t,o,d as i}from"./app.87eb6f1c.js";const _='{"title":"gitsubmodule","description":"","frontmatter":{},"headers":[],"relativePath":"git/gitsubmodule.md"}',r={},p=i('<h1 id="gitsubmodule" tabindex="-1">gitsubmodule <a class="header-anchor" href="#gitsubmodule" aria-hidden="true">#</a></h1><p><a href="https://blog.csdn.net/qq_43425487/article/details/105632114" target="_blank" rel="noopener noreferrer">(64\u6761\u6D88\u606F) Git\u5E94\u7528\u8BE6\u89E3\u7B2C\u5341\u8BB2\uFF1AGit\u5B50\u5E93\uFF1Asubmodule\u4E0Esubtree_AhuntSun\u7684\u535A\u5BA2-CSDN\u535A\u5BA2_git submodule subtree</a></p><ul><li><p>\u6DFB\u52A0\u5B50\u6A21\u5757</p><blockquote><p>git submodule add <a href="https://gitee.com/kimi009/gitsubmodule_common.git" target="_blank" rel="noopener noreferrer">https://gitee.com/kimi009/gitsubmodule_common.git</a> src/common</p><p>add\u540E\u9762\u662F\u5B50\u6A21\u5757\u5730\u5740\uFF0C \u6700\u540E\u662F\u62C9\u53D6\u5B50\u6A21\u5757\u5B58\u653E\u7684\u8DEF\u5F84\uFF0C\u8C8C\u4F3C\u53EA\u80FD\u521B\u5EFA\u4E00\u7EA7\uFF0C\u5EFA\u8BAE\u5148\u521B\u5EFA\u597Dsrc</p></blockquote></li><li><p>\u62C9\u53D6\u516C\u5171\u5305</p><blockquote><p>1\u3001\u8FDB\u5165\u5BF9\u5E94\u7684\u5B50\u6A21\u5757\u5305\u6587\u4EF6\u5939 **git pull **</p><p>2\u3001\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u9762 <strong>git submodule foreach git pull</strong></p><p>\u4F1A\u4F9D\u6B21\u62C9\u53D6\u6240\u6709\u7684\u5B50\u6A21\u5757\u7684\u66F4\u65B0</p></blockquote></li><li><p>\u514B\u9686</p><blockquote><p>git clone <a href="https://gitee.com/kimi009/git-submodule_first.git" target="_blank" rel="noopener noreferrer">https://gitee.com/kimi009/git-submodule_first.git</a> clone_submodule_first --recursive</p><p><code>--recursive</code>\u8868\u793A\u9012\u5F52\u5730\u514B\u9686<code>git_parent</code>\u4F9D\u8D56\u7684\u6240\u6709\u5B50\u7248\u672C\u5E93</p><p>\u5982\u679C\u53EA\u662F\u514B\u9686\u4E86\u5B50\u6A21\u5757\u7684\u76EE\u5F55\uFF0C\u5E76\u6CA1\u6709\u514B\u9686\u5B50\u6A21\u5757\u7684\u5185\u5BB9\uFF0C\u5220\u9664.gitmodule\uFF0C\u91CD\u65B0\u8D70**<code>\u6DFB\u52A0\u5B50\u6A21\u5757\u903B\u8F91</code>**</p></blockquote></li><li><p>\u5220\u9664\u5B50\u6A21\u5757</p><blockquote><p>1\u3001git rm --cache src/common</p><p>\u200B <code>git rm</code>\u7684\u4F5C\u7528\u4E3A\u5220\u9664\u7248\u672C\u5E93\u4E2D\u7684\u6587\u4EF6\uFF0C\u5E76\u5C06\u8FD9\u4E00\u64CD\u4F5C\u7EB3\u5165\u6682\u5B58\u533A\uFF1B</p><p>2\u3001rm -rf src/common</p><p>3\u3001rm .gitmodules</p><p>4\u3001git add .</p><p>5\u3001git commit -m &#39;delete \u5B50\u6A21\u5757&#39;</p><p>6\u3001git push</p></blockquote></li></ul>',3),l=[p];function c(s,u,d,a,m,n){return o(),t("div",null,l)}var b=e(r,[["render",c]]);export{_ as __pageData,b as default};
