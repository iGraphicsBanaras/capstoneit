import { useEffect, useState } from "react";
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

/** Loads admin-managed SEO overrides for a given route path. */
export function usePageSeo(path?: string) {
  const [seo, setSeo] = useState<PageSeoRow | null>(null);

  useEffect(() => {
    if (!path) return;
    let active = true;
    supabase
      .from("page_seo")
      .select("path,title,description,keywords,og_image,canonical,noindex")
      .eq("path", path)
      .maybeSingle()
      .then(({ data }) => {
        if (active) setSeo((data as PageSeoRow) ?? null);
      });
    return () => {
      active = false;
    };
  }, [path]);

  return seo;
}
