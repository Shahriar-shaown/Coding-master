import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {
    const navigate = useNavigate()
    const {logInUser,googleSignIn,githubSignIn} = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        logInUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(error=>console.error(error))
    }

    const handleGoogle = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

    const handleGithub = () =>{
        githubSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <div>
                                    <p>Are you new to this site ? <Link className='text-primary' to='/register'>Register</Link></p>
                                    <br />
                                </div>
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                                <button className="btn btn-primary mt-3" onClick={handleGoogle}>Sign in with Google</button>
                                <button className="btn btn-primary mt-3" onClick={handleGithub}>Sign in with Github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;