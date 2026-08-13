import React, { useEffect, useRef, useState } from 'react'

function StopWatch() {
    const [timer , setTimer] = useState(0);
    const stopWatchRef = useRef(0);
    const intervalRef = useRef(null);
    const needsToStart = useRef(false)


    const handleFocus = () => {
        if(needsToStart.current) {
            handleStart();
        }
        
    }
  
    const handleBlur = () => {
        needsToStart.current = !!intervalRef.current
        clearInterval(intervalRef.current)
    }

    const handleStart = () => {
         stopWatchRef.current = new Date().getTime() - timer;
         intervalRef.current = setInterval(() => {
            setTimer(new Date().getTime() - stopWatchRef.current)
         }, 10)

    }
    const handlePause = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null
    }
    const handleStop = () => {
        clearInterval(intervalRef.current);
        setTimer(0);
    }

    function formatTime () {
        const ms = Math.floor((timer % 1000)/10).toString().padStart(2, "0");
        const s = Math.floor((timer / 1000) % 60); // less then 60
        const m = Math.floor((timer / (1000 * 60 )) % 60 ); // less then 60 
        const h = Math.floor(timer / (1000 * 60 * 60)); // we can have more then 24 add %60 if you have day
        return `${h} : ${m} : ${s} : ${ms}`
    }

      useEffect(() => {
        window.addEventListener("focus" , handleFocus);
        window.addEventListener("blur" , handleBlur);
        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener("blur", handleBlur)
        }
    }, [timer])

  return (
    <div>
        <div className='flex justify-between mt-4'>
            <p className='text-center mx-auto w-200'>{formatTime()}</p>
        </div>
        <div className='flex justify-center text-center mx-auto gap-2 mt-2'>
            <button className='bg-gray-200 p-2 text-black cursor-pointer' onClick={handleStart}>Start</button>
            <button className='bg-gray-200 p-2 text-black cursor-pointer' onClick={handlePause}>Pause</button>
            <button className='bg-gray-200 p-2 text-black cursor-pointer' onClick={handleStop}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch