import React from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { deleteToken, token } from '../../../helpers/auth'

export const MainMenu = () => {
  const nav = useNavigate()
  
  const handleDeleteToken = () => {
    deleteToken()
    nav("/")
  }

  return (
    <nav className='w-full'>
        <ul className='flex justify-end text-gray-100'>
            <li className='flex items-center'>
                <Link className='menu-item' to="/">
                  Inicio
                </Link>
            </li>
            <li className='flex items-center'>
                <Link className='menu-item' to="/products">
                  Productos
                </Link>
            </li>
            {
              token() ? (
                <li className='flex items-center'>
                    <a onClick={handleDeleteToken} className='menu-item cursor-pointer'>
                      Cerrar Sesión
                    </a>
                </li>
              ) : (
                <li className='flex items-center'>
                  <Link className='menu-item' to="/login">
                    Iniciar Sesión
                  </Link>
                </li>
              )
            }
        </ul>
    </nav>
  )
}
