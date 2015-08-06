mkdir tmp
cd tmp
echo '{ "name": "tmp" }' > package.json
npm i enb-bh@0.5
[ -d bh ] && mv bh node_modules/enb-bh/node_modules/
mv node_modules/enb-bh ../node_modules/enb-bh-05x
cd ../
rm -rf tmp
