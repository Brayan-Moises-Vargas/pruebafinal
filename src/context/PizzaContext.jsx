import { createContext,  useState } from "react";
import {pizzas} from "../pizza"
export const ContextPizza = createContext();
const Url = "./pizza.json"

const PizzaProvider = ({ children }) => {
  const [pizzasData, setPizzasData] = useState(pizzas);
  console.log(pizzas);
  const [cart, setCart] = useState([]); // Estado para el carrito

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);

    if (existingPizza) {
      // Si la pizza ya está en el carrito, incrementa la cantidad en 1
      const updatedCart = cart.map((item) => {
        if (item.id === pizza.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // Si la pizza no está en el carrito, agrégala con cantidad 1
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };
  const removeFromCart = (pizzaId) => {
    const updatedCart = cart.filter((item) => item.id !== pizzaId);
    setCart(updatedCart);
  };


  return (
    <>
      <ContextPizza.Provider value={{ pizzasData, setPizzasData, addToCart,removeFromCart}}>
        {children}
      </ContextPizza.Provider>
    </>
  );
};
export default PizzaProvider;
