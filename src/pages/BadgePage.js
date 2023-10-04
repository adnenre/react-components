import React from 'react';
import Badge from '../components/Badge';

import PortletView from '../components/Portlet';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';

const BadgePage = () => {
  return (
    <>
      <PortletView
        title="Badge component"
        content={
          <>
            <Badge $primary> primary</Badge>
            <Badge $info>info</Badge>
            <Badge $warning>warning</Badge>
            <Badge $success>success</Badge>
            <Badge $danger>danger</Badge>
            <Badge $black>black</Badge>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
      <Badge $primary> primary </Badge>
      <Badge $info>    info    </Badge>
      <Badge $warning> warning </Badge>
      <Badge $success> success </Badge>
      <Badge $danger>  danger  </Badge>
      <Badge $black>   black   </Badge>
        `}
            </PrismCode>
          </Toggle>
        }
      />
      {/* */}
      <PortletView
        title="Badge component pill"
        content={
          <>
            <Badge $primary $pill>
              {' '}
              primary
            </Badge>
            <Badge $info $pill>
              info
            </Badge>
            <Badge $warning $pill>
              warning
            </Badge>
            <Badge $success $pill>
              success
            </Badge>
            <Badge $danger $pill>
              danger
            </Badge>
            <Badge $black $pill>
              black
            </Badge>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
      <Badge $primary $pill> primary </Badge>
      <Badge $info $pill>    info    </Badge>
      <Badge $warning $pill> warning </Badge>
      <Badge $success $pill> success </Badge>
      <Badge $danger $pill>  danger  </Badge>
      <Badge $black $pill>   black   </Badge>
        `}
            </PrismCode>
          </Toggle>
        }
      />
    </>
  );
};

export default BadgePage;
