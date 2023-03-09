import React from 'react';
import {randomNumber} from './randomizer';

describe('Testing randomizer functions', () => {
  it('Should return the correct number', () => {
    jest.spyOn(Math, 'random').mockReturnValue(1);
    jest.spyOn(Math, 'floor').mockReturnValue(1);

    const result = randomNumber();

    expect(result).toBe(1);
  });
});
