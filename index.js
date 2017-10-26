if (!process.env.NODE_SSL_CERTS_DISABLED){
  var fs = require('fs');
  var https = require('https');
  var glob = require('glob');

  var files = glob.sync(process.env.NODE_SSL_CERTS_GLOB || '/etc/ssl/certs/*.pem');
  https.globalAgent.options.ca = https.globalAgent.options.ca || [];
  for(var i =0;i<files.length;i++){
  	https.globalAgent.options.ca.push(fs.readFileSync(files[i]));
  }
}
