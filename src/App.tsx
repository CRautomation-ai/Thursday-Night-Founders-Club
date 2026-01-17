import { useState, useEffect } from "react";
import Landing from "./sections/Landing";
import Network from "./sections/Network";
import WhyJoinUs from "./sections/WhyJoinUs";
import Support from "./sections/Support";
import Join from "./sections/Join";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const joinSection = document.getElementById("network-section");
      if (joinSection) {
        const scrollY = window.scrollY || window.pageYOffset;
        const joinSectionTop = joinSection.offsetTop;
        setShowNavbar(scrollY >= joinSectionTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar isVisible={showNavbar} useBg={true} />
      <Landing />
      <Network />
      <WhyJoinUs />
      <Support />
      <Join />
      <Contact />
    </div>
  );
}

export default App;
