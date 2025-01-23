import {DEFAULT_MAX_VALUE, DEFAULT_MIN_VALUE} from '../constants';
import {ValueColorType} from '../types';

export const randomNumber = (
  min: ValueColorType = DEFAULT_MIN_VALUE,
  max: ValueColorType = DEFAULT_MAX_VALUE,
) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(
    Math.random() * (maxValue - minValue + 1) + minValue,
  ) as ValueColorType;
};
