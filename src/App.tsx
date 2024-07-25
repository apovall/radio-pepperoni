import "./App.css";
import StationSelector from "./components/StationSelector";

function App() {


  return (
    <div className="bg-dark-gray w-full h-full relative">
      <div className="flex flex-row justify-center">
        <section className="basis-1/2" id="station-wrapper">
  
        </section>
        <img className="self-center" src="/images/left-station-bracket.png" height={523} alt="" />
        <section className="basis-1/2 self-center" id="station-wrapper">
          
          <StationSelector title={"THE SCHELZGAGES "} stationURL={""} isSelected={false} ></StationSelector>
          <StationSelector title={"The Cheese "} stationURL={""} isSelected={true} ></StationSelector>
          <StationSelector title={"Radio Jacaranda "} stationURL={""} isSelected={false}    ></StationSelector>
          <StationSelector title={"Radio NZ "} stationURL={""} isSelected={false} ></StationSelector>
          <StationSelector title={"George FM "} stationURL={""} isSelected={false} ></StationSelector>
          <StationSelector title={"More FM "} stationURL={""} isSelected={false} ></StationSelector>
        </section>
        <img className="self-center" src="/images/right-station-bracket.png" height={523} alt="" />
        {/* <img className="absolute top-0 left-0"src="/images/nostromo-scanlines.png" alt="" /> */}
      </div>

    </div>
  );
}

export default App;
