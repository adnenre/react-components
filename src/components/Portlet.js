import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import Title from './Title';
const style = {
  primary: `
      background:${theme.colors.$primary};
      color:white !important; 
    `,
};
const Portlet = styled.div`
  background: white;
  box-shadow: 0 0 20px 1px #bec0c2;
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: auto;
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

export { Portlet, PortletHeader, PortletBody, PortletFooter };

const PortletView = ({ title, content, footer }) => {
  return (
    <Portlet>
      <PortletHeader>
        <Title>{title}</Title>
      </PortletHeader>
      <PortletBody $flex>{content}</PortletBody>
      <PortletFooter>{footer}</PortletFooter>
    </Portlet>
  );
};

PortletView.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  footer: PropTypes.node,
};

export default PortletView;
