import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const sheetUrl ="https://script.google.com/macros/s/AKfycbwLA0GtL2BADW64DjU0wPVEW4HCwLeUuVqfIbbAiAtoCgcAG877hnqyKygT7Xd5gpFwhw/exec"
    const response = await fetch(sheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
        { result: 'Error', error: error instanceof Error ? error.message : String(error) },
        { status: 500 }
      );
  }
}