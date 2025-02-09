'use client'
import React from "react";
import SmolButton from "./smolbutton";
import { useState,useEffect,useRef } from "react";

export default function AudioMan(){
    const audio = useRef(null);
    const [play, setPlay] = useState(false);
    const [loaded,setLoad] = useState(true);

    useEffect(()=>{
            async function handleKeyBoard(e:KeyboardEvent){
                if(e.key=="Enter"){
                    if(!play){
                        if(loaded){
                            audio.current.play();
                            setPlay(true);
                        
                            console.log(play);
                        }
                    }
                }
            };

            async function handleClick(e:MouseEvent){
                    console.log(e);
                    if(!play){
                        if(loaded){
                            audio.current.play();
                            setPlay(true);
                        
                            console.log(play);
                        }
                    }
                
            };
            document.addEventListener('keyup', handleKeyBoard, false);
            document.addEventListener('click', handleClick, false);
            return () => {
                document.removeEventListener('keyup', handleKeyBoard);
                document.removeEventListener('click', handleClick);
            };
    });
    return(
    <>
     <div className="fixed bottom-4 right-4 ">
     <SmolButton txt={(play)?'Pause':'Play '} handlePress={()=>{setPlay(false);try{audio.current.pause();}catch(e){console.log(e)}}}/>
     </div>
     <div className="fixed bottom-16 right-5 ">
     <SmolButton txt="Reset" handlePress={()=>{try{audio.current.currentTime = 0;}catch(e){console.log(e);}}}/>
     </div>
    <audio ref={audio} loop onLoad={()=>{console.log("ELLO");setLoad(true)}}  id="audio_tag" src="/a.mp3"/>
   
    
    </>);   
}