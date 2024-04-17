import { API_URL } from "../settings";
import { handleHttpErrors, makeOptions } from "./FetchUtils";

const DELIVERY_URL = API_URL + "/deliveries";

interface DeliveryType {
  id: number | null;
  deliveryDate: Date | null;
  fromWarehouse: string;
  destination: string;
}

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

async function getDeliveryProducts() {}

export type { DeliveryType };
export { getDeliveries, getDeliveryProducts, createDelivery };
