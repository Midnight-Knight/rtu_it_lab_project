import axios from "axios";
import {checkAccount, getCookieExpiration, setAccountCookie} from "./cookie";

export class Server {
    static #url = "http://localhost:2999";

    static async authorization(email, password)
    {
        let response;
        try {
            const data = await axios.post(this.#url+'/authorization',{email: email, password: password});
            if (data.data.responseEmail === true && data.data.responsePassword === true)
            {
                setAccountCookie(email,password,getCookieExpiration(3));
            }
            response = data.data;
        }
        catch (e)
        {
            console.error(e);
            response = {responseEmail: "Ошибка соединения", responsePassword: "Ошибка соединения"};
        }
        return response;
    }

    static async checkAll(email, password1, password2)
    {
        if (password1 === password2 && password1.length >= 8 && password2.length >= 8)
        {
            let response;
            try {
                const data = await axios.post(this.#url+'/check/all',{email: email, password: password1});
                if (data.data.responseEmail === true && data.data.responsePassword === true)
                {
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('password', password1);
                }
                response = data.data;
            }
            catch (e)
            {
                console.error(e);
                response = {responseEmail: "Ошибка соединения", responsePassword: "Ошибка соединения"};
            }
            return response;
        }
        else
        {
            return {responseEmail: true, responsePassword: "Разные пароли"};
        }
    }

    static async message(email, title, message)
    {
        let response;
        try {
            const data = await axios.post(this.#url+'/message',{email: email, title: title, message: message});
            response = data.data.response;
        }
        catch (e)
        {
            console.error(e);
            response = "Ошибка соединения";
        }
        return response;
    }

    static async registration(Input, Code)
    {
        if (Input === Code)
        {
            let response;
            try {
                const data = await axios.post(this.#url+'/registration',{email: sessionStorage.getItem('email'), password: sessionStorage.getItem('password')});
                if (data.data.response === true)
                {
                    setAccountCookie(sessionStorage.getItem('email'),sessionStorage.getItem('password'),getCookieExpiration(3));
                }
                response = await data.data.response;
            }
            catch (e)
            {
                console.error(e);
                response = "Ошибка соединения";
            }
            return response;
        }
        else
        {
            return "Код не подходит";
        }
    }

    static async checkEmail(email)
    {
        let response;
        try {
            const data = await axios.post(this.#url+'/check/email',{email: email});
            if (data.data.responseEmail === true)
            {
                sessionStorage.setItem('email', email);
            }
            response = await data.data.responseEmail;
        }
        catch (e)
        {
            console.error(e);
            response = "Ошибка соединения";
        }
        return response;
    }

    static async password(password, password2)
    {
        if (password === password2)
        {
            let response;
            try {
                const data = await axios.post(this.#url+'/password',{email: sessionStorage.getItem('email'), password: password});
                if (data.data.checkPassword === true)
                {
                    setAccountCookie(sessionStorage.getItem('email'),password,getCookieExpiration(3));
                }
                response = await data.data.checkPassword;
            }
            catch (e)
            {
                console.error(e);
                response = "Ошибка соединения";
            }
            return response;
        }
        else
        {
            return "Разные пароли";
        }
    }

    static async add(id)
    {
        let response;
        try {
            const data = await axios.post(this.#url+'/event/add',{email: checkAccount().login, id: id});
            response = await data.data.response;
        }
        catch (e)
        {
            console.error(e);
            response = "Ошибка соединения";
        }
        return response;
    }

    static async delete(id)
    {
        let response;
        try {
            const data = await axios.post(this.#url+'/event/delete',{email: checkAccount().login, id: id});
            response = await data.data.response;
        }
        catch (e)
        {
            console.error(e);
            response = "Ошибка соединения";
        }
        return response;
    }

    static async get()
    {
        let response;
        try {
            const data = await axios.post(this.#url+'/event/get',{email: checkAccount().login});
            response = await data.data;
        }
        catch (e)
        {
            console.error(e);
            response = {response: "Ошибка соединения"};
        }
        return response;
    }

    static async id()
    {
        let response;
        try {
            const data = await axios.post(this.#url+'/event/id',{email: checkAccount().login});
            response = await data.data;
        }
        catch (e)
        {
            console.error(e);
            response = {response: "Ошибка соединения"};
        }
        return response;
    }
}