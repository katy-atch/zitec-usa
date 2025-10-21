import { Button } from 'react-bootstrap';
import './common.css';

export const ZitecButton = (props: {
  style: React.CSSProperties,
  onClick: () => void;
  children: string;
  size?: 'sm' | 'lg'
}) => (
  <Button size={props.size || 'lg'} className="mt-3" id="zitec-button" onClick={props.onClick} style={{ ...props.style }}>
    {props.children}
  </Button>
);
