import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const { name, email, message } = data;

  const res = await fetch(
    "https://hook.us2.make.com/7becckrmg9qw1p7gvwratg682n7kct9a",
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
