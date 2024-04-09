import React from 'react'

export const LoginTemplate = ({ children }) => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-16">
                    <h2 className="font-bold text-2xl">Login</h2>
                    <p className="text-sm mt-4">If you already a member, easily log in</p>

                    { children }

                    <div className="mt-10 grid grid-cols-3">
                        <hr className="outline-gray-500"/>
                        <p className="text-center">OR</p>
                        <hr className="outline-gray-500"/>
                    </div>

                    <button className="bg-white border py-2 w-full rounded-xl mt-5 text-sm">Ingresar con Google</button>

                    <p className="mt-5 text-xs border-b border-gary-400 py-4">Forgot your password</p>

                    <div className="mt-3 text-xs flex justify-between items-center">
                        <p>If yo don`t have an account.. </p>
                        <button className="py-2 px-5 bg-white border rounded-xl">Registrar</button>
                    </div>
                </div>
                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src="/src/assets/ecommerce.jpg" alt="Imagen" />
                </div>
            </div>
        </section>
    )
}
