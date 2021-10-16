import React from 'react';
import { useForm } from "react-hook-form";
import './Shipping.css'
import useAuth from '../../hooks/useAuth';


const Shipping = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    const {user} = useAuth()
    const onSubmit = data => {
        console.log(data)
    };
    
    return (
        <div className='shipping-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
      
        <input defaultValue={user.displayName} {...register("example",{required: true})} />
        <input placeholder='Input Address' defaultValue={user.email} {...register("Address",{required: true})} />
        <input placeholder='Input Number' defaultValue="" {...register("Phone No:",{required: true})} />
      
      
      <input {...register("exampleRequired", { required: true })} />
     
      {errors.exampleRequired && <span className='error'>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;