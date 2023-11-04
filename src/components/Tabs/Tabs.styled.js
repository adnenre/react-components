import styled from 'styled-components';
import theme from '../../theme';
import { getTabStyle } from '../utility';
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ $left, $right }) => {
    if ($left) return `flex-direction: row;`;
    else if ($right) return `flex-direction: row-reverse;`;
    return `flex-direction: column;`;
  }}
  border: solid 1px ${theme.color.$gray2};
  border-radius: ${theme['border-radius'].$rounded};
  box-shadow:
    rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
    rgba(0, 0, 0, 0.05) 0rem 0.25rem 0.375rem -0.125rem;
  background: white;
  overflow: hidden;
  padding: 0.25rem;
  transition: all 0.3s;
  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.1) 0rem 0.625rem 0.9375rem -0.1875rem,
      rgba(0, 0, 0, 0.4) 0rem 0.5rem 0.5rem -0.5rem;
  }
`;

export const TabList = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  border-bottom: solid 1px ${theme.color.$gray2};
  width: inherit;
  ${({ $left, $right }) => {
    if ($left) {
      return `
    flex-direction: column;
    width:20%;
    border-right: solid 1px ${theme.color.$gray2};
    `;
    } else if ($right) {
      return `
      width:20%;
    flex-direction: column;
    border-left: solid 1px ${theme.color.$gray2};
  
    `;
    }
    return `flex-direction: row;`;
  }}
`;
export const TabItem = styled.div`
  display: flex;
  min-height: inherit;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  padding: 10px 15px;
  white-space: nowrap;
  cursor: pointer;
  justify-content: center;
  flex: 1 1 0;
  width: 100%;
  max-height: 50px;
  ${getTabStyle}
`;
export const TabPanelStyled = styled.div`
  width: inherit;
  padding: 1rem;
  flex: 1 1 auto;
  text-align: left;
  text-align: justify;
`;
