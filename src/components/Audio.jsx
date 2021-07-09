import React, { useState } from "react";
import Pad from "../components/Pad";
import { audio } from "../data/audios";

function Audio() {
  const [volumen, setVolumen] = useState(1);
  const [recording, setRecording] = useState("");
  const [speed, setSpeed] = useState(0.5);
  //verificando array
  console.log({ audio });
  
  const playRecording = () => {
    let index = 0;
    let recordArray = recording.split("");
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);
      audioTag.volumen = volumen;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    },speed * 600);
    setTimeout(()=> clearInterval(interval),
       600 * speed * recordArray.length-1);
  };

  return (
    <div className="bg-light min-vh-100 text-black">
      <div className="text-center">
        <h2>Drum Machine</h2>
        {audio.map((clip) => (
          <Pad
            key={clip.id}
            clip={clip}
            volumen={volumen}
            setRecording={setRecording}
          />
        ))}

        <h4>Volumen</h4>
        <input
          type="range"
          step="0.001"
          onChange={(e) => setVolumen(e.target.value)}
          value={volumen}
          max="1"
          min="0"
          className="w-50 progress-bar-striped bg-info"
        />
        <h3>{recording}</h3>
        {recording && (
          <>
            <button
              onClick={playRecording}
              className="btn btn btn-outline-info mx-4"
            >
              Iniciar
            </button>
            <button
              onClick={() => setRecording("")}
              className="btn btn-outline-secondary mx-4">
              Limpiar
            </button>
          </>
          
        )}
        <h4>Speed</h4>
        <input
          type="range"
          step="0.001"
          onChange={(e) => setSpeed(e.target.value)}
          value={speed}
          max="1.2"
          min="0.1"
          className="w-50"
        />
      </div>
    </div>
  );
}

export default Audio;
