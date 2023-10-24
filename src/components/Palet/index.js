import React, { useEffect, useRef, useState } from 'react';
import {
  PaletCode,
  PaletBox,
  PaletContainer,
  PaletWrapper,
} from './Palet.Styled';
import theme from '../../assets/theme/base';
import Tooltip from '../Tooltip';

const colors = Object.values(theme.colors);
const tooltipText = 'Click to Copie !';
const Palet = () => {
  const [text, setText] = useState(tooltipText);
  const [copiedText, setCopiedText] = useState('');
  const inputRef = useRef(null);

  const copyToClipboard = (e) => {
    inputRef.current.value = e.target.textContent;
    inputRef.current.select();
    document.execCommand('copy');
    setText('Copied !');
    setCopiedText(e.target.textContent);
  };
  const checkIsCopied = (e) => {
    if (e.target.textContent !== copiedText) {
      setText(tooltipText);
    } else {
      setText('Copied !');
    }
  };

  if (colors.length) {
    return (
      <>
        <input
          ref={inputRef}
          disabled
          style={{ zIndex: '-999999', opacity: 0 }}
        />

        <PaletWrapper>
          {colors.map((c) => (
            <PaletContainer key={c}>
              <Tooltip text={text} $top>
                <PaletBox
                  onClick={copyToClipboard}
                  onMouseEnter={checkIsCopied}
                  $color={c}
                >
                  <PaletCode> {c.toLowerCase()}</PaletCode>
                </PaletBox>
              </Tooltip>
            </PaletContainer>
          ))}
        </PaletWrapper>
      </>
    );
  }
  return null;
};

export default Palet;
