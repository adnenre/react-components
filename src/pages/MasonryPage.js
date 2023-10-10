import React from 'react';
import Masonry from '../components/Masonry';

import PortletView from '../components/Portlet';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';

const items = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image6.jpg',
  'images/image7.jpg',
  'images/image8.jpg',
  'images/image9.jpg',
  'images/image10.jpg',
  'images/image11.jpg',
  'images/image12.jpg',
];
const MasonryPage = () => {
  return (
    <>
      <PortletView
        title="Masonry component"
        content={<Masonry columns={3} gap={5} items={items} />}
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
              
const items = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image6.jpg',
  'images/image7.jpg',
  'images/image8.jpg',
  'images/image9.jpg',
  'images/image10.jpg',
];
<Masonry columns={3} gap={5} items={items} />
`}
            </PrismCode>
          </Toggle>
        }
      />
    </>
  );
};

export default MasonryPage;
