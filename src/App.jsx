import "./App.css";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/products ";
import Shop from "./pages/Shop";
function App() {
  return (
    <>
    
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
         <li>
          <Link to="/about">About</Link>
         </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>

    
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      


      </Routes>

    </>
  );
}

export default App;