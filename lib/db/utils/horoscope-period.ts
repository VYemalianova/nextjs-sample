import { HoroscopeType } from "../../types/horoscope.model";

export function getHoroscopePeriod(type: HoroscopeType): { startDate: Date; endDate: Date } {
  const today = new Date();

  const startDate = new Date(today);
  const endDate = new Date(today);

  switch (type) {
    case HoroscopeType.weekly: {
      const day = today.getDay();
      const diffToMonday = day === 0 ? -6 : 1 - day;

      startDate.setDate(today.getDate() + diffToMonday);
      endDate.setDate(startDate.getDate() + 6);;

      break;
    }

    case HoroscopeType.monthly: {
      startDate.setDate(1);
      endDate.setMonth(today.getMonth() + 1, 0);

      break;
    }

    case HoroscopeType.yearly: {
      startDate.setMonth(0, 1);
      endDate.setMonth(11, 31);

      break;
    }

    default: {
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);

      break;
    }
  }

  return { startDate, endDate };
}
