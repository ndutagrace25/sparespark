import React, { useRef } from "react";
import { Navbar } from "../common";
import { Header, AboutUs, Services, Works, Contact, Register } from ".";
// 
const Home = () => {
  const myRefAbout = useRef(null);
  const myRefServices = useRef(null);
  const myRefWorks = useRef(null);
  const myRefContact = useRef(null);
  const myRefHome = useRef(null);

  return (
    <div className="bg-light" ref={myRefHome}>
      <div className="container">
        <Navbar
          scrollToAbout={() => myRefAbout.current.scrollIntoView()}
          scrollToServices={() => myRefServices.current.scrollIntoView()}
          scrollToWorks={() => myRefWorks.current.scrollIntoView()}
          scrollToContact={() => myRefContact.current.scrollIntoView()}
          scrollToHome={() => myRefHome.current.scrollIntoView()}
          myRef={myRefHome}
        />
        <Register />
        <Header />
        <AboutUs myRef={myRefAbout} />
        <Services myRef={myRefServices} />
        <Works myRef={myRefWorks} />
        <Contact
          myRef={myRefContact}
          scrollToAbout={() => myRefAbout.current.scrollIntoView()}
          scrollToServices={() => myRefServices.current.scrollIntoView()}
          scrollToWorks={() => myRefWorks.current.scrollIntoView()}
          scrollToContact={() => myRefContact.current.scrollIntoView()}
          scrollToHome={() => myRefHome.current.scrollIntoView()}
        />
      </div>
    </div>
  );
};

export default Home;
