import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DeliveryType,
  EMPTY_DELIVERY,
  getDeliveries,
} from "../_service/deliveriesApi";
import Delivery from "./Delivery";
import DeliveryDetails from "./DeliveryDetails";

export default function ProductList() {
  const [deliveries, setDeliveries] = useState<DeliveryType[]>([]);
  const [dialogActive, setDialogActive] = useState(false);
  const [chosenDelivery, setChosenDelivery] =
    useState<DeliveryType>(EMPTY_DELIVERY);
  const { state } = useLocation();
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

  useEffect(() => {
    if (state?.dialogActive) {
      setDialogActive(true);
      setChosenDelivery(state.chosenDelivery);
    } else {
      setDialogActive(false);
      setChosenDelivery(EMPTY_DELIVERY);
    }
  }, [state]);

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
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => {
            return <Delivery key={delivery.id} delivery={delivery} nav={nav} />;
          })}
        </tbody>
      </table>
      {dialogActive && <DeliveryDetails delivery={chosenDelivery} nav={nav} />}
    </>
  );
}
