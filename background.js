// https://www.cnblogs.com/Galesaur-wcy/p/15745099.html

function getCookie(url) {
  return new Promise((resolve) => {
    chrome.cookies.getAll({ url, secure: true }, (cookies) => {
      resolve(cookies);
    });
  });
}


const color = "#3aa757";
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(`[Coloring] default background color is set to: ${color}`);

  // getCookie('https://compassbrand.jinritemai.com/cabin').then((ck) => {
  //   console.log('cookie', ck)
  // });
});




// var config = {
//     mode: "fixed_servers",
//     rules: {
//         proxyForHttps: {
//         scheme: "https",
//         host: "baidu.com"
//       },
//     //   bypassList: ["compassbrand.jinritemai.com"],
//     bypassList: ['developer.chrome.com']
//     }
//   };
//   chrome.proxy.settings.set(
//     {value: config, scope: 'regular'},
//     function() {}
//   );
