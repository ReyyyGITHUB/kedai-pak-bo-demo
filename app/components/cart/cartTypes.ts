export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

export type CartState = {
  items: CartItem[];
};

export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export const calcTotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.qty, 0);
