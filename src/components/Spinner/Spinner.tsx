import "./Spinner.scss";
/**
 * Spinner component
 * @component
 */
export function Spinner() {
  return (
    <div className="spinner__container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
