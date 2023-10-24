import React from "react";
import { useContext } from "react";
import { ContextPizza } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardPizzas = () => {
  const { pizzasData, addToCart  } = useContext(ContextPizza);
  const navigate = useNavigate();


  if (!pizzasData) {
    return <div>No se encontraron datos de pizzas.</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pizzasData.map((pizza, i) => (
        <Card
          key={i}
          style={{ width: "25rem" }}
          className="mx-auto shadow-lg p-3 mb-5 bg-dark rounded text-white"
        >
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>{pizza.ingredients.join(", ")}</Card.Text>
            <Card.Text>Precio: $ {pizza.price}</Card.Text>
            <Button
              variant="primary" 
              onClick={() => {
                navigate(`/Pizza/${pizza.id}`);
              }}
            >
              Más información
            </Button>
            <Button
              variant="primary" 
              onClick={() => 
                addToCart(pizza)
              }
            >
              Añadir al carrito🛒
            </Button>
          </Card.Body>

        </Card>
      ))}
    </div>
  );
};

export default CardPizzas;
