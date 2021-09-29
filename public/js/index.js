// Initialize variables
const goggles_list_element = document.querySelector("#goggles_list");
const goggles_count_element = document.querySelector("#goggles_count");

// varables
let goggles_list = [];

// functions

function updateGogglesList() {
    goggles_list_element.innerHTML = '';
    goggles_list.forEach(goggles => {
        let li = document.createElement("li");
        li.innerText = goggles;
        goggles_list_element.appendChild(li);
    });
    goggles_count_element.innerText = "Goggles Count: " + goggles_list_element.length;
}


// connect to socket
const socket = io({path: '/ws/socket.io'});

function initSocketEvents() {
    // Socket events

    socket.on('goggles_change', (data) => {
        goggles_list = data;
        updateGogglesList();
    });

    socket.on('disconnect', () => {
        console.log('you have been disconnected');
    });

    socket.on('reconnect', () => {
        console.log('you have been reconnected');
    });
}

// events

// run

initSocketEvents();

