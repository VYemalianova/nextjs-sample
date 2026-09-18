import { HoroscopeType } from "../types/horoscope.model";

export function getHoroscopePeriod(type: HoroscopeType): { startDate: Date; endDate: Date } {
  const today = new Date();

  const startDate = new Date(today);
  const endDate = new Date(today);

  switch (type) {
    case HoroscopeType.weekly: {
      const day = today.getUTCDay();
      const diffToMonday = day === 0 ? -6 : 1 - day;

      startDate.setUTCDate(today.getUTCDate() + diffToMonday);
      endDate.setUTCDate(startDate.getUTCDate() + 6);;

      break;
    }

    case HoroscopeType.monthly: {
      startDate.setUTCDate(1);
      endDate.setUTCMonth(today.getUTCMonth() + 1, 0);

      break;
    }

    case HoroscopeType.yearly: {
      startDate.setUTCMonth(0, 1);
      endDate.setUTCMonth(11, 31);

      break;
    }
  }

  startDate.setUTCHours(0, 0, 0, 0);
  endDate.setUTCHours(23, 59, 59, 999);

  return { startDate, endDate };
}
