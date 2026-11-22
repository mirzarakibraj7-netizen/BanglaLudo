BANGLA LUDO — Android + AdMob
Package name: com.mirzaraj.banglaludo
==============================
আপনার AdMob App ID: ca-app-pub-7808329877913294~9456707590

ধাপ (কম্পিউটারে, Node.js + Android Studio লাগবে):
1. এই ফোল্ডারে টার্মিনাল খুলুন
2. bash setup.sh
3. npx cap open android   → Android Studio খুলবে
4. Build > Build Bundle(s)/APK(s) > Build APK(s)

যদি setup.sh Manifest-এ ID না বসাতে পারে, android/app/src/main/AndroidManifest.xml-এ
<application ...> ট্যাগের ভেতরে নিজে বসান:
  <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID"
             android:value="ca-app-pub-7808329877913294~9456707590"/>

বিজ্ঞাপন ইউনিট ID: www/ads.js-এ এখন Google-এর টেস্ট ID আছে।
AdMob-এ Banner ও Interstitial ইউনিট বানিয়ে BANNER ও INTER-এ আসল ID বসান,
আর TESTING=false করুন। টেস্টের সময় নিজের আসল বিজ্ঞাপনে ক্লিক করবেন না।
