import axios from "axios"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { LoginTemplate } from '../templates/LoginTemplate'
import { API_URL } from "../../constants/env"

export const Register = () => {
    const nav = useNavigate()
    const [ error, setError ] = useState()

    const handleSubmit = e => {
        /**este método evita enviar enviar el formulario por el 
         * método get del navegador
        */
        e.preventDefault()
        const data = {
            email: e.target.email.value, 
            password: e.target.password.value,
            details: {
                fullname: e.target.fullname.value,
            },
        }
        
        axios.post(`${API_URL}/public/users`, data)
        .then(() => {
            nav("/login")
        })
        .catch(error => {
            setError(error)
            console.log(error)
        })
    }
    return (
        <LoginTemplate 
            title="Registrate"
            data_link={{
                button_text: 'Registrarse',
                text_link: 'If you have an account..',
                link: '/login',
                name_link: 'Inicia sesión',
            }}
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input className="p-2 mt-8 rounded-xl border" type="text" name="fullname" placeholder="Nombre completo" required/>
                <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Correo electrónico" required/>
                <div className="relative">
                    <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Contraseña" required/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                </div>
                {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">
                        {error?.response?.data.errors[0].message}
                    </p>
                )}
                <button className="bg-[#219ebc] rounded-xl text-white py-2 hover:scale-110 duration-300" type="submit">Ingresar</button>
            </form>
        </LoginTemplate>
    )
}
