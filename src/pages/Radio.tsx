// import StationSelector from "./components/StationSelector";


function Radio() {

  /* 
    Web socket state is passed in
      - Currently selected page
      - Last radio select action (up, down, nothing). Provides no indication of absolute state.
        - Should be state, and only leading or trailing edges are used. 
      - Last radio volume action (up, down, nothing). Provides no indication of absolute state.
      - Radio play state (play, pause). Provides indication of absolute state.
      -
  */

  return (
    <div className="bg-dark-gray w-full h-full relative">
      <div className="flex flex-row justify-center items-center h-full">
        <section className="basis-1/2" id="station-wrapper">
        </section>
        <section
          className="basis-1/2 self-center h-full" id="station-wrapper"
        >

        </section>

      </div>
    </div>
  );
}

export default Radio;
