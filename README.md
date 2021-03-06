<h1 align="center"> Di-Stream </h1>
<h3 align="center"> First Software that allows to stream multiple DJI Goggles! </h3>  
<h3 align="center"> Just run the Software and plug in all your DJI Goggles in the available USB Ports of your Computer! </h3> 
<br>
<h4 align="center"> Made by Racers for Racers! ;) </h4> 

<br>

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


<br>


<!-- PREREQUISITES -->
<h2 id="prerequisites"> :fork_and_knife: Prerequisites</h2>

[![Made withJavascript](https://img.shields.io/badge/made%20with%20-Javscript-orange)](https://jupyter.org/try)


The following open source packages are used in this project:
* ffmpeg


<br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

- [1. Download or clone this Repo and unzip it](#1-download-or-clone-this-repo-and-unzip-it)
- [2. Install ffmpeg](#2-install-ffmpeg)
- [3. Use](#3-use)
- [4. Software Behavior](#4-software-behavior)
- [5. OBS](#5-obs)
- [6. Yargs](#6-yargs)
- [7. License](#7-license)
  <br>
  <br>
<h1 align="center"> Let's Go!  </h1>

![-----------------------------------------------------](./assets/rainbow.png)


## 1. Download Binary 

https://github.com/Di-Stream/Di-Stream/releases



![------------------------------------------------------](./assets/rainbow.png)

## 2. Install


### Windows:
#### ffmpeg
Download Essentials from here:  
https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z

Unzip it and move it to your favourite program folder.  
Add System Path Variable:

For example:

   ```
   C:\> setx /M path "%PATH%;C:\Users\fritz\Downloads"
   ```
   
#### LibUSB
That the goggles can be dedected properly, you need to install libusb driver.  
Use Zadig driver installer und follwing instructions:  

Install [LibUSB Driver](https://zadig.akeo.ie/)   

1. Download, install, and run Zadig.  
2. Power the goggles and connect them to the computer.  
3. In Zadig, select 'List All Devices' from the 'Options' men.  
4. Find the 'BULK Interface' device. It won't have a driver installed.  
5. Install the 'WinUSB' driver for this interface. It might take a while.  

<br>


### Linux:
#### ffmpeg
Install ffmpeg with following code:
   ```
   sudo apt install ffmpeg
   ```

#### LibUSB
   ```
   sudo apt install libusb-1.0-0
   ```

![-----------------------------------------------------](./assets/rainbow.png)
## 3. Use

### Windows:
* Run the .exe

### Linux:
* Go to folder where the Di-Stream binary is
* Run:
```
sudo chmod +x ./di-stream-linux
sudo ./di-stream-linux
```


![-----------------------------------------------------](./assets/rainbow.png)


## 4. Software Behavior
Di-Stream Software will start a Node process for each goggles. The Goggles can be found at:

**127.0.0.1:PORT**

**First** Goggles has Port **1230**

**Second** Goggles has Port **1231** ect...

The Di-Stream Software will automaticly search for new Goggles and will open a UDP Stream on  the next free Port.
Available Ports are:

**1230** - **1237** 8 Goggles!

If a Goggles accidently disconnects, the Goggles will get the same Port when resumed pluged in.

Custom Ports can be createt in the StreamProcess.js file

![-----------------------------------------------------](./assets/rainbow.png)

## 5. OBS

In OBS add new Media device and uncheck de only local Media Box.  
Now put your goggles adress in the input section and you are ready to go.

![](https://github.com/Di-Stream/Di-Stream/blob/main/assets/obs_example.png)






![-----------------------------------------------------](./assets/rainbow.png)

## 6. Yargs

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

![-----------------------------------------------------](./assets/rainbow.png)

## 7. License

Content is released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). See [notices](notices.md) for complete details, including attribution guidelines, contribution terms, and software and third-party licenses and permissions.

![-----------------------------------------------------](./assets/rainbow.png)


## 8. Contributors


[![](https://github.com/bischoffjeremy.png?size=50)](https://github.com/bischoffjeremy)
[![](https://github.com/neilschuerch.png?size=50)](https://github.com/neilschuerch)


**This README was created with ???**
