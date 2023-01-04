import { observer } from "mobx-react-lite";
// import {  } from "react-router-dom";
import TheTopBar from "./components/TheTopBar";
import "./App.scss";

function _App() {

  return (
    <div className="App">
      <div className="main-body">
        <div className="main-body-content">
          <TheTopBar/>
        </div>
      </div>
    </div>
  );
}
const App = observer(_App);
export default App;
