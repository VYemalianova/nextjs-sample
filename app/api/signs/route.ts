import { NextResponse } from 'next/server';

import { withErrorHandler } from '@/lib/middleware/error-handler';
import { successResponse } from '@/lib/types/response.model';
import { getAllSigns } from '@/lib/services/signs.service';

export const GET = withErrorHandler(async () => {
  const signs = await getAllSigns();
  const body = new successResponse(true, 'Signs retrieved successfully.', signs);

  return NextResponse.json(body);
});
