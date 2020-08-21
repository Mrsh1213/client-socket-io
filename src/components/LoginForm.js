import React, {useRef, useState} from 'react';
import PropTypes, {func} from 'prop-types';
import {VERIFY_USER} from "../Config/Events";

LoginForm.propTypes = {};

function LoginForm(props) {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const refInput = useRef(null);

    function setUser({user, isUser}) {
        console.log(user);
        console.log(isUser);
        if (isUser) {
            setError("این نام وجود دارد")
        } else {
            setError("")
            props.setUserIo(user)
        }
    }

    function loginSubmit(e) {
        e.preventDefault();
        props.socket.emit(VERIFY_USER, name, setUser)
    }

    return (
        <div className="login">
            <form onSubmit={loginSubmit} className="login-form">
                <label htmlFor="name">
                    <h2>Got a name?</h2>
                </label>
                <input placeholder={"Your Name"} ref={refInput} type="text" id="name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <div className="error">{error ? error : null}</div>
            </form>
        </div>
    );
}

export default LoginForm;