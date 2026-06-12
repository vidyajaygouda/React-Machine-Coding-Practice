import React, { useEffect, useState } from 'react'

function ImageSlider() {
    const images = [
        "https://images.pexels.com/photos/28463547/pexels-photo-28463547.jpeg",
        "https://images.pexels.com/photos/25568754/pexels-photo-25568754.jpeg",
        "https://images.pexels.com/photos/9131041/pexels-photo-9131041.jpeg",
        "https://images.pexels.com/photos/30673265/pexels-photo-30673265.jpeg",
        "https://images.pexels.com/photos/19807421/pexels-photo-19807421.jpeg"
    ]

    const [imageIndex , setImageIndex] = useState(0);

     const handleForward = () => {
        setImageIndex(imageIndex => (imageIndex + 1) % images?.length)
    }

    useEffect (() => {
      let timer =  setInterval(() => {
            handleForward();
        }, 2000);

        return () => {
            clearInterval(timer)
        }
    }, [])

   

     const handleBack = () => {
        setImageIndex(imageIndex => (imageIndex -1) < 0 ? images.length - 1 : imageIndex - 1)
    }

  return (
        <div className='flex justify-center items-center mt-10 relative'>
            <button className='cursor-pointer' onClick={handleBack}>Back</button>
                <img src={images[imageIndex]} alt='slider-img' className='w-100 h-100 object-cover'/>
            <button className=' cursor-pointer' onClick={handleForward}>Forward</button>
        </div>
  )
}

export default ImageSlider