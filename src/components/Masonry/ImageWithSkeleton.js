import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MasonryImage,
  SkeletonContainer,
  SkeletonImage,
} from './Masonry.styled';

const ImageWithSkeleton = (props) => {
  const { src, alt, ...rest } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setLoading(false);
    };
  }, [src]);
  return (
    <>
      {loading ? (
        <SkeletonContainer>
          <SkeletonImage />
        </SkeletonContainer>
      ) : (
        <MasonryImage src={src} alt={alt} {...rest} />
      )}
    </>
  );
};

ImageWithSkeleton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageWithSkeleton;
