import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
function ColorSchemesExample() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <div className="d-flex align-items-center"> 
            <CartWidget />
            <Navbar.Brand href="#home">Ventas de Celulares</Navbar.Brand>
          </div>
          <Nav className="me-auto">
            <Nav.Link href="#">inicio</Nav.Link>
            <Nav.Link href="#">sobre nosotros</Nav.Link>
            <Nav.Link href="#">contactanos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;