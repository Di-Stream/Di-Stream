import usb from "usb";
import logger from "node-color-log";
import { v4 as uuidv4 } from 'uuid';
import {Goggles} from "./Goggles";
import {StreamProcess} from "./StreamProcess";

//----------------------------------------------------------------------------------------
const ASSCI = "                                                                               \n" +
    "                                                  @ ,#                          \n" +
    "                                                  * ..                          \n" +
    "                            *.                   %#/#                        ,% \n" +
    "                           .*%                   &%#                  (/  @     \n" +
    "                            @&%@#(///,,,//.   (&@&((,.  .....,,,,,*,*&&@.       \n" +
    "                      ((   @@%(@@           *&&&&&&%%%&(          **@%%&&&&*    \n" +
    "                           #&&@@&#         @&&&&&&# @@/             @@&%%@/   **\n" +
    "                            *&&&@&%&,     &&&&&&&&@%((/      #&%&&&%&&&@**      \n" +
    "                                  &&&&@&@##%@%##@%&/% (%%%%&&%&&*               \n" +
    "                                     *%/###%#&%&@%%%#%&%&%                      \n" +
    "            */(                      (%######(@@&%%@@.                //,,,     \n" +
    "            ,/(,                  ,@%%*@%%%%##&@&%&#%            /#(/*,.        \n" +
    "           .#(%%&@@%&@@&%%%%####@&%@&%(&&@%&&#@@@&&&@&&@     .@&@%#&            \n" +
    "       /*,,,*@&&%@@%(@%,,&&#%%@.     @@#@@@@&@@     /%%@@&&&#*@&@@*%            \n" +
    "   *.,.,    /#/(@/&&##%&(           .,,,%%(.#.          &&%&,&#&&@##*/          \n" +
    " *,         ,&&@%,.,                                        @@@%@@@**/*         \n" +
    "            *,//*.                                           ,.%%**             \n" +
    "                                                                                "

//----------------------------------------------------------------------------------------

let goggles_list = [];

function getAvailablePort() {
    let port_list = [1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238];

    goggles_list.forEach(goggles => {
        let port_index = port_list.indexOf(goggles.stream_process.port);
        if (port_index > -1) {
            port_list.splice(port_index, 1);
        }
    });
    return port_list[0];
}

function checkForNewGoggles() {
    let devices = usb.getDeviceList();

    devices.forEach(device => {
        if (device.deviceDescriptor.idVendor == "0x2ca3" && device.deviceDescriptor.idProduct == "0x1f" && device.id === undefined && goggles_list.length < 8) {
            setTimeout(function(){
                device.id = uuidv4();
                let stream_process = new StreamProcess(getAvailablePort());
                goggles_list.push(new Goggles(device, stream_process, (o) => {goggles_list.splice(goggles_list.indexOf(o), 1)}));
            }, 1000);

        }
    });
    goggles_list.forEach(googles => {
        if (devices.indexOf(googles.usb) === -1) {
            googles.close();

        }
    });

    logger.color('green').debug("anzahl devices: -> " + goggles_list.length + " <-\r");
}

function main() {
    logger.color('blue').log("Have fun while using the Race-Streamer!");
    logger.log(ASSCI);

    setInterval(checkForNewGoggles, 2000);
}

main();

