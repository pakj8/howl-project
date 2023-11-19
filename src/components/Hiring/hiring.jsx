import React from 'react'
import Arrow from '../../assets/images/white_arrow.png'
import img1 from '../../assets/images/Chair.jpg'
import img2 from '../../assets/images/hiring.png'
import img3 from '../../assets/images/Footer_1.jpg'

function Hiring () {
  return (
    <div>
      <div className=' text-center  p-16 shadow-2xl'>
        <h1 className='text-5xl text-gray-500 font-bold font-sans'>
          Ready to accelerate your business ?{' '}
          <span className='text-purple-500 '>Lets Talk.</span>
        </h1>
      </div>

      <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500  text-white flex  justify-center  items-center py-20 '>
        <div className='font-sans font-bold text-5xl leading-tight pr-16 '>
          Keep track <br /> of the wolves <br />
          <img className='w-20' src={Arrow} alt='arrow' />
        </div>
        <div className='flex space-x-3'>
          <img className='w-60 h-60' src={img1} alt='First' />
          <img className='w-60 h-60' src={img2} alt='Second' />
          <img className='w-60 h-60' src={img3} alt='Third' />
        </div>
      </div>
    </div>
  )
}

export default Hiring
