import { atom } from "jotai";

const getCars = () => {
  const fetchData = async () => {
    const response = await fetch("/cars/");
    const json = await response.json();
    return [...json.data];
  };

  return fetchData().catch(console.error);
};

export const carsAtom = atom(getCars());
export const focusedCarAtom = atom();
export const appViewsEnum = {
  HOME_VIEW: 0,
  DETAILED_VIEW: 1,
  EDIT_VIEW: 2,
};
export const currentViewAtom = atom(appViewsEnum.HOME_VIEW);
