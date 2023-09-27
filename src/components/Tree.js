import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TreeNode = styled.div`
  cursor: pointer; /* Add cursor style to indicate interactivity */
  display: inline-block; /* Display nodes horizontally */
  margin-left: 20px; /* Adjust the indentation as needed */
`;

const ExpandedTreeNode = styled(TreeNode)`
  margin-right: 10px; /* Add margin-right for expanded nodes */
  font-weight: bold; /* Apply different styling to expanded nodes */
`;

const TreeLeaf = styled.span`
  color: green; /* Style the leaves differently */
`;

const Caret = styled.span`
  margin-right: 5px;
`;

const Tree = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState({});

  const toggleExpansion = (nodeId) => {
    setExpandedNodes((prevState) => ({
      ...prevState,
      [nodeId]: !prevState[nodeId],
    }));
  };

  const renderTree = (node) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes[node.id];

    const NodeComponent = isExpanded ? ExpandedTreeNode : TreeNode;

    return (
      <div key={node.id}>
        <NodeComponent onClick={() => toggleExpansion(node.id)}>
          {hasChildren && <Caret>{isExpanded ? '▼' : '▶'}</Caret>}
          {node.label}
        </NodeComponent>
        {isExpanded && hasChildren && (
          <div style={{ textIndent: '20px' }}>
            {node.children.map((child) => renderTree(child))}
          </div>
        )}
      </div>
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
