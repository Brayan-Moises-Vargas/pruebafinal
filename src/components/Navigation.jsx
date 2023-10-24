import { NavLink } from "react-router-dom";
import Container from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Navigation = () => {
  const setActive = ({ isActive }) => (isActive ? "activo" : undefined);
  return (
    <Navbar
      className="d-flex justify-content-between px-5 py-3 Navegation"
      variant="light"
      style={{ background: "Red" }}
    >
      <Container>
        <div>
          <Navbar.Brand className="navegation">
            <NavLink
              style={{ textDecoration: "none" }}
              to="/"
              className={setActive}
            >
              Pizzeria Mamma Mia🍕
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/Cart"
              className={setActive}
            >
              🛒
            </NavLink>
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navigation;
