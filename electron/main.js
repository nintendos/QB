var express = require('express');
var qm = require('./qm.js');
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
    width: 1280, 
    height: 800,
    center:true,
    icon:'app_logo.png',
    frame:false,
  });

  // and load the index.html of the app.
  mainWindow.loadUrl('http://127.0.0.1:3000/');

  // Open the devtools.
  // mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });


var webContents = mainWindow.webContents;
webContents.on("did-get-response-details", function(event,status,headers) {
  var h = JSON.stringify(headers); //h等于'"http://127.0.0.1:3000/ib"'
  h = h.split('"')[1];
  if (h.indexOf('popupWindow') != -1) {
    var i = h.indexOf('?');
    var s = h.substring(i + 1);
    // var h = httpResponseCode;
    var win = new BrowserWindow({
      width: 800, 
      height: 600,
      title: s,
      frame:false,
      icon:'app_logo.png',
    });
    
    win.openDevTools();

    win.loadUrl('http://127.0.0.1:3000/'+s);
    }
});

});

