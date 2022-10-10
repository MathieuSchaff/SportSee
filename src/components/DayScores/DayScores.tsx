import "./DayScores.scss";
import Score from "../Score/Score";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import { UserScore } from "../../models";
/**
 * Day Sxore component wrapper
 * @component
 */
const DayScores = () => {
  const context = useContext(UserContext);

  const newformatedData = context?.response
    ? new UserScore(
        context?.response?.keyData?.calorieCount,
        context?.response?.keyData?.proteinCount,
        context?.response?.keyData?.carbohydrateCount,
        context?.response?.keyData?.lipidCount
      ).formatedData
    : undefined;
  console.log(context?.response?.keyData);
  return (
    <div className="day-scores">
      {context?.loading && !context?.response && <p>Loading...</p>}
      {newformatedData &&
        !context?.loading &&
        newformatedData?.map((item, index) => {
          return (
            <Score
              key={index}
              amount={item.amount}
              name={item.name}
              link={item.src}
            />
          );
        })}
    </div>
  );
};

export default DayScores;
