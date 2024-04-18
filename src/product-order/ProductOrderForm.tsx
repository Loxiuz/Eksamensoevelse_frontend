import { ProductOrderType } from "../_service/productOrderApi";

export default function ProductOrderForm(props: {
  productOrders: ProductOrderType[];
}) {
  const { productOrders } = props;

  const checkboxes = productOrders.map((productOrder) => {
    return (
      <tr>
        <td>
          <label htmlFor={`orderInput_${productOrder.id}`}></label>
          <input
            id={`order_${productOrder.id}`}
            name={`orderInput_${productOrder.id}`}
            type="checkbox"
          />
        </td>
      </tr>
    );
  });

  return (
    <form id="product-order-form">
      <table>{checkboxes}</table>
    </form>
  );
}
