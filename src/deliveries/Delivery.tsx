import { NavigateFunction } from "react-router-dom";
import { DeliveryType } from "../_service/deliveriesApi";

export default function Delivery(props: {
  delivery: DeliveryType;
  nav: NavigateFunction;
}) {
  const { delivery, nav } = props;

  function handleDetailsClicked(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    nav("/deliveries", {
      state: { chosenDelivery: delivery, dialogActive: true },
    });
  }

  return (
    <tr key={delivery.id}>
      <td>
        <button onClick={handleDetailsClicked} value={`${delivery.id}`}>
          +
        </button>
      </td>
      <td>{`${delivery.deliveryDate}`}</td>
      <td>{delivery.fromWarehouse}</td>
    </tr>
  );
}
