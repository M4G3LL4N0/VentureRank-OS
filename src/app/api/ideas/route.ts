import { NextResponse } from "next/server";
import { fetchIdeas } from "@/lib/data";

export async function GET() {
  try {
    const ideas = await fetchIdeas();
    return NextResponse.json({ ok: true, ideas });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch ideas";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
