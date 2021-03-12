import { link } from "../Axios/link";
import { useState } from "react";

const useDelete = () => {
    const [pesan, setPesan] = useState("");

    async function hapus(id) {
        if (window.confirm("Yakin akan menghapus?")) {
            const res = await link.delete(url + id);
            setPesan(res.data.pesan);
        }
    }

    return {hapus, pesan};
}

export default useDelete;
