import { useEffect, useState } from "react";
import { ProductOrderType } from "../_service/productOrderApi";

export default function ProductOrderForm(props: {
  productOrders: ProductOrderType[];
  onProductOrderChange: (productOrders: ProductOrderType[]) => void;
}) {
  const { productOrders } = props;
  const [chosenProductOrders, setChosenProductOrders] = useState<
    ProductOrderType[]
  >([]);

  function handleProductOrdersChange(
    event: React.ChangeEvent<HTMLInputElement>,
    productOrder: ProductOrderType
  ) {
    const isChecked = event.target.checked;
    if (isChecked) {
      setChosenProductOrders((prevOrders) => [...prevOrders, productOrder]);
    } else {
      setChosenProductOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== productOrder.id)
      );
    }
  }

  useEffect(() => {
    props.onProductOrderChange(chosenProductOrders);
  }, [props, chosenProductOrders]);

  const checkboxes = productOrders.map((productOrder) => {
    return (
      <tr key={productOrder.id}>
        <td>
          <input
            id={`order_${productOrder.id}`}
            name={`orderInput_${productOrder.id}`}
            type="checkbox"
            onChange={(event) => handleProductOrdersChange(event, productOrder)}
          />
          <label htmlFor={`orderInput_${productOrder.id}`}>
            {" \t "}
            {`${productOrder.delivery.deliveryDate}`} -{" "}
            {productOrder.product.name} - {productOrder.quantity}
          </label>
        </td>
      </tr>
    );
  });

  return (
    <form id="product-order-form">
      <table>
        <tbody>{checkboxes}</tbody>
      </table>
    </form>
  );
}
