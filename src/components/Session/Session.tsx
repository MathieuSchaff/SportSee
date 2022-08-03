import { ReactNode, memo } from "react";
import "./Session.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

import { ContentType as TooltipContentType } from "recharts/types/component/Tooltip";
import { UserDataSession } from "../../models";
interface ISession {
  day: number | string;
  sessionLength: number;
}
interface UserDataSessionProps {
  userId: number;
  sessions: ISession[];
}
// Pareil que activyty => pb avec cette data
// interface UserSessionData {
//   data: UserDataSessionProps
// }
/**
 * The graph of the session
 * @returns {JSX.Element} Session component
 */
export const Session = (): JSX.Element => {
  /**
   * The params of the user in the url / profile/userId
   * used to fetch the good datas.
   */
  let { userId } = useParams();
  /**
   * @param {String} userId - id passed in the url / /profile/:userId
   */
  const { response, loading } = useAxios<UserDataSessionProps>(
    {
      method: "GET",
      url: `http://localhost:5173/user${userId}Data.json`,
      headers: {
        accept: "*/*",
      },
    },
    "averageSession"
  );
  /**
   * formated data
   */
  const newformatedData = response
    ? new UserDataSession(response?.userId, response?.sessions).formatedData
    : undefined;
  /**
   * Shhow the value on the hover of the graph
   * @param {booleand  | undefined}active
   * @param {<number | string>[]}payload
 * @returns {JSX.Element} CustomTooltip component

   */
  const CustomTooltip: TooltipContentType<number, string> = ({
    active,
    payload,
  }): JSX.Element | null => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltipSession">{`${payload[0].value} min`}</div>
      );
    }
    return null;
  };
  /**
   *
   * The legend of the graph
   * @returns {JSX.Element} RenderLegend component
   */
  const RenderLegend = (): JSX.Element => {
    return <h2 className="legend-session">Durée moyenne des sessions</h2>;
  };
  // PROBLEME ICI
  /**
   * Put a black rectangle with low opacity when the graph session is hover
   * @param {Object} props
   * @returns {JSX.Element} CustomTooltip component
   */
  const CustomHover = (props: {
    points: any;
    width: number;
    top: number;
    height: number;
    bottom: number;
  }): JSX.Element => {
    const { points, width, top, height, bottom } = props;
    const calculatedHeight = top + height + bottom;
    const rectWidth = width - points[0].x;
    return (
      <rect
        x={points[0].x}
        y={2}
        height={calculatedHeight}
        width={rectWidth}
        fill="#000000"
        fillOpacity={0.1}
      />
    );
  };
  return (
    <div className="containerSession">
      {loading && !newformatedData && <p>Loading...</p>}
      {newformatedData && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={newformatedData}
            margin={{
              top: 20,

              bottom: 20,
            }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#ffffff"
              tick={{
                fill: "#ffffff",
                fontSize: "12px",
                stroke: "#ffffff",
                strokeWidth: "1px",
              }}
              interval="preserveStartEnd"
              width={240}
              className="x-axisToto"
            />
            <YAxis
              hide
              domain={[
                (dataMin: number) => dataMin - 10,
                (dataMax: number) => dataMax + 10,
              ]}
            />
            <Tooltip
              wrapperStyle={{ background: "#ffffff" }}
              content={CustomTooltip}
              //@ts-ignore
              cursor={<CustomHover />}
            />

            <Legend
              content={RenderLegend}
              verticalAlign="top"
              margin={{ top: 0, left: 34, right: 0, bottom: 0 }}
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="#ffffff"
              strokeWidth="2px"
              legendType="none"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
export const SessionMemoized = memo(Session);