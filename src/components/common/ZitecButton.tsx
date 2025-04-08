import { Button } from 'react-bootstrap';
import './common.css';

export const ZitecButton = (props: {
  onClick: () => void;
  children: string;
}) => (
  <Button size="lg" className="mt-3" id="zitec-button" onClick={props.onClick}>
    {props.children}
  </Button>
);
