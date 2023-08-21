import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
const LoginForm = (props) =>{
    const [formData, setFormData] = useState({email:"",password:""});
    const [showPwd, setShowPwd] = useState(false);
    const navigate = useNavigate();
    function changeHandler(event){
        setFormData(
            (prev) => (
                {
                    ...prev,[event.target.name]:event.target.value
                }
            )
        )
    }

    function submitHandler(event){
        event.preventDefault();
        props.setIsLoggedIn(true);
        navigate("/dashboard");
        toast.success("Logged in");
    }
    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-slate-400 mb-1 leading-[1.375rem]">Email address<sup className="text-pink-800"> *</sup></p>
                <input className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px] " required type="email" onChange={changeHandler} value={formData.email} name="email" id="email" placeholder="Enter email id"/>
            </label>
            <label className="relative w-full">
                <p className="text-[0.875rem] text-slate-400 mb-1 leading-[1.375rem]">Password<sup className="text-pink-800"> *</sup></p>
                <input className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px] " required type={showPwd ? ("text") : ("password")} onChange={changeHandler} value={formData.password} name="password" id="password" placeholder="Enter password"/> 
                <span className="absolute right-3 top-[38px] cursor-pointer" 
                onClick={() => setShowPwd((prev) =>!prev)}>{showPwd ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}</span>
                <Link to="#"><p className="text-xs mt-1 text-blue-500 max-w-max ml-auto">Forgot Password?</p></Link>
            </label>
            <button className="bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">Sign in</button>
        </form>
    )
}

export default LoginForm;