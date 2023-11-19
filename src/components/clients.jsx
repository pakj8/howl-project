import React from 'react'
import img1 from '../../assets/images/Actor_1.jpg'
import img2 from '../../assets/images/Actor_2.jpg'
import img3 from '../../assets/images/Actor_3.jpg'
import img4 from '../../assets/images/Footer_1 (2).jpg'

function Clients () {
  return (
    <div className='text-center'>
      <h1 className='text-purple-500 font-sans font-bold text-4xl mb-3'>
        Clients we work with
      </h1>
      <div className='flex flex-wrap justify-center space-x-3'>
        {[img1, img2, img3, img4, img1, img2].map((img, index) => (
          <img key={index} className='w-40 h-50 m-2' src={img} alt='' />
        ))}
      </div>
      <div className='flex flex-wrap justify-center space-x-3 mt-2 pb-11'>
        {[img3, img1, img2, img1, img2, img4].map((img, index) => (
          <img key={index} className='w-40 h-50 m-2' src={img} alt='' />
        ))}
      </div>
    </div>
  )
}

export default Clients
