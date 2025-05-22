import React from "react";

const Tabs = ({ currentTab, setTab }) => {
  const tabList = ["home", "users", "notifications", "create"];
  return (
    <div className="tabs">
      {tabList.map(tab => (
        <button
          key={tab}
          onClick={() => setTab(tab)}
          className={currentTab === tab ? "active" : ""}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
