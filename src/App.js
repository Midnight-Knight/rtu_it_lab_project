import React, {useEffect} from "react";
import "./style/App.css";
import {Header} from "./components/header/header";
import {FirstSection} from "./sections/FirstSection/FirstSection";
import axios from "axios";

function App() {
    useEffect(() => {
        async function API()
        {
            try {
                const response = await axios.get("https://apidata.mos.ru/v1/datasets/61121?api_key=b7546afced8886fa3b41debca1e78a84");
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
    <div className="App">
      <Header/>
        <FirstSection/>
    </div>
  );
}

export default App;
