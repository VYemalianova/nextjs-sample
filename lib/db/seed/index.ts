import { db } from "../index";
import { users } from '../schema/user';
import { signs } from '../schema/signs';
import { horoscopes } from '../schema/horoscope';

import seedUsers from './users.seed';
import seedSigns from './signs.seed';
import seedHoroscopes from './horoscopes.seed';

seedUsers();
seedSigns();
seedHoroscopes();

const allUsers = db.select().from(users).all();
const allSigns = db.select().from(signs).all();
const allHoroscopes = db.select().from(horoscopes).all();

console.log("Seeding completed.");
console.log({
  users: allUsers.length,
  signs: allSigns.length,
  horoscopes: allHoroscopes.length,
});
