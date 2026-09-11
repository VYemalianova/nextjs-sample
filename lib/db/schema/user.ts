import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { RoleType } from '../../types/user.model';

const RoleTypes = Object.values(RoleType) as [
  RoleType,
  ...RoleType[],
];

export const users = sqliteTable("users", {
  id: integer().primaryKey({ autoIncrement: true }),
  email: text().notNull().unique(),
  role: text({ enum: RoleTypes }).notNull(),
  passwordHash: text("password_hash").notNull(),

  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});
