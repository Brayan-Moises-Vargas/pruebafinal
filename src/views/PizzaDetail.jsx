
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextPizza } from "../context/PizzaContext";
import { Card, Button } from "react-bootstrap";

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzasData } = useContext(ContextPizza);
  const navigate = useNavigate();

  const detailPizza = pizzasData.find((pizza) => pizza.id === id);

  if (!detailPizza) {
    

    return (
      <div>
        <h3>No se encontró la pizza con el ID {id}</h3>
        <Button onClick={() => navigate("/")}>Regresar al menú</Button>
      </div>
    );
  }

  return (
    <div>
      <Card style={{ width: "25rem" }} className="mx-auto shadow-lg p-3 mb-5 bg-dark rounded text-white">
        <Card.Img variant="top" src={detailPizza.img} />
        <article>
          <Card.Body>
            <h2>{detailPizza.name}</h2>
            <Card.Text>Descripción</Card.Text>
            <p className="descripcion">{detailPizza.desc}</p>
          </Card.Body>
        </article>
        <section>
          <span>Precio: ${detailPizza.price}</span>
          <br />
          <Button onClick={() => navigate("/")}>Regresar al menú</Button>
          {/*<Button onClick={()=> navigate("/")}>añadir 🛒</Button> */}
        </section>
      </Card>
    </div>
  );
};

export default PizzaDetail;
