import { CollectionItem } from "../types";
import { useCart } from "../context/CartContext";

const ProductCard: React.FC<{ item: CollectionItem }> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-3 rounded">
      <img src={item.image} className="w-full h-48 object-cover" />
      <h3>{item.name}</h3>
      <p>UGX {item.price}</p>

      <button onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;