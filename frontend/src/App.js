import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddBook from "./components/AddBook";
import Books from "./components/Books/Books";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
    <header>

    <Header/> 
    </header>
  
     <main>
     <Routes>
     <Route path ="/" element ={<Home/>} exact/>
     <Route path ="/add" element ={<AddBook/>} exact/>
     <Route path ="/books" element ={<Books/>} exact/>
     <Route path ="/aboutus" element ={<About/>} exact/>

     </Routes>
     </main>
    </div>
  );
}

export default App;
