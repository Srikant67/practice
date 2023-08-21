import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from './components/spinner';

function App() {
  const [courses,setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    }catch(error){
      toast.error("Something went wrong.");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    <div className="min-h-screen flex flex-col max-h-full">
      <NavBar/>
      <div className="bg-[#000031d1] min-h-screen">
        <Filter filterData = {filterData} category={category} setCategory={setCategory}/>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Loading></Loading>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;