import React from 'react';
import PortletView from '../components/Portlet';
import Tree from '../components/Tree';

const data = {
  id: 1,
  label: 'Root',
  level: 1,
  children: [
    {
      id: 2,
      label: 'Folder 1',
      level: 2,
      children: [
        {
          id: 3,
          label: 'Subfolder 1',
          level: 3,
          children: [
            {
              id: 4,
              level: 4,
              label: 'File 1-1',
            },
            {
              id: 5,
              label: 'File 1-2',
              level: 4,
            },
          ],
        },
        {
          id: 6,
          level: 3,
          label: 'File 1',
        },
      ],
    },
    {
      id: 7,
      label: 'Folder 2',
      level: 2,
      children: [
        {
          id: 8,
          label: 'Subfolder 2',
          level: 3,
          children: [
            {
              id: 9,
              label: 'File 2-1',
              level: 4,
            },
          ],
        },
        {
          id: 10,
          level: 3,
          label: 'File 2',
        },
      ],
    },
    {
      id: 11,
      level: 2,
      label: 'File 3',
    },
  ],
};

const TreePage = () => {
  return <PortletView title="Tree component" content={<Tree data={data} />} />;
};

export default TreePage;
