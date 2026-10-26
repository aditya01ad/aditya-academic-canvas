import React, { useEffect, useRef, useState } from "react";

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
  const firstId = tabs[0]?.id ?? "";
  const validDefault = tabs.some(tab => tab.id === defaultTab) ? defaultTab! : firstId;
  const [active, setActive] = useState(validDefault);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());

  // React only when the requested URL/default tab changes, not on every render
  // (the parent may recreate its tabs array).
  useEffect(() => { setActive(validDefault); }, [validDefault]);

  if (!tabs.length) return null;
  const selected = tabs.some(tab => tab.id === active) ? active : validDefault;

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0
      : event.key === "End" ? tabs.length - 1
      : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    const id = tabs[next].id;
    setActive(id);
    tabRefs.current.get(id)?.focus();
  }

  return (
    <div>
      <div className="tab-bar" role="tablist" aria-label="About and research sections">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={node => {
              if (node) tabRefs.current.set(tab.id, node);
              else tabRefs.current.delete(tab.id);
            }}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={selected === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={selected === tab.id ? 0 : -1}
            className={`tab-btn${selected === tab.id ? " tab-active" : ""}`}
            onClick={() => setActive(tab.id)}
            onKeyDown={event => onKeyDown(event, index)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map(tab => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={0}
          className="tab-panel"
          hidden={selected !== tab.id}
        >
          {selected === tab.id && tab.content}
        </div>
      ))}
    </div>
  );
}
