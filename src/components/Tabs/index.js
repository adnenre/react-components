import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { TabsContainer, TabList, TabItem, TabPanelStyled } from './Tabs.styled';
const TabContext = createContext();

// #################################################################
// ################# Tab component         ######################
// #################################################################
const Tab = (props) => {
  const { $tabTitle, id } = props;
  const {
    changeTab,
    $activeTabId,
    props: parentProps,
  } = useContext(TabContext);
  const handleChangeTab = (id) => (event) => {
    event.preventDefault();
    changeTab(id);
  };
  return (
    <TabItem
      data-testid={$tabTitle}
      $active={$activeTabId === id}
      onClick={handleChangeTab(id)}
      {...props}
      {...parentProps}
    >
      {$tabTitle}
    </TabItem>
  );
};
Tab.propTypes = {
  id: PropTypes.number.isRequired,
  $tabTitle: PropTypes.string.isRequired,
};

// #################################################################
// ################# TabPanel component         ######################
// #################################################################
const TabPanel = (props) => {
  const { id, children, ...rest } = props;
  const { $activeTabId } = useContext(TabContext);
  if ($activeTabId === id) {
    return (
      <TabPanelStyled data-testid="active-panel" {...rest}>
        {children}
      </TabPanelStyled>
    );
  }
  return null;
};
TabPanel.propTypes = {
  id: PropTypes.number,
  children: PropTypes.node,
};

// #################################################################
// ################# Tabs component         ######################
// #################################################################
const Tabs = (props) => {
  const [$activeTabId, setActiveTab] = useState(1);
  const childComponents = props.children.filter(Boolean);
  const changeTab = (tabId) => {
    setActiveTab(tabId);
  };

  const { Provider } = TabContext;
  const RenderTab = () =>
    childComponents.map((child) => (
      <Tab
        key={child.props.id}
        id={child.props.id}
        children={child.props.children}
        $tabTitle={child.props.$tabTitle}
      />
    ));

  return (
    <Provider
      value={{
        $activeTabId,
        changeTab,
        props,
      }}
    >
      <TabsContainer {...props}>
        <TabList {...props}>{RenderTab()}</TabList>
        {childComponents.map((child) => (
          <TabPanel
            key={child.props.id}
            id={child.props.id}
            children={child.props.children}
            $tabTitle={child.props.$tabTitle}
          />
        ))}
      </TabsContainer>
    </Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array),
  $activeTabID: PropTypes.number,
};
Tabs.defaultProps = {
  $activeTabID: 1,
};
Tabs.Tab = Tab;
export default Tabs;
