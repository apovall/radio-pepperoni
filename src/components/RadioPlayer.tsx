
function RadioPlayer() {
  return (
    <div>
      <audio controls>
        <source src="https://digitalstreams3.mediaworks.nz/anthemz-CHC-high" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* https://digitalstreams3.mediaworks.nz/anthemz-CHC-high */}
    </div>
  )
}

export default RadioPlayer