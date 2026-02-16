import LandingSection from "@/features/landing/components/LandingSection";
import JoinSection from "@/features/join/components/JoinSection";
import WhyJoinUsSection from "@/features/why/components/WhyJoinUsSection";
import SupportSection from "@/features/support/components/SupportSection";
import InsideSection from "@/features/inside/components/InsideSection";
import StatementSection from "@/features/why/components/StatementSection";
import ContactSection from "@/features/contact/components/ContactSection";

function App() {
  return (
    <div>
      <LandingSection />
      <JoinSection />
      <WhyJoinUsSection />
      <SupportSection />
      <InsideSection />
      <StatementSection />
      <ContactSection />
    </div>
  );
}

export default App;
