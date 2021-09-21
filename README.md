# Di-Stream! 
**First Software that allows to stream multiple DJI Goggles!**
 
# How to run

1. Download or clone this Repoo

2. Download Ffmpeg.exe unzip it and move the ffmpeg. exe to bin folder:

https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z

3. Install Nodej if you dont have it yet on your system. 
Link for Binary:

https://nodejs.org/dist/v14.17.6/node-v14.17.6-x86.msi

4. Open Command-Line and go to Di-stream folder. For example:
**cd Downloads/Di-stream** 
then run following commands. 

```sh
npm install
```

```sh
node ./src/index.js
```

Di-Stream Software will start a Node processe for each goggles. The Goggles can be found at:

**127.0.0.1:PORT**

**First** Goggles has Port **1230**

**Second** Goggles has Port **1231** ect... 


## OBS

In OBS add new Media devicr and uncheck de Only Local Media Box. 

Now put your Adress in the input and you are ready to go. 

## Software Behavior

The Di-Stream Software will automaticly search for new Goggles and will open a UDP Stream on  the next free Port:
Available Ports are:

**1230** - **1237** 8 Goggles! 

If a Goggles accidently disconnects, the Goggles will get the same Port when resumed pluged in. 









