import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  className?: string;
}

const Tabs = ({ tabs, defaultTab, className }: TabsProps) => {
  const initialTab = useMemo(() => {
    if (defaultTab && tabs.some((tab) => tab.id === defaultTab)) {
      return defaultTab;
    }
    return tabs[0]?.id ?? "";
  }, [defaultTab, tabs]);

  const [activeTab, setActiveTab] = useState(initialTab);
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap items-center gap-3 border-b border-border pb-3">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "text-xs uppercase tracking-widest px-4 py-2 rounded-sm border transition-colors duration-200",
                isActive
                  ? "border-foreground text-foreground bg-secondary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div>{activeContent}</div>
    </div>
  );
};

export default Tabs;
