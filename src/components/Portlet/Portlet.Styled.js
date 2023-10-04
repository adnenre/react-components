import styled from 'styled-components';
import theme from '../../theme';

const style = {
  primary: `
      background:${theme.colors.$primary};
      color:white !important; 
    `,
};

const Title = styled.h5`
  font-size: 1.5rem;
  color: ${({ $primary, $info, $danger, $warning, $success, $black }) => {
    if ($primary) return theme.colors.$primary;
    if ($info) return theme.colors.$$info;
    if ($danger) return theme.colors.$$danger;
    if ($warning) return theme.colors.$$warning;
    if ($success) return theme.colors.$$success;
    if ($black) return theme.colors.$$black;

    return theme.colors.$white;
  }};
`;
const Portlet = styled.div`
  background: white;
  box-shadow: 0 0 20px 1px #bec0c2;
  border-radius: 4px;
  margin-bottom: 1rem;
`;
const PortletHeader = styled.div`
  border-bottom: solid 1px #eee;
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
  padding: 0.5rem 2rem;
  border-top: solid 1px #eee;
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
`;

export { Title, Portlet, PortletHeader, PortletBody, PortletFooter };
