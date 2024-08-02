import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

function Card() {
  const [books, setBooks] = useState([]);
  const [select,setselect] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        console.log("Books data:", res.data.book);
        setBooks(res.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-8">
      {books.map((item) => (
        <div
          key={item._id}
          className="border-2 border-gray-500 rounded-lg  hover:shadow-xl p-3 w-fit"
        >
          <div className="flex justify-between gap-3">
            <div className="text-gray-500">
              <h3>{item._id}</h3>
            </div>
            <div className="bg-red-300 py-1 px-3 rounded-lg">
              <h3>{item.publishyear}</h3>
            </div>
          </div>

          <div className="flex gap-3 mt-3 capitalize">
            <PiBookOpenTextLight className="text-red-400 text-2xl" />
            <h2>{item.title}</h2>
          </div>
          <div className="flex gap-3 capitalize mt-2">
            <BiUserCircle className="text-red-400 text-2xl" />
            <h2>{item.author}</h2>
          </div>
          <div className="flex justify-between items-center mt-4">
            <BiShow
              className="text-blue-900 text-2xl hover:text-black"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setselect(item)}
            />

            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className="text-blue-500 text-2xl hover:text-black" />
            </Link>
            <Link to={`/books/edit/${item._id}`}>
              <AiOutlineEdit className="text-yellow-500 text-2xl hover:text-black" />
            </Link>
            <Link to={`/books/delete/${item._id}`}>
              <MdOutlineDelete className="text-red-500 text-2xl cursor-pointer hover:text-black" />
            </Link>
          </div>

         {select &&  (<div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h2>Book Details</h2>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="bg-red-300 py-1 px-3 rounded-lg w-fit">
                    <h3>{select.publishyear}</h3>
                  </div>
                  <div className="text-gray-500 mt-3">
                    <h3>{select._id}</h3>
                  </div>
                  <div className="flex gap-3 mt-3 capitalize">
                    <PiBookOpenTextLight className="text-red-400 text-2xl" />
                    <h2>{select.title}</h2>
                  </div>
                  <div className="flex gap-3 capitalize mt-2">
                    <BiUserCircle className="text-red-400 text-2xl" />
                    <h2>{select.author}</h2>
                  </div>
                  <div className=" mt-3 capitalize">
                    
                    <h2 className="font-semibold">About this book</h2>
                    <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet blanditiis ad deleniti laborum neque laudantium voluptatibus! Laudantium et est in facere quod quidem optio voluptas, officia debitis iure consequuntur. Placeat aspernatur nobis accusantium aperiam cumque delectus dolores sequi, maiores natus laboriosam deserunt nemo voluptas pariatur quae nesciunt perferendis ad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      ))}

     
    </div>
  );
}

export default Card;
