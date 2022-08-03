type JsonUserActivitySession = {
  day: string
  kilogram: number
  calories: number
}
export type JsonUserActivity = {
  userId: number
  sessions: JsonUserActivitySession[]
}

export interface IUserActivitySession {
  day: string
  kilogram: number
  calories: number
}
/**
 * Represents the activity data of the user
 * @constructor
 */
export class UserActivity {
  userId?: number
  sessions?: IUserActivitySession[]
  /**
   *
   * @param {number} userId
   * @param {IUserActivitySession[]}sessions
   */
  constructor(userId?: number, sessions?: IUserActivitySession[]) {
    this.userId = userId
    this.sessions = sessions
  }
  /**
   *
   * @param {string} day
   * @returns {string} lastDay // the formated day
   */
  DayToNumber(day: string): string {
    let dayNumberArray = day.split(/-/i)
    let lastDay = dayNumberArray[dayNumberArray.length - 1]
    return lastDay
  }
  /**
   * get all the date too good format and return them as a simple key of the object UserActivity
   */
  get formatedData() {
    return (
      this.sessions?.map(item => {
        return {...item, day: this.DayToNumber(item.day)}
      }) ?? []
    )
  }
}
