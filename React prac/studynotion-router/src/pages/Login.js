import React from "react";
import Template from "../components/Template";
import stock1 from "../assets/stock1.jpg";

const Login = (props) => {
    return (
        <Template
            title="Welcome back"
            desc1="Build skills for today, tomorrow and beyond"
            desc2="Education to future-proof your career"
            image={stock1}
            formtype="login"
            setIsLoggedIn={props.setIsLoggedIn}
        />
    )
}

export default Login;