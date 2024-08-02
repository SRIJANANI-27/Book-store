import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Backbutton from './Backbutton'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


function Deletebook() {

  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();

  const deletes = async () => {
    setLoading(true)
    alert("deleted success")
    axios.delete(`http://localhost:3000/books/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((err)=>{
      setLoading(false)
    })
  }
  
  const cancel = async()=>{
    navigate('/')
  }
  return (
    <div className='flex flex-col items-center p-6  min-h-screen'>
      <div className='flex items-center gap-4 mb-6'>
        <h1 className='text-3xl font-bold text-gray-800'>Delete Book</h1>
        <Backbutton />
      </div>
      {loading ? <Spinner /> : ''}
      <div className='bg-white border border-gray-300 rounded-lg shadow-lg p-8 w-full max-w-md mt-20'>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>Are you sure you want to delete this book?📗</h2>
        <div className='flex gap-6'>
          <button className='w-full bg-red-600 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out'
          onClick={deletes}>
            Delete
          </button>
          <button className='w-full bg-red-600 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out'
          onClick={cancel}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deletebook