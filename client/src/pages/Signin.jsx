import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure, } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';

export default function SignIn() {
     const [formData, setFormData] = useState({});
     const { loading, error } = useSelector((state) => state.user);

     const navigate = useNavigate();
     const dispatch = useDispatch();
     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.id]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               dispatch(signInStart());
               const res = await fetch('/server/auth/signin', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
               });

               const data = await res.json();

               if (data.success === false) {
                    dispatch(signInFailure(data));
                    return;
               }
               dispatch(signInSuccess(data));
               navigate('/profile');
          } catch (error) {
               dispatch(signInFailure(error));
          }
     };
     return (
          <div className='min-h-screen pt-30'>
               <div className='p-3 max-w-lg mx-auto'>
                    <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                         <input
                              type='email'
                              placeholder='Email'
                              id='email'
                              className='bg-slate-100 p-3 rounded-lg'
                              onChange={handleChange}
                         />
                         <input
                              type='password'
                              placeholder='Password'
                              id='password'
                              className='bg-slate-100 p-3 rounded-lg'
                              onChange={handleChange}
                         />
                         <button
                              disabled={loading}
                              className='bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                         >
                              {loading ?
                                   <div className="flex items-center justify-center h-full">
                                        <ColorRing height="24" width="22" visible={loading} color="#36d7b7" />
                                   </div>
                                   :
                                   <span className="font-semibold text-sm">
                                        Sign In
                                   </span>
                              }
                         </button>
                    </form>
                    <div className='flex gap-2 mt-5'>
                         <p>Dont Have an account?</p>
                         <Link to='/signup'>
                              <span className='text-blue-500'>Sign up</span>
                         </Link>
                    </div>

                    {error &&
                         <div className="p-3 text-center max-w-138 mx-auto rounded-lg bg-red-600 mt-8">
                              <p className='text-white'>
                                   {error ? error.message || 'Something went wrong!' : ''}
                              </p>
                         </div>
                    }
               </div>
          </div>
     );
}