//window.js

// On app load, get all tasks from localStorage


  // chrome.windows.create({
  //   // Just use the full URL if you need to open an external page
  //   url: chrome.runtime.getURL("https://www.google.com/")
  // });

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.windows.create({
//       url: chrome.runtime.getURL("window.html"),
//       type: "popup"
//     } //, function(win) {
//       // win represents the Window object from windows API
//       // Do something after opening
//     //}
//     );
//   });

// chrome.browserAction.onClicked.addListener(function() {
//     chrome.windows.create({
//       'url': "windows.html",
//     } //, function(win) {
//       // win represents the Window object from windows API
//       // Do something after opening
//     //}
//     );
//   });

// chrome.windows.create({
//   url: 'https://www.google.co.jp', 
//   type: 'popup',
//   width: 400, 
//   height: 300
// });
// function onCreated(windowInfo) {
//     console.log(`Created window: ${windowInfo.id}`);
//   }
  
//   function onError(error) {
//     console.log(`Error: ${error}`);
//   }
  
//   browser.browserAction.onClicked.addListener((tab) => {
  
//     let popupURL = browser.extension.getURL("window.html");
  
//     let creating = browser.windows.create({
//       url: popupURL,
//       type: "popup",
//       height: 200,
//       width: 200
//     });
//     creating.then(onCreated, onError);
  
//   });
  