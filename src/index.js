const usb = require('usb');
const logger = require('node-color-log');
const { v4: uuidv4 } = require('uuid');
const Goggles = require('./Goggles');
const StreamProcess = require('./StreamProcess');
const yargs = require('yargs')

const DEFAULT_PORT = 1230;


const argv = yargs
    .option('port', {
        alias: 'p',
        describe: 'sets the starting Port (default: '+ DEFAULT_PORT +')',
        type: 'string'
    })
    .option('address', {
        alias: 'a',
        describe: 'sets the base address (default: '+ StreamProcess.URL +')',
        type: 'boolean'
    })
    .option('readsize', {
        alias: 's',
        describe: 'readsize (default: '+ Goggles.READ_SIZE +')',
        type: 'number'
    })
    .option('queuesize', {
        alias: 'q',
        describe: 'queuesize (default: '+ Goggles.QUEUE_SIZE +')',
        type: 'number'
    })
    .option('verbose', {
        alias: 'v',
        describe: 'shows debug log',
        type: 'boolean'
    })
    .help()
    .alias('help', 'h')
    .argv;

const START_PORT = argv.port || DEFAULT_PORT;
if (argv.address) {
    StreamProcess.URL = argv.address;
}
if (argv.readsize) {
    Goggles.READ_SIZE = argv.readsize;
}
if (argv.queuesize) {
    Goggles.QUEUE_SIZE = argv.queuesize;
}

logger.setLevel("info");
if(argv.verbose) {
    logger.setLevel("debug");
}

let goggles_list = [];

function getAvailablePort() {
    let port_list = [];
    for (let i = 0; i < 8; i++) {
        port_list.push(START_PORT + i);
    }

    goggles_list.forEach(goggles => {
        let port_index = port_list.indexOf(goggles.stream_process.port);
        if (port_index > -1) {
            port_list.splice(port_index, 1);
        }
    });
    return port_list[0];
}

function checkForNewGoggles() {
    let devices = usb.getDeviceList().filter(device => device.deviceDescriptor.idVendor === 11427 && device.deviceDescriptor.idProduct === 31);

    devices.forEach(device => {
        if (device.id === undefined && goggles_list.length < 8) {
            setTimeout(function(){
                device.id = uuidv4();
                let stream_process = new StreamProcess(getAvailablePort());
                goggles_list.push(new Goggles(device, stream_process, (o) => {
                    logger.info("removing Goggles " + stream_process.port);
                    goggles_list = goggles_list.filter(goggle => goggle.usb.id !== o.usb.id);
                }));
            }, 1000);
        }
    });

    goggles_list.forEach(googles => {
        if (devices.filter(device => device.id === googles.usb.id).length === 0) {
            googles.close();
        }
    });

    logger.color('green').info("anzahl devices: -> " + goggles_list.length + " <-\r");
}

function main() {
    logger.color('blue').log("Have fun while using the Race-Streamer!");
    logger.log(`
                                                                                   
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
                                                                                   `);


    setInterval(checkForNewGoggles, 2000);
}

main();
