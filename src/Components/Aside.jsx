import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CgMenuGridO } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiStockLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


const Aside = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    }, [])
    

    const logOut = () => {
        localStorage.clear()
        navigate('/login')
    }

    const active = 'w-full flex gap-[16px] items-center bg-[#32395E] border-b-2 border-[#1288E8] px-[25px] py-[13px] rounded-lg'
    const noActive = 'w-full flex gap-[16px] items-center px-[25px] py-[13px]'
    

  return (
    <aside className='w-[18%] px-[20px] py-[30px] h-screen flex flex-col justify-between '>
        <div className="top flex flex-col items-center">
            <h1 className='underline text-3xl text-[#3887FE] mb-[40px]'>VALUET</h1>
            <nav className='w-full'>
                <Link
                    to={'/'} 
                    className={pathname === '/' ? active : noActive}>
                        <CgMenuGridO size={35}/>
                        <span className='text-xl'>Overview</span>
                </Link>
                <Link
                    to={'/wallets'} 
                    className={pathname === '/wallets' ? active : noActive}>
                        <CiWallet size={35}/>
                        <span className='text-xl'>Wallets</span>
                </Link>
                <Link
                    to={'/transactions'} 
                    className={pathname === '/transactions' ? active : noActive}>
                        <HiArrowsUpDown size={35}/>
                        <span className='text-xl'>Transictions</span>
                </Link>
                <Link
                    to={'/exchange'} 
                    className={pathname === '/exchange' ? active : noActive}>
                        <HiArrowsRightLeft size={35}/>
                        <span className='text-xl'>Exchange</span>
                </Link>
                <Link
                    to={'/market'} 
                    className={pathname === '/market' ? active : noActive}>
                        <RiStockLine size={35}/>
                        <span className='text-xl'>Market</span>
                </Link>
            </nav>
        </div>
        <div className="bot flex flex-col gap-[20px] border-t-2 border-[#1288E8] pt-[20px] px-[20px]">
            <div className="flex items-center gap-[20px] text-lg text-[#616A8B] cursor-pointer">
                <FaRegUserCircle size={35}/>
                <span>{user?.fullName}</span>
            </div>
            <div className="flex items-center gap-[20px] text-lg text-[#616A8B] cursor-pointer" onClick={logOut}>
                <CiLogout size={35}/>
                <span>Log out</span>
            </div>
        </div>
    </aside>
  )
}



// <NavLink 
//                     style={({ isActive }) => ({
//                         color: isActive ? "#ffffff" : "inherit",
//                     })}
//                     to='/' 
//                     className="links   max-lg:gap-2">
//                         <img src="../../Home_Fill_S.svg" alt="" />
//                         <span className='hover:text-white  max-lg:font-semibold  max-lg:text-base'>Home</span>
//                     </NavLink>

export default Aside