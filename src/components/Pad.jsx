import React, { useEffect, useState } from 'react';


function Pad({clip, volumen, setRecording}) {
    const [active, setActive] = useState(false);
   useEffect(() => {
       document.addEventListener('keydown', handleKeyPress);
       return () => {
        document.removeEventListener('keydown', handleKeyPress);   
       }
   }, []);

   const handleKeyPress = (e) =>{
        if(e.keyCode === clip.keyCode){
            playSound();
        }
   };
   
    const playSound = () => {
        const audioTag = document.getElementById(clip.keyL);
        setActive(true);
        setTimeout(()=> setActive(false), 200);
        audioTag.volumen= volumen;
        audioTag.currentTime= 0;
        audioTag.play();
        setRecording(prev => prev+clip.keyL + ""); 
    };
    
    return (
        <div onClick={playSound} id="drum-pad" className={`btn btn-info p-4 m-3 ${active && "drum-pad btn-primary"}`}>
            <audio className="clip" id={clip.keyL} src={clip.url}/>
            {clip.keyL}
        </div>
    );
}

export default Pad;

