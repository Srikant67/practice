import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag(){
    const [tag,setTag] = useState("");
    const {gif, loading, fetchData} = useGif(tag);

    function changeHandler(event){
        setTag(event.target.value)
    }

    return(
        <div className="w-1/2 bg-red-200 border border-black rounded-lg flex flex-col items-center gap-6 mt-[20px] mx-auto">
            <h2 className="text-xl font-bold mt-[20px]">Random {tag} GIF</h2>
            {
                loading ? (<Spinner></Spinner>) : (<img className="mb-[20px]" src={gif} width="450" alt="random gif"></img>)
            }
            <input className="rounded-md text-lg w-[400px] text-black bg-white mb-[20px] text-center"
            placeholder="Search for a GIF" onChange={changeHandler} value={tag}/>
            <button className="rounded-full text-lg w-[400px] text-white bg-green-300 mb-[20px]" onClick={()=>{fetchData(tag)}}>Generate</button>
        </div>
    )
}