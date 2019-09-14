import history from 'js/history';

export default function useServerMethod (setUser, setCookie, removeCookie, setToken) {
    
    return {
        getCurrentUser: async (token) => {
            try {
                const url = 'https://flask-karaoke.herokuapp.com/users/current';
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
                if (json.status === 'success') {
                    setUser(json.user);
                    setToken(token);
                    console.log('print json: ', json);
                    return json;
                } else if (json.status === 'fail') {
                    console.log('print error json: ', json)
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        postRegisterData: async (data) => {
            try {
                const url = 'https://flask-karaoke.herokuapp.com/users/register';
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
                if (json.status === 'success') {
                    console.log('print response.json: ', json)
                    json.status === 'success' && history.push('/login');
                    return json;
                } else if (json.status === 'fail') {
                    console.log('print error json: ', json)
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        postLoginData: async (data) => {
            try {
                const url = 'https://flask-karaoke.herokuapp.com/users/login';
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
                if (json.status === 'success') {
                    console.log('print response.json: ', json)
                    setUser(json.username);
                    setToken(json.token);
                    setCookie('sessionToken', json.token, { path: '/', expires: new Date(new Date().getTime() + 3*24*60*60*1000) })
                    history.push('/home');
                    return json;
                } else if (json.status === 'fail') {
                    console.log('print error json: ', json)
                    console.log('response.ok = false, print response: ', response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        logout: async (token) => {
            try {
                const url = 'https://flask-karaoke.herokuapp.com/users/logout';
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
                if (json.status === 'success') {
                    console.log('print response.json: ', json)
                    removeCookie('sessionToken');
                    setUser('guest');
                    history.push('/home');
                    return json;
                } else if (json.status === 'fail') {
                    console.log('print error json: ', json)
                    console.log(response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
        addSongToDatabase: async (data) => {
            try {
                const url = 'https://flask-karaoke.herokuapp.com/songs/add';
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
                if (json.status === 'success') {
                    console.log('print response.json: ', json)
                    return json;
                } else if (json.status === 'fail') {
                    console.log('print error json: ', json)
                    console.log('response.ok = false, print response: ', response);
                }
            } catch (error) {
                    console.error(error);
            }
        },
    }
}