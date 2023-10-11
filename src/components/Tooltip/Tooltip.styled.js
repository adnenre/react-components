import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

export const TooltipText = styled.div`
  position: absolute;
  ${(props) => {
    if (props.$top) {
      return `top : calc(-100% + -6px);
      left:50%;
      transform:translate(-50%)
      `;
    }
    if (props.$left) {
      return `right : calc(100% + 6px);
      top:0;
   
      `;
    }
    if (props.$right) {
      return `left : calc(100% + 6px);
               top:0;
   
      `;
    }

    return `top : calc(100% + 6px);
             left:50%;
             transform:translate(-50%)
   
      `;
  }};

  background-color: #333;
  color: #fff;
  padding: 0.5rem;
  font-size: 0.8rem;

  white-space: nowrap;
  z-index: 999999999;
  opacity: 0.8;

  display: ${({ $isHovered }) => ($isHovered ? 'block' : 'none')};

  &::after {
    content: '';
    width: 0px;
    height: 0px;
    ${(props) => {
      if (props.$left) {
        return `position: absolute;
                width:0px;
                height:0px;
                border-top: solid 5px #333;
                border-left: solid 5px transparent;
                border-right: solid 5px #333;
                border-bottom: solid 5px transparent;
                transform:translate(0,-50%) rotateZ(45deg);
                top:50%;
                bottom : 0;
                right: -4px;`;
      }
      if (props.$right) {
        return `position: absolute;
                width:0px;
                height:0px;
                border-top: solid 5px transparent;
                border-left: solid 5px #333;
                border-right: solid 5px transparent;
                border-bottom: solid 5px #333;
                transform:translate(0,-50%) rotateZ(45deg);
                top:50%;
                bottom : 0;
                left: -4px;`;
      }
      if (props.$top) {
        return `position: absolute;
                border-top: solid 5px transparent;
                border-left: solid 5px transparent;
                border-right: solid 5px #333;
                border-bottom: solid 5px #333;
                transform: rotateZ(45deg);
                top: calc(100% - 5px); 
                bottom : 0;
                left: calc(50% - 5px);`;
      }

      return `position: absolute;
              border-top: solid 5px #333;
              border-left: solid 5px #333;
              border-right: solid 5px transparent;
              border-bottom: solid 5px transparent;
              transform: rotateZ(45deg);
              top: -4px;
              left: calc(50% - 5px);
      `;
    }};
  }
`;
