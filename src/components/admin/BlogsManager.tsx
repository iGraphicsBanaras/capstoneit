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
import { Loader2, Pencil, Plus, Trash2, Upload, ExternalLink } from "lucide-react";

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  cover_image: string | null;
  read_time: string;
  status: string;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  og_image: string | null;
  updated_at: string;
}

const emptyBlog = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  category: "Web Development",
  author: "Capstone IT Trends",
  cover_image: "",
  read_time: "5 min read",
  status: "draft",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  og_image: "",
};

const slugify = (v: string) =>
  v.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

export async function uploadImage(file: File): Promise<string> {
  const path = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, ""))}.${file.name.split(".").pop()}`;
  const { error } = await supabase.storage.from("blog-images").upload(path, file, { upsert: false });
  if (error) throw error;
  const { data, error: signErr } = await supabase.storage
    .from("blog-images")
    .createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
  if (signErr || !data) throw signErr ?? new Error("Could not create image link");
  return data.signedUrl;
}

export default function BlogsManager() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<typeof emptyBlog & { id?: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<"cover" | "og" | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("blogs").select("*").order("updated_at", { ascending: false });
    if (error) toast.error(error.message);
    setBlogs((data as Blog[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("admin-blogs")
      .on("postgres_changes", { event: "*", schema: "public", table: "blogs" }, () => load())
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const save = async () => {
    if (!editing) return;
    if (!editing.title.trim()) return toast.error("Title is required");
    setSaving(true);
    const payload = {
      ...editing,
      slug: editing.slug.trim() || slugify(editing.title),
      cover_image: editing.cover_image || null,
      og_image: editing.og_image || null,
      meta_title: editing.meta_title || null,
      meta_description: editing.meta_description || null,
      meta_keywords: editing.meta_keywords || null,
      published_at: editing.status === "published" ? new Date().toISOString() : null,
    };
    const { id, ...rest } = payload;
    const { error } = id
      ? await supabase.from("blogs").update(rest).eq("id", id)
      : await supabase.from("blogs").insert(rest);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success(id ? "Blog updated" : "Blog created");
    setEditing(null);
    load();
  };

  const remove = async (blog: Blog) => {
    if (!confirm(`Delete "${blog.title}"?`)) return;
    const { error } = await supabase.from("blogs").delete().eq("id", blog.id);
    if (error) return toast.error(error.message);
    toast.success("Blog deleted");
    load();
  };

  const handleUpload = async (file: File, field: "cover_image" | "og_image") => {
    setUploading(field === "cover_image" ? "cover" : "og");
    try {
      const url = await uploadImage(file);
      setEditing((prev) => (prev ? { ...prev, [field]: url } : prev));
      toast.success("Image uploaded");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(null);
    }
  };

  if (editing) {
    return (
      <Card className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{editing.id ? "Edit Blog" : "New Blog"}</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
            <Button onClick={save} disabled={saving}>
              {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}Save
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input
              value={editing.title}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  title: e.target.value,
                  slug: editing.id ? editing.slug : slugify(e.target.value),
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>URL slug</Label>
            <Input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: slugify(e.target.value) })} />
          </div>
          <div className="space-y-2">
            <Label>Category</Label>
            <Input value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Author</Label>
            <Input value={editing.author} onChange={(e) => setEditing({ ...editing, author: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Read time</Label>
            <Input value={editing.read_time} onChange={(e) => setEditing({ ...editing, read_time: e.target.value })} />
          </div>
          <div className="flex items-center gap-3 pt-7">
            <Switch
              checked={editing.status === "published"}
              onCheckedChange={(v) => setEditing({ ...editing, status: v ? "published" : "draft" })}
            />
            <span className="text-sm">{editing.status === "published" ? "Published (live)" : "Draft (hidden)"}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Short summary</Label>
          <Textarea rows={2} value={editing.excerpt} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} />
        </div>

        <div className="space-y-2">
          <Label>Content</Label>
          <Textarea
            rows={14}
            value={editing.content}
            onChange={(e) => setEditing({ ...editing, content: e.target.value })}
            placeholder="Write your article here. Blank line = new paragraph. Lines starting with ## become headings."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Cover image</Label>
            <div className="flex gap-2">
              <Input value={editing.cover_image} onChange={(e) => setEditing({ ...editing, cover_image: e.target.value })} placeholder="Image URL" />
              <Button asChild variant="outline" type="button" disabled={uploading === "cover"}>
                <label className="cursor-pointer">
                  {uploading === "cover" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "cover_image")}
                  />
                </label>
              </Button>
            </div>
            {editing.cover_image && <img src={editing.cover_image} alt="Cover preview" className="h-28 w-full object-cover rounded-md" />}
          </div>
          <div className="space-y-2">
            <Label>Social preview image (OG)</Label>
            <div className="flex gap-2">
              <Input value={editing.og_image} onChange={(e) => setEditing({ ...editing, og_image: e.target.value })} placeholder="Image URL" />
              <Button asChild variant="outline" type="button" disabled={uploading === "og"}>
                <label className="cursor-pointer">
                  {uploading === "og" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "og_image")}
                  />
                </label>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-5 space-y-4">
          <h3 className="font-semibold">SEO settings</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Meta title</Label>
              <Input value={editing.meta_title} onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })} maxLength={70} />
            </div>
            <div className="space-y-2">
              <Label>Meta keywords</Label>
              <Input value={editing.meta_keywords} onChange={(e) => setEditing({ ...editing, meta_keywords: e.target.value })} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Meta description</Label>
            <Textarea rows={2} maxLength={165} value={editing.meta_description} onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })} />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Blogs ({blogs.length})</h2>
        <Button onClick={() => setEditing({ ...emptyBlog })}>
          <Plus className="h-4 w-4 mr-2" />New Blog
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16"><Loader2 className="h-6 w-6 animate-spin" /></div>
      ) : blogs.length === 0 ? (
        <Card className="p-10 text-center text-muted-foreground">No blogs yet. Create your first article.</Card>
      ) : (
        <div className="space-y-3">
          {blogs.map((b) => (
            <Card key={b.id} className="p-4 flex items-center gap-4">
              {b.cover_image && <img src={b.cover_image} alt={b.title} className="h-14 w-20 object-cover rounded" />}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold truncate">{b.title}</p>
                  <Badge variant={b.status === "published" ? "default" : "secondary"}>{b.status}</Badge>
                  <Badge variant="outline">{b.category}</Badge>
                </div>
                <p className="text-xs text-muted-foreground truncate">/blogs/{b.slug}</p>
              </div>
              <div className="flex gap-2">
                {b.status === "published" && (
                  <Button size="icon" variant="ghost" asChild>
                    <a href={`/blogs/${b.slug}`} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /></a>
                  </Button>
                )}
                <Button size="icon" variant="ghost" onClick={() => setEditing({
                  id: b.id,
                  slug: b.slug,
                  title: b.title,
                  excerpt: b.excerpt,
                  content: b.content,
                  category: b.category,
                  author: b.author,
                  cover_image: b.cover_image ?? "",
                  read_time: b.read_time,
                  status: b.status,
                  meta_title: b.meta_title ?? "",
                  meta_description: b.meta_description ?? "",
                  meta_keywords: b.meta_keywords ?? "",
                  og_image: b.og_image ?? "",
                })}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" onClick={() => remove(b)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
