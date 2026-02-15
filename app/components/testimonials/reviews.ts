export type Review = {
  quote: string;
  name: string;
  platform: string;
  color: string;
  rotate: string;
};

// Data dummy dengan variasi rotasi & warna background biar "organik"
export const reviews: Review[] = [
  {
    quote: "Nasi gila beneran gila, porsinya brutal!",
    name: "Budi_01",
    platform: "Gofood",
    color: "bg-yellow-50",
    rotate: "rotate-1",
  },
  {
    quote: "Bakminya smokey banget, wangi wajan!",
    name: "Siti_Makan",
    platform: "Google Review",
    color: "bg-white",
    rotate: "-rotate-2",
  },
  {
    quote: "Pedasnya nampol, level 3 masih nambah.",
    name: "Joko_Wow",
    platform: "ShopeeFood",
    color: "bg-orange-50",
    rotate: "rotate-2",
  },
  {
    quote: "Nasi goreng spesialnya legit, nagih.",
    name: "Rina_Kuliner",
    platform: "GrabFood",
    color: "bg-blue-50",
    rotate: "-rotate-1",
  },
  {
    quote: "Harga masuk akal, rasa di atasnya.",
    name: "DimasLaper",
    platform: "Google Review",
    color: "bg-green-50",
    rotate: "rotate-3",
  },
  {
    quote: "Bumbu medok, cocok buat pecinta gurih.",
    name: "RaraPedes",
    platform: "Gofood",
    color: "bg-white",
    rotate: "-rotate-3",
  },
];
