import {PhoneNumberPipe} from './phone-number.pipe';

describe('PhoneNumberPipe', () => {
  it('Should return right number', () => {
    const number = '0686302328';
    const pipe = new PhoneNumberPipe();
    expect(pipe.transform(number)).toBe('+380 (68) 630-23-28');
  });
});
