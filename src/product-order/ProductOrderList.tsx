import { ProductOrderType } from "../_service/productOrderApi";
import ProductOrder from "./ProductOrder";

export default function ProductOrderList(props: {
  productOrders: ProductOrderType[];
}) {
  const { productOrders } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button>Delivery</button>
          </th>
          <th>
            <button>Product</button>
          </th>
          <th>
            <button>Quantity</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {productOrders.map((productOrder) => {
          return (
            <ProductOrder key={productOrder.id} productOrder={productOrder} />
          );
        })}
      </tbody>
    </table>
  );
}
