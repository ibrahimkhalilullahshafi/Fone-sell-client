import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authprovider/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, providerLogin, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();


    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                toast.success('user created successfully')
                setError('');
                const profile = {
                    displayName: data.name
                }
                updateUserProfile(profile)
                    .then(() => { saveUser(data.name, data.email, data.role); })
                    .catch(error => console.log(error));

            })
            .catch(error => {
                setError(error.message);
            })
        reset();
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('saveuser data', data);
                getUserToken(email);
            })
    }
    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate(from, { replace: true });
                }
            })
    }



    const googleSignInHandler = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const profile = {
                    role: 'Buyer'
                }
                saveUser(user.displayName, user.email, profile.role);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='h-[800px] flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl font-bold my-8 text-[#ff6507]'>SignUp</h1>
            <form onSubmit={handleSubmit(handleSignUp)} className="form-control w-full max-w-xs  border-double border border-slate-100 shadow-2xl p-10 rounded-lg">
                <select className="select select-bordered w-full max-w-xs rounded-lg mt-1 mb-6" defaultValue="Buyer" {...register("role")}>
                    <option>Buyer</option>
                    <option>Seller</option>
                </select>
                <span className="label-text font-bold">Name</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="text" placeholder="Name" {...register("name", { required: "Name is required" })} />
                {errors.Name && <span role="alert" className='text-red-500'>{errors.Name?.message}</span>}

                <span className="label-text font-bold mt-6">Email</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                <span className="label-text font-bold mt-6">Password</span>
                <input className="input input-bordered w-full max-w-xs rounded-lg mt-3 mb-1" type="password" placeholder="Password" {...register("password", { required: "Password is required" })} />
                {errors.Password && <span role="alert" className='text-red-500'>{errors.Password?.message}</span>}

                <span role="alert" className='text-red-500'>{error}</span>

                <input type="submit" value="SignUp" className="btn rounded-lg w-full mt-6" />

                <span className="label-text mt-2">Already have an account? <Link className='text-[#ff6507]' to={'/login'}>Login</Link></span>

                <div className="divider">or</div>

                <button onClick={googleSignInHandler} className="btn rounded-lg w-full">GOOGLE</button>

            </form>

        </div>
    );
};

export default SignUp;