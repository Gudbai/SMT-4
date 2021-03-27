import axios from 'axios';


const url = "http://localhost:3000/api";
let token = "66JEOajF2u8OhxaAldNEx2QriM4VDACvNIcgsFgY";


export const link = axios.create({
    baseURL: url,
    headers: {
        'api_token': token
    }
});
