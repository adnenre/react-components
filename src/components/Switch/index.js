import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SwitchContainer,
  SwitchInput,
  Slider,
  SwitchLabel,
} from './switch.styled.js';

const Switch = (props) => {
  const { label, onChange, checked, ...rest } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange();
  };
  return (
    <SwitchContainer {...rest}>
      <SwitchLabel>{label}</SwitchLabel>
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <Slider className="slider" $isChecked={isChecked} />
    </SwitchContainer>
  );
};

Switch.defaultProps = {
  checked: false,
};
Switch.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};
export default Switch;
