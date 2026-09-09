import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, Save, Upload } from "lucide-react";
import { uploadImage } from "./BlogsManager";

export const SITE_PAGES: { path: string; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
  { path: "/blogs", label: "Blogs" },
  { path: "/faq", label: "FAQ" },
  { path: "/services/website-design", label: "Website Design" },
  { path: "/services/graphic-design", label: "Graphic Design" },
  { path: "/services/oracle-dba", label: "Oracle DBA" },
  { path: "/services/mongodb-development", label: "MongoDB Development" },
  { path: "/services/crm-software", label: "CRM Software" },
  { path: "/services/android-app", label: "Android App" },
  { path: "/services/ios-app", label: "iOS App" },
  { path: "/services/flutter-app", label: "Flutter App" },
  { path: "/services/hybrid-app", label: "Hybrid App" },
  { path: "/services/wearable-app", label: "Wearable App" },
  { path: "/services/php-mysql", label: "PHP MySQL" },
  { path: "/services/laravel", label: "Laravel" },
  { path: "/services/react", label: "React" },
  { path: "/services/angular", label: "Angular" },
  { path: "/services/wordpress", label: "WordPress" },
  { path: "/services/digital-marketing", label: "Digital Marketing" },
  { path: "/technologies/android", label: "Tech: Android" },
  { path: "/technologies/ios", label: "Tech: iOS" },
  { path: "/technologies/react-native", label: "Tech: React Native" },
  { path: "/technologies/flutter", label: "Tech: Flutter" },
  { path: "/technologies/wordpress", label: "Tech: WordPress" },
  { path: "/technologies/shopify", label: "Tech: Shopify" },
  { path: "/technologies/magento", label: "Tech: Magento" },
  { path: "/technologies/java", label: "Tech: Java" },
  { path: "/technologies/php", label: "Tech: PHP" },
  { path: "/technologies/nodejs", label: "Tech: Node.js" },
  { path: "/technologies/oracle", label: "Tech: Oracle" },
  { path: "/technologies/dotnet", label: "Tech: .NET" },
];

interface SeoRow {
  path: string;
  title: string;
  description: string;
  keywords: string;
  og_image: string;
  canonical: string;
  noindex: boolean;
}

const blank = (path: string): SeoRow => ({
  path, title: "", description: "", keywords: "", og_image: "", canonical: "", noindex: false,
});

export default function SeoManager() {
  const [rows, setRows] = useState<Record<string, SeoRow>>({});
  const [selected, setSelected] = useState("/");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data, error } = await supabase.from("page_seo").select("*");
      if (!active) return;
      if (error) toast.error(error.message);
      const map: Record<string, SeoRow> = {};
      (data ?? []).forEach((r) => {
        map[r.path] = {
          path: r.path,
          title: r.title ?? "",
          description: r.description ?? "",
          keywords: r.keywords ?? "",
          og_image: r.og_image ?? "",
          canonical: r.canonical ?? "",
          noindex: r.noindex,
        };
      });
      setRows(map);
      setLoading(false);
    };
    void load();

    const channel = supabase
      .channel("admin-page-seo")
      .on("postgres_changes", { event: "*", schema: "public", table: "page_seo" }, () => void load())
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  const current = rows[selected] ?? blank(selected);
  const update = (patch: Partial<SeoRow>) =>
    setRows((prev) => ({ ...prev, [selected]: { ...current, ...patch } }));

  const save = async () => {
    setSaving(true);
    const { error } = await supabase.from("page_seo").upsert(
      {
        path: current.path,
        title: current.title || null,
        description: current.description || null,
        keywords: current.keywords || null,
        og_image: current.og_image || null,
        canonical: current.canonical || null,
        noindex: current.noindex,
      },
      { onConflict: "path" },
    );
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("SEO saved for " + current.path);
  };

  if (loading) return <div className="flex justify-center py-16"><Loader2 className="h-6 w-6 animate-spin" /></div>;

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-6">
      <Card className="p-3 max-h-[70vh] overflow-y-auto">
        <p className="text-xs uppercase text-muted-foreground px-2 pb-2 font-semibold">Pages</p>
        <div className="space-y-1">
          {SITE_PAGES.map((p) => (
            <button
              key={p.path}
              onClick={() => setSelected(p.path)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selected === p.path ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-muted"
              }`}
            >
              <span className="flex items-center justify-between gap-2">
                <span className="truncate">{p.label}</span>
                {rows[p.path] && <Badge variant="secondary" className="text-[10px]">set</Badge>}
              </span>
            </button>
          ))}
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Page SEO</h2>
            <p className="text-sm text-muted-foreground">{current.path}</p>
          </div>
          <Button onClick={save} disabled={saving}>
            {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}Save
          </Button>
        </div>

        <div className="space-y-2">
          <Label>Meta title <span className="text-xs text-muted-foreground">({current.title.length}/60)</span></Label>
          <Input value={current.title} maxLength={70} onChange={(e) => update({ title: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Meta description <span className="text-xs text-muted-foreground">({current.description.length}/160)</span></Label>
          <Textarea rows={3} maxLength={165} value={current.description} onChange={(e) => update({ description: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Keywords</Label>
          <Input value={current.keywords} onChange={(e) => update({ keywords: e.target.value })} placeholder="comma, separated, keywords" />
        </div>
        <div className="space-y-2">
          <Label>Canonical URL (optional)</Label>
          <Input value={current.canonical} onChange={(e) => update({ canonical: e.target.value })} placeholder="https://www.capstoneittrends.com/..." />
        </div>
        <div className="space-y-2">
          <Label>Social preview image</Label>
          <div className="flex gap-2">
            <Input value={current.og_image} onChange={(e) => update({ og_image: e.target.value })} placeholder="Image URL" />
            <Button asChild variant="outline" type="button" disabled={uploading}>
              <label className="cursor-pointer">
                {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setUploading(true);
                    try {
                      update({ og_image: await uploadImage(file) });
                      toast.success("Image uploaded");
                    } catch (err) {
                      toast.error(err instanceof Error ? err.message : "Upload failed");
                    } finally {
                      setUploading(false);
                    }
                  }}
                />
              </label>
            </Button>
          </div>
          {current.og_image && <img src={current.og_image} alt="Social preview" className="h-28 rounded-md object-cover" />}
        </div>
        <div className="flex items-center gap-3 pt-2">
          <Switch checked={current.noindex} onCheckedChange={(v) => update({ noindex: v })} />
          <span className="text-sm">Hide this page from Google (noindex)</span>
        </div>
      </Card>
    </div>
  );
}
