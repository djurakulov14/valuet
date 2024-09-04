import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
	const [show, setShow] = useState(false)
    const {register, formState: {erros}, handleSubmit, watch} = useForm()
	const navigate = useNavigate()


    const submit = (data) => {
		localStorage.setItem("user", JSON.stringify(data))
		navigate('/')
	}

	const handleShow = () => {
		setShow(!show)
	}

  	return (
		<form onSubmit={handleSubmit(submit)} className=' w-[40%] h-fit flex flex-col justify-between gap-[62px] pt-[80px] pb-[40px] px-[50px] items-center bg-custom-gradient loginBlock rounded-xl'>
			<h1 className='text-3xl font-bold'>Welcome!</h1>
			<div className="inp w-full flex flex-col gap-[25px]">
				<div className=" w-full py-[11px] px-[16px] flex gap-[10px] items-center bg-[#2E3558] rounded-lg" >
					<FaRegUserCircle size={30}/>
					<input {
						...register("login", {required: true})
					} 
					className=' w-full bg-transparent outline-0 text-[#616A8B]' placeholder='E-mail or login' type="text" />
				</div>
				<div className=" w-full py-[11px] px-[16px] flex gap-[10px] items-center bg-[#2E3558] rounded-lg" >
					<IoIosLock size={30}/>
					<input {
						...register("password", {required: true})
					} 
					className=' w-full bg-transparent outline-0 text-[#616A8B]' placeholder='Password' type={show ? "text" : "password"} />
					{
						show ? <IoEyeOff className=' cursor-pointer' size={30} onClick={handleShow}/> : <IoEye className=' cursor-pointer' size={30} onClick={handleShow}/>
					}
				</div>
			</div>
			<div className="btns flex gap-[32px]">
				<Button variant="contained" sx={{backgroundColor: 'gray'}} >Sing Up</Button>
				<Button type='submit' variant="contained">Sing In</Button>
			</div>
			<span className='text-[#5FB2FF] underline decoration-solid'>Forgot your password?</span>
		</form>
	);
}

export default LoginForm;
