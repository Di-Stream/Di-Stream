const yargs = require('yargs')
const logger = require('node-color-log');
const Goggles = require('./models/Goggles');
const StreamProcess = require('./models/StreamProcess');
const DiStream = require("./models/DiStream");

logger.setLevel("info");

const argv = yargs
    .option('port', {
        alias: 'p',
        describe: 'sets the starting Port (default: '+ DiStream.DEFAULT_PORT +')',
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

if (argv.port) {
    StreamProcess.DEFAULT_PORT = argv.port;
}
if (argv.address) {
    StreamProcess.URL = argv.address;
}
if (argv.readsize) {
    Goggles.READ_SIZE = argv.readsize;
}
if (argv.queuesize) {
    Goggles.QUEUE_SIZE = argv.queuesize;
}
if(argv.verbose) {
    logger.setLevel("debug");
}

let diStream;
/**
 * Main Function
 **/
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
                                                                               `^);

    diStream = new DiStream();
}

main();
