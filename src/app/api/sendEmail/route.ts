import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const { name, email, message } = data;

  console.log("DATA ZZ", data);

  const res = await fetch(
    "https://hook.eu2.make.com/z4xrrksb4d4b18bopjm9f1siaqi2rplg",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { success: false, error: "Failed to send data" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
