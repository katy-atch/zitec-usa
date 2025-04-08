import { Col, Row } from 'react-bootstrap';
import './about.css';

export const About = () => (
  <div id="about-section">
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
          <h4 className="display-5 text-light">About Us</h4>
        </Col>
      </Row>
    </div>
  </div>
);
