import React from "react";
import "./style/App.css";
import {Header} from "./components/header/header";
import {MainSection} from "./sections/MainSection/MainSection";

function App() {

  return (
    <div className="App">
      <Header/>
        <MainSection/>
    </div>
  );
}

export default App;
