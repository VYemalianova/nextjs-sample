import { NextResponse } from 'next/server';

import { withErrorHandler } from '@/lib/middleware/error-handler';
import { getSignByType } from '@/lib/services/signs.service';
import { successResponse } from '@/lib/types/response.model';
import { SignType } from '@/lib/types/sign.model';

interface Params {
  signType: SignType;
}

export const GET = withErrorHandler(async (_req, { params }: { params: Promise<Params> }) => {
  const { signType } = await params;

  const sign = await getSignByType(signType);
  const body = new successResponse(true, 'Sign retrieved successfully.', sign);

  return NextResponse.json(body);
});
