import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { SignType, Element } from '../../types/sign.model';

const signTypes = Object.values(SignType) as [
  SignType,
  ...SignType[],
];

const elements = Object.values(Element) as [
  Element,
  ...Element[],
];

export const signs = sqliteTable("signs", {
  id: integer().primaryKey({ autoIncrement: true }),
  signType: text({ enum: signTypes })
    .notNull()
    .unique(),
  element: text({ enum: elements }).notNull(),
  planet: text().notNull(),
  traits: text({  mode: "json" })
    .$type<string[]>()
    .notNull(),
  description: text().notNull(),
  fact: text().notNull(),
  startMonth: integer("start_month").notNull(),
  startDay: integer("start_day").notNull(),
  endMonth: integer("end_month").notNull(),
  endDay: integer("end_day").notNull(),
});
