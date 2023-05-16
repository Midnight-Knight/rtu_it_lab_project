function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

export function getCookieExpiration(days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    return date.toUTCString();
}

export function checkAccount() {
    const accountCookie = getCookie("account");
    if (accountCookie) {
        const { login, password } = JSON.parse(accountCookie);
        setAccountCookie(login, password, getCookieExpiration(3));
        return { login, password };
    }
    return undefined;
}

export function setAccountCookie(login, password, expiration) {
    const account = { login, password, expiration };
    const accountJSON = JSON.stringify(account);
    document.cookie = `account=${accountJSON}; expires=${expiration}`;
}