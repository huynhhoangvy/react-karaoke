import { useState } from 'react';
// import { async } from 'q';

export default function useServerMethod () {
    
    return {
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