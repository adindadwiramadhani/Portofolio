import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BsCheckCircleFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="dark-section">
      <Container>
        {/* Bagian Hero (Create Engaging Content) */}
        <Row className="text-center align-items-center mb-5">
          <Col md={10} className="mx-auto">
            <h1 className="display-4 fw-bolder mb-3" style={{ lineHeight: '1.2' }}>
              Create <span className="text-gradient">Technical Portfolios</span> with Impact in Minutes
            </h1>
            <p className="lead text-secondary mb-4">
              I am a Technical Enthusiast specializing in Data Science. Explore my work below.
            </p>
            <div>
              <Button variant="primary" size="lg" className="me-3 fw-bold" style={{ backgroundColor: '#5c4dff', borderColor: '#5c4dff' }}>
                Start Project Review
              </Button>
              <Button variant="outline-light" size="lg" className="fw-bold">
                View Plans
              </Button>
            </div>
            {/* Placeholder untuk Gambar Utama / Video Mockup */}
            <div className="mt-5 border border-secondary p-3 rounded-4" style={{ backgroundColor: '#161b22' }}>
                {/*  */}
                <p className="text-muted mb-0 py-5">
                    *Placeholder Mockup Interface*
                </p>
            </div>
          </Col>
        </Row>

        {/* --- Separator --- */}
        <hr className="my-5 border-secondary" />

        {/* Bagian Analyze Competitors / Uncover Opportunities */}
        <Row className="align-items-center mt-5">
            <Col md={6}>
                <h2 className="fw-bold mb-3">
                    Analyze Projects, <br />
                    <span className="text-gradient">-Uncover Hidden Opportunities.</span>
                </h2>
                <p className="lead text-secondary mb-4">
                    Easily identify *skills gaps*, define *learning roadmap*, and choose the most effective **tech stack** to build your next innovative project.
                </p>
                <ul className="list-unstyled">
                    <li className="mb-2"><BsCheckCircleFill className="text-success me-2" /> Performance review.</li>
                    <li className="mb-2"><BsCheckCircleFill className="text-success me-2" /> Objectives and goal setting.</li>
                    <li className="mb-2"><BsCheckCircleFill className="text-success me-2" /> Project planning.</li>
                </ul>
            </Col>
            <Col md={6}>
                {/* Placeholder untuk Grafik */}
                <Card className="bg-dark border-secondary p-3">
                    {/*  */}
                    <Card.Body className="text-center py-5">
                        <p className="text-muted">
                            *Placeholder Grafik Analisis Proyek*
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;