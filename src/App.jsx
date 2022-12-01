import React from "react";
import GlobalFonts from "./fonts/fonts";
import Header from "./components/Header";
// import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter";
// import Tiles from "./components/Tiles";
// // import Activity from "./components/Activity";
// // import Terms from "./components/TermsConditions";
import { GlobalStyle } from "./styles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Activity from "./pages/activity";
import Terms from "./pages/tcs";
import Swim from "./pages/swim";
import Kai from "./pages/kai";
import Book from "./pages/book";
import Hikoi from "./pages/hikoi";
import Song from "./pages/song";
import Picnic from "./pages/picnic";
import Birds from "./pages/birds";
import Sky from "./pages/sky";
import Arty from "./pages/arty";
import Outdoors from "./pages/outdoors";
import Backyard from "./pages/backyard";
import Barefoot from "./pages/barefoot";
import Friend from "./pages/friend";
import Visit from "./pages/visit";
import Whanau from "./pages/whanau";
import Dance from "./pages/dance";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/swim" element={<Swim />} />
        <Route path="/kai" element={<Kai />} />
        <Route path="/book" element={<Book />} />
        <Route path="/hikoi" element={<Hikoi />} />
        <Route path="/song" element={<Song />} />
        <Route path="/picnic" element={<Picnic />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/sky" element={<Sky />} />
        <Route path="/arty" element={<Arty />} />
        <Route path="/outdoors" element={<Outdoors />} />
        <Route path="/backyard" element={<Backyard />} />
        <Route path="/barefoot" element={<Barefoot />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/whanau" element={<Whanau />} />
        <Route path="/dance" element={<Dance />} />
      </Routes>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default App;
