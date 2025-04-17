import { Col, Row } from 'react-bootstrap';
import './common.css';

export const Footer = () => (
  <footer
    id="footer"
    className="text-center p-4 bg-light"
    style={{ width: '100%' }}
  >
    <div>
      <Row>
        <Col xs={{ order: 'last' }} sm={{ order: 'first' }}>
          <p className="mb-0 small">
            Copyright &copy; ZITEC 2025. All Rights Reserved.
          </p>
        </Col>
        <Col xs={12} sm={6}>
          <p className="mb-0 small">
            1031 Partin Drive North Niceville, Florida 32578
          </p>
        </Col>
      </Row>
    </div>
  </footer>
);
