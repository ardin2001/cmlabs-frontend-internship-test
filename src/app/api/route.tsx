import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      status: true,
      statusCode: 200,
      message: "Successfully retrieved data",
      data: {
        text: "Hello World!",
      },
    },
    {
      status: 200,
    }
  );
}