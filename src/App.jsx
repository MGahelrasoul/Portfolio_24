import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
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

  // 
  // old
  // #ffd864
  // #d2b2a2
  // #1c1916


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="">
            <Navbar />
            <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
