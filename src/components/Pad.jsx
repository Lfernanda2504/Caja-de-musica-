import React from 'react'


function Pad({clip}) {
   const playSound = () => {
    const audioTag = document.getElementById(clip.keyL);
    audioTag.currentTime= 0;
    audioTag.play(); 
    };
    
    return (
        <div onClick={playSound} className="btn btn-info p-4 m-3">
            <audio className="clip" id={clip.keyL} src={clip.url}/>
            {clip.keyL}
        </div>
    )
}

export default Pad

