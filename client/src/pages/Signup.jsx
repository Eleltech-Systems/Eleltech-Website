import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

export default function Signup() {
     const [formData, setFormData] = useState({});
     const [successMessage, setSuccessMessage] = useState(null);
     const [errorMessage, setErrorMessage] = useState(null);
     const [loading, setLoading] = useState(false);

     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.id]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               setLoading(true);
               setErrorMessage(null);
               setSuccessMessage(null);
               const res = await fetch('https://eleltech-website.onrender.com/server/auth/signup', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
               });
               const data = await res.json();

               if (data.success === false) {
                    setLoading(false);
                    setErrorMessage(data.message);
                    return
               }

               setLoading(false);
               if (res.ok) {
                    setSuccessMessage(data.message);
               }
          } catch (error) {
               setErrorMessage(error.message);
          }
     };

     return (
          <div className='min-h-screen pt-30'>
               <div className='p-3 max-w-lg mx-auto'>
                    <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
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
                                   <span className="font-semibold text-sm">Sign Up</span>
                              }
                         </button>
                    </form>
                    <div className='flex gap-2 mt-5'>
                         <p>Have an account?</p>
                         <Link to='/signin'>
                              <span className='text-blue-500'>Sign In</span>
                         </Link>
                    </div>
                    {successMessage &&
                         <div className="p-3 text-center max-w-138 mx-auto rounded-lg bg-green-600 mt-8">
                              <p className="text-white text-sm sm:text-base">{successMessage}</p>
                         </div>
                    }
                    {errorMessage &&
                         <div className="p-3 text-center max-w-138 mx-auto rounded-lg bg-red-600 mt-8">
                              <p className="text-white text-sm sm:text-base">{errorMessage}</p>
                         </div>
                    }
               </div>
          </div>
     )
}