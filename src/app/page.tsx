import CTA from "./components/CTA";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Process from "./components/Process";
import Thumbnails from "./components/Thumbnails";



export default function Home() {
  return (
    
   <div className="">
    <NavBar/>
    <CTA/>
    <Hero/>
    <Thumbnails/>
    <Process/>
   </div>
  );
}
