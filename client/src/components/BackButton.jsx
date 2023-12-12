import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination ='/'}) => {
  return (
    <div className='flex w-[600px] '>
        <Link to={destination} className='flex flex-row bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft className='text-2xl'/> 
            <p className='ml-2'>Go Home</p>
        </Link>
        
    </div>
  )
}

export default BackButton