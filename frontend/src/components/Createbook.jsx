import React, { useState } from 'react';
import axios from 'axios';
import Backbutton from './Backbutton'; 
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function Createbook() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const save = async () => {
    const data = {
      title,
      author,
      publishyear: publishYear
    };

    setLoading(true);

    try {
      await axios.post('http://localhost:3000/books/addbook', data);
      setLoading(false);
      
      // Reset input fields after successful save
      setTitle('');
      setAuthor('');
      setPublishYear('');

      enqueueSnackbar('Book created successfully', { variant: 'success' });
      navigate('/');
    } catch (err) {
      console.log(err);
      enqueueSnackbar('Error creating book', { variant: 'error' });
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='flex justify-center gap-20 mt-5 mb-2'>
        <h1 className='text-xl-center font-bold text-3xl'>Create book</h1>
        <Backbutton />
      </div>
      {loading && <Spinner />}
      <div className='border-1 border-sky-500 rounded-md w-[600px] mx-auto p-8'>
        <div>
          <label className='text-xl mr-4'>Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 mt-1 border-gray-300 px-2 py-2 w-full rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4'>Author</label>
          <input 
            type="text" 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 mt-1 border-gray-300 px-2 py-2 w-full rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4'>Publish Year</label>
          <input 
            type="text" 
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 mt-1 border-gray-300 px-2 py-2 w-full rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105'
          />
        </div>
        <button 
          onClick={save} 
          className='w-full p-2 bg-blue-600 text-white text-2xl font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105'
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Createbook;
