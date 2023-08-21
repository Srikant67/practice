import { createContext, useState } from "react";
const url = "https://codehelp-apis.vercel.app/api/get-blogs";

export const AppContext = createContext(); 

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchPosts(page=1){
        setLoading(true);
        try{
            console.log("try ke start me "+page);
            const response = await fetch(`${url}?page=${page}`);
            const data = await response.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }catch(error){
            console.log("Error found stating - ",error);
            setPage(1);
            setTotalPages(null);
            setPosts("");
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchPosts(page);
    }

    const value = {loading, posts, page, totalPages, setLoading, setPosts, setPage, setTotalPages, handlePageChange, fetchPosts};
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}