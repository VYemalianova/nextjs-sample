import { eq } from 'drizzle-orm';

import { db } from '../db';
import { signs } from '../db/schema/signs';
import { ISign, SignType } from '../types/sign.model';

export const getAllSigns = async (): Promise<ISign[]> => {
  const rows = await db.select().from(signs);

  return rows.map((row) => ({
    ...row,
    start: { month: row.startMonth, day: row.startDay },
    end: { month: row.endMonth, day: row.endDay }
  }));
};

export const getSignByType = async (type: SignType): Promise<ISign> => {
  const rows = await db.select().from(signs).where(eq(signs.signType, type));

  return {
    ...rows[0],
    start: { month: rows[0].startMonth, day: rows[0].startDay },
    end: { month: rows[0].endMonth, day: rows[0].endDay }
  };
};
