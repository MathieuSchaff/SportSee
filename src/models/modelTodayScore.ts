interface FormatedTodayScore {
  name: string;
  value: number;
}

/**
 * Represents the score of the day of the user
 * @constructor
 */

export class UserDataTodayScore {
  keydata: number;
  /**
   *
   * @param {number} keydata
   */
  constructor(keydata: number) {
    this.keydata = keydata;
  }
  /**
   * format the data receided into the desired data structures for the component to be mounted
   * @param {number} keydata
   * @returns {Array.<{name: string, value: number}>}
   */
  todayScoreFormated(keydata: number): FormatedTodayScore[] {
    return [
      { name: "A1", value: this.keydata * 100 },
      { name: "A2", value: 100 - this.keydata * 100 },
    ];
  }
  /**
   * give access to the formated as a key of the element without calling it
   * @returns {Array.<{name: string, value: number}>}
   *
   */
  get formatedData(): FormatedTodayScore[] {
    return this.todayScoreFormated(this.keydata);
  }
}
