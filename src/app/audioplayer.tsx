'use client'
import React from "react";
import SmolButton from "./smolbutton";
import { useState,useEffect,useRef } from "react";

export default function AudioMan(){
    let audio = useRef(null);
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
     <SmolButton pos_right="4" pos_bottom="4" txt={(play)?'Pause':'Play '} handlePress={()=>{setPlay(false);try{audio.current.pause();}catch(e){}}}/>
     </div>
     <div className="fixed bottom-16 right-5 ">
     <SmolButton pos_right="4" pos_bottom="4" txt="Reset" handlePress={()=>{try{audio.current.currentTime = 0;}catch(e){}}}/>
     </div>
    <audio ref={audio} loop onLoad={()=>{console.log("ELLO");setLoad(true)}}  id="audio_tag" src="/a.mp3"/>
   
    
    </>);   
}