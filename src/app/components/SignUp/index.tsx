"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IoPersonSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash, FaPhoneAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";
import Image from 'next/image';

const schema = yup.object().shape({
  First_name: yup.string().required('First name is required'),
  Last_name: yup.string().required('Last name is required'),
  Phone_number: yup.string().min(6, 'Phone number must be at least 6 characters').required('Phone number is required'),
  Password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  Confirm_Password: yup.string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = () => {
    console.log();
  };

  return (
    <div className='w-full px-4 md:px-12'>
      <h2 className="text-3xl text-center py-6 font-bold mb-6 text-primary">Register</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center bg-white font-sans">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src="/media/image.png" alt="Registration" width={500} height={300} layout="responsive" />
        </div>
        
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className='py-2'>
              <label htmlFor="First_name" className="block text-[22px] text-primary">
                <IoPersonSharp className="inline w-6 h-6 mr-2" /> First Name:
              </label>
              <input
                id="First_name"
                {...register('First_name')}
                className="w-full md:w-[80%] border text-[20px] border-foreground border-2 rounded-md shadow-sm p-3 pr-10"
              />
              {errors.First_name && <span className="text-red-500 text-[22px]">{errors.First_name.message}</span>}
            </div>

            <div className='py-2'>
              <label htmlFor="Last_name" className="block text-[22px] text-primary">
                <IoPersonSharp className="inline w-6 h-6 mr-2" /> Last Name:
              </label>
              <input
                id="Last_name"
                {...register('Last_name')}
                className="w-full md:w-[80%] border text-[20px] border-foreground border-2 rounded-md shadow-sm p-3 pr-10"
              />
              {errors.Last_name && <span className="text-red-500 text-[22px]">{errors.Last_name.message}</span>}
            </div>

            <div className='py-2 text-[20px]'>
              <div className="relative text-[20px]">
                <label htmlFor="Phone_number" className="block text-[22px] text-primary mb-1">
                  <FaPhoneAlt className="inline w-6 h-6 mr-2" /> Phone Number:
                </label>
                <input
                  id="Phone_number"
                  {...register('Phone_number')}
                  className="w-full md:w-[80%] border text-[20px] border-foreground border-2 rounded-md shadow-sm p-3 pr-10"
                  required
                />
                {errors.Phone_number && (
                  <span className="text-red-500 text-[22px] ml-2">
                    {errors.Phone_number.message}
                  </span>
                )}
              </div>
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

              <div className="relative">
                <label htmlFor="Confirm_Password" className="flex items-center text-[22px] text-primary mb-1">
                  <RiLockPasswordFill className="w-6 h-6 mr-2" /> Confirm Password:
                </label>
                <div className="relative w-full md:w-[80%]">
                  <input
                    id="Confirm_Password"
                    type={showConfirmPassword ? "text" : "password"}
                    {...register('Confirm_Password')}
                    className="w-full border text-[20px] border-foreground border-2 rounded-md shadow-sm p-3 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash className="h-5 w-5 text-primary" /> : <FaEye className="h-5 w-5 text-primary" />}
                  </button>
                </div>
                {errors.Confirm_Password && <span className="text-red-500 text-[22px]">{errors.Confirm_Password.message}</span>}
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;