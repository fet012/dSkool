import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import HomeContent from "./components/HomeContent.jsx";
import Router from "./components/routes.jsx";
// import Register from "./components/register.jsx";
import { useState } from "react";

export default function App() {
  const [showRoute, setShowRoute] = useState(false);

  return (
    <div>
      <Header setShowRoute={setShowRoute} />
      {showRoute ? <Router /> : <HomeContent />}
      <Footer />
    </div>
  );
}
