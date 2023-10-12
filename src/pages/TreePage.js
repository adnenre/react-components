import React from 'react';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import PortletView from '../components/Portlet';
import Tree from '../components/Tree';
import fake_data from '../fake-data';

const { tree } = fake_data.pages;
const TreePage = () => {
  return (
    <PortletView
      title={tree.page.title}
      content={<Tree data={tree.data} />}
      footer={
        <Toggle>
          <PrismCode component="pre" className="language-markup">
            {`
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

            <Tree data={data} />
      `}
          </PrismCode>
        </Toggle>
      }
    />
  );
};

export default TreePage;
