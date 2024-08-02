import React from 'react';
import { Link } from "react-router-dom"; // Correct import
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md"; // Ensure this import is included

function Table({ books }) {

  return (
    <table className="table border-separate border-spacing-2 w-[1200px] mx-auto">
      <thead>
        <tr className="text-center">
          <th className="border rounded-md mx:hidden">No</th>
          <th className="border rounded-md">Title</th>
          <th className="border rounded-md">Author</th>
          <th className="border rounded-md">Publish Year</th>
          <th className="border rounded-md">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-7">
            <td className="border rounded-md">{index + 1}</td>
            <td className="border rounded-md">{book.title}</td>
            <td className="border rounded-md">{book.author}</td>
            <td className="border rounded-md">{book.publishyear}</td>
            <td className="border rounded-md">
              <div className="flex justify-center gap-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-blue-500 text-2xl" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-yellow-500 text-2xl" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-red-500 text-2xl cursor-pointer" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
