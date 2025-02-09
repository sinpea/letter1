'use client';
export default function SmolButton({handlePress,txt}:{handlePress:Function,txt:string}){
  const clName = "bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 focus:outline-none";
  return(    
    <button onClick={()=>handlePress()} className={clName}>
    {txt}
    </button>
);
}