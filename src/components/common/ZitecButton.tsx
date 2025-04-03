import { Button } from 'react-bootstrap';

export const ZitecButton = (props: { children: string }) => (
  <Button
    size="lg"
    className="mt-3"
    style={{
      width: 150,
      backgroundColor: '#122289',
      borderColor: '#122289',
      borderRadius: 0,
    }}
  >
    {props.children}
  </Button>
);
