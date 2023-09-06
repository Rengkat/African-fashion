import { NextResponse } from "next/server";
export default async function GET(res: Response) {
  const { firstName, surname, email, phone, password } = await res.json();
  const data = await fetch("", {
    method: "POST",
    headers: {},
    body: JSON.stringify({}),
  });
  return NextResponse.json({});
}
