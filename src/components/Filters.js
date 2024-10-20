import React, { useState } from 'react'
// import Cards from './Cards';
import { filterData } from '../data'
const Filters = ({setFilter}) => {
  
  
  return (
    <div className='text-center w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {filterData.map((data)=>{
        return(<button key={data.id} onClick={()=>{setFilter(data.title)}} className='tex-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border
        transitiona-all duration-300 '>
          {data.title}
        </button>)
      })}
    </div>
  )
}

export default Filters
