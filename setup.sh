#!/usr/bin/env bash
# একবার চালান:  bash setup.sh   (Node.js ও ইন্টারনেট লাগবে)
set -e
npm install
[ -d android ] || npx cap add android
npx cap sync android
M=android/app/src/main/AndroidManifest.xml
ID="ca-app-pub-7808329877913294~9456707590"
if ! grep -q "com.google.android.gms.ads.APPLICATION_ID" "$M"; then
  sed -i "s|<application|<application|; /<application/,/>/ s|>\$|>\n        <meta-data android:name=\"com.google.android.gms.ads.APPLICATION_ID\" android:value=\"$ID\"/>|" "$M"
fi
grep -q APPLICATION_ID "$M" && echo "✅ AdMob App ID বসেছে" || echo "❌ Manifest-এ নিজে বসান (README দেখুন)"
echo "এখন: npx cap open android  → Android Studio থেকে Build > Build APK"
