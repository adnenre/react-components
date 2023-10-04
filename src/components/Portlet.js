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
`;
const PortletHeader = styled.div`
  border-bottom: solid 1px #eee;
  padding: 1rem 0;
  ${() => style.primary};
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
  padding: 1rem;
  border-top: solid 1px #eee;
  display: ${({ flex }) => {
    if (flex) return 'flex';
    return 'block';
  }};
  flex-direction: ${({ $flex, $flexColumn }) => {
    if ($flex) return 'row';
    if ($flexColumn) return 'column';
    return 'none';
  }};
  flex-wrap: wrap;
  justify-content: ${({ $center, $spaceBetween }) => {
    if ($center) return 'center';
    if ($spaceBetween) return 'space-between';
    return 'center';
  }};
`;

export { Portlet, PortletHeader, PortletBody, PortletFooter };

const PortletView = ({ title, content }) => {
  return (
    <Portlet>
      <PortletHeader>
        <Title>{title}</Title>
      </PortletHeader>
      <PortletBody $flex>{content}</PortletBody>
    </Portlet>
  );
};

PortletView.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
};

export default PortletView;
