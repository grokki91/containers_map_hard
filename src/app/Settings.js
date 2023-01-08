export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.themeValue = ['dark', 'light', 'gray'];
    this.musicValue = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficultyValue = ['easy', 'normal', 'hard', 'nightmare'];
  }

  get settings() {
    return Object.fromEntries([...this.default]);
  }

  changeSetting(name, value) {
    if (name === 'theme' && !this.themeValue.includes(value)) {
      throw new Error('Данное значение недопустимо');
    } else if (name === 'music' && !this.musicValue.includes(value)) {
      throw new Error('Данное значение недопустимо');
    } else if (name === 'difficulty' && !this.difficultyValue.includes(value)) {
      throw new Error('Данное значение недопустимо');
    }
    this.default.set(name, value);
  }
}
