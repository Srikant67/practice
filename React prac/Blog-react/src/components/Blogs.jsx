import { useContext } from "react"
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner"
import Card from "../components/Card"

export default function Blogs(){
    const {posts, loading} = useContext(AppContext);
    return (
        <div className="w-11/12 h-screen max-w-[670px] mt-[40px] mb-[40px] flex flex-col justify-center items-center">
            {
                loading ? (<Spinner></Spinner>) : (
                    posts.length === 0 ? (<div><p>No Posts Found</p></div>) : (
                        (posts.map((post) => (<Card post={post} key={post.id}></Card>)))
                    )
                )
            }
        </div>
    )
}