import { link } from './link.js';

export function ubah() {
    let id = 1;
    let data = {
        pelanggan: 'updat',
        alamat: 'alamat',
        telp: '1'
    };
    link.put('/pelanggan/' + id, data).then(res => {
        console.log(res)
        let tampil = `<h1>${res.data.pesan}</h1>`;
        document.querySelector('#out').innerHTML = tampil;
    })
}