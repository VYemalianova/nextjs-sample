import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

import { signs } from './signs';
import { HoroscopeType } from '../../types/horoscope.model';

const horoscopeTypes = Object.values(HoroscopeType) as [
  HoroscopeType,
  ...HoroscopeType[],
];

export const horoscopes = sqliteTable("horoscopes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  signId: integer("sign_id")
    .notNull()
    .references(() => signs.id, { onDelete: "cascade" }),

  horoscopeType: text("horoscope_type", {
    enum: horoscopeTypes,
  }).notNull(),
  description: text().notNull(),
  startDate: integer("start_date", { mode: "timestamp" }).notNull(),
  endDate: integer("end_date", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
},
(table) => [
  uniqueIndex("horoscope_unique_idx")
    .on(
      table.signId,
      table.horoscopeType,
      table.startDate,
      table.endDate,
    ),
]);
