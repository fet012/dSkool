import Contact from "./contact";
import Faq from "./faq";
import Home from "./home";
import Pricing from "./pricing";

export default function HomeContent() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
