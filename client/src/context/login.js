import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const LoginContext = createContext()

function LoginContextContainer (props) {
    const baseUrl = "http://localhost:3001"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
    })

    const handleOnSubmitLogin = async (event) => {
        axios({
            method: "POST",
            url: `${baseUrl}/user/login`,
            data: {
                email,
                password
            }
        })
        .then((data) => {
            localStorage.setItem('token', data.token)
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <LoginContext.Provider
            value={{
                handleOnChangeEmail,
                handleOnChangePassword,
                handleOnSubmitLogin
            }}
        >
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextContainer