import { useContext, useState } from "react";
import "./App.css";
import "./counter/counter.css";
import Button from "./button/button";
import Counter from "./counter/counter";
import Demostration from "./demostration/demostration";
import { themeContext } from "./context/Theme-context";



function App() {
  let [mount, setMount] = useState(false);
  let [history, setHistory] = useState([]);
  let {dark,theme,toggle} = useContext(themeContext); 




  return (
    <div className="app"
    style={{backgroundColor:theme[`${!dark?"light":"dark"}`].background, color:theme[`${!dark?"light":"dark"}`].color}}
    >
      <div className="main">
        <div className="counter">
          {mount && <Counter history={history} setHistory={setHistory} />}
        </div>

        <div className="mountbutton">
          <button
            className=" button"
            onClick={() => {
              setMount(true);
            }}
          >
            Mount
          </button>
          <button
            className="button"
            onClick={() => {
              setMount(false);
            }}
          >
            Unmount
          </button>
          <button onClick={toggle}>click here to {`${!dark?"dark":"light"}`}</button>
        </div>
      </div>

      <div className="history">
        <div>
          <h3>what is happning..</h3>
          <Demostration history={history} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
