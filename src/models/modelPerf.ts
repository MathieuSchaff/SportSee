interface KindProps {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
}
interface DataPerfProps {
  value: number
  kind: number
}
export interface PerfProps {
  userId: number
  kind: KindProps
  data: DataPerfProps[]
}
export interface GlobalPerfProps {
  data: PerfProps
}
/**
 * Represents the performance data of the user
 * @constructor
 */
export class UserPerformance {
  data: DataPerfProps[]
  kind: KindProps
  /**
   *
   * @param {DataPerfProps[]}data
   * @param {KindProps} kind
   */
  constructor(data: DataPerfProps[], kind: KindProps) {
    this.data = data
    this.kind = kind
  }
  /**
   *
   * @param {DataPerfProps[]}data
   * @returns {{value: number, kind: string}[]}
   */
  getGoodFormatData(data: DataPerfProps[]) {
    return data
      .map(item => {
        return {
          value: item.value,
          kind: this.kind[item.kind as keyof KindProps],
        }
      })
      .reverse()
  }
  /**
   * getter of all the data from
   */
  get formatedData() {
    return this.getGoodFormatData(this.data)
  }
}
