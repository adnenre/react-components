import React from 'react';
import PortletView from '../components/Portlet';
import Tree from '../components/Tree';

const data = {
  id: 1,
  label: 'Root',
  children: [
    {
      id: 2,
      label: 'Folder 1',
      children: [
        {
          id: 3,
          label: 'Subfolder 1',
          children: [
            {
              id: 4,
              label: 'File 1-1',
            },
            {
              id: 5,
              label: 'File 1-2',
            },
          ],
        },
        {
          id: 6,
          label: 'File 1',
        },
      ],
    },
    {
      id: 7,
      label: 'Folder 2',
      children: [
        {
          id: 8,
          label: 'Subfolder 2',
          children: [
            {
              id: 9,
              label: 'File 2-1',
            },
          ],
        },
        {
          id: 10,
          label: 'File 2',
        },
      ],
    },
    {
      id: 11,
      label: 'File 3',
    },
  ],
};

const TreePage = () => {
  return <PortletView title="Tree component" content={<Tree data={data} />} />;
};

export default TreePage;
