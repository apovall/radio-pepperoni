# Radio Pepperoni

## Starting dietpi window manager (testing)
- `sudo systemctl enable lightdm`
- `sudo systemctl start lightdm`
- Set up sound via dietpi-config, select 3.5mm jack, not HDMI (unless using HDMI)

## Architecture
- Node.js server that uses websockets to communicate with frontend
  - Interfaces with Raspeberry Pi IO, and passes full system state to client to determine what how to update UI accordingly.
- React + Vite frontend
  - Uses websockets to communicate with server
  - Uses HLS or MP3 streams to play audio

## Usage
- `nvm use 22.1`

## Notable Packages: 
- https://github.com/szymmis/vite-express?tab=readme-ov-file#-installation--usage
- https://www.npmjs.com/package/ws#sending-and-receiving-text-data 
- https://socket.io/docs/v4/tutorial/step-3

## Investigation
- https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Cross-browser_audio_basics
- https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video#hls
- https://github.com/video-dev/hls.js/releases/tag/v1.5.18
- Audio volume control: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume
- https://github.com/websockets/ws#multiple-servers-sharing-a-single-https-server 

## Radio Stations:
- National Radio
  - HLS:. https://nr1.newradio.it/nr1/nr1/playlist.m3u8 
  - https://radionz.streamguys1.com/national/national/national/national-mainstream/chunks.m3u8
- Jacaranda FM
  - Playlist + audio. https://iframe.iono.fm/playlists/prov/155?limit=1&sort=latest&skip=0
  - Plays single song, then need to get new one + url
- Bosveld Radio
  - Stream: https://iceant.antfarm.co.za/Bosveld
- Anthemz Radio
  - Stream: https://digitalstreams3.mediaworks.nz/anthemz-CHC-high
- The Cheese
  - Stream: https://station.thecheese.co.nz/listen/the_cheese/128.mp3
  - Also has HLS option
- Asia Dream Radio - Japan Hits
  - Stream: https://cast1.torontocast.com:2120/stream/1/
- Dance UK
  - Stream: https://dancestream.danceradiouk.com/stream/1/
- Megaton Cafe Radio:
  - Stream: https://us2.internet-radio.com/proxy/megatoncafe?mp=/stream