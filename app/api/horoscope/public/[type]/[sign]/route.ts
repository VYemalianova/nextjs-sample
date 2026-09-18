import { NextResponse } from "next/server";

import { getHoroscope } from "@/lib/services/horoscope.service";
import { withErrorHandler } from "@/lib/middleware/error-handler";
import { successResponse } from "@/lib/types/response.model";
import { HoroscopeType } from "@/lib/types/horoscope.model";
import { SignType } from "@/lib/types/sign.model";
import { HttpError } from "@/lib/types/http-error";

interface IParams {
  type: HoroscopeType;
  sign: SignType;
}

export const GET = withErrorHandler(async (_req, { params }: { params: Promise<IParams> }) => {
  const { type, sign } = await params;

  const horoscope = getHoroscope(type, sign);

  if (!horoscope) {
    throw new HttpError(404, 'Horoscope not found.');
  }

  const response = new successResponse(true, 'Horoscope retrieved successfully.', horoscope);

  return NextResponse.json(response) 
});
  