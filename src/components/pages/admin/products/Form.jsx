import axios from 'axios'
import React from 'react'
import { API_URL } from '../../../../constants/env'
import { token } from '../../../../helpers/auth'

export const Form = () => {

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            product_name: e.target.productName.value,
            price: Number(e.target.price.value),
            images: [ e.target.image.value ],
            description: e.target.description.value,
            features: {
                color: e.target.color.value,
            },
        }

        axios
            .post(`${API_URL}/admin/products`, data, {
                headers: {
                    Authorization: `Bearer ${token()}`,
                }
            })
            .then((res) => {
                console.log(res)
                alert("Se creó correctamente el producto.")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center flex-col">
            <h1 className='text-lg font-bold'>Crear producto</h1>
            <form onSubmit={handleSubmit} className='w-3/12 min-w-96 flex flex-col gap-y-4'>
                <input className="padding-input" type="text" name="productName" placeholder="Nombre" required />
                <input className="padding-input" type="number" name="price" placeholder="Precio" required />
                <input className="padding-input" type="url" name="image" placeholder="Imagen" required />
                <label className="ml-2 text-gray-400" htmlFor="description">Descripción</label>
                <textarea name="description" cols="30" rows="10" />
                <input className="padding-input" type="text" name="color" placeholder="Color" required />
                <button className="style-button" type="submit">Crear producto</button>
            </form>
        </section>
    )
}
