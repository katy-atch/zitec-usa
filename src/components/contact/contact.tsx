import { Col, Row } from 'react-bootstrap';
import './contact.css';

export const Contact = () => (
  <div id="contact-section">
    <div className="dark-overlay" style={{ display: 'flex' }}>
      <Row>
        <Col
          className="m-5"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
          }}
        >
          <h4 className="display-5 text-light">Contact Us</h4>
          <h6 className="text-light lead">
            Reach out to us directly for more information about our services and
            pricing.
          </h6>
        </Col>
      </Row>
    </div>
  </div>
);
