import { RandomCustom } from './random';

describe('RandomCustom', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  test('should create', () => {
    expect(RandomCustom).toBeTruthy();
  });

  test('getRandomInt', () => {
    const value = RandomCustom.getRandomInt(0, 99);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(99);
    expect(value).not.toBeGreaterThan(100);
    expect(value).not.toBeLessThanOrEqual(-1);
  });

  test('getRandomAlphanumeric', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
    const value = RandomCustom.getRandomAlphanumeric(10);
    expect(value).toEqual('6666666666');
  });
});
