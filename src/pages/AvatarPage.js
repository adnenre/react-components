import React from 'react';
import Avatar from '../components/Avatar';
import PortletView from '../components/Portlet';
import CodeBlock from './pageUtils';
import { Container, Row } from '../components/grid';
import Tooltip from '../components/Tooltip';
import fake_data from '../fake-data';
import avatarsrource from '../assets/images/avatar.png';
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
              <Avatar $xsmall src={avatarsrource} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar small">
              <Avatar $small src={avatarsrource} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar medium">
              <Avatar $medium src={avatarsrource} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar large">
              <Avatar $large src={avatarsrource} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar xlarge">
              <Avatar $xlarge src={avatarsrource} alt={avatar.alt} />
            </Tooltip>
          </Row>
        }
        footer={
          <CodeBlock
            code={`
              
                <Avatar $xsmall src={avatarsrource} alt={avatar.alt} />
                <Avatar $small src={avatarsrource} alt={avatar.alt} />
                <Avatar $medium src={avatarsrource} alt={avatar.alt} />
                <Avatar $large src={avatarsrource} alt={avatar.alt} />
                <Avatar $xlarge src={avatarsrource} alt={avatar.alt} />
            `}
          />
        }
      />
      <PortletView
        title={avatar.page.title}
        content={
          <Row $align="spaceBetween">
            <Tooltip text="Avatar xsmall">
              <Avatar $xsmall $pill src={avatarsrource} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar small">
              <Avatar $small $pill src={avatarsrource} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar medium">
              <Avatar $medium $pill src={avatarsrource} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar large">
              <Avatar $large $pill src={avatarsrource} alt={avatar.alt} />
            </Tooltip>

            <Tooltip text="Avatar xlarge">
              <Avatar $xlarge $pill src={avatarsrource} alt={avatar.alt} />
            </Tooltip>
          </Row>
        }
        footer={
          <CodeBlock
            code={`
              
                <Avatar $pill $xsmall src={avatarsrource} alt={avatar.alt} />
                <Avatar $pill $small src={avatarsrource} alt={avatar.alt} />
                <Avatar $pill $medium src={avatarsrource} alt={avatar.alt} />
                <Avatar $pill $large src={avatarsrource} alt={avatar.alt} />
                <Avatar $pill $xlarge src={avatarsrource} alt={avatar.alt} />
            `}
          />
        }
      />
      <PortletView
        title="Avatar Component Rounded"
        content={
          <>
            <Row $align="spaceBetween">
              <Tooltip text="Avatar round xsmall">
                <Avatar $round $xsmall src={avatarsrource} alt={avatar.alt} />
              </Tooltip>

              <Tooltip text="Avatar round small">
                <Avatar $round $small src={avatarsrource} alt={avatar.alt} />
              </Tooltip>

              <Tooltip text="Avatar round medium">
                <Avatar $round $medium src={avatarsrource} alt={avatar.alt} />
              </Tooltip>

              <Tooltip text="Avatar round large">
                <Avatar $round $large src={avatarsrource} alt={avatar.alt} />
              </Tooltip>

              <Tooltip text="Avatar round xlarge">
                <Avatar $round $xlarge src={avatarsrource} alt={avatar.alt} />
              </Tooltip>
            </Row>
          </>
        }
        footer={
          <CodeBlock
            code={`
              
      <Avatar $round $xsmall src={avatarsrource} alt={avatar.alt} />
      <Avatar $round $small src={avatarsrource} alt={avatar.alt} />
      <Avatar $round $medium src={avatarsrource} alt={avatar.alt} />
      <Avatar $round $large src={avatarsrource} alt={avatar.alt} />
      <Avatar $round $xlarge src={avatarsrource} alt={avatar.alt} />
        `}
          />
        }
      />
    </Container>
  );
};

export default AvatarPage;
