import Settings from '../app/Settings';

describe('Check class Settings', () => {
  const newSetting = new Settings();
  test('Check getter', () => {
    const expected = { theme: 'dark', music: 'trance', difficulty: 'easy' };
    expect(newSetting.settings).toEqual(expected);
  });
  test('Check changeSetting with new params', () => {
    const expected = {
      theme: 'dark', music: 'trance', difficulty: 'easy', style: 'fast',
    };
    newSetting.changeSetting('style', 'fast');
    expect(newSetting.settings).toEqual(expected);
  });
  test('Check changeSetting with new params when name is default', () => {
    const expected = {
      theme: 'light', music: 'trance', difficulty: 'easy', style: 'fast',
    };
    newSetting.changeSetting('theme', 'light');
    expect(newSetting.settings).toEqual(expected);
  });
  test('Check changeSetting exception', () => {
    expect(() => newSetting.changeSetting('music', 'someParams')).toThrowError('Данное значение недопустимо');
  });
});
