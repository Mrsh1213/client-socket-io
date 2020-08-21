const io = require("./index").io;
const {VERIFY_USER,USER_CONNECTED} = require("../Config/Events")
const {createChat, createUser} = require("../Config/Factories")
let connectedUser = {};
module.exports = function (socket) {
    console.log("socketId: " + socket.id);
    socket.on(VERIFY_USER, (name, cb) => {
        if (isUser(connectedUser, name)) {
            cb({isUser: true, user: null})
        } else {
            cb({isUser: false, user: createUser({name})})
        }
    });

    socket.on(USER_CONNECTED, (user) => {
        connectedUser=addUser(connectedUser,user);
       socket.user=user;
       io.emit(USER_CONNECTED,connectedUser)
    });

}

function addUser(usersList, user) {
    let newList = Object.assign({}, usersList);
    newList[user.name] = user;
    return newList;
}

function removeUser(usersList, username) {
    let newList = Object.assign({}, usersList);
    delete newList[username];
    return newList;
}

function isUser(usersList, username) {
    return username in usersList
}