import { API_URL } from "../settings";
import { handleHttpErrors } from "./FetchUtils";
import { DeliveryType } from "./deliveriesApi";
import { ProductType } from "./productsApi";
const PRODUCT_ORDER_URL = API_URL + "productOrders";

interface ProductOrderType {
  id: number | null;
  product: ProductType;
  delivery: DeliveryType;
  quantity: number;
}

async function getAllProductOrders() {
  return fetch(PRODUCT_ORDER_URL).then(handleHttpErrors);
}

export type { ProductOrderType };
export { getAllProductOrders };
