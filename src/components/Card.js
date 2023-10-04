import styled from 'styled-components';
import theme from '../theme';
const Card = styled.div`
  box-shadow: 0 0 20px 1px #bec0c2;
  background: white;
  overflow: hidden;
`;
const CardHeader = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
  border-bottom: solid 1px #eee;
  color: ${theme.colors.$black};
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
  color: ${theme.colors.$black};
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export { Card, CardHeader, CardBody, CardFooter };
