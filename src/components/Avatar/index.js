import React from 'react';
import PropTypes from 'prop-types';
import { AvatarContainer, AvatarImg } from './Avatar.Styled';
const Avatar = ({ src, alt, ...rest }) => {
  return (
    <AvatarContainer {...rest}>
      <AvatarImg src={src} alt={alt} width="100%" height="auto" />
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
