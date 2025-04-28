import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  console.log("HI");

  try {
    const nutritionComplianceResponse = await axios.get(
      `${API_URL}/chat/nutrition-compliance-over-user-timeframe?user_ids=${clientIds}&timeframe=${timeframe}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );

    return NextResponse.json(nutritionComplianceResponse.data.payload);
  } catch (error) {
    console.error("Error fetching exercise compliance:", error);
    return NextResponse.json(
      { error: "Failed to fetch exercise compliance" },
      { status: 500 }
    );
  }
}
