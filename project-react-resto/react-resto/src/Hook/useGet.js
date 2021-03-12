import React, { useState, useEffect } from "react";
import { link } from "../Axios/link";

const useGet = () => {
    const [isi, setIsi] = useState([]);

    useEffect(() => {
        let ambil = true;
        async function fetchData() {
            const res = await link.get(url);
            if (ambil) {
                setIsi(res.data);
            }
        }
        fetchData();
        return () => {
            ambil = false;
        };
    }, [isi]);

    return [isi];
};

export default useGet;
