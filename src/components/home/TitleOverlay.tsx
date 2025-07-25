import { Col, Row } from 'react-bootstrap';
import './home.css';
import { ZitecButton } from '../common/ZitecButton';
import { useNavigate } from 'react-router';

export const TitleOverlay = () => {
  const navigate = useNavigate();

  return (
    <div id="home-section">
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
            <h4 className="display-5 text-light">
              A global leader in aircraft and munitions service
            </h4>
            <h6 className="text-light lead">
              We provide a comprehensive range of munitions support and aircraft
              ground servicing equipment to the US military and its
              international allies.
            </h6>
            <ZitecButton onClick={() => navigate('/zitec-usa/about')}>
              Learn More
            </ZitecButton>
          </Col>
        </Row>
      </div>
    </div>
  );
};
