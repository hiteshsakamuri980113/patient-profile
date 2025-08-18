import type { ReactNode } from "react";
import SidebarNav from "../components/SideBarNav";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarNav />
      <main className="flex-1 p-6 relative">{children}</main>
    </div>
  );
}
