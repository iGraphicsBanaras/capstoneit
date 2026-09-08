import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy, Download, Loader2, RefreshCw } from "lucide-react";
import { SITE_PAGES } from "./SeoManager";

const DOMAIN = "https://www.capstoneittrends.com";

export default function SitemapManager() {
  const [xml, setXml] = useState("");
  const [loading, setLoading] = useState(true);

  const build = async () => {
    setLoading(true);
    const [{ data: blogs }, { data: seo }] = await Promise.all([
      supabase.from("blogs").select("slug, updated_at").eq("status", "published"),
      supabase.from("page_seo").select("path, noindex"),
    ]);
    const hidden = new Set((seo ?? []).filter((r) => r.noindex).map((r) => r.path));
    const today = new Date().toISOString().slice(0, 10);

    const urls = [
      ...SITE_PAGES.filter((p) => !hidden.has(p.path)).map(
        (p) =>
          `  <url>\n    <loc>${DOMAIN}${p.path === "/" ? "/" : p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${p.path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
      ),
      ...(blogs ?? [])
        .filter((b) => !hidden.has(`/blogs/${b.slug}`))
        .map(
          (b) =>
            `  <url>\n    <loc>${DOMAIN}/blogs/${b.slug}</loc>\n    <lastmod>${String(b.updated_at).slice(0, 10)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
        ),
    ];

    setXml(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`);
    setLoading(false);
  };

  useEffect(() => {
    build();
  }, []);

  const download = () => {
    const blob = new Blob([xml], { type: "application/xml" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sitemap.xml";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-xl font-bold">Sitemap</h2>
          <p className="text-sm text-muted-foreground">
            Auto-generated from your pages and published blogs. Hidden (noindex) pages are excluded.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={build} disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-2" />}Refresh
          </Button>
          <Button variant="outline" onClick={() => { navigator.clipboard.writeText(xml); toast.success("Copied"); }}>
            <Copy className="h-4 w-4 mr-2" />Copy
          </Button>
          <Button onClick={download}><Download className="h-4 w-4 mr-2" />Download</Button>
        </div>
      </div>
      <Textarea readOnly rows={18} value={xml} className="font-mono text-xs" />
    </Card>
  );
}
