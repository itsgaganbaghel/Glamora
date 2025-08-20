import { NavLink } from "react-router-dom";

// ✅ Define type for the product
interface Product {
  id: string | number;
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
}

// ✅ Use the type in props
interface BookCardProps {
  pro: Product;
}
const Product: React.FC<BookCardProps> = ({ pro }) => {
  let { id, thumbnail, title, price, rating } = pro;
  return (
    <NavLink
      to={`/product/${id}`}
      state={pro}
      className={"border p-4 rounded-lg border-white/20  text-white hover:shadow-[#2c4441d8] shadow-2xl"}
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-44 object-contain drop-shadow-gray-50/30 mb-3 drop-shadow-2xl"
      />
      <h2 className="font-semibold text-sm">{title}</h2>
      <p className="font-semibold  ">{`$ ${price}`}</p>
      <p className="font-semibold text-gray-500 text-sm my-1">{`Rating : ${rating} / 5 `}</p>
    </NavLink>
  );
};

export default Product;
