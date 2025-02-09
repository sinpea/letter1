'use client'
import AudioMan from "./audioplayer";
import Container from "./container";
import BackVid from "./backgroundvid";
export default function Home() {
  return (
    <>
    <BackVid/>
    <Container/>    
    <AudioMan/>
    <div className="fixed bottom-4 left-4 text-white text-sm">
      <span>music - massobeats - honey jam</span>
      <br></br>
      <a href="https://freetouse.com/music" target="_blank" className="ml-2 text-blue-400 hover:text-blue-600">
      <span>freetouse.com</span>
      </a>
    </div>
    </>
  );
}
