import React, { Component } from 'react';
import { Title } from '../components/Portlet/Portlet.Styled';
import {
  Portlet,
  PortletHeader,
  PortletBody,
} from '../components/Portlet/Portlet.Styled';
import {
  NavContainer,
  NavMenu,
  NavList,
  NavElement,
  NavLink,
  NavToggle,
  BtnToggle,
} from '../components/Navbar';

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      toggle: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ visible: !this.state.visible, toggle: !this.state.toggle });
  }
  render() {
    return (
      <NavContainer>
        <NavMenu>
          <NavList visible={this.state.visible}>
            <NavElement>
              <NavLink>home</NavLink>
            </NavElement>
            <NavElement>
              <NavLink>blog</NavLink>
            </NavElement>
          </NavList>
        </NavMenu>
        <NavToggle onClick={this.handleClick}>
          <BtnToggle toggle={this.state.toggle} />
        </NavToggle>
      </NavContainer>
    );
  }
}

export default NavbarPage;
