import Landing from "./sections/Landing";
import Network from "./sections/Network";
import WhyJoinUs from "./sections/WhyJoinUs";
import Support from "./sections/Support";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      <Landing />
      <Network />
      <Support />
      <WhyJoinUs />
      <Contact />
    </div>
  );
}

export default App;
