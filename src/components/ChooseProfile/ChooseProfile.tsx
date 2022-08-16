// STYLE
import "./ChooseProfile.scss";
// UTILS REACT ROUTER DOM
import { useNavigate } from "react-router-dom";
// UTILS REACT
import { useState, MouseEvent } from "react";

type IsPending = {
  isPending: boolean;
  type: string;
};
/**
 * Create the element that allow to choose a profile
 * @component
 */
const ChooseProfile = () => {
  /**
   * custom hook from react router DOM to manually nagivate
   */
  let navigate = useNavigate();
  /**
   * useState hook isPending to set a timeout to show an animation
   */
  const [isPending, setIsPending] = useState<IsPending | undefined>();
  /**
   * navigateToProfile set an animation on the button for 1sec then navigate to the profile
   * @param {Object} e - on click event
   * @param {String} type
   */
  const navigateToProfile = (
    e: MouseEvent<HTMLButtonElement>,
    type: string
  ): void => {
    e.preventDefault();
    setIsPending({ isPending: true, type: type });
    setTimeout(() => {
      navigate(`/profile/${type}`);
    }, 1000);
  };
  return (
    <div className="chooseProfile">
      <h2 className="chooseProfile__title">Veuillez choisir un profil: </h2>
      <div className="chooseProfile__wrapper">
        <button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            navigateToProfile(e, "12");
          }}
          className={
            isPending?.isPending && isPending.type === "12"
              ? "wrapper__link animatedLink"
              : "wrapper__link"
          }
        >
          Utilisateur n°12
        </button>
        <button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            navigateToProfile(e, "18");
          }}
          className={
            isPending?.isPending && isPending.type === "18"
              ? "wrapper__link animatedLink"
              : "wrapper__link"
          }
        >
          Utilisateur n°18
        </button>
      </div>
    </div>
  );
};
export default ChooseProfile;
