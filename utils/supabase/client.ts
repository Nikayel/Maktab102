import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// More detailed debugging
console.log('Environment:', process.env.NODE_ENV);
console.log('All env variables:', process.env);
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase ANON Key:', supabaseAnonKey?.substring(0, 8) + '...');  // Only show first 8 chars for security

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please ensure you have NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);