import React from "react";
import { useForm } from "react-hook-form";
import { link } from '../Axios/link';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();

    async function login(data) {
        const res = await link.post('/login', data);
        console.log(res);

        reset();
    }

	return (
		<div>
			<div className="row mt-5">
				<div className="mx-auto col-4">
					<form onSubmit={handleSubmit(login)}>
						<div classname="mb-3">
							<label
								htmlfor="exampleInputEmail1"
								classname="form-label"
							>
								Email address
							</label>
							<input
								type="email"
								classname="form-control"
								name="email"
								placeholder="Email Anda"
                                ref={register( { required:true } )}
							/>
						</div>
						<div classname="mb-3">
							<label
								htmlfor="exampleInputPassword1"
								classname="form-label"
							>
								Password
							</label>
							<input
								type="password"
								classname="form-control"
								name="password"
                                placeholder="Password"
                                ref={register( { required:true } )}
							/>
						</div>
						<button type="submit" classname="btn btn-primary">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
