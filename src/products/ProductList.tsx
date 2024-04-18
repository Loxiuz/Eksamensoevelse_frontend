import { useEffect, useState } from "react";
import {
  EMPTY_PRODUCT,
  ProductType,
  getProducts,
} from "../_service/productsApi";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { state } = useLocation();
  const [dialogActive, setDialogActive] = useState(false);
  const [chosenProduct, setChosenProduct] =
    useState<ProductType>(EMPTY_PRODUCT);
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

  useEffect(() => {
    if (state?.dialogActive) {
      setDialogActive(true);
      setChosenProduct(state.chosenProduct);
    } else {
      setDialogActive(false);
      setChosenProduct(EMPTY_PRODUCT);
    }
  }, [state]);

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
            <td>Details</td>
            <th>
              <button>Name</button>
            </th>
            <th>
              <button>Price</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <Product key={product.id} product={product} nav={nav} />;
          })}
        </tbody>
      </table>
      {dialogActive && <ProductDetails product={chosenProduct} nav={nav} />}
    </>
  );
}
