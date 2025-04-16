import { useRef } from "react";

function App() {
  const shivam = useRef();

  let handlePlay = () => {
    shivam.current.play()
  };
  let handlePause = () => {
    shivam.current.pause()
  };
  let handleTime1 = () => {
    shivam.current.currentTime += 3
  };
  let handleTime2 = () => {
    shivam.current.currentTime -= 3
  };
  let handleMuted = () => {
    shivam.current.muted = !shivam.current.muted
  };
  let handleVolumeUp = () => {
    shivam.current.volume += 0.3
  };
  let handleVolumeDown = () => {
    shivam.current.volume -= 0.3
  };
  return (
    <>
      <video ref={shivam} style={{width : "400px"}}>
        <source src="https://cdn.shopify.com/videos/c/o/v/c5df0e1506db42908dee1d6e749e1f74.mp4" />
      </video>
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleTime1}>+3S</button>
      <button onClick={handleTime2}>-3S</button>
      <button onClick={handleMuted}>Mute</button>
      <button onClick={handleVolumeUp}>Sound Up</button>
      <button onClick={handleVolumeDown}>Sound Down</button>

    </>
  );
}

export default App;
