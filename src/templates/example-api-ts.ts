export const exampleApiTs = `
import { type NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export async function GET(request: NextRequest) {
  const url = request.url;
  const time = new Date().toLocaleTimeString();
  return NextResponse.json(
    {
      message: "Hi!",
      url: url,
      noe: time,
    },
    {
      status: 200,
    },
  );
}
`;
