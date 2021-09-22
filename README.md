# Di-Stream! 
 
 **First Software that allows to stream multiple DJI Goggles!**
 
 
 **Just run the Software and plug in all your DJI Goggles in the available USB Ports of your Computer.**
 

 Made by Racers for Racers! ;)

                                                                               
                                                       @ ,#                          
                                                       * ..                          
                                 *.                   %#/#                        ,% 
                                .*%                   &%#                  (/  @     
                                 @&%@#(///,,,//.   (&@&((,.  .....,,,,,*,*&&@.       
                           ((   @@%(@@           *&&&&&&%%%&(          **@%%&&&&*    
                                #&&@@&#         @&&&&&&# @@/             @@&%%@/   **
                                 *&&&@&%&,     &&&&&&&&@%((/      #&%&&&%&&&@**      
                                       &&&&@&@##%@%##@%&/% (%%%%&&%&&*               
                                          *%/###%#&%&@%%%#%&%&%                      
                 */(                      (%######(@@&%%@@.                //,,,     
                 ,/(,                  ,@%%*@%%%%##&@&%&#%            /#(/*,.        
                .#(%%&@@%&@@&%%%%####@&%@&%(&&@%&&#@@@&&&@&&@     .@&@%#&            
           /*,,,*@&&%@@%(@%,,&&#%%@.     @@#@@@@&@@     /%%@@&&&#*@&@@*%            
       *.,.,    /#/(@/&&##%&(           .,,,%%(.#.          &&%&,&#&&@##*/         
     *,         ,&&@%,.,                                        @@@%@@@**/*         
                *,//*.                                           ,.%%**             
                                                                                    



# How to run

1. Download or clone this Repo and unzip it
---

2. Download Ffmpeg.exe, go to the bin folder and move the ffmpeg.exe to the **/Di-Stream** folder:  
   https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z  
   Your folder should look like this!  
   ![Unbenannt](https://user-images.githubusercontent.com/61356201/134235188-adb2a652-57a5-4fba-8d42-8406cded8615.PNG)

---

3. Install Nodej if you dont have it yet on your system. 
   Link for Binary:  
   https://nodejs.org/dist/v14.17.6/node-v14.17.6-x86.msi
---

4. Open Command-Line and go to Di-stream folder. For example:
```cd Downloads/Di-stream```
then run following commands. 


```
npm install
```

```
npm run start
```

   Di-Stream Software will start a Node process for each goggls. The Goggles can be found at:

   **127.0.0.1:PORT**

   **First** Goggles has Port **1230**

   **Second** Goggles has Port **1231** ect... 

---
## OBS

In OBS add new Media device and uncheck de only local Media Box.

Now put your goggles adress in the input section and you are ready to go. 

## Software Behavior

  The Di-Stream Software will automaticly search for new Goggles and will open a UDP Stream on  the next free Port.
  Available Ports are:

  **1230** - **1237** 8 Goggles! 

  If a Goggles accidently disconnects, the Goggles will get the same Port when resumed pluged in.

  Custom Ports can be createt in the StreamProcess.js file


---

## License

Content is released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). See [notices](notices.md) for complete details, including attribution guidelines, contribution terms, and software and third-party licenses and permissions.

---

## Code Contributors
[![](https://github.com/Cherrytomate.png?size=50)](https://github.com/Cherrytomate)
[![](https://github.com/neilschuerch.png?size=50)](https://github.com/neilschuerch)


**This README was generated with ❤️ by Cherrytomate**









