"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoPersonSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';

const schema = yup.object().shape({
  Full_name: yup.string().required('Full name is required'),
  Password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='w-full px-4 md:px-12'>
      <h2 className="text-3xl text-center py-6 font-bold mb-6 text-primary">Login</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center bg-white font-sans">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src="/media/loginimage.png" alt="Login" width={500} height={300} layout="responsive" />
        </div>
        
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className='py-2'>
              <label htmlFor="Full_name" className="block text-[22px] text-primary">
                <IoPersonSharp className="inline w-6 h-6 mr-2" /> Full Name:
              </label>
              <input
                id="Full_name"
                {...register('Full_name')}
                className="w-full md:w-[80%] border text-[20px] border-foreground border-2 rounded-md shadow-sm p-3 pr-10"
              />
              {errors.Full_name && <span className="text-red-500 text-[22px]">{errors.Full_name.message}</span>}
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label htmlFor="Password" className="flex items-center text-[22px] text-primary mb-1">
                  <RiLockPasswordFill className="w-6 h-6 mr-2" /> Password:
                </label>
                <div className="relative w-full md:w-[80%]">
                  <input
                    id="Password"
                    type={showPassword ? "text" : "password"}
                    {...register('Password')}
                    className="w-full border text-[20px] border-foreground border-2 rounded-md shadow-sm p-3 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash className="h-5 w-5 text-primary" /> : <FaEye className="h-5 w-5 text-primary" />}
                  </button>
                </div>
                {errors.Password && <span className="text-red-500 text-[22px]">{errors.Password.message}</span>}
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-primary rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-primary">
                Remember me?
              </label>
            </div>

            <button
              type="submit"
              className="w-full md:w-[80%] flex justify-center py-2 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#85c226]"
            >
              Login
            </button>
          </form>

          <div className="mt-9 text-center">
            <hr className="border-t-2 border-primary mb-4 w-full md:w-3/4 mx-auto" />
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[20px] text-primary mr-2 mb-2 sm:mb-0">Don't have an account?</span>
              <Link href="/register" className="font-medium text-[20px] text-foreground hover:text-secondary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;







// "use client";

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { IoPersonSharp } from "react-icons/io5";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { RiLockPasswordFill } from "react-icons/ri";
// import Image from 'next/image';
// import Link from 'next/link';

// const schema = yup.object().shape({
//   Full_name: yup.string().required('Full name is required'),
//   Password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className='w-full px-4 md:px-12'>
//       <h2 className="text-3xl text-center py-6 font-bold mb-6 text-primary">Login</h2>
      
//       <div className="flex flex-col md:flex-row items-center justify-center bg-white font-sans">
//         <div className="w-full md:w-1/2 mb-8 md:mb-0">
//           <Image src="/media/image.png" alt="Login" width={500} height={300} layout="responsive" />
//         </div>
        
//         <div className="w-full md:w-1/2">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div className='py-2'>
//               <label htmlFor="Full_name" className="block text-[22px] text-primary">
//                 <IoPersonSharp className="inline w-6 h-6 mr-2" /> Full Name:
//               </label>
//               <input
//                 id="Full_name"
//                 {...register('Full_name')}
//                 className="w-full md:w-[80%] border text-[20px] border-foreground border-2 rounded-md shadow-sm p-3 pr-10"
//               />
//               {errors.Full_name && <span className="text-red-500 text-[22px]">{errors.Full_name.message}</span>}
//             </div>

//             <div className="space-y-6">
//               <div className="relative">
//                 <label htmlFor="Password" className="flex items-center text-[22px] text-primary mb-1">
//                   <RiLockPasswordFill className="w-6 h-6 mr-2" /> Password:
//                 </label>
//                 <div className="relative w-full md:w-[80%]">
//                   <input
//                     id="Password"
//                     type={showPassword ? "text" : "password"}
//                     {...register('Password')}
//                     className="w-full border text-[20px] border-foreground border-2 rounded-md shadow-sm p-3 pr-10"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 flex items-center pr-3"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash className="h-5 w-5 text-primary" /> : <FaEye className="h-5 w-5 text-primary" />}
//                   </button>
//                 </div>
//                 {errors.Password && <span className="text-red-500 text-[22px]">{errors.Password.message}</span>}
//               </div>
//             </div>

//             <div className="flex items-center">
//               <input
//                 id="remember_me"
//                 type="checkbox"
//                 className="h-4 w-4 text-primary focus:ring-primary border-primary rounded"
//               />
//               <label htmlFor="remember_me" className="ml-2 block text-sm text-primary">
//                 Remember me?
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="w-full md:w-[80%] flex justify-center py-2 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#85c226]"
//             >
//               Login
//             </button>
//           </form>

//           <div className="mt-9 text-center">
//             <hr className="border-t-2 border-primary mb-4 w-full md:w-3/4 mx-auto" />
//             <div className="flex flex-col sm:flex-row items-center justify-center">
//               <span className="text-[20px] text-primary mr-2 mb-2 sm:mb-0">Don't have an account?</span>
//               <Link href="/register" className="font-medium text-[20px] text-foreground hover:text-secondary">
//                 Register
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
