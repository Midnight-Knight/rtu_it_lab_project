import React, {memo} from "react";
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

const MemoizedHeader = memo(Header);
const MemoizedFooter = memo(Footer);
const MemoizedMainPage = memo(MainPage);
const MemoizedFestivalsPage = memo(FestivalsPage);
const MemoizedSportPage = memo(SportPage);
const MemoizedExhibitionsPage = memo(ExhibitionsPage);
const MemoizedArtPage = memo(ArtPage);
const MemoizedCitylifePage = memo(CitylifePage);
const MemoizedFamilyPage = memo(FamilyPage);
const MemoizedEventsPage = memo(PageEvents);

function App(props) {

  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="*" element={<MemoizedHeader Animation={false}/>}/>
                  {['/', '/festivals', '/sport', '/exhibitions', '/art', '/citylife', '/family'].map((path) => (
                      <Route path={path} key={path} element={<MemoizedHeader />} />
                  ))}
                  {props.festivals.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedHeader />}/>
                  ))}
                  {props.sport.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedHeader />}/>
                  ))}
                  {props.exhibitions.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedHeader />}/>
                  ))}
                  {props.art.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedHeader />}/>
                  ))}
                  {props.citylife.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedHeader />}/>
                  ))}
                  {props.family.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedHeader />}/>
                  ))}
              </Routes>
              <Routes>
                  <Route path="/" element={<MemoizedMainPage festivals={props.festivals}
                                                             art={props.art} sport={props.sport}
                                                             family={props.family}
                                                             citylife={props.citylife}
                                                             exhibitions={props.exhibitions}/>} />
                  <Route path="/festivals" element={<MemoizedFestivalsPage festivals={props.festivals}/>} />
                  <Route path="/sport" element={<MemoizedSportPage sport={props.sport}/>} />
                  <Route path="/exhibitions" element={<MemoizedExhibitionsPage exhibitions={props.exhibitions}/>} />
                  <Route path="/art" element={<MemoizedArtPage art={props.art}/>}/>
                  <Route path="/citylife" element={<MemoizedCitylifePage citylife={props.citylife}/>}/>
                  <Route path="/family" element={<MemoizedFamilyPage family={props.family}/>}/>
                  {props.festivals.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedEventsPage dataJSON={elem}/>}/>
                  ))}
                  {props.art.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedEventsPage dataJSON={elem}/>}/>
                  ))}
                  {props.sport.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedEventsPage dataJSON={elem}/>}/>
                  ))}
                  {props.family.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedEventsPage dataJSON={elem}/>}/>
                  ))}
                  {props.citylife.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedEventsPage dataJSON={elem}/>}/>
                  ))}
                  {props.exhibitions.map((elem) => (
                      <Route path={"/"+elem.ID} key={elem.TypeEvent+elem.ID} element={<MemoizedEventsPage dataJSON={elem}/>}/>
                  ))}
              </Routes>
              <Routes>
                  <Route path="*" element={<MemoizedFooter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
