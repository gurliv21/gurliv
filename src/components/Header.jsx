import React, { useEffect, useState } from 'react'
import { IoBatteryHalfOutline,IoSearch } from "react-icons/io5";
import { FaWifi,FaApple  } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";
function Header() {
    const[date,setDate] = useState({})
    useEffect(()=>{
        const getDate =()=>{
            const now = new Date()
            setDate({
                day: now.toLocaleString("en-US", { weekday: "short" }),
    month: now.toLocaleString("en-US", { month: "short" }),
    date: now.getDate(),
    year: now.getFullYear(),
    time: now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            })
        }
        getDate()

    },[])
  return (
    <div className='flex justify-between bg-white px-4 p-1  text-sm'>
        <div className='flex gap-2'>
                    <FaApple className='my-auto'/>
        <p className='font-inter font-bold'>Gurliv's WorkBench</p>

        </div>

        <div className='flex gap-1'>
            <div className='flex my-auto gap-2 mr-4'>
                            <IoBatteryHalfOutline />
            <IoSearch/>
            <FaWifi />
            <RiMenuSearchLine />

            </div>

            <p>{date.day}</p>
            <p>{date.month}</p>
            <p>{date.date}</p>
            <p>{date.time}</p>

        </div>
      
    </div>
  )
}

export default Header
