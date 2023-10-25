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
    let cCode = e.target.dataset.value;
    inputRef.current.value = cCode;
    inputRef.current.select();
    document.execCommand('copy');
    setText('Copied !');
    setCopiedText(cCode);
  };
  const checkIsCopied = (e) => {
    if (e.target.dataset.value !== copiedText) {
      setText(tooltipText);
    } else {
      setText('Copied !');
    }
  };

  if (colors.length) {
    return (
      <>
        <input ref={inputRef} style={{ opacity: 0 }} />
        <PaletWrapper>
          {colors.map((c, index) => (
            <PaletContainer key={c}>
              <Tooltip text={text} $top>
                <PaletBox
                  onClick={copyToClipboard}
                  onMouseEnter={checkIsCopied}
                  $color={c}
                  data-value={c}
                ></PaletBox>
              </Tooltip>
              <PaletCode> {c}</PaletCode>
            </PaletContainer>
          ))}
        </PaletWrapper>
      </>
    );
  }
  return null;
};

export default Palet;
