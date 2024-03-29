import React, { useEffect } from "react";
import contactimg from "../assets/contactimg.jpg";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
    <>
      <section className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-5 gap-36">
        <div
          id="left"
          className="lg:w-[40%] w-full flex flex-col justify-start items-start gap-8 h-[700px] p-10">
          <h1 data-aos="slide-up" className="text-5xl text-black font-bold">
            Meet your home service experts
          </h1>
          <p
            data-aos="slide-up"
            className="text-xl font-semibold text-slate-600 text-justify">
            <span className="font-bold">Home Repair Services</span> is a leading
            home repair services provider in the country. We provide the best
            home repair services for your home.
          </p>
          <div
            data-aos="slide-up"
            className="flex flex-col justify-center items-start gap-8 mt-4">
            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px] cursor-pointer" />
              <h1 className="text-2xl font-semibold">Emregency Repairs</h1>
            </div>
            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px] cursor-pointer" />
              <h1 className="text-2xl font-semibold">Electrical Repairs</h1>
            </div>
            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px] cursor-pointer" />
              <h1 className="text-2xl font-semibold">Circuit Repairs</h1>
            </div>
            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px] cursor-pointer" />
              <h1 className="text-2xl font-semibold">Flush Repairs</h1>
            </div>
            <div className="flex justify-center items-start gap-2">
              <FaRegCaretSquareRight className="w-[35px] h-[35px] cursor-pointer" />
              <h1 className="text-2xl font-semibold">Garden Repairs</h1>
            </div>
          </div>

          <button
            data-aos="zoom-in"
            className="px-10 py-3 bg-transparent border-[3px] border-black font-bold hover:bg-black hover:text-white">
            CONTACT US
          </button>
        </div>
        <div
          data-aos="zoom-in"
          id="right-image"
          className="lg:w-[60%] w-full bg-cover bg-center lg:h-[700px] h-[400px] "
          style={{ backgroundImage: `url(${contactimg})` }}></div>
      </section>

      <section
        id="contact"
        className="w-full bg-slate-900 lg:px-20 px-10 py-24 flex lg:flex-row flex-col justify-center items-center lg:gap-28 gap-14">
        <div
          data-aos="slide-up"
          className="flex flex-col justify-center items-center gap-4 w-full">
          <MdMarkEmailRead className="text-yellow-500 w-[80px] h-[80px] transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer" />
          <h1 className="text-[32px] text-white font-bold">Email Us</h1>
          <input
            type="email"
            placeholder="Enter your valid email"
            className="px-10 py-4 text-black w-full"
          />
          <button className="px-10 py-4 text-black bg-yellow-500 font-semibold hover:bg-black hover:text-white text-lg w-full">
            SUBMIT
          </button>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 w-full">
          <IoLogoWhatsapp className="text-green-500 w-[80px] h-[80px] transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer" />
          <h1 className="text-[32px] text-white font-bold">Whatsapp Us</h1>
          <p className="text-white text-center font-xl">
            WhatsApp is a messaging application for smartphones, facilitating
            instant text, voice, and video communication, as well as file
            sharing, among individuals and groups.
          </p>
          <button className="px-10 py-4 text-black bg-yellow-500 font-semibold hover:bg-black hover:text-white text-lg w-full">
            SUBMIT
          </button>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 w-full">
          <IoChatboxEllipses className="text-white w-[80px] h-[80px] transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer" />
          <h1 className="text-[32px] text-white font-bold">Live Chat</h1>
          <p className="text-white text-center font-xl">
            Live chat enables real-time text-based communication between users and customer service or support teams, immediate assistance and problem resolution.
          </p>
          <button className="px-10 py-4 text-black bg-yellow-500 font-semibold hover:bg-black hover:text-white text-lg w-full">
            SUBMIT
          </button>
        </div>
      </section>

      <div
        id="icon-box"
        className="bg-gray-500 p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
};

export default Contact;
