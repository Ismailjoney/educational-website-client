import {   GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';
 

const Login = () => {
    const {userSingIn,providerLogIn } = useContext(AuthContext)
    const[error, setError] = useState()
    const googleProvider = new GoogleAuthProvider();
     

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const  handleLogin  = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

        userSingIn(email,password)
        .then(resualt => {
            const user = resualt.user;
            form.reset()
            setError('');
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }   

    const googleSingIn =() => {
        providerLogIn(googleProvider )
        .then(res => {
            const user = res.user;
            navigate('/')
             
        })
        .catch(error => {
            console.error(error);
        })
    }

    

    return (
        <div   className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body bg-">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-red-500'> {error}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Website Car <Link className='text-orange-600 font-bold' to='/singup'> Sign Up</Link> </p>
                    <button onClick={googleSingIn}>GOOGLE LOG IN</button>
                     
                </div>
            </div>
        </div>
    )
}

export default Login;