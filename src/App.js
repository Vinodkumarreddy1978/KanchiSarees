import Product from "./products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Contact from "./contact";
import Main from './Main'

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
    <BrowserRouter basename="">
      <Routes>
        <Route path="/KanchiSarees" element={<Home />} />
        <Route path="/KanchiSarees/contact" element={<Contact />} />
        <Route path="/KanchiSarees/products" element={<Product />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;