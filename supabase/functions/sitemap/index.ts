import { createClient } from "npm:@supabase/supabase-js@2";

const DOMAIN = "https://www.capstoneittrends.com";

const STATIC_PATHS = [
  "/", "/about", "/portfolio", "/contact", "/blogs", "/faq",
  "/services/website-design", "/services/graphic-design", "/services/oracle-dba",
  "/services/mongodb-development", "/services/crm-software", "/services/android-app",
  "/services/ios-app", "/services/flutter-app", "/services/hybrid-app",
  "/services/wearable-app", "/services/php-mysql", "/services/laravel",
  "/services/react", "/services/angular", "/services/wordpress",
  "/services/digital-marketing",
  "/technologies/android", "/technologies/ios", "/technologies/react-native",
  "/technologies/flutter", "/technologies/wordpress", "/technologies/shopify",
  "/technologies/magento", "/technologies/java", "/technologies/php",
  "/technologies/nodejs", "/technologies/oracle", "/technologies/dotnet",
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: { "Access-Control-Allow-Origin": "*" } });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: blogs } = await supabase
    .from("blogs")
    .select("slug, updated_at")
    .eq("status", "published");

  const { data: seo } = await supabase.from("page_seo").select("path, noindex");
  const noindexPaths = new Set((seo ?? []).filter((r) => r.noindex).map((r) => r.path));

  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    ...STATIC_PATHS.filter((p) => !noindexPaths.has(p)).map(
      (p) => `<url><loc>${DOMAIN}${p}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
    ),
    ...(blogs ?? [])
      .filter((b) => !noindexPaths.has(`/blogs/${b.slug}`))
      .map(
        (b) =>
          `<url><loc>${DOMAIN}/blogs/${b.slug}</loc><lastmod>${String(b.updated_at).slice(0, 10)}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`,
      ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
});
