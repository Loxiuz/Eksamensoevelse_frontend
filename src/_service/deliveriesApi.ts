interface Delivery {
  id: number | null;
  deliveryDate: Date | null;
  fromWarehouse: string;
  destination: string;
}

export type { Delivery };
