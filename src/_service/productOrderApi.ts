import { Delivery } from "./deliveriesApi";
import { Product } from "./productsApi";

interface ProductOrder {
  id: number | null;
  product: Product;
  dilvery: Delivery;
  quantity: number;
}

export type { ProductOrder };
