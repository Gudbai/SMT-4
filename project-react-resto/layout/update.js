import {link} from './link.js'

export function ubah() {
    let id = 11;
    let data = {
        pelanggan: 'update axios export',
        alamat: 'update axios export',
        telp: 098765
    };

    link.put('/pelanggan/' + id, data).then(res=>console.log(res));
}