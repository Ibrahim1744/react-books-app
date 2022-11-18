import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import '../index.css'
import { API_URL } from '../API';
import Card from './Card';
const Booklist = () => {
  const [books , setBooks]=useState([]);



  useEffect(() => {
      axios.get(API_URL).then(res=> {
        console.log(res.data);
        setBooks(res.data)
      }).catch(err=>console.log(err))
  }, []);
  return (
    <>
      <div className="book-list">
      {
        books.map((book)=>{
          return(
            <Card key={book.id} book={book} />
          )
        })
      }
      </div>
    </>
  );
}

export default Booklist;
