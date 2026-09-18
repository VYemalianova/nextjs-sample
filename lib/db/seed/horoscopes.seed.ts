import { eq } from "drizzle-orm";

import { db } from "../index";
import { horoscopes } from "../schema/horoscope";
import { signs } from "../schema/signs";

import { HoroscopeType, IHoroscope } from "../../types/horoscope.model";

import dummyData from "../dummy-data/horoscopes.json";
import { SignType } from "../../types/sign.model";
import { getHoroscopePeriod } from "../../utils/horoscope-period";

const horoscopesData = dummyData as Partial<IHoroscope>[];

const seedHoroscopes = () => {
  for (const horoscope of horoscopesData) {
    const sign = db
      .select({ id: signs.id })
      .from(signs)
      .where(eq(signs.signType, horoscope.signType as SignType))
      .get();

    if (!sign) {
      throw new Error(
        `Sign not found: ${horoscope.signType}`,
      );
    }

    const { startDate, endDate } = getHoroscopePeriod(horoscope.horoscopeType as HoroscopeType);

    const dbHoroscope = {
      horoscopeType: horoscope.horoscopeType as HoroscopeType,
      signId: sign.id,
      description: horoscope.description as string,
      startDate,
      endDate,
    };

    console.log(dbHoroscope)

    db
      .insert(horoscopes)
      .values(dbHoroscope)
      .onConflictDoUpdate({
        target: [
          horoscopes.signId,
          horoscopes.horoscopeType,
          horoscopes.startDate,
          horoscopes.endDate,
        ],
        set: dbHoroscope,
      })
      .run();
  }
};

export default seedHoroscopes;
