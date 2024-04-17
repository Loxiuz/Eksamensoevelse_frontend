import ProductType from "../products/Product";
import { API_URL } from "../settings";
import { handleHttpErrors, makeOptions } from "./FetchUtils";

const PRODUCT_URL = API_URL + "/products";

interface ProductType {
  id: number | null;
  name: string;
  price: number;
  weightInGrams: number;
}

async function getProducts() {
  return await fetch(PRODUCT_URL).then(handleHttpErrors);
}

async function addProduct(newProduct: ProductType): Promise<ProductType> {
  const method = newProduct.id ? "PUT" : "POST";
  const options = makeOptions(method, newProduct);
  const URL = newProduct.id ? `${PRODUCT_URL}/${newProduct.id}` : PRODUCT_URL;
  return fetch(URL, options).then(handleHttpErrors);
}

export type { ProductType };
export { getProducts, addProduct };
