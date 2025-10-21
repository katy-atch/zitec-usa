import { Col, Container, Row } from 'react-bootstrap';
import './about.css';
import founder from '../../assets/founder.png';
import colors from '../../utils/colors.ts';

export const About = () => (
  <>
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
    <div className="bg-light">
      <Container className="py-5">
        <h6 className="display-6 text-center" style={{ color: colors.primary }}>
          Our mission
        </h6>
        <p className="lead">
          At <strong>ZITEC</strong>, our mission is to empower the US military
          and its international allies by providing top-quality munitions
          support and state-of-the-art aircraft ground servicing equipment. We
          are dedicated to excellence, innovation, and unwavering reliability,
          ensuring that our partners have the resources they need to accomplish
          their critical missions effectively and safely.
        </p>
      </Container>
    </div>

    <div>
      <Container className="py-4">
        <h4 style={{ color: colors.primary }}>Who we are</h4>
        <p>
          <strong>ZITEC, Inc.</strong> is a small business specialized in the
          development, design, manufacturing, testing, installation,
          reconditioning and servicing of munitions support equipment,
          electronics, and aircraft ground servicing equipment. We provide
          on-site and hands on training for all our products. Our customer base
          includes the US Government, foreign military allies, and defense
          contractors.
        </p>
        <p>
          ZITEC is incorporated in the State of Florida as well as actively
          listed in the System for Award Management (SAM). ZITEC is certified by
          the United States/Canada Joint Joint Certification Office.
        </p>
        <h6>More details:</h6>
        <ul>
          <li>
            Officially founded in <strong>2002</strong>
          </li>
          <li>
            Classified as a <strong>U.S. Small Business</strong>
          </li>
          <li>
            Manufacturing cage code: <strong>1R9V9</strong>
          </li>
        </ul>
      </Container>
    </div>
    <div className="bg-light">
      <Container className="py-4">
        <Row style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Col
            sm={4}
            lg={3}
            xl={2}
            className="mb-3"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <img
              src={founder}
              style={{ width: '100%', height: 'auto ', maxWidth: '200px' }}
            />
          </Col>
          <Col
            sm={8}
            lg={9}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h6 style={{ color: colors.primary }}>Founder / CEO</h6>
            <h4 style={{ color: colors.primary }}>Daniel Mank</h4>
            <p>
              ZITEC's founder and president is <strong>Mr. Daniel Mank</strong>.
              As a US Air Force retiree, he proudly and honorably served over 20
              distinguished years as a munitions systems specialist. His vast
              experience in munitions support and aircraft ground servicing
              equipment, combined with his dedication to excellence, has been
              instrumental in establishing ZITEC as a trusted leader in the
              industry.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);
