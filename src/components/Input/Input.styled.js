import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
const SInputwrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1%;
  opacity: ${({ $type }) => ($type === 'hidden' ? 0 : 1)};
  & > div {
    ${({ $type }) => {
      if (['checkbox', 'radio'].includes($type)) {
        return `border : solid 1px transparent;
                padding: 0;
                display: flex;
                margin:0;
                > input{
                    margin-left:1rem;
                    width:1.2rem;

                }
                `;
      }
      if (['color', 'range'].includes($type)) {
        return `border : solid 1px transparent;
                padding: 0;
                display: flex;
                margin:0;
                > input{
                    margin-left:1rem;
                }
                `;
      }
      if (['submit'].includes($type)) {
        return `border : solid 1px transparent;
                padding: 0;
                display: flex;
                margin:0;
                > label{
                    opacity:0;
                }
               
                `;
      }
    }};
  }
  ${({ $type }) => {
    if (['range', 'color', 'checkbox', 'radio'].includes($type)) {
      return `  
                align-items:center;
                justify-content:center;
                flex-direction: row;
                `;
    }
  }};
`;

const SInputContainer = styled.div`
  width: 100%;
  margin-top: 4px;
  border: 1px solid #acacaf;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: ${({ $selected }) =>
    $selected
      ? `solid 1px ${theme.color.$primary}`
      : `solid 1px ${theme.color.$gray}`};
  align-items: center;
  padding: 6px 18px;
  color: ${theme.color.$black};
`;

const SInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  min-height: 25px;
  font-size: 1rem;
  color: ${theme.color.$gray};
  cursor: pointer;
  &[type='submit'],
  &[type='button'] {
    background-color: ${theme.color.$darkBlue10};
    color: white;
    border-radius: ${theme['border-radius'].$rounded};
    padding: 0.5rem 1rem;
  }
`;
const SInputLabel = styled.label`
  cursor: pointer;
  font-size: 0.8rem;
  color: ${({ $selected }) =>
    $selected ? `${theme.color.$primary}` : `${theme.color.$gray}`};
`;

export { SInputwrapper, SInputContainer, SInput, SInputLabel };
