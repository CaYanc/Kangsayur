import React from 'react'

const Products = ({imgproduct}) => {
  return (
    <div 
    className='w-[150px] h-[155px] rounded-[20px]'>
      <img
       className='w-[100%] h-[100%] object-cover' 
      src={imgproduct} alt="" />
    </div>
  )
}

export default Products