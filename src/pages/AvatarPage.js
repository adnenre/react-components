import React from 'react';
import Avatar from '../components/Avatar';
import PortletView from '../components/Portlet';
import Toggle from '../components/Toggle';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';

import imgUrl from '../components/data';
import { Container, Row, Col } from '../components/grid';

const AvatarPage = () => {
  return (
    <Container>
      <PortletView
        title="Avatar Component"
        content={
          <>
            <Row>
              <Col md={2}>
                <Avatar $xsmall src={imgUrl} alt="image of the author" />
              </Col>
              <Col md={2}>
                <Avatar $small src={imgUrl} alt="image of the author" />
              </Col>
              <Col md={2}>
                <Avatar $medium src={imgUrl} alt="image of the author" />
              </Col>
              <Col md={2}>
                <Avatar $large src={imgUrl} alt="image of the author" />
              </Col>
              <Col md={2}>
                <Avatar $xlarge src={imgUrl} alt="image of the author" />
              </Col>
            </Row>

            <br />
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
          <Avatar $xsmall src={imgUrl} alt="image of the author" />
          <Avatar $small src={imgUrl} alt="image of the author" />
          <Avatar $medium src={imgUrl} alt="image of the author" />
          <Avatar $large src={imgUrl} alt="image of the author" />
          <Avatar $xlarge src={imgUrl} alt="image of the author" />
            `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title="Avatar Component Rounded"
        content={
          <>
            <Avatar $round $xsmall src={imgUrl} alt="image of the author" />
            <Avatar $round $small src={imgUrl} alt="image of the author" />
            <Avatar $round $medium src={imgUrl} alt="image of the author" />
            <Avatar $round $large src={imgUrl} alt="image of the author" />
            <Avatar $round $xlarge src={imgUrl} alt="image of the author" />
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
      <Avatar $round $xsmall src={imgUrl} alt="image of the author" />
      <Avatar $round $small src={imgUrl} alt="image of the author" />
      <Avatar $round $medium src={imgUrl} alt="image of the author" />
      <Avatar $round $large src={imgUrl} alt="image of the author" />
      <Avatar $round $xlarge src={imgUrl} alt="image of the author" />
        `}
            </PrismCode>
          </Toggle>
        }
      />
    </Container>
  );
};

export default AvatarPage;
