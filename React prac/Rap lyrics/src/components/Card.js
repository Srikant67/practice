import React from "react";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Card = (props) => {
    let data = props.data;
    return(
        <div className="flex flex-col md:relative md:w-[600px]">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className=" aspect-square rounded-full w-[140px] h-[140px] z-[25]" src={data.img} alt=""></img>
            </div>
            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-116px] z-[1] left-[6px]"></div>
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{data.name}</p>
                <p className="text-violet-300 uppercase text-sm">{data.song}</p>
            </div>
            <div className="text-violet-400 mx-auto mt-5"><FaQuoteLeft></FaQuoteLeft></div>
            <div className="text-center mt-4 text-slate-500">{data.lyric}</div>
            <div className="text-violet-400 mx-auto mt-5"><FaQuoteRight></FaQuoteRight></div>
        </div>
    )
}

export default Card;