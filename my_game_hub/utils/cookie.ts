import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = async (name: string, value: any, option?: CookieSetOptions) => {
  return cookies.set(name, value, option);
};

export const getCookie = async (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
