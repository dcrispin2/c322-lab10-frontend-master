const mode = 1;

const host_local = "http://localhost:8080";
const host_remote = let host = "https://ducks-service-latest-1-m472.onrender.com";;

function getHost() {
    return host_remote;
}

let configuration = {loggedIn: false, hosts: getHost(), token: ""};