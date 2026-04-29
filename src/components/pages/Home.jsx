import { API_URL } from "../../constants/env"

function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl bg-violet-500 font-bold underline">
          Hola {API_URL}
        </h1>
        <p>Este es el sitio en desarrollo.</p>
      </div>
    </>
  )
}

export default Home
