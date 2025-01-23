import {isIOS} from './helpers';

describe('Testing helpers functions', () => {
  it('Should return true when isIOS with mock OS is called', () => {
    const result = isIOS();
    expect(result).toBeTruthy();
  });
});
