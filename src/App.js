import Product from "./products";
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Main from './Main'

function Home(){
  return (
    <div className="h-screen w-full App overflow-auto touch-auto">
      <Nav/>  
      <Main />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes><Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} />*/}
          <Route path="/products" element={<Products />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;