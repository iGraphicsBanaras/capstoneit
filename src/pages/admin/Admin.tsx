import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, LogOut, FileText, Search, Globe, Map } from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import BlogsManager from "@/components/admin/BlogsManager";
import SeoManager from "@/components/admin/SeoManager";
import SitemapManager from "@/components/admin/SitemapManager";

export default function Admin() {
  const { user, isAdmin, loading, signOut } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/auth", { replace: true });
  }, [loading, user, navigate]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="p-8 max-w-md text-center space-y-4">
          <h1 className="text-xl font-bold">No admin access</h1>
          <p className="text-muted-foreground text-sm">
            This account ({user.email}) is not an administrator.
          </p>
          <Button variant="outline" onClick={signOut}>Sign out</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Admin Panel | Capstone IT Trends</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/png.png" alt="Capstone IT Trends" className="h-9 w-auto" />
            <span className="font-bold hidden sm:inline">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/"><Globe className="h-4 w-4 mr-2" />View site</Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="blogs">
          <TabsList className="mb-6">
            <TabsTrigger value="blogs"><FileText className="h-4 w-4 mr-2" />Blogs</TabsTrigger>
            <TabsTrigger value="seo"><Search className="h-4 w-4 mr-2" />SEO</TabsTrigger>
            <TabsTrigger value="sitemap"><Map className="h-4 w-4 mr-2" />Sitemap</TabsTrigger>

          </TabsList>
          <TabsContent value="blogs"><BlogsManager /></TabsContent>
          <TabsContent value="seo"><SeoManager /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
