import { createClient } from "@supabase/supabase-js";

// 환경변수 확인을 위한 로그
console.log('환경변수:', {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY
});

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 값이 비어있지 않은지 확인
if (!supabaseUrl) throw new Error('VITE_SUPABASE_URL is not defined');
if (!supabaseAnonKey) throw new Error('VITE_SUPABASE_ANON_KEY is not defined');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);