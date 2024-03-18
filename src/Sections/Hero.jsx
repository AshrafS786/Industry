import heroimg from "../assets/heroimg.png";
import bgimg from "../assets/bgimg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  //define animation variable here
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-fit lg:px-20 flex lg:flex-row flex-col justify-center items-center gap-20 bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})`}} >
      <div id="hero-image" className="lg:w-[40%] w-full flex flex-col justify-center items-end">
        <img src={heroimg} alt="" width={600} height={700} className="" />
      </div>
      <div id="content-hero" className="flex flex-col justify-center items-start gap-10 lg:w-[60%] w-full pb-20">
        <h1 data-aos="zoom-in-up" className="lg:text-6xl text-5xl text-black font-bold text-center" >
            Home Repair Services
        </h1>
      </div>
    </section>
  );
};

export default Hero;
