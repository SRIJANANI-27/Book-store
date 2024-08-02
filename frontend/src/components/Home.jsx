import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Card from "./Card";
import Table from "./Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState('table');

  const table = () => {
    setShow('table');
  };

  const card = () => {
    setShow('card');
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        console.log("Books data:", res.data.book); // Add this line to debug
        setBooks(res.data.book);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-10 mt-4 m-8">
        <h1 className="text-2xl">Book List</h1>
        <button className="btn btn-outline-primary" onClick={table}>Table</button>
        <button className="btn btn-outline-primary" onClick={card}>Card</button>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" data-bs-toggle="tooltip" data-bs-placement="left" title="Add new book"/>
        </Link>
      </div>
      {loading ? 
        <Spinner /> : show === 'table' ? (<Table books={books} />) : <Card books={books} />
      }
    </div>
  );
}

export default Home;
