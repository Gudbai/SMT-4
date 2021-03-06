import axios from 'axios';

const url = "http://localhost:8000/api/pelanggan"
const token = "66JEQajF2u8OhxaAldNEx2QRiM4VDACvNIcgsFgY"

export const link = axios.create({
    baseURL: url,
    headers:{
        'api_token': token
    }
});