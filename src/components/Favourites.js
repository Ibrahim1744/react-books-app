import React from 'react';
import '../index.css'
import { useAppContext } from './context/Appcontext';
import Favourite from './Favourite';
const Favourites = () => {
  const {favourites , addToFavourites , removeFromFavourites}= useAppContext();

  

  return (
    <>
      <div className="favourites">
          {favourites.length > 0 ?
            favourites.map((favourite)=>{
              return(
                <Favourite key={favourite.id} favourite={favourite}/>
              )
            })
            : <h1 className='no-favourite'>You dont have any favourite book , add one </h1>
          }
      </div>
    </>
  );
}

export default Favourites;
