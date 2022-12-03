import React from 'react'
import './button.css'
import GoogleLogo from '../../assets/images/google-logo.png'

const Button = () => {
  return (
    <a className='button' href="#"><img className='button-image' src={GoogleLogo} alt='google-logo.png'></img>Ingresa con google</a>
  )
}

export default Button