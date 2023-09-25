import{_ as n,c as s,o as a,d as t}from"./app.87eb6f1c.js";const f='{"title":"nginx","description":"","frontmatter":{},"headers":[],"relativePath":"nginx/index.md"}',e={},p=t(`<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><ul><li><p>\u67E5\u627Enginx\u5B89\u88C5\u4F4D\u7F6E</p><div class="language-bash"><pre><code><span class="token function">whereis</span> nginx
  -<span class="token operator">&gt;</span> nginx: /usr/bin/ngin
</code></pre></div></li><li><p>\u9ED8\u8BA4\u914D\u7F6E</p><div class="language-bash"><pre><code>user  nobody<span class="token punctuation">;</span>
<span class="token comment">#\u5DE5\u4F5C\u8FDB\u7A0B\u6570\uFF0C\u4E00\u822C\u8DDF\u670D\u52A1\u5668cpu\u6838\u6570\u76F8\u7B49\uFF0C\u6216\u8005\u6838\u6570\u7684\u4E24\u500D</span>
worker_processes auto<span class="token punctuation">;</span>
error_log  /www/wwwlogs/nginx_error.log  crit<span class="token punctuation">;</span>
pid        /www/server/nginx/logs/nginx.pid<span class="token punctuation">;</span>
worker_rlimit_nofile <span class="token number">51200</span><span class="token punctuation">;</span>

events
    <span class="token punctuation">{</span>
        use epoll<span class="token punctuation">;</span>
	<span class="token comment">#\u5355\u4E2A\u8FDB\u7A0B\u6700\u5927\u8FDE\u63A5\u6570</span>
        worker_connections <span class="token number">51200</span><span class="token punctuation">;</span>
        multi_accept on<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

http
    <span class="token punctuation">{</span>
        include       mime.types<span class="token punctuation">;</span>

	      <span class="token comment">#include proxy.conf;</span>

        default_type  application/octet-stream<span class="token punctuation">;</span>

        server_names_hash_bucket_size <span class="token number">512</span><span class="token punctuation">;</span>
        client_header_buffer_size 32k<span class="token punctuation">;</span>
        large_client_header_buffers <span class="token number">4</span> 32k<span class="token punctuation">;</span>
        client_max_body_size 50m<span class="token punctuation">;</span>

        sendfile   on<span class="token punctuation">;</span>
        tcp_nopush on<span class="token punctuation">;</span>

        keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>

        tcp_nodelay on<span class="token punctuation">;</span>

        fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
        fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
        fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
        fastcgi_buffer_size 64k<span class="token punctuation">;</span>
        fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
        fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
        fastcgi_temp_file_write_size 256k<span class="token punctuation">;</span>
		    fastcgi_intercept_errors on<span class="token punctuation">;</span>

        <span class="token function">gzip</span> on<span class="token punctuation">;</span>
        gzip_min_length  1k<span class="token punctuation">;</span>
        gzip_buffers     <span class="token number">4</span> 16k<span class="token punctuation">;</span>
        gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml<span class="token punctuation">;</span>
        gzip_vary on<span class="token punctuation">;</span>
        gzip_proxied   expired no-cache no-store private auth<span class="token punctuation">;</span>
        gzip_disable   <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>

        limit_conn_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perip:10m<span class="token punctuation">;</span>
		    limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>

        server_tokens off<span class="token punctuation">;</span>
        access_log off<span class="token punctuation">;</span>

	
	
	
	server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    <span class="token comment">#\u8BF7\u586B\u5199\u7ED1\u5B9A\u8BC1\u4E66\u7684\u57DF\u540D</span>
    server_name kimi009.top<span class="token punctuation">;</span> 
    <span class="token comment">#\u628Ahttp\u7684\u57DF\u540D\u8BF7\u6C42\u8F6C\u6210https</span>
    location / <span class="token punctuation">{</span>
	  root /site/main/<span class="token punctuation">;</span> 
	  index  index.html index.htm<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


	<span class="token comment"># include /www/server/nginx/conf/conf.d/*.conf;</span>
<span class="token punctuation">}</span>


</code></pre></div></li><li><p>vue\u914D\u7F6Enginx</p><div class="language-sh"><pre><code>user  nobody;
#\u5DE5\u4F5C\u8FDB\u7A0B\u6570\uFF0C\u4E00\u822C\u8DDF\u670D\u52A1\u5668cpu\u6838\u6570\u76F8\u7B49\uFF0C\u6216\u8005\u6838\u6570\u7684\u4E24\u500D
worker_processes auto;
error_log  /www/wwwlogs/nginx_error.log  crit;
pid        /www/server/nginx/logs/nginx.pid;
worker_rlimit_nofile 51200;

events
    {
        use epoll;
	#\u5355\u4E2A\u8FDB\u7A0B\u6700\u5927\u8FDE\u63A5\u6570
        worker_connections 51200;
        multi_accept on;
    }

http
    {
        include       mime.types;

	      #include proxy.conf;

        default_type  application/octet-stream;

        server_names_hash_bucket_size 512;
        client_header_buffer_size 32k;
        large_client_header_buffers 4 32k;
        client_max_body_size 50m;

        sendfile   on;
        tcp_nopush on;

        keepalive_timeout 60;

        tcp_nodelay on;

        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 256k;
		    fastcgi_intercept_errors on;

        gzip on;
        gzip_min_length  1k;
        gzip_buffers     4 16k;
        gzip_http_version 1.1;
        gzip_comp_level 2;
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
        gzip_vary on;
        gzip_proxied   expired no-cache no-store private auth;
        gzip_disable   &quot;MSIE [1-6]\\.&quot;;

        limit_conn_zone $binary_remote_addr zone=perip:10m;
		    limit_conn_zone $server_name zone=perserver:10m;

        server_tokens off;
        access_log off;

	
	
	
	server {
    listen 80;
    #\u8BF7\u586B\u5199\u7ED1\u5B9A\u8BC1\u4E66\u7684\u57DF\u540D
    server_name kimi009.top; 
    location / {
	     #\u7F51\u7AD9\u4E3B\u9875\u8DEF\u5F84\u3002\u6B64\u8DEF\u5F84\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5177\u4F53\u8BF7\u60A8\u6309\u7167\u5B9E\u9645\u76EE\u5F55\u64CD\u4F5C\u3002
            #\u4F8B\u5982\uFF0C\u60A8\u7684\u7F51\u7AD9\u4E3B\u9875\u5728 Nginx \u670D\u52A1\u5668\u7684 /etc/www \u76EE\u5F55\u4E0B\uFF0C\u5219\u8BF7\u4FEE\u6539 root \u540E\u9762\u7684 html \u4E3A /etc/www\u3002
        root /site/main/; 
        index  index.html index.htm;
	  }
  }

	# include /www/server/nginx/conf/conf.d/*.conf;
}


</code></pre></div></li><li><p>\u914D\u7F6Ehttps</p><div class="language-bash"><pre><code>user  nobody<span class="token punctuation">;</span>
<span class="token comment">#\u5DE5\u4F5C\u8FDB\u7A0B\u6570\uFF0C\u4E00\u822C\u8DDF\u670D\u52A1\u5668cpu\u6838\u6570\u76F8\u7B49\uFF0C\u6216\u8005\u6838\u6570\u7684\u4E24\u500D</span>
worker_processes auto<span class="token punctuation">;</span>
error_log  /www/wwwlogs/nginx_error.log  crit<span class="token punctuation">;</span>
pid        /www/server/nginx/logs/nginx.pid<span class="token punctuation">;</span>
worker_rlimit_nofile <span class="token number">51200</span><span class="token punctuation">;</span>

events
    <span class="token punctuation">{</span>
        use epoll<span class="token punctuation">;</span>
	<span class="token comment">#\u5355\u4E2A\u8FDB\u7A0B\u6700\u5927\u8FDE\u63A5\u6570</span>
        worker_connections <span class="token number">51200</span><span class="token punctuation">;</span>
        multi_accept on<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

http
    <span class="token punctuation">{</span>
        include       mime.types<span class="token punctuation">;</span>

	      include proxy.conf<span class="token punctuation">;</span>

        default_type  application/octet-stream<span class="token punctuation">;</span>

        server_names_hash_bucket_size <span class="token number">512</span><span class="token punctuation">;</span>
        client_header_buffer_size 32k<span class="token punctuation">;</span>
        large_client_header_buffers <span class="token number">4</span> 32k<span class="token punctuation">;</span>
        client_max_body_size 50m<span class="token punctuation">;</span>

        sendfile   on<span class="token punctuation">;</span>
        tcp_nopush on<span class="token punctuation">;</span>

        keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>

        tcp_nodelay on<span class="token punctuation">;</span>

        fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
        fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
        fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
        fastcgi_buffer_size 64k<span class="token punctuation">;</span>
        fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
        fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
        fastcgi_temp_file_write_size 256k<span class="token punctuation">;</span>
		    fastcgi_intercept_errors on<span class="token punctuation">;</span>

        <span class="token function">gzip</span> on<span class="token punctuation">;</span>
        gzip_min_length  1k<span class="token punctuation">;</span>
        gzip_buffers     <span class="token number">4</span> 16k<span class="token punctuation">;</span>
        gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml<span class="token punctuation">;</span>
        gzip_vary on<span class="token punctuation">;</span>
        gzip_proxied   expired no-cache no-store private auth<span class="token punctuation">;</span>
        gzip_disable   <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>

        limit_conn_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perip:10m<span class="token punctuation">;</span>
		    limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>

        server_tokens off<span class="token punctuation">;</span>
        access_log off<span class="token punctuation">;</span>

	
	
	
server <span class="token punctuation">{</span>
	<span class="token comment">#SSL \u9ED8\u8BA4\u8BBF\u95EE\u7AEF\u53E3\u53F7\u4E3A 443</span>
	listen <span class="token number">443</span> ssl<span class="token punctuation">;</span> 
	<span class="token comment">#\u8BF7\u586B\u5199\u7ED1\u5B9A\u8BC1\u4E66\u7684\u57DF\u540D</span>
	server_name kimi009.top<span class="token punctuation">;</span> 
	<span class="token comment">#\u8BF7\u586B\u5199\u8BC1\u4E66\u6587\u4EF6\u7684\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84</span>
	ssl_certificate kimi009.top_bundle.crt<span class="token punctuation">;</span> 
	<span class="token comment">#\u8BF7\u586B\u5199\u79C1\u94A5\u6587\u4EF6\u7684\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84</span>
	ssl_certificate_key kimi009.top.key<span class="token punctuation">;</span> 
	ssl_session_timeout 5m<span class="token punctuation">;</span> 
	<span class="token comment">#\u8BF7\u6309\u7167\u4EE5\u4E0B\u534F\u8BAE\u914D\u7F6E</span>
	ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3<span class="token punctuation">;</span> 
	<span class="token comment">#\u8BF7\u6309\u7167\u4EE5\u4E0B\u5957\u4EF6\u914D\u7F6E\uFF0C\u914D\u7F6E\u52A0\u5BC6\u5957\u4EF6\uFF0C\u5199\u6CD5\u9075\u5FAA openssl \u6807\u51C6\u3002</span>
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>RC4:<span class="token operator">!</span>DHE<span class="token punctuation">;</span> 
	ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
	charset utf-8<span class="token punctuation">;</span>
  location / <span class="token punctuation">{</span>
	  root /site/main/<span class="token punctuation">;</span> 
	  index  index.html index.htm<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server<span class="token punctuation">{</span>
  	listen <span class="token number">80</span><span class="token punctuation">;</span>
    <span class="token comment">#\u8BF7\u586B\u5199\u7ED1\u5B9A\u8BC1\u4E66\u7684\u57DF\u540D</span>
    server_name kimi009.top<span class="token punctuation">;</span> 
    <span class="token comment">#\u628Ahttp\u7684\u57DF\u540D\u8BF7\u6C42\u8F6C\u6210https</span>
    <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>


	<span class="token comment"># include /www/server/nginx/conf/conf.d/*.conf;</span>
<span class="token punctuation">}</span>


</code></pre></div></li></ul>`,2),o=[p];function c(i,u,l,r,k,_){return a(),s("div",null,o)}var g=n(e,[["render",c]]);export{f as __pageData,g as default};
