import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  const body = await req.json();
  const { ip, city, region, country } = body;

  if (city?.toLowerCase() === "auckland") {
    return NextResponse.json(
      { success: false, reason: "City is excluded" },
      { status: 200 }
    );
  }

  const { error } = await supabase.from("analytics").insert({
    ip,
    city,
    website: "Portfolio Site",
    region,
    country,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json({ success: true });
}
