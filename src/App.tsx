import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./products/ProductList";
import ProductForm from "./products/ProductForm";
import ProductSearch from "./products/ProductSearch";
import DeliveryList from "./deliveries/DeliveryList";
import DeliveryForm from "./deliveries/DeliveryForm";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to={"/"} id="home-btn">
          Home
        </Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/add" element={<ProductForm />}></Route>
          <Route path="/products/search" element={<ProductSearch />}></Route>
          <Route path="/deliveries" element={<DeliveryList />}></Route>
          <Route path="/deliveries/create" element={<DeliveryForm />}></Route>
          <Route path="*" element={<h2>Not Found</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
