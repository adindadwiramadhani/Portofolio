import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="fw-bold mb-4 text-white text-center">Get in <span className="text-info">Touch</span></h2>
            <Form className="p-4 rounded border border-secondary" style={{ backgroundColor: '#161b22' }}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="text-white">Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" className="bg-dark text-white border-secondary" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" className="bg-dark text-white border-secondary" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label className="text-white">Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Type your message here..." className="bg-dark text-white border-secondary" />
              </Form.Group>

              <Button variant="primary" type="submit" size="lg" className="w-100 fw-bold" style={{ backgroundColor: '#5c4dff', border: 'none' }}>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;