ALTER TABLE public.blogs REPLICA IDENTITY FULL;
ALTER TABLE public.page_seo REPLICA IDENTITY FULL;
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname='supabase_realtime' AND schemaname='public' AND tablename='blogs') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.blogs;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname='supabase_realtime' AND schemaname='public' AND tablename='page_seo') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.page_seo;
  END IF;
END $$;