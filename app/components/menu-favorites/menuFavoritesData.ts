export type MenuItem = {
  id: number;
  name: string;
  desc: string;
  price: string;
  priceValue: number;
  img: string;
  isBestSeller: boolean;
  spicyLevel: number;
};

// Data dummy: sesuaikan dengan menu asli jika sudah ada
export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    desc: "Topping telur, ayam suwir melimpah, dan acar segar.",
    price: "Rp 18.000",
    priceValue: 18000,
    img: "/images/pak-bo.png",
    isBestSeller: true,
    spicyLevel: 1,
  },
  {
    id: 2,
    name: "Bakmi Goreng Jawa",
    desc: "Aroma smokey khas wajan baja, manis gurih legit.",
    price: "Rp 17.000",
    priceValue: 17000,
    img: "/images/pak-bo.png",
    isBestSeller: true,
    spicyLevel: 0,
  },
  {
    id: 3,
    name: "Nasi Goreng Gila",
    desc: "Pedas nampol dengan sosis & bakso tumis mercon.",
    price: "Rp 19.000",
    priceValue: 19000,
    img: "/images/pak-bo.png",
    isBestSeller: true,
    spicyLevel: 3,
  },
  {
    id: 4,
    name: "Bakmi Godog Kental",
    desc: "Kuah telur bebek creamy, hangat dan menenangkan.",
    price: "Rp 16.000",
    priceValue: 16000,
    img: "/images/pak-bo.png",
    isBestSeller: true,
    spicyLevel: 1,
  },
];
