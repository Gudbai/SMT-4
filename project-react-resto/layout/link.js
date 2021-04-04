const url = "http://localhost:8000/api";
let token = "6tYLNnPwYbKXRqPESpQtKK6XiSd2iEYz1Tq6E1Sj";

export const link = axios.create({
    baseURL: url,
    headers: {
        'api_token': token
    }
});
