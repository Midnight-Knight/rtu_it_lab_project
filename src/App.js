import React from "react";
import "./style/App.css";
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Header/>}/>
                  <Route path="*" element={<Header NoPages={true}/>}/>
              </Routes>
              <Routes>
                  <Route path="/" element={<MainPage/>} />
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
