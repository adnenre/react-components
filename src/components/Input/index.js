import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  SInput,
  SInputContainer,
  SInputwrapper,
  SInputLabel,
} from './Input.styled.js';

const Input = (props) => {
  const { placeholder, onChange, label, required, name, type, ...rest } = props;
  const [selected, setSelected] = useState(false);
  const InputRef = useRef(null);

  const handleClick = () => {
    setSelected(true);
    InputRef.current.focus();
  };
  const handleBlure = () => {
    setSelected(false);
    InputRef.current.blur();
  };

  return (
    <SInputwrapper onClick={handleClick} onBlur={handleBlure} $type={type}>
      <SInputLabel $selected={selected} htmlFor={name}>
        {label} {required ? '*' : ''}
      </SInputLabel>
      <SInputContainer $selected={selected}>
        <SInput
          placeholder={placeholder || label}
          onChange={onChange}
          ref={InputRef}
          name={name}
          type={type}
          required={required}
          {...rest}
        />
      </SInputContainer>
    </SInputwrapper>
  );
};
Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'password',
    'number',
    'email',
    'url',
    'tel',
    'date',
    'time',
    'datetime-local',
    'color',
    'range',
    'hidden',
    'file',
    'search',
    'submit',
    'reset',
    'button',
    'month',
    'week',
    'time',
    'checkbox',
    'radio',
  ]),
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
export default Input;
