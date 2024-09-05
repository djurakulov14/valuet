import { Button } from '@mui/material';
import React from 'react'
import Balance from '../Components/Balance';

const Home = () => {

    const today = new Date(); // Создаем объект даты, представляющий текущее время
    const day = today.getDate(); // Получаем текущий день
    const month = today.getMonth();
    const dayIndex = today.getDay(); // Получаем индекс дня недели (от 0 до 6)

    const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      
    

  return (
    <div className=' absolute w-[82%] top-[100px] left-[18%] p-[32px]'>
        <div className="top flex justify-between justify-between w-full items-center">
            <div className="info flex gap-[40px] items-center">
                <span className='text-3xl font-semibold'>Overview</span>
                <span className='text-[#54669C] text-xl'>{day} {monthNames[month]}, {dayNames[dayIndex]}</span>
            </div>
            <Button variant='cantained' sx={{backgroundColor: "#3BA0FF", fontWeight: "550" ,borderRadius: '1000px'}}>Add Widget</Button>
        </div>
        <Balance/>
    </div>
  )
}

export default Home