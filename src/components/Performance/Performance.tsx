import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import "./Performance.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { UserPerformance } from "../../models/modelPerf";
import { memo } from "react";

/**
 *  The graph that show the data with a radar type chart
 * @component
 */

export function Performance() {
  /**
   * Params of the user /profile/:userId
   * to fetch the good data
   */
  let { userId } = useParams();
  const { response, loading } = useAxios<UserPerformance>(
    {
      method: "GET",
      url: `../user${userId}Data.json`,
      headers: {
        accept: "*/*",
      },
    },
    "userPerf"
  );
  /**
   * the formated data
   */
  const newformatedData = response
    ? new UserPerformance(response?.data, response?.kind).formatedData
    : undefined;

  return (
    <div className="container-performance">
      {loading && !newformatedData && <p>Loading...</p>}
      {newformatedData && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            margin={{ top: 12, right: 25, bottom: 12, left: 25 }}
            data={newformatedData}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tick={{
                fill: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            />
            <Radar
              name="Radar"
              dataKey="value"
              fill={`#ff0000`}
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
export const PerformanceMemoized = memo(Performance);
