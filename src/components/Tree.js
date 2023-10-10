import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const ParentNode = styled.div`
  cursor: pointer; /* Add cursor style to indicate interactivity */
  display: block; /* Display nodes horizontally */
`;
const TreeNode = styled.div`
  cursor: pointer; /* Add cursor style to indicate interactivity */
  display: flex; /* Display nodes horizontally */
  justify-content: left;
  margin-left: 10px; /* Adjust the indentation as needed */
`;

const ExpandedTreeNode = styled(TreeNode)`
  margin-right: 10px; /* Add margin-right for expanded nodes */
  font-weight: bold; /* Apply different styling to expanded nodes */
`;

const TreeLeaf = styled.span`
  color: ${theme.colors.$black}; /* Style the leaves differently */
`;

const Caret = styled.span`
  margin-right: 5px;
`;

const Tree = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState({});

  const toggleExpansion = (node) => {
    if (node.children) {
      setExpandedNodes((prevState) => ({
        ...prevState,
        [node.id]: !prevState[node.id],
      }));
    }
  };

  const renderTree = (node) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes[node.id];

    const NodeComponent = isExpanded ? ExpandedTreeNode : TreeNode;

    return (
      <ParentNode key={node.id}>
        <NodeComponent onClick={() => toggleExpansion(node)}>
          {hasChildren && <Caret>{isExpanded ? '▼' : '▶'}</Caret>}
          {node.label}
        </NodeComponent>
        {isExpanded && hasChildren && (
          <TreeLeaf style={{ textIndent: node.level * 20 + 'px' }}>
            {node.children.map((child) => renderTree(child))}
          </TreeLeaf>
        )}
      </ParentNode>
    );
  };

  if (!data) {
    return null; // Handle the case where data is not defined
  }

  return <div>{renderTree(data)}</div>;
};

Tree.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object), // Children should be an array of objects with the same structure
  }),
};

export default Tree;
