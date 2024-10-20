import React from 'react'
import { FcLike } from "react-icons/fc";
import { useLinkClickHandler } from 'react-router-dom';

const Card = ({course}) => {
   
  return (
    <div className='w-[300px]  bg-bgDark rounded-md bg-opacity-80 overflow-hidden hover:shadow-lg transition-shadow duration-300 '>
      <div className='relative'>
        <img src={course.image.url} alt={course.image.alt}></img>
        
        <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3
        grid place-items-center'>

        <button >
            <FcLike fontSize="1.75rem"/>
        </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='font-semibold text-white text-lg leading-6'>
            {course.title}
        </p>
        <p className='text-white mt-2 '>
            {course.description}
        </p>
      </div>
    </div>
  )
}

export default Card
