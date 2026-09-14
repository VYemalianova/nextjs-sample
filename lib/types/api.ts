import { NextRequest, NextResponse } from 'next/server';

export type ApiHandler<T> = (
  req: NextRequest,
  context: { params: Promise<T> }
) => Promise<NextResponse>;
