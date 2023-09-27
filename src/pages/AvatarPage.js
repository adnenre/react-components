import Title from '../components/Title';
import React from 'react';
import { Avatar, AvatarImg } from '../components/Avatar';
import PortletView, {
  Portlet,
  PortletHeader,
  PortletBody,
} from '../components/Portlet';
import Toggle from '../components/Toggle';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';

import imgUrl from '../components/data';

const AvatarPage = () => {
  return (
    <div>
      <PortletView
        title="Avatar Component"
        content={
          <>
            <Avatar xsmall>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar small>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar medium>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar large>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar xlarge>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <br />
            <Toggle>
              <PrismCode component="pre" className="language-markup" target>
                {`
          <Avatar xsmall>
              <AvatarImg src="../img.jpg" />
          </Avatar>
          <Avatar small>
              <AvatarImg src="../img.jpg" />
          </Avatar>
          <Avatar medium>
              <AvatarImg src="../img.jpg" />
          </Avatar>
          <Avatar large>
              <AvatarImg src="../img.jpg" />
          </Avatar>
          <Avatar xlarge>
              <AvatarImg src="../img.jpg" />
          </Avatar>
            `}
              </PrismCode>
            </Toggle>
          </>
        }
      />
      <PortletView
        title="Avatar Component Rounded"
        content={
          <>
            <Avatar round xsmall>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar round small>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar round medium>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar round large>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar round xlarge>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <br />
            <Toggle>
              <PrismCode component="pre" className="language-markup" target>
                {`
          <Avatar round xsmall>
              <AvatarImg src="../img.jpg" />
          </Avatar>
          <Avatar round small>
              <AvatarImg src="../img.jpg" />
          </Avatar>
          <Avatar round medium>
              <AvatarImg src="../img.jpg" />
          </Avatar>
          <Avatar round large>
              <AvatarImg src="../img.jpg" />
          </Avatar>
          <Avatar round xlarge>
              <AvatarImg src="../img.jpg" />
          </Avatar>
            `}
              </PrismCode>
            </Toggle>
          </>
        }
      />
    </div>
  );
};

export default AvatarPage;
