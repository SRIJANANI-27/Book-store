import React, { useEffect, useState } from 'react';
import Backbutton from './Backbutton';
import Spinner from './Spinner'; // Ensure Spinner is imported
import { useParams } from 'react-router-dom';

function Showbook() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    show();
  }, []);

  const show = async () => {
    let url = `http://localhost:3000/books/${id}`;
    setLoading(true);

    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setBooks(data.book); 
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='flex justify-between m-9 mb-20'>
        <h1>SHOWBOOK</h1>
        <Backbutton />
      </div>
      {loading ? (
        <Spinner /> // Use the Spinner component when loading
      ) : (
        <div className='border-1 border-sky-400 w-fit m-7 p-6 rounded-2xl mx-auto '>
          <div className='flex gap-4 mb-4'>
            <span className='text-gray-500'>Id</span>
            <span>{books._id}</span>
          </div>
          <div className='flex gap-4 mb-4'>
            <span className='text-gray-500'>Title</span>
            <span className='text-capitalize '>{books.title}</span>
          </div>
          <div className='flex gap-4 mb-4'>
            <span className='text-gray-500'>Author</span>
            <span>{books.author}</span>
          </div>
          <div className='flex gap-4 mb-4'>
            <span className='text-gray-500'>Publish Year</span>
            <span>{books.publishyear}</span>
          </div>
          <div className='flex gap-4 mb-4'>
            <span className='text-gray-500'>Create time</span>
            <span>{new Date(books.createdAt).toString()}</span>
          </div>
          <div className='flex gap-4 mb-4'>
            <span className='text-gray-500'>Update time</span>
            <span>{new Date(books.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Showbook;
