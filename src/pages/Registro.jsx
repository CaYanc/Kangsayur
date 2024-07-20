import React from 'react'
// img 
import kangsayur from '../assets/Kangsayur.png'
import imgSection from '../assets/imgSection.png'
import iconGoogle from '../assets/iconGoogle.png'
import iconFace from '../assets/iconFace.png'
import { Link } from 'react-router-dom'

const Registro = () => {
  return (
    <div id='registro' 
    className='bg-[#fff] w-[100vw] h-[100vh] p-[25px] flex flex-col items-center justify-around relative'
    >

      <Link to={'/'} className='text-white z-[300] absolute top-[10px] right-[10px]' >Omitir</Link>
        
        <div id='art1' 
        className='relative flex flex-col items-center gap-[40px] '
        >
            <div id='circle' 
        className='w-[650px] h-[600px] rounded-[50%] absolute bg-[#4CAD73] top-[-100%] left-[-85%] '
        >
        </div>
            <figure className='relative z-[100]'>
                <img src={kangsayur} alt="" />
            </figure>
            <figure  className='relative z-[100]'>
                <img src={imgSection} alt="" />
            </figure>
        </div>
        <div id='art2 ' 
        className='flex flex-col gap-[20px] items-center w-[100%]'
        >

          <Link  className='btn_primary text-center' to="/Login">Login</Link>

          <Link  className='btn_secundary text-center' to="/SingUp">Register</Link>

          <div 
          className='py-[10px] relative w-[100%]'
          >
            <hr className='bg-black w-[100%]'/>
            <p 
            className='px-[5px] bg-[#fff] absolute top-[-15%] left-[36%]'
            >Or login with</p>
          </div>

            <a href=""
            className='bg-[#fff] w-[100%] p-[10px] rounded-[15px] relative text-[20px] text-center border border-black'
            >
              <img
              className='absolute top-[20%] w-[8%]'
              src={iconGoogle} alt="" />Google
            </a>

            <a href=""
              className='bg-[#2D9CDB] text-[#fff] w-[100%] p-[10px] rounded-[15px] relative text-[20px] text-center'
            >
              <img
              className='absolute top-[20%] w-[8%]'
              src={iconFace} alt="" />Facebook
            </a>

        </div>

    </div>
  )
}

export default Registro