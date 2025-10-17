import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, Briefcase, TrendingUp } from "lucide-react";
import type { Article, Testimonial, Service } from "@shared/schema";

export default function AdminDashboardPage() {
  const { data: articles = [] } = useQuery<Article[]>({ 
    queryKey: ["/api/articles"] 
  });
  
  const { data: testimonials = [] } = useQuery<Testimonial[]>({ 
    queryKey: ["/api/testimonials"] 
  });
  
  const { data: services = [] } = useQuery<Service[]>({ 
    queryKey: ["/api/services"] 
  });

  const stats = [
    {
      title: "Total Articles",
      value: articles?.length || 0,
      icon: FileText,
      description: "Published tax tips and articles",
    },
    {
      title: "Testimonials",
      value: testimonials?.length || 0,
      icon: MessageSquare,
      description: "Client testimonials",
    },
    {
      title: "Services",
      value: services?.length || 0,
      icon: Briefcase,
      description: "Active services",
    },
    {
      title: "Total Content",
      value: (articles?.length || 0) + (testimonials?.length || 0) + (services?.length || 0),
      icon: TrendingUp,
      description: "All content items",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to the Rochvilles & Co. content management system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} data-testid={`card-stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid={`text-stat-value-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link 
              to="/admin/articles" 
              className="block p-3 rounded-lg hover-elevate border"
              data-testid="link-quick-articles"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Manage Articles</p>
                  <p className="text-sm text-muted-foreground">Add or edit tax tips</p>
                </div>
              </div>
            </Link>
            <Link 
              to="/admin/testimonials" 
              className="block p-3 rounded-lg hover-elevate border"
              data-testid="link-quick-testimonials"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Manage Testimonials</p>
                  <p className="text-sm text-muted-foreground">Add client reviews</p>
                </div>
              </div>
            </Link>
            <Link 
              to="/admin/services" 
              className="block p-3 rounded-lg hover-elevate border"
              data-testid="link-quick-services"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Manage Services</p>
                  <p className="text-sm text-muted-foreground">Update pricing and services</p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest content updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {articles?.slice(0, 3).map((article: any) => (
                <div key={article.id} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <FileText className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{article.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {article.category}
                    </p>
                  </div>
                </div>
              ))}
              {(!articles || articles.length === 0) && (
                <p className="text-sm text-muted-foreground">No recent articles</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
