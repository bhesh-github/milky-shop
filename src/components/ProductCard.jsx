import { useEffect, useState } from "react";
import axios from "axios";
import StarRatings from "./StarRatings";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getTask = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };
    getTask();
  }, []);

  const fetchProducts = async () => {
    const res1 = await axios.get("https://fakestoreapi.com/products");
    const data = await res1.data;
    return data;
  };

  Array.from({ length: 5 }, (_, i) => {
    return i;
  });
  return (
    <>
      <div className="product-list">
        {products.slice(0, 14).map((item, idx) => (
          <div className="product" key={idx}>
            <img className="product-img" src={item.image} alt={item.title} />
            <div className="product-summary">
              <span className="product-title cutoff-title-text">
                {item.title}
              </span>
              <p className="product-price">Rs. {item.price}</p>
              <span className="prev-price">Rs.1,250</span>
              <span className="dis-percent"> -21%</span>
              <StarRatings stars={item.rating.rate} count={item.rating.count} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;

ProductCard.defaultProps = {
  products: [
    {
      category: "men's clothing",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      rating: {
        rate: 3.9,
        count: 120,
      },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
  ],
};
