import { useFetch } from '../../hooks/useFetch'

export const Products = () => {

  const { data, error, loading } = useFetch("public/products")

  if (loading) return <h1>Cargando...</h1>
  if (error) return <h1>Error en la petición de productos.</h1>

  return (
    <>
      <h1>Productos</h1>
      <div className='grid grid-cols-3 gap-3'>
        { data.length === 0 ? (
            <p>No existen productos.</p>
          ) : (
            data.map(prod => (
              <div className='product-card' key={prod.id}>
                { JSON.stringify(prod) }
              </div>
            ))
          )
        }
      </div>
    </>
  )
}
