import CardPizzas from "../components/CardPizzas";

const Home = () => {
  return (
    <>
      <header
        style={{
          background: "#3f51b5",
          color: "white",
          padding: "20px",
         
        }}
      >
        <h1>Pizzería Mamma Mía!</h1>
        <p>
          Tenemos las mejores Pizzas{" "}
          <img
            width="80rem"
            src="src/assets/img/images.jpeg"
            alt="foto header"
          />
        </p>
      </header>
      
      <section >
        <article>
          <CardPizzas />
        </article>
      </section>
    </>
  );
};

export default Home;
