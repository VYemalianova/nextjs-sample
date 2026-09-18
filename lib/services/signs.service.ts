import { eq } from 'drizzle-orm';

import { db } from '../db';
import { signs } from '../db/schema/signs';
import { SignType } from '../types/sign.model';

export const getAllSigns = async () => {
  return await db.select().from(signs);
};

export const getSignByType = (type: SignType) => {
  return db.select()
    .from(signs)
    .where(eq(signs.signType, type))
    .get();
};
