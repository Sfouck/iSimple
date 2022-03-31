
// deploy
yarn run build
cd <"gh-pages branch folder">
rm -rf ./*
y
mv <"master branch folder">/dist/* ./
git add .
git commit -m 'message here'
git push origin gh-pages