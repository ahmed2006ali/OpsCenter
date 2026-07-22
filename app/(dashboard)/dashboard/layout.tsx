import type { Metadata } from "next";
import { DashboardGuard } from "@/components/layout/DashboardGuard";

export const metadata: Metadata = {
  title: "Dashboard · OpsCenter",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardGuard>{children}</DashboardGuard>;
}
