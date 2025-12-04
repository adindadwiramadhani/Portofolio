import { Container, ListGroup, Badge } from 'react-bootstrap';

function Certificates() {
  return (
    <div className="py-5">
      <Container>
        <h2 className="fw-bold mb-4 text-white">Certificates & <span className="text-warning">Achievements</span></h2>
        
        <ListGroup className="bg-transparent">
          <ListGroup.Item className="bg-dark text-white border-secondary mb-3 p-4 rounded d-flex justify-content-between align-items-center">
            <div>
              <h4 className="fw-bold mb-1">React Developer Certification</h4>
              <p className="mb-0 text-secondary">HackerRank - 2023</p>
            </div>
            <Badge bg="success" pill>Verified</Badge>
          </ListGroup.Item>

          <ListGroup.Item className="bg-dark text-white border-secondary mb-3 p-4 rounded d-flex justify-content-between align-items-center">
            <div>
              <h4 className="fw-bold mb-1">Full Stack Web Development</h4>
              <p className="mb-0 text-secondary">Bootcamp Indonesia - 2022</p>
            </div>
            <Badge bg="success" pill>Verified</Badge>
          </ListGroup.Item>

          <ListGroup.Item className="bg-dark text-white border-secondary mb-3 p-4 rounded d-flex justify-content-between align-items-center">
            <div>
              <h4 className="fw-bold mb-1">AWS Cloud Practitioner</h4>
              <p className="mb-0 text-secondary">Amazon Web Services - 2024</p>
            </div>
            <Badge bg="warning" text="dark" pill>Pending</Badge>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

export default Certificates;