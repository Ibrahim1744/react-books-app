import React, { useState } from 'react';
import '../index.css'
import axios from 'axios';
import { useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import { BOOK_DETAILS_URL } from '../API';
const Bookdetails = () => {
 const [book , setBook]=useState({});
  const {id}=useParams();
  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`).then(res=> {
      setBook(res.data)
    }).catch(err=>console.log(err))
    
  }, [id]);
  return (
    <>
      <div className="book-details">
          <div>
            <h2>{book.title}</h2>
            <img src={book.image_url} alt="#" />
          </div>
          <div className='book-detail-info' >
              <h2>Description</h2>
              <p>{book.description}</p>
              <h2>Authors</h2>
              <p>{book.authors}</p>
          </div>
      </div>
    </>
  );
}

export default Bookdetails;
