import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random(){
    const {gif, loading, fetchData} = useGif();
    return(
        <div className="w-1/2 bg-green-500 border border-black rounded-lg flex flex-col items-center gap-6 mt-[20px] mx-auto">
            <h2 className="text-xl font-bold mt-[20px]">Random GIF</h2>
            {
                loading ? (<Spinner></Spinner>) : (<img className="mb-[20px]" src={gif} width="450" alt="random gif"></img>)
            }
            
            <button className="rounded-full text-lg w-[200px] text-white bg-green-300 mb-[20px]" onClick={()=>{fetchData()}}>Generate</button>
        </div>
    )
}