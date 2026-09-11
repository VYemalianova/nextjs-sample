CREATE TABLE `horoscopes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sign_id` integer NOT NULL,
	`horoscope_type` text NOT NULL,
	`description` text NOT NULL,
	`start_date` integer NOT NULL,
	`end_date` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`sign_id`) REFERENCES `signs`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `horoscope_unique_idx` ON `horoscopes` (`sign_id`,`horoscope_type`,`start_date`,`end_date`);--> statement-breakpoint
CREATE TABLE `signs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`signType` text NOT NULL,
	`element` text NOT NULL,
	`planet` text NOT NULL,
	`traits` text NOT NULL,
	`description` text NOT NULL,
	`fact` text NOT NULL,
	`start_month` integer NOT NULL,
	`start_day` integer NOT NULL,
	`end_month` integer NOT NULL,
	`end_day` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `signs_signType_unique` ON `signs` (`signType`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`role` text NOT NULL,
	`password_hash` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);