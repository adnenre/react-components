import React, { useState } from 'react';
import Masonry from '../components/Masonry';

import PortletView from '../components/Portlet';

import CodeBlock from './pageUtils';
import Modal from '../components/Modal';
import fake_data from '../fake-data';
import image1 from './../assets/images/image1.jpg';
import image2 from './../assets/images/image2.jpg';
import image3 from './../assets/images/image3.jpg';
import image4 from './../assets/images/image4.jpg';
import image5 from './../assets/images/image5.jpg';
import image6 from './../assets/images/image6.jpg';
import image7 from './../assets/images/image7.jpg';
import image8 from './../assets/images/image8.jpg';
import image9 from './../assets/images/image9.jpg';
import image10 from './../assets/images/image10.jpg';
import image11 from './../assets/images/image11.jpg';
import image12 from './../assets/images/image12.jpg';

const items = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];
const MasonryPage = () => {
  const { masonry } = fake_data.pages;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggle = (e) => setModalOpen(!modalOpen);
  const handelClickedImage = (url) => {
    setSelectedImage(url);
    setModalOpen({ 1: true });
  };

  return (
    <>
      <PortletView
        title={masonry.page.title}
        content={
          <>
            <Masonry
              columns={3}
              gap={5}
              items={items}
              onItemClick={handelClickedImage}
            />
            <Modal
              onToggleModal={toggle}
              show={modalOpen}
              style={{ background: 'transparent' }}
              $lg
            >
              <Modal.Header
                style={{
                  padding: '0px',
                  color: 'white',
                  height: '20px',
                  border: 'none',
                }}
              />
              <Modal.Body
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  background: 'transparent',
                }}
              >
                <img
                  style={{ objectFit: 'cover' }}
                  src={selectedImage}
                  alt="selected image"
                  width="100%"
                  height="auto"
                />
              </Modal.Body>
            </Modal>
          </>
        }
        footer={
          <CodeBlock
            code={`
              
              
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
          />
        }
      />
    </>
  );
};

export default MasonryPage;
