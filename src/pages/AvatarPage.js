import React from 'react';
import Avatar from '../components/Avatar';
import PortletView from '../components/Portlet';
import Toggle from '../components/Toggle';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';

import imgUrl from '../components/data';
import { Container, Row, Col } from '../components/grid';
import Tooltip from '../components/Tooltip';

const AvatarPage = () => {
  return (
    <Container>
      <PortletView
        title="Avatar Component"
        content={
          <Row $align="spaceBetween">
            <Tooltip text="Avatar xsmall">
              <Avatar $xsmall src={imgUrl} alt="image of the author" />
            </Tooltip>

            <Tooltip text="Avatar small">
              <Avatar $small src={imgUrl} alt="image of the author" />
            </Tooltip>

            <Tooltip text="Avatar medium">
              <Avatar $medium src={imgUrl} alt="image of the author" />
            </Tooltip>

            <Tooltip text="Avatar large">
              <Avatar $large src={imgUrl} alt="image of the author" />
            </Tooltip>

            <Tooltip text="Avatar xlarge">
              <Avatar $xlarge src={imgUrl} alt="image of the author" />
            </Tooltip>
          </Row>
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
            <Row $align="spaceBetween">
              <Tooltip text="Avatar rounded xsmall">
                <Avatar $round $xsmall src={imgUrl} alt="image of the author" />
              </Tooltip>

              <Tooltip text="Avatar rounded small">
                <Avatar $round $small src={imgUrl} alt="image of the author" />
              </Tooltip>

              <Tooltip text="Avatar rounded medium">
                <Avatar $round $medium src={imgUrl} alt="image of the author" />
              </Tooltip>

              <Tooltip text="Avatar rounded large">
                <Avatar $round $large src={imgUrl} alt="image of the author" />
              </Tooltip>

              <Tooltip text="Avatar rounded xlarge">
                <Avatar $round $xlarge src={imgUrl} alt="image of the author" />
              </Tooltip>
            </Row>
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
