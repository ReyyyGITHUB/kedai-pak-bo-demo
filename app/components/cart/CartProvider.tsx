"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, CartState } from "./cartTypes";

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "kedai_pak_bo_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CartState>({ items: [] });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (item: Omit<CartItem, "qty">) => {
      setState((prev) => {
        const existing = prev.items.find((i) => i.id === item.id);
        if (existing) {
          return {
            items: prev.items.map((i) =>
              i.id === item.id ? { ...i, qty: i.qty + 1 } : i
            ),
          };
        }
        return { items: [...prev.items, { ...item, qty: 1 }] };
      });
    };

    const removeItem = (id: string) => {
      setState((prev) => ({ items: prev.items.filter((i) => i.id !== id) }));
    };

    const setQty = (id: string, qty: number) => {
      setState((prev) => {
        if (qty <= 0) {
          return { items: prev.items.filter((i) => i.id !== id) };
        }
        return {
          items: prev.items.map((i) => (i.id === id ? { ...i, qty } : i)),
        };
      });
    };

    const clear = () => setState({ items: [] });

    return { items: state.items, addItem, removeItem, setQty, clear };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
