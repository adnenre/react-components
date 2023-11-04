import React from 'react';
import PropTypes from 'prop-types';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';

const CodeBlock = (props) => {
  const { code } = props;
  return (
    <Toggle>
      <PrismCode component="pre" className="language-markup" target>
        {code}
      </PrismCode>
    </Toggle>
  );
};
CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};
export default CodeBlock;
