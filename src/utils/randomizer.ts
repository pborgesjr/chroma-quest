import {DEFAULT_MAX_VALUE, DEFAULT_MIN_VALUE} from '../constants';

export const randomNumber = (
  min: number = DEFAULT_MIN_VALUE,
  max: number = DEFAULT_MAX_VALUE,
) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};
