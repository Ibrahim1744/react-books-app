import { createContext ,useContext } from "react";
import { useState , useEffect } from "react";
const appContext=createContext(null);


export const useAppContext= ()=>{
 const context= useContext(appContext)
 return context;
}
const favouritesFromLocalStorage=JSON.parse(localStorage.getItem("favourites"))
const AppContextProvider=({children})=>{
const [favourites , setFavourites]=useState(favouritesFromLocalStorage)

const addToFavourites=(book)=>{
  const oldFavourites=[...favourites];
  const newFavourites=oldFavourites.concat(book);
  setFavourites(newFavourites)
}

const removeFromFavourites=(id)=>{
  const oldFavourites=[...favourites];
  const newFavourites=oldFavourites.filter((book)=>book.id !== id );
setFavourites(newFavourites);

}

useEffect(() => {
  localStorage.setItem("favourites" , JSON.stringify(favourites))
}, [favourites]);
  return(
    <appContext.Provider value={{favourites , addToFavourites, removeFromFavourites} }>
      {children}
    </appContext.Provider>
  )
}
export default AppContextProvider