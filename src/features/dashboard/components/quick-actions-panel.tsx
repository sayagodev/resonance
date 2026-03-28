'use client';

import { useSidebar } from "@/components/ui/sidebar";
import { quickActions } from "../data/quick-actions";
import { QuickActionCard } from "./quick-action-card";
import { cn } from "@/lib/utils";

export function QuickActionsPanel() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed";

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Acciones rápidas</h2>
      <div className={cn(
        "grid gap-4 grid-cols-1 md:grid-cols-2",
        isCollapsed ? "lg:grid-cols-3" : "lg:grid-cols-2",
      )}>
        {quickActions.map((action) => (
          <QuickActionCard
            key={action.title}
            title={action.title}
            description={action.description}
            gradient={action.gradient}
            href={action.href}
          />
        ))}
      </div>
    </div>
  )
}
