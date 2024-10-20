import React from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { apiUrl } from './data'
import { useState, useEffect } from "react";
const App = () => {
  const [courses, setCourses] = useState({});
  const[filter,setFilter]=useState("All");
  console.log(filter);
  
  useEffect(()=>{
    async function fetchData(){
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
        
      }
      catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[])
  
  return <div className="flex flex-col min-h-screen ">
    <Navbar/>
    <div className="bg-bgDark2 min-h-screen">

    <Filters setFilter={setFilter}/>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center  items-center min-h-[50vh]"> 
    <Cards courses = {courses} filter={filter}/>
    </div>

    </div>
  </div>;
};

export default App;
