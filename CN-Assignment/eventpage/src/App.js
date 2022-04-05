import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainBodyContent from "./Components/MainBodyContent/MainBodyContent";
import EventPosts from "./Components/EventPosts/EventPosts";
import BottomNavbar from "./Components/BottomNavbar/BottomNavbar";
import Footer from "./Components/FooterComponent/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBodyContent />
      <EventPosts />
      <BottomNavbar />
      <Footer />
    </div>
  );
}

export default App;
