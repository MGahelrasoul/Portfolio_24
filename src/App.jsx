import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

  // #FFBA08 lighter
  // #F48C06 darker
  
  // #1a191d
  // 03071E

  // 211e35

  // old
  // #ffd864
  // #d2b2a2
  // #1c1916

  //DCCEC5


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
