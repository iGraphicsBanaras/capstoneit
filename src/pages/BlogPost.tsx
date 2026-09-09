import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar, Clock as ClockIcon, Loader2, User } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  cover_image: string | null;
  read_time: string;
  published_at: string | null;
  updated_at: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  og_image: string | null;
}

function renderContent(content: string) {
  return content.split(/\n{2,}/).map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-bold mt-8 mb-3">{trimmed.slice(3)}</h2>;
    }
    if (trimmed.startsWith("# ")) {
      return <h2 key={i} className="text-3xl font-bold mt-8 mb-3">{trimmed.slice(2)}</h2>;
    }
    return <p key={i} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">{trimmed}</p>;
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    let active = true;
    setLoading(true);
    const load = async () => {
      const { data } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();
      if (!active) return;
      setPost((data as Post) ?? null);
      setLoading(false);
    };
    void load();

    const channel = supabase
      .channel(`blog:${slug}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "blogs", filter: `slug=eq.${slug}` }, () => void load())
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 flex justify-center"><Loader2 className="h-6 w-6 animate-spin" /></div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <SEO title="Article not found" description="This article is not available." canonical={`/blogs/${slug}`} />
        <div className="container mx-auto px-4 py-32 text-center space-y-4">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <Button asChild><Link to="/blogs">Back to Blogs</Link></Button>
        </div>
      </Layout>
    );
  }

  const date = post.published_at ?? post.updated_at;

  return (
    <Layout>
      <SEO
        title={post.meta_title || post.title}
        description={post.meta_description || post.excerpt}
        canonical={`/blogs/${post.slug}`}
        keywords={post.meta_keywords || undefined}
        ogType="article"
        ogImage={post.og_image || post.cover_image || undefined}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.meta_description || post.excerpt,
          image: post.og_image || post.cover_image || undefined,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: "Capstone IT Trends" },
          datePublished: date,
          dateModified: post.updated_at,
          mainEntityOfPage: `https://www.capstoneittrends.com/blogs/${post.slug}`,
        }}
      />

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link to="/blogs"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blogs</Link>
          </Button>

          <span className="inline-block bg-[hsl(var(--primary))] text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><User className="h-3 w-3" />{post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(date).toLocaleDateString()}</span>
            <span className="flex items-center gap-1"><ClockIcon className="h-3 w-3" />{post.read_time}</span>
          </div>

          {post.cover_image && (
            <img src={post.cover_image} alt={post.title} className="w-full rounded-xl mb-8 object-cover max-h-[420px]" loading="lazy" />
          )}

          <div>{renderContent(post.content)}</div>
        </div>
      </article>
    </Layout>
  );
}
