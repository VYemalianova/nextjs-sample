import { NextResponse } from 'next/server';

import { withErrorHandler } from '@/lib/middleware/error-handler';
import { getSignByType } from '@/lib/services/signs.service';
import { successResponse } from '@/lib/types/response.model';
import { HttpError } from '@/lib/types/http-error';
import { SignType } from '@/lib/types/sign.model';

interface Params {
  signType: SignType;
}

export const GET = withErrorHandler(async (_req, { params }: { params: Promise<Params> }) => {
  const { signType } = await params;

  const sign = getSignByType(signType);
  
  if (!sign) {
    throw new HttpError(404, 'Sign not found.'); 
  }

  const response = new successResponse(true, 'Sign retrieved successfully.', {
    ...sign,
    start: { month: sign.startMonth, day: sign.startDay },
    end: { month: sign.endMonth, day: sign.endDay }
  });

  return NextResponse.json(response);
});
