import React from 'react';
import { useAppContext } from './context/Appcontext';

const Favourite = ({favourite}) => {

  const {favourites , addToFavourites , removeFromFavourites}= useAppContext();


  const favouriteChecker=(id)=>{
    const boolean=favourites.some((book)=>book.id === id)
    return boolean;
  }
  return (
    <div className="favourite">
          <h2>{favourite.title}</h2>
          <img src={favourite.image_url} alt="#" />
          <div className='favourite-bottom'>
            {
              favouriteChecker(favourite.id) ?  <button onClick={()=> removeFromFavourites(favourite.id)}>Remove from favourite</button>
                : <button onClick={()=> addToFavourites(favourite)}>Add to favourite</button>
                
            }
            
            </div>
      </div>
  );
}

export default Favourite;
