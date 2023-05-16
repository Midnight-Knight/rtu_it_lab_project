import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.css";
import App from './App';
import axios from "axios";
import {setAccountCookie, checkAccount, getCookieExpiration} from "./cookie";


async function start()
{
    async function loadData(link)
    {
        try
        {
            const buffer = await axios.get(link);
            return await buffer.data.array;
        }
        catch (e)
        {
            return await loadData(link);
        }
    }

    setAccountCookie("login2", "password2", getCookieExpiration(3));
    console.log(checkAccount());

    const festivals = await loadData("http://localhost:2999/api/get/festivals");
    const art = await loadData("http://localhost:2999/api/get/art");
    const sport = await loadData("http://localhost:2999/api/get/sports");
    const citylife = await loadData("http://localhost:2999/api/get/citylife");
    const family = await loadData("http://localhost:2999/api/get/family");
    const exhibitions = await loadData("http://localhost:2999/api/get/exhibitions");

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App festivals={festivals} art={art} sport={sport} citylife={citylife} family={family} exhibitions={exhibitions}/>
        </React.StrictMode>
    );
}

start();



