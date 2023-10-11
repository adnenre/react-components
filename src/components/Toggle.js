import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Tooltip from './Tooltip';
import { Row, Col } from './grid';

const Toggle = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive(!active);

  return (
    <>
      <Row>
        <Col sm={2}>
          <Tooltip text="Click here to show code" $right>
            <Button $black onClick={toggle} label="VIEW CODE" />
          </Tooltip>
        </Col>
      </Row>

      {active && children}
    </>
  );
};
Toggle.propTypes = {
  children: PropTypes.node,
};
export default Toggle;
