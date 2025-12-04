import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "AI Content Generator",
      description: "Platform berbasis AI untuk membuat konten marketing otomatis.",
      image: "https://via.placeholder.com/300x200?text=Project+1" 
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "Dashboard admin untuk memantau penjualan dan stok barang.",
      image: "https://via.placeholder.com/300x200?text=Project+2"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Website portofolio pribadi menggunakan React dan Bootstrap.",
      image: "https://via.placeholder.com/300x200?text=Project+3"
    }
  ];

  return (
    <div className="py-5" style={{ minHeight: '100vh' }}>
      <Container>
        <h2 className="fw-bold mb-4 text-white">My <span className="text-danger">Projects</span></h2>
        <Row>
          {projectList.map((project) => (
            <Col key={project.id} md={4} className="mb-4">
              <Card className="h-100 bg-dark text-white border-secondary">
                <Card.Img variant="top" src={project.image} style={{ opacity: 0.8 }} />
                <Card.Body>
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-secondary">
                    {project.description}
                  </Card.Text>
                  <Button variant="primary" className="mt-2" style={{ backgroundColor: '#5c4dff', border: 'none' }}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;