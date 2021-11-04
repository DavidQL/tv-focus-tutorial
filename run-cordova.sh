yarn build

rm -rf ./../firetv-tutorial-cordova/www
mkdir ./../firetv-tutorial-cordova/www
cp -R ./build/* ./../firetv-tutorial-cordova/www

cd ./../firetv-tutorial-cordova
cordova run android
cd ~/dev/firetv-tutorial-react