import { NextRequest, NextResponse } from "next/server";

import { getAllHoroscopesByFilter, addHoroscope, updateHoroscope } from "@/lib/services/horoscope.service";
import { withErrorHandler } from "@/lib/middleware/error-handler";
import { successResponse } from "@/lib/types/response.model";
import { HoroscopeType, IHoroscope, IHoroscopeFilters } from "@/lib/types/horoscope.model";
import { SignType } from "@/lib/types/sign.model";

export const GET = withErrorHandler(async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const horoscopeType = searchParams.get('horoscopeType') as HoroscopeType;
  const signType= searchParams.get('signType') as SignType;
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  const filters: IHoroscopeFilters = {
    ...(horoscopeType && { horoscopeType }),
    ...(signType && { signType }),
   ...(startDate && { startDate: new Date(startDate) }),
   ...(endDate && { endDate: new Date })
  };

  const horoscopes = await getAllHoroscopesByFilter(filters);
  const response = new successResponse(true, 'Horoscope retrieved successfully.', horoscopes);

  return NextResponse.json(response) 
});

export const POST = async (request: NextRequest) => {
  const body: IHoroscope = await request.json();

  const horoscope = addHoroscope(body);
  const response = new successResponse(true, 'Horoscope added successfully.', horoscope);

  return NextResponse.json(response) 
};

export const PUT = async (request: NextRequest) => {
  const body: IHoroscope = await request.json();

  const horoscope = updateHoroscope(body);
  const response = new successResponse(true, 'Horoscope updated successfully.', horoscope);

  return NextResponse.json(response) 
};
