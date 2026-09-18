import { NextResponse } from "next/server";

import { withErrorHandler } from "@/lib/middleware/error-handler";
import { deleteHoroscope } from "@/lib/services/horoscope.service";
import { successResponse } from "@/lib/types/response.model";
import { HttpError } from "@/lib/types/http-error";

interface IParams {
  id: number;
}

export const DELETE = withErrorHandler(async (_req, { params }: { params: Promise<IParams> }) => {
  const { id } = await params;

  const horoscope = deleteHoroscope(id);

  console.log(horoscope)

  if (!horoscope) {
    throw new HttpError(404, 'Horoscope not found.');
  }

  const response = new successResponse(true, 'Horoscope deleted successfully.', 1);

  return NextResponse.json(response, { status: 200 })
});
