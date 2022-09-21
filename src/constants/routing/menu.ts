import { routes } from "./routes";

export interface IMenuItem {
  link: string;
  text: string;
}

export const menuItems: IMenuItem[] = [
  {
    link: routes.MAIN,
    text: 'Фильмы'
  },
  {
    link: routes.LIB,
    text: 'Библиотека',
  },
  {
    link: routes.WILL_WATCH,
    text: 'Буду смотреть'
  }
];