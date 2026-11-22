/* AdMob সেতু — ওয়েব/ব্রাউজারে কিছুই করে না, শুধু Android অ্যাপে চলে */
(function(){
// আসল ID বসানো আছে। নিজে টেস্টের সময় TESTING=true করে নিন, নইলে নিজের বিজ্ঞাপনে ক্লিক হয়ে যেতে পারে।
 var TESTING=false;
 var BANNER="ca-app-pub-7808329877913294/3479998741";
 var INTER="ca-app-pub-7808329877913294/7098137565";
 var A=null,ready=false,games=0;
 function plug(){try{return window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform()?Capacitor.Plugins.AdMob:null}catch(e){return null}}
 async function init(){A=plug();if(!A)return;
  try{await A.initialize({initializeForTesting:TESTING});ready=true;
   await A.showBanner({adId:BANNER,adSize:"ADAPTIVE_BANNER",position:"BOTTOM_CENTER",margin:0,isTesting:TESTING});
   document.body.style.paddingBottom="70px";
   A.prepareInterstitial({adId:INTER,isTesting:TESTING}).catch(function(){});
  }catch(e){console.log("AdMob",e)}}
 window.LudoAds={
  // খেলা শেষ হলে/নতুন খেলায় ডাকা হয়; প্রতি ২য় বারে ফুলস্ক্রিন বিজ্ঞাপন
  gameEnd:async function(){if(!ready)return;games++;if(games%2)return;
   try{await A.showInterstitial();A.prepareInterstitial({adId:INTER,isTesting:TESTING}).catch(function(){})}catch(e){}}
 };
 document.addEventListener("DOMContentLoaded",init);
})();
