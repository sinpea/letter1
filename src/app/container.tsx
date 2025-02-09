'use client'
import React from "react";
import { useState,useEffect } from "react";
export default function Container(){
    
    const [index,setIndex] = useState(0);
    const [clickable,setClick] = useState(true);
    const [isPlay,setPlay] = useState(false);
    const textSpeed = 50;
    const textArr = ["Click or Press Enter to Proceed","Well it's been 2 years since we started dating...","Time has flown by so fast, it makes me want even more; the time I have with you...","I am not one to be verbose, neither am I one to be apt...","Your beauty stops me in my tracks whenever I think of you","I <3 u I <3 u I <3 u"];
    const [dispText,setText] = useState(textArr[0]);
    //window.addEventListener("keypress",(e)=>{console.log(e.key);if(e.key=="Enter"){handleClick()}})
    console.log(isPlay);
    useEffect(()=>{
        
        async function handleClick(e:KeyboardEvent){
            if(e.key=="Enter"){
                console.log("pess")
                if(clickable){
                    setClick(false);
                    let a = 0;
                    
                    if(index >= textArr.length - 1){
                        setIndex(0);
                        a = 0;
                    }
                    else{
                        setIndex(index + 1);
                        a = index + 1;
                    }
                    //animate text
                    setText(" ");
                    let k = "";
                    console.log(dispText);
                    await pause()
                    for(let i = 0;i < textArr[a].length;i++){
                        setText(k + textArr[a].charAt(i));
                        k += textArr[a].charAt(i);
                        await pause();
                    }
                    setClick(true);
                    //TODO PAD TEXT PROPERLY
                    //setText(padText(textArr[index]));
                }
                //isClicked = false;
            }
        
    };
    document.addEventListener("keyup", handleClick, false);

    return () => {
        document.removeEventListener('keyup', handleClick);
    };

});
    
    function pause():Promise<number>
    {
        return new Promise(resolve=>setTimeout(resolve,textSpeed));
    }
    async function handleClick(){
        if(clickable){
            setClick(false);
            let a = 0;
            if(index >= textArr.length - 1){
                setIndex(0);
                a = 0;
            }
            else{
                setIndex(index + 1);
                a = index + 1;
            }
            //animate text
            setText(" ");
            let k = "";
            console.log(dispText);
            await pause()
            for(let i = 0;i < textArr[a].length;i++){
                setText(k + textArr[a].charAt(i));
                k += textArr[a].charAt(i);
                await pause();
            }
            setClick(true);
            //TODO PAD TEXT PROPERLY
            //setText(padText(textArr[index]));
        }
        //isClicked = false;
    }
    return(<>
    <div id="eventL"></div>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-6 bg-white bg-opacity-60 text-black text-center rounded-lg shadow-lg z-10 w-64"
    onClick={()=>{handleClick()}} onKeyUpCapture={(e)=>{console.log(e.key);if(e.key=="Enter"){handleClick()}}}>
      <h1 className="text-2xl font-semibold">{index+1}/6</h1>
      <p className="mt-4 text-lg">{dispText}</p>
    </div>
    </>);
}