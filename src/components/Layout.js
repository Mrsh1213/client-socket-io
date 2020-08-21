import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import {LOGOUT, USER_CONNECTED} from "../Config/Events";
import LoginForm from "./LoginForm";

const socketUrl = "http://localhost:5000"
Layout.propTypes = {
    title: PropTypes.string
};

function Layout(props) {
    const {title} = props;
    const [socket, setSocket] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        initSocket();
    }, []);

    function initSocket() {
        const socket = io(socketUrl);
        socket.on("connect", () => {
            console.log("connect Client")
        })
        setSocket(socket);
    }

    function setUserIo(user) {
        socket.emit(USER_CONNECTED,user);
        setUser(user)
    }

    function logOut() {
        socket.emit(LOGOUT)
        setUser(null);
    }

    return (
        <div className="container">
            <LoginForm socket={socket} setUserIo={setUserIo}/>
        </div>
    );
}

export default Layout;