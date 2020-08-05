import { priceTrackingHelper } from './dailyDealsTracking';

describe('priceTrackingHelper', () => {
  it('when the price is an integer it should return as a string with one decimal', () => {
    const num = 30;
    expect(priceTrackingHelper(num)).toEqual('30.0');
  });

  it('when the price is an integer with 2 decimals it should return as a string with one decimal', () => {
    // eslint-disable-next-line prettier/prettier
    const num = 30.00;
    expect(priceTrackingHelper(num)).toEqual('30.0');
  });

  it('when the price is an integer with 1 decimal it should return the same number as a string', () => {
    const num = 30.0;
    expect(priceTrackingHelper(num)).toEqual('30.0');
  });

  it('when the price is a float with 1 non-zero decimal it should return the same number as a string', () => {
    const num = 30.5;
    expect(priceTrackingHelper(num)).toEqual('30.5');
  });

  it('when the price is a float with 2 decimal places where the last decimal is not zero it should return the same number, as a string', () => {
    const num = 30.25;
    expect(priceTrackingHelper(num)).toEqual('30.25');
  });
});
