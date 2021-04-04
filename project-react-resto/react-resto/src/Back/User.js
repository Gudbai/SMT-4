import React, { useState } from 'react';
import useGet from '../Hook/useGet';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { link } from '../Axios/link';

const User = () => {

    const [mopen, setMopen] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    function tambah() {
        setMopen(true);
    }

    async function status(id) {
        const data = isi.filter((val) => val.id === id);
        let stat = 0;
        if (data[0].status === 1) {
            stat = 0;
        } else {
            stat = 1;
        }
        let kirim = {
            status: stat
        }
        const res = await link.put('/user/' + id, kirim)
    }

    async function simpan(data) {
        let user = {
            email: data.email,
            password: data.password,
            level: data.level,
            relasi: 'back'
        }
        const res = await link.post('/register', user);
        setMopen(false);
    }
    let No = 1;
    const [isi] = useGet('/user/');


    return (
        <div>
            <Modal isOpen={mopen} onRequestClose={() => setMopen(false)} style={
                {
                    overlay: {
                        background: 'transparent !important'
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '40%'
                    },
                }
            }>
                <div className="row">
                    <div className="ml-2">
                        <h2>Input data user</h2>
                    </div>

                </div>
                <div className="row">
                    <div className="ml-2 col">
                        <form onSubmit={handleSubmit(simpan)}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Email" ref={register({ required: true })} />
                                {errors.email && "Email Harus Diisi"}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" ref={register} />
                            </div>
                            <label htmlFor="posisi" className="form-label">Posisi</label>
                            <select name="level" ref={register} className="form-control">
                                <option value="admin">admin</option>
                                <option value="kasir">kasir</option>
                                <option value="koki">koki</option>

                            </select>
                            <div className="mt-3">
                                <input type="submit" className="btn btn-primary" name="keterangan" />
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
            <div className="row">
                <div>
                    <h2>Menu User</h2>
                </div>
            </div>
            <div className="row">
                <div>
                    <input onClick={() => (tambah())} className="btn btn-primary" type="submit" value="Tambah" />
                </div>
            </div>
            <div className="row">
                <div>
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>User</th>
                                <th>Level</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isi.map((val, index) => (
                                    <tr key={index}>
                                        <td>{No++}</td>
                                        <td>{val.email}</td>
                                        <td>{val.level}</td>
                                        <td>{
                                            val.status === 1 ?
                                                <input onClick={() => status(val.id)} className="btn btn-success" type="submit" value="AKTIF" /> :
                                                <input onClick={() => status(val.id)} className="btn btn-danger" type="submit" value="BANNED" />
                                        }</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default User;
