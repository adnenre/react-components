import React, { useState } from 'react';
import PortletView from '../components/Portlet';
import Input from '../components/Input';
import CodeBlock from './pageUtils';
import { Col, Row, Container } from '../components/grid';

import ToggleView from '../components/Icons/ToggleView';

const InputPage = () => {
  const [formInfo, setFormInfo] = useState({
    password: { label: 'Password', name: 'password', type: 'password' },
    password_confirm: {
      label: 'Password Confirm',
      name: 'password_confirm',
      type: 'password',
    },
  });
  const toggleType = (key) => (e) => {
    e.preventDefault();
    let type = formInfo[key].type === 'text' ? 'password' : 'text';
    setFormInfo({ ...formInfo, [key]: { ...formInfo[key], type } });
  };
  return (
    <Container>
      <PortletView
        title="Input Component default"
        content={<Input />}
        footer={<CodeBlock code="<Input  />" />}
      />
      <PortletView
        title="Input Component With Label"
        content={<Input label="First Name" />}
        footer={<CodeBlock code="<Input label='First Name' />" />}
      />
      <PortletView
        title="Input Component required"
        content={<Input label="First Name" required />}
        footer={<CodeBlock code="<Input label='First Name' />" />}
      />
      <PortletView
        title="Input Component form"
        content={
          <form>
            <Row>
              <Col $sm={6}>
                <Input
                  required
                  label="First Name"

                  // onChange={(e) => console.log(e.target.value)}
                />
              </Col>
              <Col $sm={6}>
                <Input
                  required
                  label="Last Name"

                  //  onChange={(e) => console.log(e.target.value)}
                />
              </Col>
              <Col $sm={12}>
                <Input
                  required
                  label="Email"
                  type="email"

                  //  onChange={(e) => console.log(e.target.value)}
                />
              </Col>
              <Col $sm={6}>
                <Input
                  required
                  type={formInfo.password.type}
                  name={formInfo.password.name}
                  label={formInfo.password.label}
                  iconEnd={<ToggleView onClick={toggleType('password')} />}
                  //   onChange={(e) => console.log(e.target.value)}
                />
              </Col>
              <Col $sm={6}>
                <Input
                  type={formInfo.password_confirm.type}
                  name={formInfo.password_confirm.name}
                  label={formInfo.password_confirm.label}
                  required
                  iconEnd={
                    <ToggleView onClick={toggleType('password_confirm')} />
                  }
                  //   onChange={(e) => console.log(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col $sm={12}>
                <Input type="submit" value="Send" />
              </Col>
            </Row>
          </form>
        }
        footer={
          <CodeBlock
            code={`
        <form>
            <Row>
              <Col $sm={6}>
                <Input
                  required
                  label="First Name"

                  // onChange={(e) => console.log(e.target.value)}
                />
              </Col>
              <Col $sm={6}>
                <Input
                  required
                  label="Last Name"

                  //  onChange={(e) => console.log(e.target.value)}
                />
              </Col>
              <Col $sm={12}>
                <Input
                  required
                  label="Email"
                  type="email"

                  //  onChange={(e) => console.log(e.target.value)}
                />
              </Col>
              <Col $sm={6}>
                <Input
                  required
                  type="password"
                  label="Password"

                  //   onChange={(e) => console.log(e.target.value)}
                />
              </Col>
              <Col $sm={6}>
                <Input
                  type="password"
                  label="Confirm Password"
                  required
                  //   onChange={(e) => console.log(e.target.value)}
                />
              </Col>
            </Row>
            <Col $sm={12}>
                <Input type="submit" value="Send" />
              </Col>
          </form>
        `}
          />
        }
      />
      <PortletView
        title="Input Component date / time"
        content={
          <Row>
            <Col $sm={6}>
              <Input label="Date" type="date" name="date" />
            </Col>
            <Col $sm={6}>
              <Input label="Time" type="time" name="time" />
            </Col>
          </Row>
        }
        footer={
          <CodeBlock
            code={`     
         <Row>
            <Col $sm={6}>
              <Input label="Date" type="date" name="date" />
            </Col>
            <Col $sm={6}>
              <Input label="Time" type="time" name="time" />
            </Col>
          
          </Row>`}
          />
        }
      />
      <PortletView
        title="Input Component checkbox"
        content={
          <Row>
            <Col $sm={6}>
              <Input
                type="checkbox"
                label="choice1"
                name="choice1"
                value="option1"
              />
              <Input
                type="checkbox"
                label="choice2"
                name="choice2"
                value="option2"
              />
            </Col>
            <Col $sm={6}>
              <Input
                type="radio"
                label="choice1"
                name="choice1"
                value="option1"
              />
              <Input
                type="radio"
                label="choice2"
                name="choice2"
                value="option2"
              />
            </Col>
          </Row>
        }
        footer={
          <CodeBlock
            code={`     
            <Row>
            <Col $sm={6}>
              <Input
                type="checkbox"
                label="choice1"
                name="choice1"
                value="option1"
              />
              <Input
                type="checkbox"
                label="choice2"
                name="choice2"
                value="option2"
              />
            </Col>
            <Col $sm={6}>
              <Input
                type="radio"
                label="choice1"
                name="choice1"
                value="option1"
              />
              <Input
                type="radio"
                label="choice2"
                name="choice2"
                value="option2"
              />
            </Col>
          </Row>
          
       `}
          />
        }
      />
      <PortletView
        title="Input Component Range"
        content={
          <Row>
            <Col $sm={6}>
              <Input
                label="Range"
                type="range"
                name="range"
                min="0"
                max="100"
                step="1"
              />
            </Col>
          </Row>
        }
        footer={
          <CodeBlock
            code={`     
            <Input label="Range" type="range" name="range" min="0" max="100" step="1"/>
          
       `}
          />
        }
      />
      <PortletView
        title="Input Component Color"
        content={
          <Row>
            <Col $sm={6}>
              <Input label="Color" type="color" name="color" />
            </Col>
          </Row>
        }
        footer={
          <CodeBlock
            code={`     
            <Input label="Color" type="color" name="color" />
          
       `}
          />
        }
      />
    </Container>
  );
};

export default InputPage;
