import { FaPlus } from "react-icons/fa6";

type ProductsProps = {
  productId:string;
  photo:string;
  name:string;
  price:number;
  stock:number;
  handler:()=>void;
}

const server = "jdfvnfvfvdfkkfdk";

const ProductCard = ({productId,
  price,
  photo,
  name,
  stock,
  handler
}:ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={()=>handler()}>
          <FaPlus/>
        </button>
      </div>
    </div>
  )
}

export default ProductCard;