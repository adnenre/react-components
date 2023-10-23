import React from 'react';
import Avatar from '../components/Avatar';
import PortletView from '../components/Portlet';
import Toggle from '../components/Toggle';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import { Container, Row } from '../components/grid';
import Tooltip from '../components/Tooltip';
import fake_data from '../fake-data';

const AvatarPage = () => {
  const {
    pages: { avatar },
  } = fake_data;
  return (
    <Container>
      <PortletView
        title={avatar.page.title}
        content={
          <Row $align="spaceBetween">
            <Tooltip text="Avatar xsmall">
              <Avatar $xsmall src={avatar.src} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar small">
              <Avatar $small src={avatar.src} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar medium">
              <Avatar $medium src={avatar.src} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar large">
              <Avatar $large src={avatar.src} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar xlarge">
              <Avatar $xlarge src={avatar.src} alt={avatar.alt} />
            </Tooltip>
          </Row>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
                <Avatar $xsmall src={avatar.src} alt={avatar.alt} />
                <Avatar $small src={avatar.src} alt={avatar.alt} />
                <Avatar $medium src={avatar.src} alt={avatar.alt} />
                <Avatar $large src={avatar.src} alt={avatar.alt} />
                <Avatar $xlarge src={avatar.src} alt={avatar.alt} />
            `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title={avatar.page.title}
        content={
          <Row $align="spaceBetween">
            <Tooltip text="Avatar xsmall">
              <Avatar $xsmall $pill src={avatar.src} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar small">
              <Avatar $small $pill src={avatar.src} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar medium">
              <Avatar $medium $pill src={avatar.src} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar large">
              <Avatar $large $pill src={avatar.src} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar xlarge">
              <Avatar $xlarge $pill src={avatar.src} alt={avatar.alt} />
            </Tooltip>
          </Row>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
                <Avatar $pill $xsmall src={avatar.src} alt={avatar.alt} />
                <Avatar $pill $small src={avatar.src} alt={avatar.alt} />
                <Avatar $pill $medium src={avatar.src} alt={avatar.alt} />
                <Avatar $pill $large src={avatar.src} alt={avatar.alt} />
                <Avatar $pill $xlarge src={avatar.src} alt={avatar.alt} />
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
              <Tooltip text="Avatar round xsmall">
                <Avatar $round $xsmall src={avatar.src} alt={avatar.alt} />
              </Tooltip>

              <Tooltip text="Avatar round small">
                <Avatar $round $small src={avatar.src} alt={avatar.alt} />
              </Tooltip>

              <Tooltip text="Avatar round medium">
                <Avatar $round $medium src={avatar.src} alt={avatar.alt} />
              </Tooltip>

              <Tooltip text="Avatar round large">
                <Avatar $round $large src={avatar.src} alt={avatar.alt} />
              </Tooltip>

              <Tooltip text="Avatar round xlarge">
                <Avatar $round $xlarge src={avatar.src} alt={avatar.alt} />
              </Tooltip>
            </Row>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
      <Avatar $round $xsmall src={avatar.src} alt={avatar.alt} />
      <Avatar $round $small src={avatar.src} alt={avatar.alt} />
      <Avatar $round $medium src={avatar.src} alt={avatar.alt} />
      <Avatar $round $large src={avatar.src} alt={avatar.alt} />
      <Avatar $round $xlarge src={avatar.src} alt={avatar.alt} />
        `}
            </PrismCode>
          </Toggle>
        }
      />
    </Container>
  );
};

export default AvatarPage;
