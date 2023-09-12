// 通过ID找到按钮
const button = document.getElementById("changeColor");
// 从storage取背景色并设到按钮上
chrome.storage.sync.get("color", ({ color }) => {
  button.style.backgroundColor = color;
});

// 注册按钮点击回调函数
button.addEventListener("click", async () => {
    // 调用Chrome接口取出当前标签页
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  
    // 以当前标签页为上下文，执行setPageBackgroundColor函数
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: setPageBackgroundColor,
    });
  });
  
  // 函数将在指定标签页内执行，因此可以取得当前网页document
  function setPageBackgroundColor() {
    // 从storage取出背景色，并设到当前网页上
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }

  chrome.cookies.get( { 
    url: 'https://compassbrand.jinritemai.com/cabin', 
    name: '_ustat' }, 
    function( cookie ){ 
      console.log( cookie ); 
    });
    
  // 获取多个cookie，并设置到当前插件页面下
  chrome.cookies.getAll( { domain: '.jinritemai.com'}, function( cookie ){ 
    cookie.forEach(function(c){ 
      console.log( c.name, c.value ); 
      document.cookie = (c.name + '=' + c.value + ';'); 
      }); 
    });
    
  // 监控Cookie的变更
  chrome.cookies.onChanged.addListener(function( changeInfo ){ console.log( changeInfo ); });