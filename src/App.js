import { Route , Routes } from "react-router-dom";
import Bookdetails from "./components/Bookdetails";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/" element={<Booklist/>}/>
          <Route path="/books/:id" element={<Bookdetails/>}/>
          <Route path="/favourites" element={<Favourites/>}/>

      </Routes>
    <Footer/>  
    </>
  );
}

export default App;
