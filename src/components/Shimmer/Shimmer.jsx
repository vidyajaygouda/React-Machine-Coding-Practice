import React from 'react'

function Shimmer() {
  return (
    <>
      {Array.from({length: 20} ,() => <div className='w-60 h-60 bg-gray-100 ml-2'>
        <div
        className="
          w-[320px]
          bg-white
          rounded-2xl
          shadow-md
          p-4
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* Shimmer Image */}
        <div
          className="
            relative
            overflow-hidden
            h-48
            rounded-xl
            bg-gray-300
            mb-4
          "
        >
          <div
            className="
              absolute
              inset-0
              -translate-x-full
              animate-shimmer
              bg-linear-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />
        </div>

        {/* Title */}
        <div
          className="
            relative
            overflow-hidden
            h-5
            w-3/4
            rounded-md
            bg-gray-300
            mb-4
          "
        >
          <div
            className="
              absolute
              inset-0
              -translate-x-full
              animate-shimmer
              bg-linear-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />
        </div>

        {/* Text */}
        <div
          className="
            relative
            overflow-hidden
            h-4
            w-full
            rounded-md
            bg-gray-300
            mb-3
          "
        >
          <div
            className="
              absolute
              inset-0
              -translate-x-full
              animate-shimmer
              bg-linear-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />
        </div>

        <div
          className="
            relative
            overflow-hidden
            h-4
            w-2/3
            rounded-md
            bg-gray-300
            mb-6
          "
        >
          <div
            className="
              absolute
              inset-0
              -translate-x-full
              animate-shimmer
              bg-linear-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />
        </div>
      </div>
    </div>)}
    </>
  )
}

export default Shimmer