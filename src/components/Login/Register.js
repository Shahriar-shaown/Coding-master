import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Register = () => {
    const {createUser,googleSignIn,githubSignIn} = useContext(AuthContext)
    const [error,setError] = useState([])
    const navigate = useNavigate()

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        console.log(email,password,name,photoURL)

        if(password.length < 6){
            setError('Password should be more than 6 characters')
            return;
        }

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate('/login')
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
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <p style={{color:'red'}}>{error}</p>
                            <div>
                                <p>Already have an account ? <Link className='text-primary' to='/login'>Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                <button className="btn btn-primary mt-3" onClick={handleGoogle}>Register with Google</button>
                                <button className="btn btn-primary mt-3" onClick={handleGithub}>Register with Github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Register;