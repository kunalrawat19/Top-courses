import React, { useEffect, useState} from 'react'
import Card from './Card';
const Cards = ({courses,filter}) => {
  
  let allCourses = [];
  const getCourses = ()=>{
    if (filter === "All") {
      // If no filter, push all courses
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
    }
    else{
      courses[filter].forEach((course) => {
        allCourses.push(course);
      });
    }
    return allCourses;
  }
  
  return (
    <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center  items-center gap-6 min-h-[50vh]' >
   { getCourses().map((course)=>{
      return(
      <Card key={course.id} course={course}  />)
    })}
    </div>
  )
}

export default Cards
