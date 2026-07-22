import { PageHeader } from "@/components/ui/PageHeader";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { Card } from "@/components/ui/Card";

export default function DashboardSectionPage({ params }: { params: { section: string[] } }) {
  const section = params.section?.join(" / ") ?? "Dashboard";

  return (
    <DashboardShell>
      <div className="space-y-6">
        <PageHeader
          title={section}
          description="This section is ready for the next phase of OpsCenter development."
        />
        <Card className="p-8">
          <p className="text-slate-300">
            Placeholder content for the selected module. The layout, navigation, and style are prepared so the implementation can be added in future sprints.
          </p>
        </Card>
      </div>
    </DashboardShell>
  );
}
