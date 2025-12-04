import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Perhatikan: Nama fungsinya kita ganti jadi AppNavbar
function AppNavbar() {
  return (
    <Navbar variant="dark" expand="lg" className="py-3" style={{ backgroundColor: '#0d1117' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <span className="text-gradient">Technical</span> Enthusiast
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/certificates">Certificates</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Button variant="primary" className="fw-bold" style={{ backgroundColor: '#5c4dff', borderColor: '#5c4dff' }}>
            Hire Me
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;