export function Tabs() {
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        return (
          <button className="tab-button" key={tabIndex}>
            {tab} <span>(0)</span>
          </button>
        );
      })}
    </nav>
  );
}
