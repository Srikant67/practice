import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) =>{
    const navigate = useNavigate();
    const [showPwd, setShowPwd] = useState(false);
    const [showConfirmPwd, setShowConfirmPwd] = useState(false);
    const [accountType, setAccountType] = useState("Student");
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpwd:"",
        accountType:""
    })
    function changeHandler(event){
        setFormData(
            (prev) => (
                {
                    ...prev,[event.target.name]:event.target.value
                }
            )
        )
    }

    function accountTypeHandler(event){
        setAccountType(event.target.name);
        formData.accountType = event.target.name;
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.confirmpwd)
            toast.error("Passwords do not match");
        props.setIsLoggedIn(true);
        toast.success("Account Created");

        const accountData ={
            ...formData
        }

        console.log(accountData);
        navigate("/dashboard");
    }
    return (
        <div>
            {/* student-instructor tab */}
            <div className="flex rounded-full bg-slate-700 p-1 gap-x-1 my-6 max-w-max">
                <button name="Student" className={`${accountType === "Student" ? "bg-slate-900 text-white" : "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`} onClick={accountTypeHandler}>Student</button>
                <button name="Instructor" className={`${accountType === "Instructor" ? "bg-slate-900 text-white" : "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`} onClick={accountTypeHandler}>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex gap-x-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-400 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-800">*</sup></p>
                        <input className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px] "  required type="text" name="firstName" value={formData.firstName} onChange={changeHandler} placeholder="Enter first name"/>
                    </label>
                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-400 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-800">*</sup></p>
                        <input className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px] "  required type="text" name="lastName" value={formData.lastName} onChange={changeHandler} placeholder="Enter last name"/>
                    </label>
                </div>
                <label className="w-full">
                    <p className="text-[0.875rem] text-slate-400 mb-1 leading-[1.375rem] mt-[10px]">Email address<sup className="text-pink-800">*</sup></p>
                    <input className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px] "  required type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Enter email address"/>
                </label>
                <div className="flex gap-x-4 w-full">
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-slate-400 mb-1 leading-[1.375rem] mt-[10px]">Password<sup className="text-pink-800">*</sup></p>
                        <input className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px] "  required type={showPwd ? ("text") : ("password")} name="password" value={formData.password} onChange={changeHandler} placeholder="Enter password"/>
                        <span className="absolute right-3 top-[44px] cursor-pointer" 
                        onClick={() => setShowPwd((prev) =>!prev)}>{showPwd ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}</span>
                    </label>
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-slate-400 mb-1 leading-[1.375rem] mt-[10px]">Confirm Password<sup className="text-pink-800">*</sup></p>
                        <input className="bg-slate-700 rounded-[0.5rem] text-slate-300 w-full p-[12px] "  required type={showConfirmPwd ? ("text") : ("password")} name="confirmpwd" value={formData.confirmpwd} onChange={changeHandler} placeholder="Confirm password"/>
                        <span className="absolute right-3 top-[44px] cursor-pointer" 
                        onClick={() => setShowConfirmPwd((prev) =>!prev)}>{showConfirmPwd ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}</span>
                    </label>
                </div>
                <button className="bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6 w-full">Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm;