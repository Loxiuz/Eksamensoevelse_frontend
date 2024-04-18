import { NavigateFunction } from "react-router-dom";
import {
  DeliveryType,
  getDeliveryProductOrders,
} from "../_service/deliveriesApi";
import "../DetailsDialog.css";
import { useEffect, useState } from "react";
import { ProductOrderType } from "../_service/productOrderApi";
import ProductOrderList from "../product-order/ProductOrderList";

export default function DeliveryDetails(props: {
  delivery: DeliveryType;
  nav: NavigateFunction;
}) {
  const { delivery, nav } = props;
  const [productOrders, setProductOrders] = useState<ProductOrderType[]>([]);

  useEffect(() => {
    async function fetchProductOrders() {
      try {
        const productOrdersRes = await getDeliveryProductOrders(
          delivery.id || 0
        );
        setProductOrders(productOrdersRes);
      } catch (error) {
        console.error("Error fetching product order from delivery:", delivery);
      }
    }
    fetchProductOrders();
  }, [setProductOrders, delivery]);

  if (delivery) {
    return (
      <dialog className="details-dialog" open={true}>
        <button
          onClick={() => {
            nav("/deliveries", { state: { dialogActive: false } });
          }}
        >
          Close
        </button>
        <table className="details-table">
          <tbody>
            <tr>
              <td>
                <strong>Date:</strong>
              </td>
              <td>{`${delivery.deliveryDate}`}</td>
            </tr>
            <tr>
              <td>
                <strong>Warehouse:</strong>
              </td>
              <td>{delivery.fromWarehouse}</td>
            </tr>
            <tr>
              <td>
                <strong>Destination:</strong>
              </td>
              <td>{delivery.destination}</td>
            </tr>
          </tbody>
        </table>
        <h3>Product Orders:</h3>
        <ProductOrderList productOrders={productOrders} />
      </dialog>
    );
  }
}
