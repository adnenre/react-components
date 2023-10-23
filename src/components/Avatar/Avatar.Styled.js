import styled from 'styled-components';
import { getProperty } from '../utility';

const AvatarContainer = styled.div`
  margin: auto;
  overflow: hidden;
  box-shadow: 0 0 20px 1px #bec0c2;
  border: solid 4px white;
  display: flex;
  ${(props) => getProperty('width', props)};
  ${(props) => getProperty('height', props)};
  ${(props) => getProperty('border-radius', props)};
`;
const AvatarImg = styled.img`
  width: 100%;
  height: auto;
  margin: auto;
`;

export { AvatarContainer, AvatarImg };
