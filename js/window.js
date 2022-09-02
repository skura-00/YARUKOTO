// window.js
// open new popup window when the icon is selected
let param = `width=380,height=500,left=0,top=0`


const newWindow = window.open("./index.html","",param);
newWindow.opener.document.getElementById("box").innerHTML = "Opened!";

newWindow.focus();


//// opens new window
// chrome.windows.create({
//   url: chrome.runtime.getURL("window.html")
// });

