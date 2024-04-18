import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DeliveryType,
  EMPTY_DELIVERY,
  addProductOrdersToDelivery,
  createDelivery,
} from "../_service/deliveriesApi";
import {
  ProductOrderType,
  getAllProductOrders,
} from "../_service/productOrderApi";
import ProductOrderForm from "../product-order/ProductOrderForm";

export default function DeliveryForm() {
  const [deliveryFormData, setDeliveryFormData] =
    useState<DeliveryType>(EMPTY_DELIVERY);
  const [productOrders, setProductOrders] = useState<ProductOrderType[]>([]);
  const [chosenProductOrders, setChosenProductOrders] = useState<
    ProductOrderType[]
  >([]);
  const nav = useNavigate();

  useEffect(() => {
    async function fetchProductOrders() {
      try {
        const productOrdersRes = await getAllProductOrders();
        setProductOrders(productOrdersRes);
      } catch (error) {
        console.error("Error fetching product orders:", productOrders);
      }
    }
    fetchProductOrders();
  }, [setProductOrders, productOrders]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    setDeliveryFormData((prevFormData) => ({
      ...prevFormData,
      [target.name]: target.value,
    }));
  }

  function handleProductOrdersChange(productOrders: ProductOrderType[]) {
    setChosenProductOrders(productOrders);
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newDelivery = await createDelivery(deliveryFormData);
    if (newDelivery) {
      if (chosenProductOrders) {
        const ordersToDeliver = await addProductOrdersToDelivery(
          chosenProductOrders,
          Number(newDelivery.id)
        );
        if (ordersToDeliver) {
          alert(`Delivery created!: ${newDelivery.deliveryDate}`);
          nav("/deliveries");
        }
      }
    } else {
      alert(`Error creating delivery`);
    }
  }

  return (
    <>
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
      <h2>Choose product orders:</h2>
      <ProductOrderForm
        productOrders={productOrders}
        onProductOrderChange={handleProductOrdersChange}
      />
    </>
  );
}
