import styled from 'styled-components';
const gap = '2%';
const gridColNumber = 12;
const colwidth = 100 / gridColNumber;
import theme from '../theme';
const style = {
  $demo: `
       border: ${theme.border.thin} ${theme.color.$primary};
       height:50px;
       display:flex;
       align-items: center;
       justify-content: center;
       color:${theme.color.$primary};
       transition:0.3s;
       &:hover{
       
       background:${theme.color.$primary};
       color:white;
       }
       :hover{
        cursor:pointer;
       }
     `,
  $demoOne: `
      
       height:50px;
       display:flex;
       align-items: center;
       justify-content: center;
       background:${theme.color.$primary};
       color:white;
       transition:0.3s;
       &:hover{
         border:${theme.border.thin} ${theme.color.$primary};
         color:${theme.color.$primary};
         background:white;
         cursor:pointer;
       }
     
     `,

  $col: {
    auto: `
     
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    `,
    1: `
      
      flex: 0 0 calc(${colwidth}% - ${gap});
      max-width: calc(${colwidth}% - ${gap});
     
    `,
    2: `
    
    flex: 0 0 calc(${colwidth * 2}% - ${gap});
    max-width: calc(${colwidth * 2}% - ${gap});
   
    `,
    3: `
    
    flex: 0 0 calc(${colwidth * 3}% - ${gap});
    max-width: calc(${colwidth * 3}% - ${gap});
   
        `,
    4: `
    
    flex: 0 0 calc(${colwidth * 4}% - ${gap});
    max-width: calc(${colwidth * 4}% - ${gap});
   
        `,
    5: `
      
    flex: 0 0 calc(${colwidth * 5}% - ${gap});
    max-width: calc(${colwidth * 5}% - ${gap});
   
        `,
    6: `
    
    flex: 0 0 calc(${colwidth * 6}% - ${gap});
    max-width: calc(${colwidth * 6}% - ${gap});
   
    `,
    7: `
    
    flex: 0 0 calc(${colwidth * 7}% - ${gap});
    max-width: calc(${colwidth * 7}% - ${gap});
   
    `,
    8: `
    
    flex: 0 0 calc(${colwidth * 8}% - ${gap});
    max-width: calc(${colwidth * 8}% - ${gap});
   
    `,
    9: `
    
    flex: 0 0 calc(${colwidth * 9}% - ${gap});
    max-width: calc(${colwidth * 9}% - ${gap});
   
    `,
    10: `
      
      flex: 0 0 calc(${colwidth * 10}% - ${gap});
      max-width: calc(${colwidth * 10}% - ${gap});
     
    `,
    11: `
    
    flex: 0 0 calc(${colwidth * 11}% - ${gap});
    max-width: calc(${colwidth * 11}% - ${gap});
   
    `,
    12: `
    
    flex: 0 0 calc(${colwidth * 12}% - ${gap});
    max-width: calc(${colwidth * 12}% - ${gap});
   
    `,
  },
  $offset: {
    1: `margin-left: ${colwidth}%;`,
    2: `margin-left: ${colwidth * 2}%;`,
    3: `margin-left: ${colwidth * 3}%;`,
    4: `margin-left: ${colwidth * 4}%;`,
    5: `margin-left: ${colwidth * 5}%;`,
    6: `margin-left: ${colwidth * 6}%;`,
    7: `margin-left: ${colwidth * 7}%;`,
    8: `margin-left: ${colwidth * 8}%;`,
    9: `margin-left: ${colwidth * 9}%;`,
    10: `margin-left: ${colwidth * 10}%;`,
    11: `margin-left: ${colwidth * 11}%;`,
  },
  $align: {
    spaceBetween: `
        justify-content:space-between;
        align-items:center;
        `,
    spaceAround: `
        justify-content: space-around;
        `,
    flexEnd: `
        justify-content: flex-end;
        `,
    center: `
        justify-content: center;
        align-items:center;
        `,
  },
  $alignSelf: {
    auto: `     
      align-self: auto !important;
    `,
    start: `   
      align-self: flex-start !important;
    `,
    end: `  
      align-self: flex-end !important;
    `,
    center: `
      -ms-flex-item-align: center !important;
      align-self: center !important;
    `,
    baseline: `
      align-self: baseline !important;
    `,
    stretch: `
      align-self: stretch !important;
    `,
  },
};
const Container = styled.div`
  width: 100%;
  padding: ${($fluid) => {
    if ($fluid) return '0';
    return '0 1rem';
  }};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${gap};

  ${({ $align }) => $align && style.$align[$align]};
`;

const Col = styled.div`
  width: 100%;
  ${({ $demo }) => $demo && style.$demo};
  ${({ $demoOne }) => $demoOne && style.$demoOne};
  ${({ $offset }) => $offset && style.$offset[$offset]};
  ${({ $col }) => $col && style.$col[$col]};
  margin-right: ${gap};
  margin-bottom: ${gap};
  ${({ $alignSelf }) => $alignSelf && style.$alignSelf[$alignSelf]};

  @media screen and (min-width: 768px) {
    ${({ $sm }) => $sm && style.$col[$sm]};
    margin-bottom: ${gap};
  }
  @media screen and (min-width: 992px) {
    ${({ $md }) => $md && style.$col[$md]};
    margin-bottom: ${gap};
  }
  @media screen and (min-width: 1200px) {
    ${({ $lg }) => $lg && style.$col[$lg]};
    margin-bottom: ${gap};
  }
`;

export { Container, Row, Col };
