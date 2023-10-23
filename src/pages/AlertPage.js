import React from 'react';
import PortletView from '../components/Portlet';
import Alert from '../components/Alert';
import fake_data from '../fake-data';

import 'prismjs/themes/prism.css';
import PrismCode from 'react-prism';
import Prism from 'prismjs';
import Toggle from '../components/Toggle';
import { Container, Row } from '../components/grid';

const AlertPage = () => {
  return (
    <Container>
      <PortletView
        title={fake_data.pages.alert.page.title}
        content={
          <Container>
            <Row>
              <Alert
                $info
                title={'Info'}
                description={fake_data.pages.alert.desc}
              />
              <Alert
                $success
                title={'Success'}
                description={fake_data.pages.alert.desc}
              />
              <Alert
                $danger
                title={'Danger'}
                description={fake_data.pages.alert.desc}
              />
              <Alert
                $warning
                title={'Warning'}
                description={fake_data.pages.alert.desc}
              />
            </Row>
          </Container>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
            <Alert $info    title='Info'     description={fake_data.pages.alert.desc} />
            <Alert $success title='Success'  description={fake_data.pages.alert.desc} />
            <Alert $danger  title='Danger'   description={fake_data.pages.alert.desc} />
            <Alert $warning title='Warning'  description={fake_data.pages.alert.desc} />
          `}
            </PrismCode>
          </Toggle>
        }
      />
      <PortletView
        title={fake_data.pages.alert.page.title}
        content={
          <Container>
            <Row>
              <Alert
                $pill
                $info
                title={'Info'}
                description={fake_data.pages.alert.desc}
              />
              <Alert
                $pill
                $success
                title={'Success'}
                description={fake_data.pages.alert.desc}
              />
              <Alert
                $pill
                $danger
                title={'Danger'}
                description={fake_data.pages.alert.desc}
              />
              <Alert
                $pill
                $warning
                title={'Warning'}
                description={fake_data.pages.alert.desc}
              />
            </Row>
          </Container>
        }
        footer={
          <Toggle>
            <PrismCode component="pre" className="language-markup" target>
              {`
            <Alert $pill $info    title='Info'     description={fake_data.pages.alert.desc} />
            <Alert $pill $success title='Success'  description={fake_data.pages.alert.desc} />
            <Alert $pill $danger  title='Danger'   description={fake_data.pages.alert.desc} />
            <Alert $pill $warning title='Warning'  description={fake_data.pages.alert.desc} />
          `}
            </PrismCode>
          </Toggle>
        }
      />
    </Container>
  );
};

export default AlertPage;
