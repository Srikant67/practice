import React from "react";
import Template from "../components/Template";
import stock2 from "../assets/stock2.jpg"
const Signup = (props) => {
    return(
        <Template
            title="Join with millions learning to code with study notion for free"
            desc1="Build skills for today, tomorrow and beyond"
            desc2="Education to future-proof you career"
            image={stock2}
            formtype="signup"
            setIsLoggedIn={props.setIsLoggedIn}
        />
    )
}

export default Signup;