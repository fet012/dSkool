import React, { useState } from "react";

import HomeContent from "./HomeContent";
import Footer from "./Footer";
import Header from "./header";
import AppRouter from "./routes";


function App() {
  const [showRoute, setShowRoute] = useState(false);

  return (
    <div>
      <Header setShowRoute={setShowRoute} />
      {showRoute ? <AppRouter /> : <HomeContent />}
      <Footer />
    </div>
  );
}

export default App;
