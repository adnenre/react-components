import React from 'react';
import { Avatar, AvatarImg } from '../components/Avatar';
import PortletView from '../components/Portlet';
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
            <Avatar $xsmall>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar $small>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar $medium>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar $large>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <Avatar $xlarge>
              <AvatarImg src={imgUrl} alt="image of adnen rebai" />
            </Avatar>
            <br />
            <Toggle>
              <PrismCode component="pre" className="language-markup" target>
                {`
          <Avatar $xsmall>
              <AvatarImg src="../img.jpg" alt="image description" />
          </Avatar>
          <Avatar $small>
              <AvatarImg src="../img.jpg" alt="image description" />
          </Avatar>
          <Avatar $medium>
              <AvatarImg src="../img.jpg" alt="image description" />
          </Avatar>
          <Avatar $large>
              <AvatarImg src="../img.jpg" alt="image description" />
          </Avatar>
          <Avatar $xlarge>
              <AvatarImg src="../img.jpg" alt="image description" />
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
            <Avatar $round $xsmall>
              <AvatarImg src={imgUrl} alt="image of the author" />
            </Avatar>
            <Avatar $round $small>
              <AvatarImg src={imgUrl} alt="image of the author" />
            </Avatar>
            <Avatar $round $medium>
              <AvatarImg src={imgUrl} alt="image of the author" />
            </Avatar>
            <Avatar $round $large>
              <AvatarImg src={imgUrl} alt="image of the author" />
            </Avatar>
            <Avatar $round $xlarge>
              <AvatarImg src={imgUrl} alt="image of the author" />
            </Avatar>
            <br />
            <Toggle>
              <PrismCode component="pre" className="language-markup" target>
                {`
          <Avatar $round $xsmall>
              <AvatarImg src="../img.jpg" alt="image description" />
          </Avatar>
          <Avatar $round $small>
              <AvatarImg src="../img.jpg" alt="image description" />
          </Avatar>
          <Avatar $round $medium>
              <AvatarImg src="../img.jpg" alt="image description" />
          </Avatar>
          <Avatar $round $large>
              <AvatarImg src="../img.jpg" alt="image description" />
          </Avatar>
          <Avatar $round $xlarge>
              <AvatarImg src="../img.jpg" alt="image description" />
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
