import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

function Backbutton() {
  return (
    <div >
    <Link to = '/'>
    <BsArrowLeft className='text-blue-500 text-3xl bg-gray-200 p-2 rounded-s-3xl hover:text-red-500'></BsArrowLeft>
    </Link>
</div>
  )
}

export default Backbutton