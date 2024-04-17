import { API_URL } from "../settings";
import { handleHttpErrors } from "./FetchUtils";

const URL = API_URL + "/deliveries";

interface Delivery {
  id: number | null;
  deliveryDate: Date | null;
  fromWarehouse: string;
  destination: string;
}

async function getDeliveries() {
  return await fetch(URL).then(handleHttpErrors);
}

export type { Delivery };
export { getDeliveries };
