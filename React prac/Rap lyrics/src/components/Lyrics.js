import React, { useState } from "react";
import Card from "./Card";
import {GrPrevious, GrNext} from "react-icons/gr";

const Lyrics = (props) => {
    let data = props.data;
    const [count, setCount] = useState(0);

    function leftShiftHandler(){
        if(count-1 < 0)
            setCount(data.length-1);
        else
            setCount(count-1);
    }

    function rightShiftHandler(){
        if(count+1 >= data.length)
            setCount(0);
        else
            setCount(count+1);
    }

    function surpriseHandler(){
        const rand = Math.floor(Math.random()*data.length);
        setCount(rand);
    }

    return (
        <div className="flex flex-col justify-center items-center bg-white w-[85vw] md:w-[700px] mt-10 p-10 hover:shadow-2xl transition-all duration-700 rounded-md">
            <Card data={data[count]}></Card>
            <div className="flex text-3xl mt-9 gap-3 text-violet-400 font bold mx-auto">
                <button onClick={leftShiftHandler} className="cursor-pointer hove:text-violet-500"><GrPrevious></GrPrevious></button>
                <button onClick={rightShiftHandler} className="cursor-pointer hove:text-violet-500"><GrNext></GrNext></button>
            </div>
            <div className="mt-7"><button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise Me</button></div>
        </div>
    )
}

export default Lyrics;