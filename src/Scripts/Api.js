import fetch from  'isomorphic-fetch';

const PORT = process.env.PORT || 3000;

const BASE_API_URL = `http://localhost:${PORT}/api/`

export function api(api_end_point, data) {

    return fetch(BASE_API_URL+api_end_point, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then((response) => {
            return response.json();
        });
}