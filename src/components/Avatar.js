import styled from 'styled-components';

const avatarSizing = {
  xsmall: '50px',
  small: '80px',
  medium: '100px',
  large: '150px',
  xlarge: '180px',
};
const Avatar = styled.div`
  border-radius: ${({ $round }) => {
    if ($round) return '50%';
    return '10px';
  }};

  margin: auto;
  overflow: hidden;
  box-shadow: 0 0 20px 1px #bec0c2;
  width: ${({ $xsmall, $small, $medium, $large, $xlarge }) => {
    if ($xsmall) return avatarSizing.xsmall;
    if ($small) return avatarSizing.small;
    if ($medium) return avatarSizing.medium;
    if ($large) return avatarSizing.large;
    if ($xlarge) return avatarSizing.xlarge;

    return avatarSizing.small;
  }};
  height: ${({ $xsmall, $small, $medium, $large, $xlarge }) => {
    if ($xsmall) return avatarSizing.xsmall;
    if ($small) return avatarSizing.small;
    if ($medium) return avatarSizing.medium;
    if ($large) return avatarSizing.large;
    if ($xlarge) return avatarSizing.xlarge;

    return avatarSizing.small;
  }};
  border: solid 4px white;
  display: flex;
`;
const AvatarImg = styled.img`
  width: 100%;
  height: auto;
  margin: auto;
`;

export { Avatar, AvatarImg };
