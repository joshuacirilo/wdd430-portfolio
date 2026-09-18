import type { NextRequest } from "next/server";
import { getProjects } from "@/lib/projects-db";

export function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");

  return Response.json(getProjects(type));
}
