import { COLLECTION } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {COLLECTION.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;