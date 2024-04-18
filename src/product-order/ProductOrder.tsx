import { ProductOrderType } from "../_service/productOrderApi";

export default function ProductOrder(props: {
  productOrder: ProductOrderType;
}) {
  const { productOrder } = props;

  return (
    <tr>
      <td>{`${productOrder.delivery.deliveryDate}`}</td>
      <td>{productOrder.product.name}</td>
      <td>{productOrder.quantity}</td>
    </tr>
  );
}
