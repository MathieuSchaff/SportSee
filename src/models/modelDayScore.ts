// retourner une array de keydata qui contient des object avec les scores
interface InterfacekeyData {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}
interface IDataKey {
  data: InterfacekeyData
}
type FormatedObjectUserScore = {
  name: string
  amount: string
  src: string
}
/**
 * Represents the score data of the user
 * @constructor
 */
export class UserScore implements InterfacekeyData {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
  /**
   *
   * @param {number}calorieCount
   * @param {number} proteinCount
   * @param {number} carbohydrateCount
   * @param {number} lipidCount
   */
  constructor(
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number,
  ) {
    this.calorieCount = calorieCount
    this.proteinCount = proteinCount
    this.carbohydrateCount = carbohydrateCount
    this.lipidCount = lipidCount
  }
  /**
   * take all scores in params and format them to have an easier access to the objects to implement the component score.
   * @returns FormatedObjectUserScore[]
   */
  get formatedData(): FormatedObjectUserScore[] {
    let array = [
      {
        name: 'Calories',
        amount: `${this.calorieCount}Kcal`,
        src: 'calorieCount',
      },
      {name: 'Proteins', amount: `${this.proteinCount}g`, src: 'proteinCount'},
      {
        name: 'Glucides',
        amount: `${this.carbohydrateCount}g`,
        src: 'carbohydrateCount',
      },
      {name: 'Lipides', amount: `${this.lipidCount}g`, src: 'lipidCount'},
    ]
    return array
  }
}
