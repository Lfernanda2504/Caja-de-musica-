import React from 'react';
import  Pad  from '../components/Pad';
import {audio} from '../data/audios';


  function Audio() {
    console.log({audio});
    return (
      <div className="bg-light min-vh-100 text-black">
        <h2 className="text-center">
          Drum Machine 
        </h2>
        {audio.map((clip) =>(
          <Pad key={clip.id} clip={clip}/>
        ))}
        
      </div>
    )
  }
  
  export default Audio;