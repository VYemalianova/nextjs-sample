import { db } from '../index';
import { signs } from '../schema/signs';
import { ISign } from '../../types/sign.model';

import dummyData from '../dummy-data/signs.json';

const signsData = dummyData as ISign[];

const seedSigns = () => {
  for (const sign of signsData) {
    const dbSign = {
      signType: sign.signType,
      element: sign.element,
      planet: sign.planet,
      traits: sign.traits,
      fact: sign.fact,
      description: sign.description,
      startMonth: sign.start.month,
      startDay: sign.start.day,
      endMonth: sign.end.month,
      endDay: sign.end.day,
    };

    db
      .insert(signs)
      .values(dbSign)
      .onConflictDoUpdate({
        target: signs.signType,

        set: dbSign,
      })
      .run();
  }
}

export default seedSigns;
