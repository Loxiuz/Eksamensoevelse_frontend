import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeliveryType, createDelivery } from "../_service/deliveriesApi";

const EMPTY_DELIVERY = {
  id: null,
  deliveryDate: null,
  fromWarehouse: "",
  destination: "",
};

export default function DeliveryForm() {
  const [deliveryFormData, setDeliveryFormData] =
    useState<DeliveryType>(EMPTY_DELIVERY);
  const nav = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    setDeliveryFormData((prevFormData) => ({
      ...prevFormData,
      [target.name]: target.value,
    }));
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newDelivery = await createDelivery(deliveryFormData);
    if (newDelivery) {
      alert(`Delivery created!: ${newDelivery.deliveryDate}`);
      nav("/deliveries");
    } else {
      alert(`Error creating delivery`);
    }
  }

  return (
    <form>
      <label htmlFor="deliveryDate">Date:</label>
      <input
        name="deliveryDate"
        type="date"
        onChange={handleChange}
        // value={`${deliveryFormData.deliveryDate}`}
      />
      <label htmlFor="fromWarehouse">Warehouse:</label>
      <input
        name="fromWarehouse"
        type="text"
        onChange={handleChange}
        value={deliveryFormData.fromWarehouse}
      />
      <label htmlFor="destination">Destination:</label>
      <input
        name="destination"
        type="text"
        onChange={handleChange}
        value={deliveryFormData.destination}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
