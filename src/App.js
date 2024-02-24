import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Main from './Main'
import Product from "./products";
import Contact from "./contact";

function Home(){
  return (
    <div className="w-full App overflow-auto touch-auto">
      <Nav/>  
      <Main />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;