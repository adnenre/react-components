import styled from 'styled-components';
import theme from '../../theme';
const CardContainer = styled.div`
  box-shadow:
    rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
    rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem;
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
  font-size: 1.25rem;

  line-height: 1.375;
  font-weight: 500;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: ${theme.colors.gray};
  letter-spacing: 0.5px;

  border-bottom: ${theme.border.thin} ${theme.colors.$grayLight};
  color: ${theme.colors.$black};
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
  color: ${theme.colors.$black};
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: ${theme.colors.$gray};
  letter-spacing: 1px;
`;
const CardFooter = styled.div`
  border-top: ${theme.border.thin} ${theme.colors.$grayLight};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export { CardContainer, CardHeader, CardBody, CardFooter };
