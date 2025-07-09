import "./App.css";
import "./index.css";
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import Experience from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { useState, useRef } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuExpand, setMenuExpand] = useState(false);
  const mainRef = useRef(null);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.focus();
      }
    }, 100);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div
        ref={mainRef}
        tabIndex="-1"
        className={`min-h-screen transition-opacity duration-700 outline-none ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
      >
        <Navbar menuExpand={menuExpand} setMenuExpand={setMenuExpand} />
        <MobileMenu menuExpand={menuExpand} setMenuExpand={setMenuExpand} />
        <Home />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
