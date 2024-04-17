import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeliveryType, getDeliveries } from "../_service/deliveriesApi";
import Delivery from "./Delivery";

export default function ProductList() {
  const [deliveries, setDeliveries] = useState<DeliveryType[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const deliveryRes = await getDeliveries();
        setDeliveries(deliveryRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [setDeliveries]);

  return (
    <>
      <h2>Deliveries</h2>
      <button
        onClick={() => {
          nav("/deliveries/create");
        }}
      >
        Create
      </button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <td>Details</td>
            <th>
              <button>Delivery date</button>
            </th>
            <th>
              <button>From warehouse</button>
            </th>
            <th>
              <button>Destination</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => {
            return Delivery(delivery);
          })}
        </tbody>
      </table>
    </>
  );
}
