
<h1 align="center"> Di-Stream </h1>
<h3 align="center"> First Software that allows to stream multiple DJI Goggles! </h3>  
<h3 align="center"> Just run the Software and plug in all your DJI Goggles in the available USB Ports of your Computer! </h3> 
</br>
<h4 align="center"> Made by Racers for Racers! ; </h4> 

</br>
 
                                                       @ ,_                          
                                                       * ..                          
                                 *.                   %_/_                        ,% 
                                .*%                   &%_                  (/  @     
                                 @&%@_(///,,,//.   (&@&((,.  .....,,,,,*,*&&@.       
                           ((   @@%(@@           *&&&&&&%%%&(          **@%%&&&&*    
                                _&&@@&_         @&&&&&&_ @@/             @@&%%@/   **
                                 *&&&@&%&,     &&&&&&&&@%((/      _&%&&&%&&&@**      
                                       &&&&@&@__%@%__@%&/% (%%%%&&%&&*               
                                          *%/___%_&%&@%%%_%&%&%                      
                 */(                      (%______(@@&%%@@.                //,,,     
                 ,/(,                  ,@%%*@%%%%__&@&%&_%            /_(/*,.        
                ._(%%&@@%&@@&%%%%____@&%@&%(&&@%&&_@@@&&&@&&@     .@&@%_&            
           /*,,,*@&&%@@%(@%,,&&_%%@.     @@_@@@@&@@     /%%@@&&&_*@&@@*%            
       *.,.,    /_/(@/&&__%&(           .,,,%%(._.          &&%&,&_&&@__*/         
     *,         ,&&@%,.,                                        @@@%@@@**/*         
                *,//*.                                           ,.%%**             


</br>


<!-- PREREQUISITES -->
<h2 id="prerequisites"> :fork_and_knife: Prerequisites</h2>

[![Made withJavascript](https://img.shields.io/badge/made%20with%20-Javscript-orange)](https://jupyter.org/try) 


The following open source packages are used in this project:
* ffmpeg
* Nodejs

</br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

- [1. Download or clone this Repo and unzip it](#1-download-or-clone-this-repo-and-unzip-it)
- [2. Install ffmpeg](#2-install-ffmpeg)
- [3. Nodejs](#3-nodejs)
- [4. Use](#4-use)
- [5. Software Behavior](#5-software-behavior)
- [6. OBS](#6-obs)
- [7. Yargs](#7-yargs)
- [8. License](#8-license)
  </br>
</br>
<h1 align="center"> Let's Go!  </h1>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


## 1. Download or clone this Repo and unzip it
![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 2. Install ffmpeg


   ### Windows:
   Download Essentials from here:  
   https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z  

   Unzip it and move it to your favourite program folder
   Add System Path Variable:

   For example:

   ```
   set PATH=%PATH%;C:\your\path\to\ffmpeg\folder
   ```
   ### Linux:

   Install ffmpeg with following code:
   ```
   sudo apt install ffmpeg
   ```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


## 3. Nodejs 

#### Use Version 16.9.1 or higher!
   Install Currennt Nodejs if you don't have it yet on your system.   
   Important ! Install version <ins>16.9.1</ins> or higher

   ### Windows:

   Install NodeJs in Windows with following Installer:  
   https://nodejs.org/en/download/current/
   ### Linux:

   Download Current NodeJs version from here:  
   https://nodejs.org/dist/v16.9.1/node-v16.9.1.tar.gz  

   Unzip it to your favorite Folder
   Set Path Variable with:

   ```
   export PATH=$PATH:/place/with/the/file
   ```
   Check Path with:
   ```
   echo "$PATH"
   ```


   ![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## 4. Use

### Windows:
   Just run the .exe

### Linux:
   Go to folder where the Di-Stream binary is 
   Run the binary 
   For example:
   ```
   ./di-stream-linux
   ```




## 5. Software Behavior
   Di-Stream Software will start a Node process for each goggls. The Goggles can be found at:

   **127.0.0.1:PORT**

   **First** Goggles has Port **1230**

   **Second** Goggles has Port **1231** ect...

   The Di-Stream Software will automaticly search for new Goggles and will open a UDP Stream on  the next free Port.
   Available Ports are:

   **1230** - **1237** 8 Goggles!

   If a Goggles accidently disconnects, the Goggles will get the same Port when resumed pluged in.

   Custom Ports can be createt in the StreamProcess.js file

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 6. OBS

In OBS add new Media device and uncheck de only local Media Box.  
Now put your goggles adress in the input section and you are ready to go. 

![](https://github.com/Di-Stream/Di-Stream/blob/main/assets/obs_example.png)






![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 7. Yargs

Following Commands can be used:
   ```
       --version    Version anzeigen                                     [boolean]
  -p, --port       sets the starting Port (default: 1230)               [string]
  -a, --address    sets the base address (default: 127.0.0.1)           [boolean]
  -s, --readsize   readsize (default: 512)                              [Zahl]
  -q, --queuesize  queuesize (default: 3)                               [Zahl]
  -v, --verbose    shows debug log                                      [boolean]
  -h, --help       Hilfe anzeigen                                       [boolean]
  
   ```
For example:
   ```
   ./di-stream-linux --port 1000
   ```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 8. License

Content is released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). See [notices](notices.md) for complete details, including attribution guidelines, contribution terms, and software and third-party licenses and permissions.

---

<!-- CONTRIBUTORS -->
<h2 id="contributors"> :scroll: Contributors</h2>

[![](https://github.com/Cherrytomate.png?size=50)](https://github.com/Cherrytomate)
[![](https://github.com/neilschuerch.png?size=50)](https://github.com/neilschuerch)


**This README was generated with ❤️ by Cherrytomate**









