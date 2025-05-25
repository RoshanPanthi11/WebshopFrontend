"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Type for a product
type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  [key: string]: any;
};

// Cart item extends product with quantity
type CartItem = Product & {
  quantity: number;
};

// App context value type
interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, action: "increase" | "decrease") => void;
  clearCart: () => void;
  getCartCount: () => number;
}

// Create context with default value cast to AppContextType
const AppContext = createContext<AppContextType>({} as AppContextType);

// Props for AppProvider
interface AppProviderProps {
  children: ReactNode;
}

// AppProvider component
export const AppProvider = ({ children }: AppProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product): void => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number): void => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, action: "increase" | "decrease"): void => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const clearCart = (): void => {
    setCart([]);
  };

  const getCartCount = (): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  return useContext(AppContext);
};
