import { useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Briefcase,
  LogOut,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Articles",
    url: "/admin/articles",
    icon: FileText,
  },
  {
    title: "Testimonials",
    url: "/admin/testimonials",
    icon: MessageSquare,
  },
  {
    title: "Services",
    url: "/admin/services",
    icon: Briefcase,
  },
];

export function AdminSidebar() {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();

  async function handleLogout() {
    try {
      await apiRequest("POST", "/api/admin/logout", {});
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
      setLocation("/admin/login");
    } catch (error) {
      toast({
        title: "Logout failed",
        description: "An error occurred while logging out",
        variant: "destructive",
      });
    }
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Settings className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold">Rochvilles & Co.</p>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Content Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.url}
                    data-testid={`nav-${item.title.toLowerCase()}`}
                  >
                    <a href={item.url} onClick={(e) => {
                      e.preventDefault();
                      setLocation(item.url);
                    }}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={handleLogout}
          data-testid="button-logout"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
