import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Hairstyles from "../components/Hairstyles";
import Alert from "../components/alert";
import Newbot from "../components/newbot";

function Home() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header imgtext={"Need a Haircut?"} />
      <Hero />
      <Newsletter />
      <Hairstyles />
      <Newbot />
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        />
      )}
    </div>
  );
}

export default Home;
