var https = require('https')
require('./index');

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var testurl = 'https://raw.githubusercontent.com/Strider-CD/ecosystem-index/master/plugins.yml'

https.get(testurl, (res) => {

    return console.log('githubusercontent ok');

}).on('error', (e) => {
    console.error(e);
});



var url = require('url')
this.parsed = url.parse('https://usr.saas-plat.com/account/cas');


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
