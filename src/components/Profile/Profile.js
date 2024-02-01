import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const Profile = () => {
    const {user, updateUserProfile} = useContext(AuthContext)
    const [name, setName] = useState(user?.displayName)
    const photoURLRef = useRef(user?.photoURL)

    const handleSubmit = event =>{
        event.preventDefault()
        console.log(name)
        console.log(photoURLRef.current.value)

        updateUserProfile({ displayName: name, photoURL: photoURLRef.current.value })
        .then(() => {
            // Handle success if needed
        })
        .catch((error) => {
            console.error('Error updating profile:', error);
            // Handle error if needed
        });
    }


    const handleNameChange = event =>{
        setName(event.target.value)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <h1 className="text-5xl font-bold">Update now!</h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" onChange={handleNameChange} name='name' defaultValue={name} placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" ref={photoURLRef} name='photoURL' placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Profile;