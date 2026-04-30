import React, { useEffect, useState } from "react";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id ?? "");

  useEffect(() => {
    if (!defaultTab) return;
    if (tabs.some((tab) => tab.id === defaultTab)) {
      setActive(defaultTab);
    }
  }, [defaultTab, tabs]);

  if (!tabs.length) return null;

  return (
    <div>
      <div className="tab-bar" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            className={`tab-btn${active === tab.id ? " tab-active" : ""}`}
            onClick={() => setActive(tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="tab-panel"
          hidden={active !== tab.id}
        >
          {active === tab.id && tab.content}
        </div>
      ))}
    </div>
  );
}
