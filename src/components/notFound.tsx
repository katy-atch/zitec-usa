import { Col, Row } from 'react-bootstrap';
import { ZitecButton } from './common/ZitecButton';

export const NotFound = () => (
  <Row className="justify-content-center my-5">
    <Col md={6} className="text-center">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">
        Sorry, the page you are looking for does not exist.
      </p>
      <ZitecButton
        onClick={() => {
          window.location.href = '/';
        }}
      >
        Go to Home
      </ZitecButton>
    </Col>
  </Row>
);
