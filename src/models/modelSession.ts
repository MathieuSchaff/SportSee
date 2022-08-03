interface Session {
  day: number | string
  sessionLength: number
}
export interface UserDataSessionProps {
  userId: number
  sessions: Session[]
}
/**
 * Represents the sessions  of the user
 * @constructor
 */
export class UserDataSession implements UserDataSessionProps {
  userId: number
  sessions: Session[]
  /**
   *
   * @param {number}userId
   * @param {typeof Session[]}sessions
   */
  constructor(userId: number, sessions: Session[]) {
    this.userId = userId
    this.sessions = sessions
  }
  /**
   * format the data of the session to the good format
   * @param {Session[]} sessions
   * @returns Session[]
   */
  MakeDaySessionsFormated(sessions: Session[]): Session[] {
    return sessions.map((item, index) => {
      let itemDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'][index]
      return {...item, day: itemDay}
    })
  }
  /**
   * get formated data
   */
  get formatedData() {
    return this.MakeDaySessionsFormated(this.sessions)
  }
}
