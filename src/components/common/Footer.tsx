import { Col, Container, Row } from 'react-bootstrap';
import './common.css';

export const Footer = () => (
  <footer id="footer" className="text-center p-4 bg-light">
    <Container>
      <Row>
        <Col>
          <p className="mb-0 small">
            Copyright &copy; Zitec 2025. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);
