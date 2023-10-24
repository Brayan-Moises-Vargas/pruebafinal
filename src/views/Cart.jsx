import { useContext } from "react";
import { ContextPizza } from "../context/PizzaContext";
import { Button } from "react-bootstrap";

function Cart() {
  const { cart, removeFromCart, addToCard } = useContext(ContextPizza); // Obtén el carrito y la función para eliminar elementos del carrito desde el contexto

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.img} - {item.name} - ${item.price} 
            <Button onClick={() => addToCard(item)}></Button>
            (Cantidad: {item.quantity})
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>
        Total a pagar: $
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </p>
    </div>
  );
}

export default Cart;
