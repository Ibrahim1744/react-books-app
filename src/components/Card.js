import React from 'react';
import { useAppContext } from './context/Appcontext';
import { useNavigate } from 'react-router-dom';

const Card = ({book}) => {
  const {favourites, addToFavourites , removeFromFavourites } = useAppContext()

    const favouriteChecker=(id)=>{
      const boolean=favourites.some((book)=>book.id === id)
      return boolean;
    }

    const navigate=useNavigate();

  return (
    <>
      <div className="book">
          <h2>{book.title}</h2>
          <img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)} />
          <div>
            {
              favouriteChecker(book.id) ?  <button onClick={()=> removeFromFavourites(book.id)}>Remove from favourite</button>
                : <button onClick={()=> addToFavourites(book)}>Add to favourite</button>
                
            }
            
            </div>
      </div>
    </>
  );
}

export default Card;
