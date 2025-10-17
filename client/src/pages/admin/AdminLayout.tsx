import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { useQuery } from "@tanstack/react-query";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [, setLocation] = useLocation();
  
  const { data: session, isLoading } = useQuery({
    queryKey: ["/api/admin/session"],
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && (!session || !(session as any).authenticated)) {
      setLocation("/admin/login");
    }
  }, [session, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!session || !(session as any).authenticated) {
    return null;
  }

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AdminSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center gap-2 border-b p-4">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Content Management System</h2>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
