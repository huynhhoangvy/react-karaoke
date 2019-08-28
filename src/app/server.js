// import { async } from 'q';
import history from 'app/history';

export default function useServerMethod (setUser, setCookie, removeCookie, setToken) {
    
    return {
        getCurrentUser: async (token) => {
            try {
                // console.log('print cookie.token: ', cookies.sessionToken);
                console.log('print token: ', token)
                const url = 'http://localhost:5000/users/current';
                // const data = {'foo': 'bar'};
                const settings = {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': `${token}`,
                    }
                }
                const response = await fetch(url, settings)
                const json = await response.json()
                if (response.ok) {
                    console.log('response okeee', json);
                    console.log('print response: ', response);
                    setUser(json.user);
                    return json;
                    // return response
                } else {
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        foo: async () => {
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            };
            try {
                const fetchResponse = await fetch(`http://localhost:5000`, settings);
                const data = await fetchResponse.json();
                return data;
            } catch (error) {
                return console.error(error);
            }    
        
        },
        post: async () => {
            try {
                const url = 'http://localhost:5000/lang';
                const data = {'name': 'testing api'};
                const settings = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
                const response = await fetch(url, settings)
                const json = await response.json()
                if (response.ok) {
                    console.log('response okeee', json);
                    console.log('print response: ', response);
                    return json;
                    // return response
                } else {
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        testPost: async () => {
            try {
                const url = 'http://localhost:5000/test';
                const data = {'foo': 'bar'};
                const settings = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
                const response = await fetch(url, settings)
                const json = await response.json()
                if (response.ok) {
                    console.log('response okeee', json);
                    console.log('print response: ', response);
                    return json;
                    // return response
                } else {
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        postRegisterData: async (data) => {
            try {
                const url = 'http://localhost:5000/users/register';
                // const data = {'foo': 'bar'};
                const settings = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
                const response = await fetch(url, settings)
                const json = await response.json()
                if (response.ok) {
                    console.log('response okeee', json);
                    console.log('print response: ', response);
                    json.ok && history.push('/login');
                    return json;
                    // return response
                } else {
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        postLoginData: async (data) => {
            try {
                const url = 'http://localhost:5000/users/login';
                // const data = {'foo': 'bar'};
                const settings = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
                const response = await fetch(url, settings)
                const json = await response.json()
                if (response.ok) {
                    console.log('response okeee', json);
                    console.log('print token: ', json.token)
                    console.log('print response: ', response);
                    console.log('print username: ', json.username);
                    setUser(json.username);
                    setToken(json.token);
                    setCookie('sessionToken', json.token, { path: '/', expires: new Date(new Date().getTime() + 3*24*60*60*1000) })
                    history.push('/home');
                    return json;
                    // return response;
                } else {
                    console.log('response.ok = false, print response: ', response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        logout: async (token) => {
            try {
                // console.log('print props: ', token)
                console.log('print token from logout: ', token)
                const url = 'http://localhost:5000/users/logout';
                // const data = {'foo': 'bar'};
                const settings = {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-access-token': `${token}`,
                    }
                }
                const response = await fetch(url, settings)
                const json = await response.json()
                if (response.ok) {
                    console.log('response okeee', json);
                    console.log('print response: ', response);
                    removeCookie('sessionToken');
                    setUser('guest');
                    history.push('/home');
                    return json;
                    // return response
                } else {
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        addSongToDatabase: async (data) => {
            console.log('print data here: ', data);
            try {
                const url = 'http://localhost:5000/songs/add';
                // const data = {'foo': 'bar'};
                const settings = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
                const response = await fetch(url, settings)
                const json = await response.json()
                if (response.ok) {
                    console.log('response okeee', json);
                    console.log('print response: ', response);
                    return json;
                    // return response;
                } else {
                    console.log('response.ok = false, print response: ', response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        put: async () => {
            try {
                const url = 'http://localhost:5000/lang/javascript';
                const data = {'name': 'helloscript'};
                const settings = {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
                const response = await fetch(url, settings)
                const json = await response.json()
                if (response.ok) {
                    console.log('response okeee', json);
                    console.log('print response: ', response);
                    return json;
                    // return response
                } else {
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
    }
}