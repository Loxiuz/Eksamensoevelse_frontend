import { useEffect, useState } from "react";
import { ProductType, getProducts } from "../_service/productsApi";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState(Array<ProductType>);
  const nav = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const productsRes = await getProducts();
        setProducts(productsRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [setProducts]);

  return (
    <>
      <h2>Products</h2>
      <button
        onClick={() => {
          nav("/products/add");
        }}
      >
        Add
      </button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <button>Name</button>
            </th>
            <th>
              <button>Price</button>
            </th>
            <th>
              <button>Weight in grams</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return Product(product);
          })}
        </tbody>
      </table>
    </>
  );
}
