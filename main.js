var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024, 
    height: 650,
    center:true,
    icon:'img/avatar.png',
    frame:false,
  });

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Open the devtools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});




////////////////////////
// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var mime = require('mime');
// var express = require('express');

// // Create a server
// http.createServer( function (request, response) {  
//    // Parse the request containing file name
//    var pathname = url.parse(request.url).pathname;
   
//    var app = express();
//    //设置跨域访问
//    app.all('*', function(req, res, next) {
//        res.header("Access-Control-Allow-Origin", "*");
//        res.header("Access-Control-Allow-Headers", "X-Requested-With");
//        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//        res.header("X-Powered-By",' 3.2.1');
//        res.header("Content-Type", "application/json;charset=utf-8");
//        next();
//    });   

//    // Print the name of the file for which request is made.
//    console.log("Request for " + pathname + " received.");
   
//    // Read the requested file content from file system
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
//          // HTTP Status: 404 : NOT FOUND
//          // Content Type: text/plain
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       }else{	
//          //Page found	  
//          // HTTP Status: 200 : OK
//          // Content Type: text/plain
//          response.writeHead(200, {'Content-Type': mime.lookup(pathname)});	
         
//          // Write the content of the file to response body
//          response.write(data.toString());		
//       }
//       // Send the response body 
//       response.end();
//    });   
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');





// app.get('/auth/:id/:password', function(req, res) {
//     res.send({id:req.params.id, name: req.params.password});
// });

// app.listen(3000);
// console.log('Listening on port 3000...');