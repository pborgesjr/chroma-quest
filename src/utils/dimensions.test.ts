import {scale} from './dimensions';

describe('Testing dimensions functions', () => {
  it('Should return the correct scaled value when function is called', () => {
    const result = scale(100);
    expect(result).toBe(214.28571428571428);
  });
});
