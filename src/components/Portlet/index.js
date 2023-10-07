import React from 'react';
import PropTypes from 'prop-types';
import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
  Title,
} from './Portlet.Styled';

const PortletView = ({ title, content, footer }) => {
  return (
    <Portlet>
      <PortletHeader>
        <Title>{title}</Title>
      </PortletHeader>
      <PortletBody>{content}</PortletBody>
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
