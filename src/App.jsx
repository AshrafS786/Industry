import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import HomeServices from "./Sections/HomeServices";
import WhyChoose from "./Sections/WhyChoose";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose/>
      <HomeServices/>
      <Contact/>

    </>
  );
}
