import { INCREASE_COUNT, DECREASE_COUNT, CountActionTypes } from '../types/counter';

export const increase = (): CountActionTypes => {
  return {
    type: INCREASE_COUNT,
  };
};

export const decrease = (): CountActionTypes => {
  return {
    type: DECREASE_COUNT,
  };
};
