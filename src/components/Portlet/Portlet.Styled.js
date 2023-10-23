import styled from 'styled-components';
import theme from '../../theme';
import { getProperty } from '../utility';

const style = {
  primary: `
      background:${theme.color.$primary};
      color:white !important; 
    `,
};

const Title = styled.h5`
  font-size: 1.5rem;
  text-align: center;
  ${(props) => getProperty('color', props)}
`;
const Portlet = styled.div`
  background: white;
  box-shadow: 0 0 20px 1px #bec0c2;
  border-radius: 4px;
  margin-bottom: 1rem;
`;
const PortletHeader = styled.div`
  border-bottom: ${theme.border.thin} ${theme.color.$grayLight};
  padding: 0.5rem 0;
  ${() => style.primary};
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PortletBody = styled.div`
  padding: 2rem;
  display: ${({ $flex }) => {
    if ($flex) return 'flex';
    return 'block';
  }};
  flex-direction: ${({ $flex, $flexColumn }) => {
    if ($flex) return 'row';
    if ($flexColumn) return 'column';
    return 'none';
  }};
  flex-wrap: wrap;
`;
const PortletFooter = styled.div`
  padding: 0.5rem 1rem;
  border-top: ${theme.border.thin} ${theme.color.$grayLight};
  display: ${({ flex }) => {
    if (flex) return 'flex';
    return 'flex';
  }};
  flex-direction: ${({ $flex, $flexColumn }) => {
    if ($flex) return 'row';
    if ($flexColumn) return 'column';
    return 'column';
  }};
  flex-wrap: wrap;
  justify-content: ${({ $center, $spaceBetween }) => {
    if ($center) return 'center';
    if ($spaceBetween) return 'space-between';
    return 'left';
  }};
  overflow: auto;
  text-align: left;
`;

export { Title, Portlet, PortletHeader, PortletBody, PortletFooter };
