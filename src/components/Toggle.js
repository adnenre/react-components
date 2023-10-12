import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Tooltip from './Tooltip';
import { Row, Col } from './grid';
import fake_data from '../fake-data';
const Toggle = ({ text, label, children, ...rest }) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);

  return (
    <>
      <Row>
        <Col $sm={2}>
          <Tooltip text={text} $right {...rest}>
            <Button $black onClick={toggle} label={label} {...rest} />
          </Tooltip>
        </Col>
      </Row>

      {active && children}
    </>
  );
};
Toggle.defaultProps = {
  text: fake_data.toggle.message,
  label: fake_data.toggle.label,
};
Toggle.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  label: PropTypes.string,
};
export default Toggle;
