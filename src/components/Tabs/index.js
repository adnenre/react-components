import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { TabsContainer, TabList, TabItem, TabPanelStyled } from './Tabs.styled';
const TabContext = createContext();

// #################################################################
// ################# Tab component         ######################
// #################################################################
const Tab = (props) => {
  const { $tabTitle, id } = props;
  const { changeTab, $activeTabId } = useContext(TabContext);
  const handleChangeTab = (id) => (event) => {
    event.preventDefault();
    changeTab(id);
  };
  return (
    <TabItem
      $active={$activeTabId === id}
      onClick={handleChangeTab(id)}
      {...props}
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
    return <TabPanelStyled {...rest}> {children} </TabPanelStyled>;
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
    //props.onClickTab(tabId);
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
      }}
    >
      <TabsContainer {...props}>
        <TabList>{RenderTab()}</TabList>
        {childComponents.map((child) => (
          <TabPanel
            key={child.props.id}
            id={child.props.id}
            children={child.props.children}
            $tabTitle={child.props.$tabTitle}
            $showAsGrid={props.$showAsGrid ? true : false}
          />
        ))}
      </TabsContainer>
    </Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array),
  $activeTabID: PropTypes.number,
  $showAsGrid: PropTypes.bool,
};
Tabs.defaultProps = {
  $activeTabID: 1,
};
Tabs.Tab = Tab;
export default Tabs;
