import { API_URL } from "../settings";
import { handleHttpErrors, makeOptions } from "./FetchUtils";

const DELIVERY_URL = API_URL + "/deliveries";

interface DeliveryType {
  id: number | null;
  deliveryDate: Date | null;
  fromWarehouse: string;
  destination: string;
}

const EMPTY_DELIVERY = {
  id: null,
  deliveryDate: null,
  fromWarehouse: "",
  destination: "",
};

async function getDeliveries() {
  return await fetch(DELIVERY_URL).then(handleHttpErrors);
}

async function createDelivery(
  newDelivery: DeliveryType
): Promise<DeliveryType> {
  const method = newDelivery.id ? "PUT" : "POST";
  const options = makeOptions(method, newDelivery);
  const URL = newDelivery.id
    ? `${DELIVERY_URL}/${newDelivery.id}`
    : DELIVERY_URL;
  return fetch(URL, options).then(handleHttpErrors);
}

async function getDeliveryProductOrders(id: number) {
  return await fetch(`${DELIVERY_URL}/${id}/orders`).then(handleHttpErrors);
}

export type { DeliveryType };
export {
  getDeliveries,
  getDeliveryProductOrders,
  createDelivery,
  EMPTY_DELIVERY,
};
