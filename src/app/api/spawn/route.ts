import { NextRequest, NextResponse } from "next/server";
import { fetchIdeaBySlug, buildSpawnPack } from "@/lib/data";

export async function GET(req: NextRequest) {
  try {
    const slug = req.nextUrl.searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { ok: false, error: "Missing slug parameter" },
        { status: 400 }
      );
    }

    const idea = await fetchIdeaBySlug(slug);

    if (!idea) {
      return NextResponse.json(
        { ok: false, error: "Idea not found" },
        { status: 404 }
      );
    }

    const spawnPack = buildSpawnPack(idea);

    return NextResponse.json({
      ok: true,
      idea: {
        title: idea.title,
        slug: idea.slug,
        bucket: idea.bucket,
      },
      spawnPack,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to generate spawn pack";

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
