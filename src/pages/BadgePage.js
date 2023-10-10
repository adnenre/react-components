import React from 'react';
import Badge from '../components/Badge';

import PortletView from '../components/Portlet';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import { Container, Row } from '../components/grid';

const BadgePage = () => {
  return (
    <>
      <PortletView
        title="Badge component"
        content={
          <>
            <Container>
              <Row>
                <Badge $primary> primary</Badge>
                <Badge $info>info</Badge>
                <Badge $warning>warning</Badge>
                <Badge $success>success</Badge>
                <Badge $danger>danger</Badge>
                <Badge $black>black</Badge>
              </Row>
              <Row>
                <Badge $outline $primary>
                  primary
                </Badge>
                <Badge $outline $info>
                  info
                </Badge>
                <Badge $outline $warning>
                  warning
                </Badge>
                <Badge $outline $success>
                  success
                </Badge>
                <Badge $outline $danger>
                  danger
                </Badge>
                <Badge $outline $black>
                  black
                </Badge>
              </Row>
            </Container>
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

      <Badge $outline $primary> primary </Badge>
      <Badge $outline $info>    info    </Badge>
      <Badge $outline $warning> warning </Badge>
      <Badge $outline $success> success </Badge>
      <Badge $outline $danger>  danger  </Badge>
      <Badge $outline $black>   black   </Badge>
        `}
            </PrismCode>
          </Toggle>
        }
      />
      {/* */}

      <PortletView
        title="Badge component rounded"
        content={
          <>
            <Container>
              <Row>
                <Badge $rounded $primary>
                  {' '}
                  primary
                </Badge>
                <Badge $rounded $info>
                  info
                </Badge>
                <Badge $rounded $warning>
                  warning
                </Badge>
                <Badge $rounded $success>
                  success
                </Badge>
                <Badge $rounded $danger>
                  danger
                </Badge>
                <Badge $rounded $black>
                  black
                </Badge>
              </Row>
              <Row>
                <Badge $outline $rounded $primary>
                  primary
                </Badge>
                <Badge $outline $rounded $info>
                  info
                </Badge>
                <Badge $outline $rounded $warning>
                  warning
                </Badge>
                <Badge $outline $rounded $success>
                  success
                </Badge>
                <Badge $outline $rounded $danger>
                  danger
                </Badge>
                <Badge $outline $rounded $black>
                  black
                </Badge>
              </Row>
            </Container>
          </>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
      <Badge $primary $rounded> primary </Badge>
      <Badge $info $rounded>    info    </Badge>
      <Badge $warning $rounded> warning </Badge>
      <Badge $success $rounded> success </Badge>
      <Badge $danger $rounded>  danger  </Badge>
      <Badge $black $rounded>   black   </Badge>
      
      <Badge $outline $primary $rounded> primary </Badge>
      <Badge $outline $info $rounded>    info    </Badge>
      <Badge $outline $warning $rounded> warning </Badge>
      <Badge $outline $success $rounded> success </Badge>
      <Badge $outline $danger $rounded>  danger  </Badge>
      <Badge $outline $black $rounded>   black   </Badge>
        `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title="Badge component pill"
        content={
          <>
            <Container>
              <Row>
                <Badge $pill $primary>
                  {' '}
                  primary
                </Badge>
                <Badge $pill $info>
                  info
                </Badge>
                <Badge $pill $warning>
                  warning
                </Badge>
                <Badge $pill $success>
                  success
                </Badge>
                <Badge $pill $danger>
                  danger
                </Badge>
                <Badge $pill $black>
                  black
                </Badge>
              </Row>
              <Row>
                <Badge $outline $pill $primary>
                  primary
                </Badge>
                <Badge $outline $pill $info>
                  info
                </Badge>
                <Badge $outline $pill $warning>
                  warning
                </Badge>
                <Badge $outline $pill $success>
                  success
                </Badge>
                <Badge $outline $pill $danger>
                  danger
                </Badge>
                <Badge $outline $pill $black>
                  black
                </Badge>
              </Row>
            </Container>
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

      <Badge $outline $primary $pill> primary </Badge>
      <Badge $outline $info $pill>    info    </Badge>
      <Badge $outline $warning $pill> warning </Badge>
      <Badge $outline $success $pill> success </Badge>
      <Badge $outline $danger $pill>  danger  </Badge>
      <Badge $outline $black $pill>   black   </Badge>
        `}
            </PrismCode>
          </Toggle>
        }
      />
    </>
  );
};

export default BadgePage;
