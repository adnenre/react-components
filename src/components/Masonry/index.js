import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MasonryContainer,
  MasonryItem,
  MasonryColumn,
  MasonryImage,
} from './Masonry.styled';
import { isImageUrl } from '../utility';

const Masonry = (props) => {
  const { items, columns, gap, onItemClick } = props;

  const [res, setResult] = useState([]);

  const columnWrapper = {};
  const result = [];
  const handleClickItem = (item) => (e) => onItemClick(item);
  // create columns

  const RenderMasonryItem = () => {
    for (let i = 0; i < columns; i++) {
      columnWrapper[`column-${i}`] = [];
    }
    // divide items into columns
    for (let i = 0; i < items.length; i++) {
      const columnIndex = i % columns;
      const height = 100 + Math.ceil(Math.random() * 200);

      columnWrapper[`column-${columnIndex}`].push(
        <MasonryItem
          key={`column-${columnIndex}-item-${i}`}
          style={{
            marginBottom: `${gap}px`,
            height: `${height}px`,
          }}
        >
          {isImageUrl(items[i]) ? (
            <MasonryImage
              key={`image-column-${columnIndex}-item-${i}`}
              src={items[i]}
              alt={`image-column-${columnIndex}-item-${i}`}
              onClick={handleClickItem(items[i])}
            />
          ) : (
            items[i]
          )}
        </MasonryItem>
      );
    }
  };
  const RenderMasonryColumn = () => {
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
    setResult(result);
  };
  useEffect(() => {
    RenderMasonryItem();
    RenderMasonryColumn();
  }, []);
  return <MasonryContainer>{res}</MasonryContainer>;
};

Masonry.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.node),
  onItemClick: PropTypes.func,
};

Masonry.defaultProps = {
  columns: 2,
  gap: 20,
};
export default Masonry;
