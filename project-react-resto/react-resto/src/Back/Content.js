import React from 'react';
import { useParams } from 'react-router-dom';
import Kategori from './Kategori';
import Menu from './Menu';
import Pelanggan from './Pelanggan';
import Order from './Order';

const Content = () => {
    const {isi} = useParams();

    let tampil;

    if (isi==='kategori') {
        tampil = <Kategori></Kategori>
    }
    if (isi==='menu') {
        tampil = <Menu></Menu>
    }
    if (isi==='pelanggan') {
        tampil = <Pelanggan></Pelanggan>
    }
    if (isi==='order') {
        tampil = <Order></Order>
    }

    return (
        <>
            {tampil}
        </>
    );
}

export default Content;
