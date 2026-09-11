export interface ISign {
  id: number;
  signType: SignType;
  planet: string;
  traits: string[];
  description: string;
  fact: string;
  element: Element;
  start: MonthDay;
  end: MonthDay;
}

export interface MonthDay {
  month: number;
  day: number;
}

export enum SignType {
  aries = 'aries',
  taurus = 'taurus',
  gemini = 'gemini',
  cancer = 'cancer',
  leo = 'leo',
  virgo = 'virgo',
  libra = 'libra',
  scorpio = 'scorpio',
  sagittarius = 'sagittarius',
  capricorn = 'capricorn',
  aquarius = 'aquarius',
  pisces = 'pisces',
}

export enum Element {
  fire = "Fire",
  earth = "Earth",
  air = "Air",
  water = "Water",
}
