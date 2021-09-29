#/bin/bash

if [ ! -f ".installed" ]; then
    "./libs/linux/nodejs/bin/node" "./libs/linux/nodejs/bin/npm" install
    touch .installed
fi

"./libs/linux/nodejs/bin/node" ./src/index.js --ffmpeg-binary "./libs/win64/ffmpeg/bin/ffmpeg" $@