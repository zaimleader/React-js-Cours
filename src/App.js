import { useState } from "react";
import Header from "./components/Header";
import Home from "./views/Home"
import Books from "./views/Books"


function App() {
  const [page, setPage] = useState("home");

  return (
    <>  
      <Header />

      <div className="flex-col">
        <div>
          <span onClick={()=> setPage("home")}>Home</span>
          <span onClick={()=> setPage("books")}>Books</span>
        </div>

        {
          page === "books" ? (<Books />) : (<Home />)
        }
      </div>
    </>
  );
}

export default App;
