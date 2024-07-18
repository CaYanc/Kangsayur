import React from 'react'


const ProducCategory = ({img,nombre}) => {
  return (
    <div 
    className='bg-white w-[100%] h-[100%] flex flex-col items-center  gap-[10px] '>

        <figure 
        className='bg-[#4cad736b] relative rounded-[10px] w-[40px] h-[40px]'>
            <img 
                // className='absolute'
            src={img} alt="" />
        </figure>

        <p>{nombre}</p>

    </div>
  )
}

export default ProducCategory