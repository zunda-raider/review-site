import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yitukfhmeguidbgodzqn.supabase.co"; // ← SupabaseのURL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpdHVrZmhtZWd1aWRiZ29kenFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5Mjc3ODIsImV4cCI6MjA1OTUwMzc4Mn0.CTXBmltjjm5iXKcbKhWv2E04aRvIE0cEVi6InpOvuKA"; // ← Supabaseの公開キー

export const supabase = createClient(supabaseUrl, supabaseKey);
