import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SwitchContainer,
  SwitchInput,
  Slider,
  SwitchLabel,
} from './switch.styled.js';

const Switch = (props) => {
  const { label, labelOn, labelOff, onChange, checked, ...rest } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange();
  };
  return (
    <SwitchContainer {...rest}>
      {label ? (
        <SwitchLabel>{label}</SwitchLabel>
      ) : isChecked ? (
        <SwitchLabel>{labelOn}</SwitchLabel>
      ) : (
        <SwitchLabel>{labelOff}</SwitchLabel>
      )}
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
  labelOn: 'On',
  labelOff: 'Off',
};
Switch.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  labelOn: PropTypes.string,
  labelOff: PropTypes.string,
};
export default Switch;
