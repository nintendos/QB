module.exports = QM;

var app = require('app');  
var BrowserWindow = require('browser-window');  
var webContents = require('web-contents');  
var url = require('url');

var qm = null;

function QM() {
  qm = new BrowserWindow({
    width: 800, 
    height: 600,
    center:true,
    icon:'app_logo.png',
    frame:false,
  });

  qm.loadUrl('http://127.0.0.1:3000/ib');

  qm.on('closed', function() {
    qm = null;
  });

  qm.show();
  // return qm;

  var webContents = qm.webContents;
  webContents.on("did-get-response-details", function(event,status,headers) {
    var h = JSON.stringify(headers);
    // var u = url.parse(headers);
    if (h === '"http://127.0.0.1:3000/popupWindow"') {
      // var h = httpResponseCode;
      var win = new BrowserWindow({
        width: 800, 
        height: 600,
        title: h
      });
      win.openDevTools();
      win.loadUrl('file://' + __dirname + '/index.html');
      }
  });

}


app.on('ready', function(){
  QM();
})

