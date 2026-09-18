import { NextResponse } from 'next/server';

import { withErrorHandler } from '@/lib/middleware/error-handler';
import { successResponse } from '@/lib/types/response.model';
import { getAllSigns } from '@/lib/services/signs.service';

export const GET = withErrorHandler(async () => {
  const signs = await getAllSigns();
  
  const response = new successResponse(
    true,
    'Signs retrieved successfully.',
    signs.map((row) => ({
      ...row,
      start: { month: row.startMonth, day: row.startDay },
      end: { month: row.endMonth, day: row.endDay }
    })));

  return NextResponse.json(response);
});
