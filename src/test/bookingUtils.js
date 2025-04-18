import { fetchAPI } from "../API/api";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE") {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};
