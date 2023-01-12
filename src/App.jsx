import { Navbar } from "./components/navbar/Navbar";
import { Product } from "./components/product/Product";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { About } from "./components/about/About";
import { Description } from "./components/description/Description";
import { SignUp } from "./components/login/SignUp";
import { Checkout } from "./components/checkout/Checkout";
import { PrivateComponent } from "./components/context/PrivateComponent";
import { Notfound } from "./components/notfound/Notfound";


function App() {
  return (
    <div className="App">
       <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/product" element={<Product />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/description" element={<Description />}></Route>

        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="*" element={<Notfound />}></Route>

        <Route
          path="/checkout"
          element={
            <PrivateComponent>
              <Checkout />
            </PrivateComponent>
          }
        ></Route>
      </Routes>
     <Footer /> 
    </div>
  );
}

export default App;
