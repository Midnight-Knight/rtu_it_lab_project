import React from "react";
import "./style/App.css";
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {CulturesPage} from "./pages/CulturesPage/CulturesPage";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="*" element={<Header NoPages={true}/>}/>
                  {['/', '/cultures'].map((path) => (
                      <Route path={path} element={<Header />} />
                  ))}
              </Routes>
              <Routes>
                  <Route path="/" element={<MainPage/>} />
                  <Route path="/cultures" element={<CulturesPage/>} />
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
