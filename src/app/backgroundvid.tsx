export default function BackVid(){
    
        return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-screen object-cover z-[-1]">
        <source src="/videos/bgVid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}