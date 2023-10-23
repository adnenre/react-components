import React from 'react';
import PropTypes from 'prop-types';
import {
  MasonryContainer,
  MasonryItem,
  MasonryColumn,
  MasonryImage,
} from './Masonry.styled';
import { isImageUrl } from '../utility';

const Masonry = (props) => {
  const { items, columns, gap } = props;
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column-${i}`] = [];
  }

  // divide items into columns
  for (let i = 0; i < items.length; i++) {
    const columnIndex = i % columns;
    const height = 100 + Math.ceil(Math.random() * 200);

    columnWrapper[`column-${columnIndex}`].push(
      <MasonryItem
        key={`item-${i}-${columnIndex}`}
        style={{
          marginBottom: `${gap}px`,
          height: `${height}px`,
        }}
      >
        {isImageUrl(items[i]) ? (
          <MasonryImage
            key={`image item ${i + 1}`}
            src={items[i]}
            alt={`image item ${i + 1}`}
          />
        ) : (
          items[i]
        )}
      </MasonryItem>
    );
  }

  // wrap items in each column with a div
  for (let i = 0; i < columns; i++) {
    result.push(
      <MasonryColumn
        key={`column-${i}}`}
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column-${i}`]}
      </MasonryColumn>
    );
  }

  return <MasonryContainer>{result}</MasonryContainer>;
};

Masonry.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.node),
};

Masonry.defaultProps = {
  columns: 2,
  gap: 20,
};
export default Masonry;
