import React from "react";
import "./style/App.css";
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {FestivalsPage} from "./pages/FestivalsPage/FestivalsPage";
import {SportPage} from "./pages/SportPage/SportPage";
import {ExhibitionsPage} from "./pages/ExhibitionsPage/ExhibitionsPage";
import {ArtPage} from "./pages/ArtPage/ArtPage";
import {CitylifePage} from "./pages/CitylifePage/CitylifePage";
import {FamilyPage} from "./pages/FamilyPage/FamilyPage";
import {PageEvents} from "./pages/PageEvents/PageEvents";

function App(props) {

  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="*" element={<Header Animation={false}/>}/>
                  {['/', '/festivals', '/sport', '/exhibitions', '/art', '/citylife', '/family'].map((path) => (
                      <Route path={path} key={path} element={<Header />} />
                  ))}
              </Routes>
              <Routes>
                  <Route path="/" element={<MainPage/>} />
                  <Route path="/festivals" element={<FestivalsPage/>} />
                  <Route path="/sport" element={<SportPage/>} />
                  <Route path="/exhibitions" element={<ExhibitionsPage/>} />
                  <Route path="/art" element={<ArtPage/>}/>
                  <Route path="/citylife" element={<CitylifePage/>}/>
                  <Route path="/family" element={<FamilyPage/>}/>
                  {props.festivals.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<PageEvents dataJSON={elem} />}/>
                  ))}
                  {props.art.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<PageEvents dataJSON={elem} />}/>
                  ))}
                  {props.sport.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<PageEvents dataJSON={elem} />}/>
                  ))}
                  {props.family.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<PageEvents dataJSON={elem} />}/>
                  ))}
                  {props.citylife.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<PageEvents dataJSON={elem} />}/>
                  ))}
                  {props.exhibitions.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<PageEvents dataJSON={elem} />}/>
                  ))}
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
