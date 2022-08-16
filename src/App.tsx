import "./App.scss";
// COMPONENTS
import AppContainer from "./pages/AppContainer/AppContainer";
import Header from "./components/header/Header";

/**
 * App contain the horizontal navbar at the top ( <Header/>) and the main bottom container (<AppContainer/>)
 * @component
 */
function App() {
  return (
    <div className="App">
      <Header />
      <AppContainer />
    </div>
  );
}

export default App;
