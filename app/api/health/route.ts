// A health check endpoint for the API

import { NextResponse } from "next/server"

export async function GET() {
  const healthMessage = "API is healthy"

  return NextResponse.json(healthMessage, {
    status: 200,
  })
}
