// // see https://stackoverflow.com/questions/23202136/changing-navigator-useragent-using-chrome-extension
// 'use strict';
// console.log("123")
// var actualCode =  '(' + function() {
// 	console.log("123")
//     var platformVal = "Win64"
// 	if(navigator.userAgent.indexOf("Android")!=-1) {
//         platformVal = "Linux armv8l"
//     }
// 	if(navigator.userAgent.indexOf("iPhone")!=-1) {
//         platformVal = "iPhone"
//     }
// 	if(navigator.userAgent.indexOf("iPad")!=-1) {
//         platformVal = "iPad"
//     }
//     // Reset platform
//     Object.defineProperty(navigator, 'platform', {
//         get: function(){
//             return platformVal;
//         }});
// } + ')();';

// // Inject custom js
// var s = document.createElement('script');
// s.textContent = actualCode;
// document.documentElement.appendChild(s);
// s.remove();

'use strict';
console.log("userAgent", navigator.userAgent)
var platformVal = "Win64"
if (navigator.userAgent.indexOf("Android") != -1) {
    platformVal = "Linux armv8l"
}
if (navigator.userAgent.indexOf("iPhone") != -1) {
    platformVal = "iPhone"
}
if (navigator.userAgent.indexOf("iPad") != -1) {
    platformVal = "iPad"
}
console.log("platformVal", platformVal)
// Reset platform
Object.defineProperty(navigator, 'platform', {
    get: function () {
        return platformVal;
    }
});
// Object.defineProperty(this, 'navigator', {
//     value: {
//         platform: platformVal
//     }
// });

console.log("platform", navigator.platform)