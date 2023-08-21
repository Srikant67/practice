import React from "react";
import "./spinner.css"
const spinner = () => {
    return(
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner"></div>
            <p className="text-[#000031d1] text-5xl font-semibold">Loading...</p>
        </div>
    )
}

export default spinner;