import React from "react";
import Signup from "./SignupForm";
import Login  from "./LoginForm";
import mesh from "../assets/mesh.jpg";
import {FcGoogle} from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
    return (
        <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto pt-10 gap-x-12 gap-y-0 ">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-slate-300 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-slate-400">{desc1}</span><br></br>
                    <span className="text-blue-500 italic">{desc2}</span>
                </p>
                {formtype === "signup" ? (<Signup setIsLoggedIn={setIsLoggedIn}/>) : (<Login setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-slate-200"></div>
                    <p className="text-slate-400 font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-slate-200"></div>
                </div>

                <button className="flex w-full items-center justify-center rounded-[8px] font-medium
                 text-slate-400 border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-5">
                    <FcGoogle></FcGoogle><p>Sign Up With Google</p>
                </button>
            </div>
            <div className="relative w-11/12 max-w-[450px]">
                <img src={mesh} width={448} height={404} loading="lazy" alt=""/>
                <img src={image} className="absolute -top-2 right-2" width={558} height={504} loading="lazy"  alt=""/>
            </div>
        </div>
    )
}

export default Template;