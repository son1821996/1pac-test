import React from 'react';

import { string, func } from 'prop-types';

const Tab = ({ activeTab, label, onClick }) => {

  const onClickTab = () => {
    localStorage.setItem('active_tab', label);
    onClick(label)
  }

  return (
    <div
      className={`tab-list-item ${activeTab === label ? 'active-tab' : ''}`}
      onClick={onClickTab}
    >
      {label}
    </div>
  )
};

Tab.propTypes = {
  activeTab: string.isRequired,
  label: string.isRequired,
  onClick: func.isRequired
};

export default Tab;
