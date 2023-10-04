import styled from 'styled-components';
import { getBgColor } from '../utility';
import theme from '../../theme';

const Badge = styled.span`
  display: inline-block;
  min-width: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  margin: 0.2rem;
  background-color: #eee;

  ${getBgColor}
  border-radius : ${(props) => (props.$pill ? `10px` : '0')};
`;

export default Badge;
