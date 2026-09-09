import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface PageSeoRow {
  path: string;
  title: string | null;
  description: string | null;
  keywords: string | null;
  og_image: string | null;
  canonical: string | null;
  noindex: boolean;
}

/** Loads admin-managed SEO overrides for a given route path, live-updating on admin edits. */
export function usePageSeo(path?: string) {
  const [seo, setSeo] = useState<PageSeoRow | null>(null);

  const load = useCallback(async () => {
    if (!path) return;
    const { data } = await supabase
      .from("page_seo")
      .select("path,title,description,keywords,og_image,canonical,noindex")
      .eq("path", path)
      .maybeSingle();
    setSeo((data as PageSeoRow) ?? null);
  }, [path]);

  useEffect(() => {
    if (!path) return;
    let active = true;
    void load().then(() => active);

    const channel = supabase
      .channel(`page_seo:${path}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "page_seo", filter: `path=eq.${path}` },
        () => {
          if (active) void load();
        },
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, [path, load]);

  return seo;
}
