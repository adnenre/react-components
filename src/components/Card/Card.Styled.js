import styled from 'styled-components';
import theme from '../../theme';
const CardContainer = styled.div`
  box-shadow: 0 0 20px 1px #bec0c2;
  background: white;
  overflow: hidden;
  border-radius: ${({ $pill, $rounded }) => {
    if ($pill) return theme.borderRadius.$pill;
    if ($rounded) return theme.borderRadius.$rounded;
    return theme.borderRadius.$default;
  }};
`;
const CardHeader = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
  border-bottom: solid 1px ${theme.colors.$grayLight};
  color: ${theme.colors.$black};
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
  color: ${theme.colors.$black};
`;
const CardFooter = styled.div`
  border-top: solid 1px ${theme.colors.$grayLight};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export { CardContainer, CardHeader, CardBody, CardFooter };
