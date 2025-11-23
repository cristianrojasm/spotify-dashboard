import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://sahrddaiufdyqwdukiui.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaHJkZGFpdWZkeXF3ZHVraXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MTkyMTksImV4cCI6MjA3OTQ5NTIxOX0.7VNXC8igEtxNuJxoU0qgI1-6x7memYTeXZpylegOO-I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
