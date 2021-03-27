import { useState, useEffect } from 'react';
import { link } from '../Axios/link';

const useGet = (url) => {
    const [isi, setIsi] = useState([]);

    useEffect(() => {

        let ambil = true;
        async function fetchdata() {
            const res = await link.get(url);
            if (ambil) {
                setIsi(res.data);
            }
        }
        fetchdata()
        return () => {
            ambil = false;
        };
    }, [isi]);

    return [isi];
}

export default useGet;
