import React, {useEffect} from "react";
import "./style/App.css";
import axios from "axios";
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {CulturesPage} from "./pages/CulturesPage/CulturesPage";
import {EducationPage} from "./pages/EducationPage/EducationPage";

function App() {
    useEffect(() => {
        async function API()
        {
            try {
                const response = await axios.get("https://apidata.mos.ru/v1/datasets/3243?api_key=b7546afced8886fa3b41debca1e78a84");
                const JsonData = await response.data;
                console.log(JsonData);
            }
            catch (e)
            {
                console.log(e);
            }
        }

        API();
    }, []);

  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="*" element={<Header NoPages={true}/>}/>
                  {['/', '/cultures', '/educations'].map((path) => (
                      <Route path={path} element={<Header />} />
                  ))}
              </Routes>
              <Routes>
                  <Route path="/" element={<MainPage/>} />
                  <Route path="/cultures" element={<CulturesPage/>} />
                  <Route path="/educations" element={<EducationPage/>} />
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
