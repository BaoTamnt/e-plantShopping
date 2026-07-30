import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "A hardy indoor plant that requires little maintenance.",
  },
  {
    id: 2,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1614594576374-1d27e2a9a9c1?auto=format&fit=crop&w=600&q=80",
    description: "A tropical plant with beautiful split leaves.",
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "An elegant flowering indoor plant.",
  },
  {
    id: 4,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A popular plant with glossy green leaves.",
  },
  {
    id: 5,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2c5a6f6b?auto=format&fit=crop&w=600&q=80",
    description: "A low-maintenance plant perfect for beginners.",
  },
  {
    id: 6,
    name: "Calathea",
    category: "Indoor Plants",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description: "A decorative tropical plant with patterned leaves.",
  },

  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A useful succulent that thrives in bright locations.",
  },
  {
    id: 8,
    name: "Echeveria",
    category: "Succulents",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description: "A beautiful rosette-shaped succulent.",
  },
  {
    id: 9,
    name: "Haworthia",
    category: "Succulents",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A compact succulent ideal for desks.",
  },
  {
    id: 10,
    name: "Jade Plant",
    category: "Succulents",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
    description: "A classic succulent with thick green leaves.",
  },
  {
    id: 11,
    name: "String of Pearls",
    category: "Succulents",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1600411833110-4a9b0a0c4f0c?auto=format&fit=crop&w=600&q=80",
    description: "A trailing succulent with bead-like leaves.",
  },
  {
    id: 12,
    name: "Sedum",
    category: "Succulents",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A small succulent that is easy to care for.",
  },

  {
    id: 13,
    name: "Rose",
    category: "Flowering Plants",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
    description: "A classic flowering plant with beautiful blooms.",
  },
  {
    id: 14,
    name: "Orchid",
    category: "Flowering Plants",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
    description: "An elegant flowering plant for your home.",
  },
  {
    id: 15,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 36,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "A tropical plant with colorful flowers.",
  },
  {
    id: 16,
    name: "African Violet",
    category: "Flowering Plants",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "A compact flowering plant for indoor spaces.",
  },
  {
    id: 17,
    name: "Begonia",
    category: "Flowering Plants",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "A colorful plant that brightens indoor areas.",
  },
  {
    id: 18,
    name: "Geranium",
    category: "Flowering Plants",
    price: 23,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
    description: "A cheerful flowering plant for plant lovers.",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart
            <span className="cart-count">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </Link>
        </div>
      </nav>

      <main className="page-container">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section className="category" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <article className="product-card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />

                      <h3>{plant.name}</h3>

                      <p className="product-description">
                        {plant.description}
                      </p>

                      <p className="price">${plant.price}</p>

                      <button
                        className="add-button"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
