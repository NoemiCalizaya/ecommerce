import { API_URL } from "../../constants/env";

const categories = [
  { id: 1, name: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Clothing", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Shoes", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Accessories", image: "https://via.placeholder.com/150" },
];

function Home() {
  return (
    <div className="p-6">

      {/* Hero Title */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-violet-600">
          E-COMMERCE
        </h1>
        <p className="text-gray-500 mt-2">
          Welcome to your online store
        </p>
        <p className="text-sm text-gray-400">
          API: {API_URL}
        </p>
      </div>

      {/* Categories */}
      <h2 className="text-2xl font-semibold mb-4">
        Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover"
            />

            <div className="p-4 text-center">
              <h3 className="font-medium">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Home;
