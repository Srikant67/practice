import "./App.css";
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import PageInit from "./components/PageInit"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const {fetchPosts} = useContext(AppContext);
  
  useEffect(() => 
    {
      fetchPosts();
    }
  ,[]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header></Header>
      <Blogs></Blogs>
      <PageInit></PageInit>
    </div>
  );
}

export default App;