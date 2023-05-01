import React from "react";
import "./style/App.css";
import {Header} from "./components/header/header";
import {MainSection} from "./sections/MainSection/MainSection";
import {Footer} from "./components/footer/footer";

function App() {

  return (
    <div className="App">
      <Header/>
        <MainSection/>
        <Footer/>
    </div>
  );
}

export default App;
