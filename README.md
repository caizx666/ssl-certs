# ssl-certs
load ssl certs for https

## install ca

### opensuse
https://github.com/openSUSE/ca-certificates
1. /usr/share/pki/trust/anchors放CA文件
2. update-ca-certificates

### other linux
1. 在 /usr/share/ca-certificates/ 目录下创建单独的目录来保存您的CA证书文件
2. 在 /etc/ca-certificates.conf文件中添加一行
3. update-ca-certificates

**not support windows**

## use

```js
var https = require('https');
require('ssl-certs');

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var url = require('url')
this.parsed = url.parse('https://YOUSERVER');


var get = https.get({
    host: this.parsed.hostname,
    port: this.parsed.port,
    path: url.format({
        pathname: this.parsed.pathname + '/serviceValidate',
        query: {
            ticket: 'ST-AAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBB',
            service: 'https://TESTHOSTSERVER/cas_login'
        }
    })
}, function() {
    return console.log(this.parsed.pathname + ' ok');
});

get.on('error', function(e) {
    return console.log(e);
});

```

## options

NODE_SSL_CERTS_DISABLED : default false
NODE_SSL_CERTS_GLOB     : default /etc/ssl/certs/*.pem
