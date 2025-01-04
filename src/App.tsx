import { useState, useContext } from "react";
import "./App.css";
import Radio from "./pages/Radio";
import { RadioContext } from "./interfaces/interfaces";
import { RadioProvider } from "./context/context";
import { io } from "socket.io";


function App() {
  // TODO - Page selector. 
  // const RadioProvider = useContext(radioContext);
  // const socket = io()
  const [radioState, setRadioState] = useState(
    {
      volUp: false,
      volDown: false,
      play: false,
      page: false,
      stationSelectUp: false,
      stationSelectDown: false,
    }
  )

  return (
    <main id='root'>
      <RadioProvider.Provider value={radioState}>
        <Radio />
      </RadioProvider.Provider>
      {/* <WeatherProvider.Provider value={weatherState}>
        <Radio />
      </WeatherProvider.Provider> */}
    </main>
  );
}

export default App;
