// CONTENT
import { useContext } from "react";
import { UserContext } from "../../context/Context";
//STYLE
import "./TodayScore.scss";
// COMPONENT
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { UserDataTodayScore } from "../../models";
const COLORS = ["#E60000", "transparent"];

/**
 *  The scores of today in percent
 * @component
 */
export const TodayScore = () => {
  /**
   * Context of the user
   */
  const context = useContext(UserContext);
  /**
   * allow to access the good key on the data value becasuse they are different.
   */
  let todayScore =
    context?.response?.todayScore ?? context?.response?.score ?? undefined;
  /**
   * Formated data
   */
  const newformatedData =
    context?.response && todayScore !== undefined
      ? new UserDataTodayScore(todayScore).formatedData
      : undefined;
  return (
    <div className="containerTodayScore">
      {context?.loading && !newformatedData && <p>Loading...</p>}
      {newformatedData && (
        <>
          {" "}
          <h2 className="todayScore-title"> Score </h2>
          <p className="todayScore-legend">
            {" "}
            <span> {newformatedData[0].value}%</span> <br></br> de votre
            objectif
          </p>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={newformatedData}
                dataKey="value"
                nameKey="name"
                startAngle={90}
              >
                {newformatedData?.map((entry, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      style={{ display: `${index === 1 ? "none" : "inline"}` }}
                    />
                  );
                })}
              </Pie>
              <circle cx="50%" cy="50%" r="30%" fill="white" />
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};
