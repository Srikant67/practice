import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

export default function BlogPage(){
    const [blog, setBlog]=useState([]);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }catch(error){
            console.log("error found => ", error);
            setBlog(null);
            setRelatedBlogs({});
        }
        setLoading(false);
    }

    useEffect( ()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname]);

    return (
        <div>
            <Header></Header>
            <div>
                <button onClick={()=>navigation(-1)}>Back</button>
            </div>
            {
                loading ? (<div><p>Loading</p></div>) : 
                blog ? (<div>
                    <BlogDetails post={blog}></BlogDetails>
                    <h2>related Blogs</h2>
                    {
                        relatedBlogs.map((post)=>(
                            <div key={post.id}>
                                <BlogDetails post={post}></BlogDetails>
                            </div>
                        ))
                    }
                </div>) : (<div><p>No blog found</p></div>)
            }
        </div>
    )
}