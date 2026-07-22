import { Cpu, FileText, HardDrive, Wifi } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <PageHeader
          title="OpsCenter dashboard"
          description="A clean operational view for server health, resource usage, and recent events across your Ubuntu fleet."
          actions={<Button variant="secondary">Create alert</Button>}
        />

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
            <StatCard
              title="CPU Usage"
              value="28%"
              description="Average load across your active compute nodes."
              icon={<Cpu className="h-5 w-5" />}
              trend="Stable"
            />
            <StatCard
              title="Memory"
              value="68%"
              description="Available RAM and cached system memory."
              icon={<HardDrive className="h-5 w-5" />}
              trend="Trending up"
            />
            <StatCard
              title="Disk"
              value="42%"
              description="Usage across mounted partitions and snapshots."
              icon={<FileText className="h-5 w-5" />}
              trend="Healthy"
            />
            <StatCard
              title="Network"
              value="124 Mbps"
              description="Total throughput across your monitored network interfaces."
              icon={<Wifi className="h-5 w-5" />}
              trend="Normal"
            />
          </div>

          <div className="grid gap-6">
            <Card className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">System health</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">All systems operating normally</h2>
                </div>
                <div className="rounded-3xl bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-200">Good</div>
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <p>CPU, memory, and storage metrics are within expected thresholds.</p>
                <p>There are no critical alerts in the last 30 minutes.</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Alerts</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Active notifications</h2>
                </div>
                <div className="rounded-3xl bg-amber-500/10 px-3 py-2 text-sm font-semibold text-amber-200">2 open</div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                  <p className="text-sm font-semibold text-slate-100">High CPU on server-03</p>
                  <p className="mt-2 text-sm text-slate-400">Usage has been above 80% for 12 minutes.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                  <p className="text-sm font-semibold text-slate-100">Disk latency on storage cluster</p>
                  <p className="mt-2 text-sm text-slate-400">Observed a small increase in I/O latency across mounts.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Recent activity</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Latest events</h2>
              </div>
              <span className="rounded-full bg-slate-800/80 px-3 py-2 text-xs text-slate-300">Live</span>
            </div>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <p className="font-semibold text-slate-100">Scheduled maintenance completed</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">14 minutes ago</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <p className="font-semibold text-slate-100">New SSH key added for admin</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">35 minutes ago</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <p className="font-semibold text-slate-100">Backup snapshot created</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">1 hour ago</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Quick actions</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Take action</h2>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-200">Fast</span>
            </div>
            <div className="mt-6 grid gap-3">
              <button className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-left text-sm text-slate-100 transition hover:bg-slate-800">Deploy configuration update</button>
              <button className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-left text-sm text-slate-100 transition hover:bg-slate-800">Review failed jobs</button>
              <button className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-left text-sm text-slate-100 transition hover:bg-slate-800">Open server console</button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
