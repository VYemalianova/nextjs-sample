import { and, eq, gte, lte } from 'drizzle-orm';

import { db } from '../db';
import { horoscopes } from '../db/schema/horoscope';
import { getHoroscopePeriod } from '../utils/horoscope-period';
import { signs } from '../db/schema/signs';
import { HoroscopeType, IHoroscope, IHoroscopeFilters } from '../types/horoscope.model';
import { SignType } from '../types/sign.model';
import { HttpError } from '../types/http-error';

const getHoroscope = (horoscopeType: HoroscopeType, signType: SignType) => {
  const { startDate, endDate } = getHoroscopePeriod(horoscopeType);

  return db.select({
    id: horoscopes.id,
    horoscopeType: horoscopes.horoscopeType,
    description: horoscopes.description,
    startDate: horoscopes.startDate,
    endDate: horoscopes.endDate,
    signType: signs.signType,
  })
  .from(horoscopes)
  .innerJoin(signs, eq(horoscopes.signId, signs.id))
  .where(and(
    eq(horoscopes.horoscopeType, horoscopeType),
    eq(signs.signType, signType),
    gte(horoscopes.startDate, startDate),
    lte(horoscopes.endDate, endDate)
  ))
  .get();
};

const addHoroscope = (body: IHoroscope) => {
  const sign = db
    .select({ id: signs.id })
    .from(signs)
    .where(eq(signs.signType, body.signType))
    .get();

  if (!sign) {
    throw new HttpError(404, "Sign not found.");
  }

  return db
    .insert(horoscopes)
    .values({
      horoscopeType: body.horoscopeType,
      signId: sign.id,
      description: body.description,
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate),
    })
    .returning()
    .get();
}

const updateHoroscope = (data: IHoroscope) => {
  const sign = db
    .select({ id: signs.id })
    .from(signs)
    .where(eq(signs.signType, data.signType))
    .get();

  if (!sign) {
    throw new HttpError(404, "Sign not found.");
  }

  return db
    .update(horoscopes)
    .set({
      horoscopeType: data.horoscopeType,
      signId: sign.id,
      description: data.description,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    })
    .where(eq(horoscopes.id, data.id))
    .returning()
    .get();
}

const getAllHoroscopesByFilter = async (filters: IHoroscopeFilters) => {
  const { horoscopeType, signType, startDate, endDate } = filters;
  const conditions = [];

  if (horoscopeType) {
    conditions.push(eq(horoscopes.horoscopeType, horoscopeType));
  }

  if (signType) {
    conditions.push(eq(signs.signType, signType));
  }

  if (startDate) {
    conditions.push(gte(horoscopes.startDate, startDate));
  }

  if (endDate) {
    conditions.push(lte(horoscopes.endDate, endDate));
  }

  return await db.select({
      id: horoscopes.id,
      horoscopeType: horoscopes.horoscopeType,
      description: horoscopes.description,
      startDate: horoscopes.startDate,
      endDate: horoscopes.endDate,
      signType: signs.signType,
  })
  .from(horoscopes)
  .innerJoin(signs, eq(horoscopes.signId, signs.id))
  .where(and(...conditions));
};

const deleteHoroscope = (id: number) => {
  return db.delete(horoscopes)
    .where(eq(horoscopes.id, id))
    .returning()
    .get();
}

export { getHoroscope, addHoroscope, updateHoroscope, getAllHoroscopesByFilter, deleteHoroscope };
