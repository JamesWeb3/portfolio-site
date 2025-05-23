import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://owjwmiapqdibfkyovsge.supabase.co";
const supabaseKey = process.env.SUPABASE_SECRET_API_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);