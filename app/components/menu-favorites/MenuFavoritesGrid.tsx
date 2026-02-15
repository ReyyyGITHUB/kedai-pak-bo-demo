import MenuFavoritesCard from "./MenuFavoritesCard";
import { menuItems } from "./menuFavoritesData";

export default function MenuFavoritesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {menuItems.map((item) => (
        <MenuFavoritesCard key={item.id} item={item} />
      ))}
    </div>
  );
}
