import { DeliveryType } from "../_service/deliveriesApi";

export default function Delivery(delivery: DeliveryType) {
  function handleDetailsClicked() {}

  return (
    <tr key={delivery.id}>
      <td>
        <button onClick={handleDetailsClicked} value={`${delivery.id}`}>
          +
        </button>
      </td>
      <td>{`${delivery.deliveryDate}`}</td>
      <td>{delivery.destination}</td>
      <td>{delivery.fromWarehouse}</td>
    </tr>
  );
}
