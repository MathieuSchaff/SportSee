import { ReactNode, useContext } from "react";
import "./Activity.scss";
import useAxios from "../../hooks/useAxios";
import { UserContext } from "../../context/Context";

import { JsonUserActivity, UserActivity } from "../../models/modelActivity";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Navigate, useParams } from "react-router-dom";
import {
  ContentType as DefaultLegendContentType,
  Payload,
} from "recharts/types/component/DefaultLegendContent";
import { ContentType as TooltipContentType } from "recharts/types/component/Tooltip";

/**
 * The activity on the week of the user
 * @component
 */
export const Activity = () => {
  let { userId } = useParams();
  /**
   * @param {String} userId - id passed in the url / /profile/:userId
   */

  let endPoint =
    import.meta.env.MODE === "development"
      ? `${userId}/activity`
      : `${userId}/activity.json`;

  const { response, loading, error } = useAxios<JsonUserActivity>(
    `/${endPoint}`
  );

  /**
   * Format the data
   */
  const newformatedData = new UserActivity(response?.userId, response?.sessions)
    .formatedData;

  /**
   * @param {(boolean | undefined)} active
   * @param {object} payload
   * @component
   */
  const CustomTooltip: TooltipContentType<number, string> = ({
    active,
    payload,
  }): ReactNode | null => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p>{`${payload[1].value} Kg`}</p>
          <p>{`${payload[0].value} Kcal`}</p>
        </div>
      );
    }
    return null;
  };
  /**
   * This is the legend of the graph
   * @param {Array.<Object>} payload
   * @component
   */
  const renderLegend: DefaultLegendContentType = ({ payload }) => {
    return (
      <div className="activityLegend">
        <h2>Activité quotidienne</h2>
        <ul className="legend-ul">
          {payload?.map((entry, index) => (
            <div className="legend-items" key={`item-${index}`}>
              <div className={`disc disc--${entry.value}`}>{""}</div>
              <li className={`legend-item legend-item--${entry.value}`}>
                {entry.value === "calories"
                  ? "Calories brûlées (kCal)"
                  : "Poids (kg)"}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="activity">
      {loading && <p>Loading...</p>}
      {newformatedData && (
        <ResponsiveContainer>
          <BarChart
            data={newformatedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={7}
            barGap={8}
            barCategoryGap="1%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              padding={{ left: 0, right: 0 }}
              scale="auto"
            />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[
                (dataMin: number) => dataMin - 1,
                (dataMax: number) => dataMax + 1,
              ]}
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              wrapperStyle={{ background: "#E60000" }}
              contentStyle={{
                background: "#E60000",
                border: "none",
                borderRadius: "10px",
              }}
              content={CustomTooltip}
            />
            <Legend content={renderLegend} verticalAlign="top" />
            <Bar yAxisId="left" dataKey="calories" fill="#E60000" />
            <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
