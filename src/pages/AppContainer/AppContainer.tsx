import { lazy, Suspense } from "react";
// Style
import "./AppContainer.scss";
// utilities from react router dom
import { Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import { Spinner } from "../../components/Spinner/Spinner";
import Acceuil from "../Acceuil/Acceuil";
// import Profile from '../Profile/Profile'
// import NotFound from '../NotFound/NotFound'
import HorizontalNavBar from "../../components/HorizontalNavBar/HorizontalNavBar";
import ChooseProfile from "../../components/ChooseProfile/ChooseProfile";

const LazyNotFound = lazy(() => import("../NotFound/NotFound"));
const LazyProfile = lazy(() => import("../Profile/Profile"));

/**
 * Contain the horizontal navigation bar on the left of the screen.
 * First page to show up: Acceuil => Acceuil contain the <ChooseProfile/> component
 * <ChooseProfile/> allow to choose between two different profile ( mocked data): 12 or 18
 * The profile page is similar in the index than <Acceuil/>
 * But when a profile is chosen, it goes to /profile/:id
 * and it load the <Profile/> component instead
 *
 * @component
 */
const AppContainer = () => {
  return (
    <div className="AppContainer">
      <HorizontalNavBar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route index element={<ChooseProfile />} />
        <Route path="/profile">
          <Route index element={<ChooseProfile />} />
          <Route
            path=":userId"
            element={
              <Suspense fallback={<Spinner />}>
                <LazyProfile />
              </Suspense>
            }
          />
        </Route>
        <Route path="/notfound" element={<LazyNotFound />} />
        <Route path="*" element={<Navigate replace to="/notfound" />} />
      </Routes>
    </div>
  );
};

export default AppContainer;
