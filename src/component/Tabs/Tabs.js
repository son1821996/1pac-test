import React, { useState } from 'react';

import { array } from 'prop-types';

import Tab from './Tab/Tab';

import './Tabs.scss';


const Tabs = ({ children }) => {
  const currentTab = localStorage.getItem('active_tab');
  console.log('currentTab', currentTab);

  const [activeTab, setActiveTab] = useState((currentTab === '' || currentTab === null) ? children[0].props.label : currentTab);

  const onSelectTab = (tab) => {
    setActiveTab(tab);
  }

  console.log('activeTab', activeTab);

  return (
    <div className="tabs">
      <div className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab 
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onSelectTab}
            />
          )
        })}
      </div>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return '';
          return child.props.children;
        })}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  children: array.isRequired
};

export default Tabs;