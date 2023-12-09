import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Title } from '../components/Portlet/Portlet.Styled';

import Avatar from '../components/Avatar';
import {
  Portlet,
  PortletHeader,
  PortletBody,
  PortletFooter,
} from '../components/Portlet/Portlet.Styled';

import fake_data from '../fake-data';

import { componentList } from '../componentList';
import Tooltip from '../components/Tooltip';
import components from '../components';
const Home = () => {
  const navigate = useNavigate();
  const { CContainer, Cname } = componentList;
  const naviteToPage = (c) => (e) => {
    navigate(`/${c}Page`);
  };
  return (
    <Portlet>
      <PortletHeader>
        <Title> LANA react library</Title>
      </PortletHeader>
      <PortletBody $flexColumn>
        {components.map(({ name, image, id }) => (
          <CContainer key={id} onClick={naviteToPage(name)}>
            <Cname> {name}</Cname>
            <img
              style={{ width: 'inherit', height: 'auto' }}
              src={image}
              alt={name}
            />
          </CContainer>
        ))}
      </PortletBody>
      <PortletFooter>
        <a
          className="author"
          href="https://adnenre.github.io"
          area-label="link to author profile"
        >
          <Tooltip text="Click here to visit author profile " $right>
            <Avatar
              src={fake_data.pages.avatar.author.src}
              alt={fake_data.pages.avatar.author.alt}
              $xsmall
              $round
            />
          </Tooltip>
        </a>
      </PortletFooter>
    </Portlet>
  );
};

export default Home;
