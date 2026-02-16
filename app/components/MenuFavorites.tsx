"use client";

import React from "react";
import MenuFavoritesGrid from "./menu-favorites/MenuFavoritesGrid";
import MenuFavoritesHeader from "./menu-favorites/MenuFavoritesHeader";
import MenuFavoritesMobileCTA from "./menu-favorites/MenuFavoritesMobileCTA";

export default function MenuFavorites() {
  return (
    <section id="menu-best-seller" className="relative bg-[#F3F0EA] text-[#1A1A1A] px-5 md:px-12 py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-orange-200/50 rounded-full blur-3xl -z-10"></div>

      <MenuFavoritesHeader />
      <MenuFavoritesGrid />
      <MenuFavoritesMobileCTA />
    </section>
  );
}
