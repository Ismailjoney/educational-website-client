import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';
import reg from '../../assets/reg.jpg'
import { Link, useNavigate  } from 'react-router-dom';

const Reg = () => {
    const{createUser} = useContext(AuthContext)
    const [error, setError] = useState()
    const navigate = useNavigate()


    const  handleSingUp = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
         

        createUser(email,password)
        .then(resualt => {
            const user = resualt.user;
            navigate('/')
            form.reset()
            setError('');
           
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }   

    return (
        <div className="hero w-full my-20 bg-slate-400">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-full' src={reg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">SingUp</h1>
                <form onSubmit={handleSingUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
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
                         
                    </div>
                    {
                        error && <p>{error}</p>
                    }
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Singup" />
                    </div>
                </form>
                <p className='text-center'>All ready have an account<Link className='text-orange-600 font-bold' to="/login"> Login</Link> </p>
            </div>
        </div>
    </div>
         
    )
}

export default Reg;