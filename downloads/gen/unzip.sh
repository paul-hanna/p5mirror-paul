cd "/Users/paulh/Documents/GitHub/p5mirror-paul/downloads/../p5projects"
#
echo unzip 1 "mr moustache-6KWvgOZ07"
rm -rf "./mr moustache-6KWvgOZ07"
mkdir "./mr moustache-6KWvgOZ07"
pushd "./mr moustache-6KWvgOZ07" > /dev/null
unzip -q "../../downloads/zips/mr moustache-6KWvgOZ07"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi