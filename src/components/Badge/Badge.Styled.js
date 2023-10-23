import styled from 'styled-components';

import { getBadgetyle, getProperty } from '../utility';

const SBadge = styled.span`
  display: inline-block;
  min-width: 1rem;
  padding: 0.25rem 0.25rem;
  font-size: 0.75rem;
  font-weight: 400;

  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  margin: 0.2rem;

  ${getBadgetyle}
  ${(props) => getProperty('border-radius', props)};
`;

export default SBadge;
