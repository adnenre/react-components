import styled from 'styled-components';
import theme from '../../theme';
import { getProperty } from '../utility';

const SwitchContainer = styled.label`
  display: flex;
  min-width: 50px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  > input {
    &:checked + .slider {
      ${(props) => getProperty('background', props)};
    }

    &:checked + .slider:before {
      transform: translateX(20px);
    }
  }
`;

const SwitchLabel = styled.span`
  font-size: 0.75rem;
  margin-right: 10px;
  color: ${theme.color.$darkBlue10};
`;

const SwitchInput = styled.input`
  display: none;
`;

const Slider = styled.span`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 20px;

  &:before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.2s;
  }
`;

export { SwitchContainer, Slider, SwitchInput, SwitchLabel };
