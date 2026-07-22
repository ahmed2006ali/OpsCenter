import {
  Activity,
  Cpu,
  FileText,
  Folder,
  LayoutDashboard,
  LifeBuoy,
  Monitor,
  Settings,
  Server,
  Share2,
  Terminal,
  Timer,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Servers", href: "/dashboard/servers", icon: Server },
  { label: "Monitoring", href: "/dashboard/monitoring", icon: Monitor },
  { label: "Processes", href: "/dashboard/processes", icon: Cpu },
  { label: "Services", href: "/dashboard/services", icon: Zap },
  { label: "Files", href: "/dashboard/files", icon: Folder },
  { label: "Networking", href: "/dashboard/networking", icon: Share2 },
  { label: "SSH", href: "/dashboard/ssh", icon: Terminal },
  { label: "Logs", href: "/dashboard/logs", icon: FileText },
  { label: "Cron Jobs", href: "/dashboard/cron-jobs", icon: Timer },
  { label: "Scripts", href: "/dashboard/scripts", icon: Activity },
  { label: "Users", href: "/dashboard/users", icon: Users },
  { label: "Audit Logs", href: "/dashboard/audit-logs", icon: LifeBuoy },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];
