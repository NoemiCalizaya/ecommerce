import { useState } from "react"
import { useFetch } from '../../hooks/useFetch'
import Product from './user/products/Product'
import ProductModal from './user/products/ProductModal'

export const Products = () => {

  const { data, error, loading } = useFetch("products")

  const [selectedProduct, setSelectedProduct] = useState(null)

  if (loading) return <h1>Cargando...</h1>
  if (error) return <h1>Error en la petición de productos.</h1>

  return (
    <>
      <h1>Productos</h1>

      <div className='grid grid-cols-3 gap-3'>
        {
          data?.products?.map(prod => (
            <Product
              key={prod.id}
              product={prod}
              onClick={() => setSelectedProduct(prod)}
            />
          ))
        }
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}
