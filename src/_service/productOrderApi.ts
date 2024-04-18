import { DeliveryType } from "./deliveriesApi";
import { ProductType } from "./productsApi";

interface ProductOrderType {
  id: number | null;
  product: ProductType;
  delivery: DeliveryType;
  quantity: number;
}

export type { ProductOrderType };
