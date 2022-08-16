import "./Score.scss";

// image proteines
import proteinCount from "../../assets/proteinCount.png";
// images calories
import calorieCount from "../../assets/calorieCount.png";
//images lipides
import lipidCount from "../../assets/lipidCount.png";
// images glucides
import carbohydrateCount from "../../assets/carbohydrateCount.png";

type ScoreProps = {
  amount: string;
  name: string;
  link: string;
};
function goodImage(link: string) {
  switch (link) {
    case "carbohydrateCount":
      return carbohydrateCount;

    case "lipidCount":
      return lipidCount;

    case "calorieCount":
      return calorieCount;

    case "proteinCount":
      return proteinCount;

    default:
      break;
  }
}
/**
 *
 * @param {string} amount
 * @param {string} name
 * @param {string} link
 * Score component
 * @component
 */
const Score = ({ amount, name, link }: ScoreProps) => {
  let src = goodImage(link);
  return (
    <div className="score">
      <img src={src} alt={name} className="score-image" />
      <div className="score__title">
        <h2> {amount} </h2>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Score;
