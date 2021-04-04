import React from 'react';
import { useForm } from "react-hook-form";
import { link } from '../Axios/link';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();

    const history = useHistory();

    async function login(data) {
        const res = await link.post('/login', data);

        let token = await res.data.token;


        sessionStorage.setItem('token', token);
        sessionStorage.setItem('email', res.data.data.email);
        sessionStorage.setItem('level', res.data.data.level);

        reset();

        if (gettoken() != 'undefined') {
            history.push('/admin');
            window.location.reload();
        }
    }

    const gettoken = () => (sessionStorage.getItem('token'));

    return (
        <div>
            <div className="row mt-5">
                <div className="mx-auto col-4 ">
                    <form onSubmit={handleSubmit(login)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="email anda" ref={register({ required: true })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="password anda" ref={register({ required: true })} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;
