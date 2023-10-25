import styled from 'styled-components';
import theme from '../../theme';
import { getProperty } from '../utility';
const CardContainer = styled.div`
  ${(props) => getProperty('border-radius', props)};
  box-shadow:
    rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
    rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem;
  background: white;
  overflow: hidden;

  transition: all 0.3s;
  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
      rgba(0, 0, 0, 0.4) 0rem 0.5rem 0.5rem -0.5rem;
  }
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
  letter-spacing: 0.5px;

  border-bottom: ${theme.border.thin} ${theme.color.$gray2};
  color: ${theme.color.$black};
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem;
  text-align: left;
  color: ${theme.color.$black};
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: ${theme.color.$gray};
  letter-spacing: 1px;
`;
const CardFooter = styled.div`
  border-top: ${theme.border.thin} ${theme.color.$gray2};
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
`;

export { CardContainer, CardHeader, CardBody, CardFooter };
