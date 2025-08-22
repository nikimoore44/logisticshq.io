import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // logixsydev@gmail.com
    const sheetUrl ="https://script.google.com/macros/s/AKfycbx_5mCfXB2GtvYV54_-VawFzNYm4Juq1L9XPzAP4hvJsR9wpwdVWoWluSRLIA-53AKE/exec"
    // const sheetUrl ="https://script.google.com/macros/s/AKfycbwLA0GtL2BADW64DjU0wPVEW4HCwLeUuVqfIbbAiAtoCgcAG877hnqyKygT7Xd5gpFwhw/exec"
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
    console.error('error in contact api:', error);
    return NextResponse.json(
        { result: 'Error', error: error instanceof Error ? error.message : String(error) },
        { status: 500 }
      );
  }
}