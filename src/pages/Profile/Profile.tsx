// STYLE
import "./Profile.scss";
// PARAMS DU ROUTER
import { useParams } from "react-router-dom";
// CONTEXT
import UserContextProvider from "../../context/Context";
// COMPONENTS
import { SessionMemoized } from "../../components/Session/Session";
import { PerformanceMemoized } from "../../components/Performance/Performance";
import { TodayScore } from "../../components/TodayScore/TodayScore";
import { Activity } from "../../components/Activity/Activity";
import Title from "../../components/Title/Title";
import DayScores from "../../components/DayScores/DayScores";

/**
 *  Main page of the user
 * @returns {JSX.Element} Profile component
 */
const Profile = () => {
  /**
   * Get the correspondant params passer in the url
   * Pass this parameter to the Context provider
   * @param {String} userId
   */
  let { userId } = useParams();
  return (
    <>
      <div className="Acceuil">
        <UserContextProvider userId={userId}>
          <Title />
          <div className="Acceuil__wrapper">
            <div className="Acceuil__leftBlock">
              <Activity />
              <div className="Acceuil__leftBlock__bottom">
                <SessionMemoized />
                <PerformanceMemoized />
                <TodayScore />
              </div>
            </div>
            <DayScores />
          </div>
        </UserContextProvider>{" "}
      </div>
    </>
  );
};

export default Profile;
