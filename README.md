## meteor-react-template

# Starter template off of meteor 1.3 + react + following mantra spec

# Use as base

Clone
change sample-app to your app in package.json
npm i
npm test to run unit-test

# Start fresh

meteor create --release 1.3-modules-beta.4 sample-app
cd sample-app
rm -rf *

npm init -f

npm i --save react react-dom

meteor add kadira:flow-router

npm i --save react-mounter

# Extend with Material UI

npm i --save react-tap-event-plugin material-ui

npm i --save formsy-react formsy-material-ui
