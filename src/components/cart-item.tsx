import { Link } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";


type CartItemProps = {
    cartItem: any;
};

const CartItem = ({cartItem}:CartItemProps) => {
    // productId:"efdjdsjrjfrled",
    // photo:"https://m.media-amazon.com/images/I/71RDgtHsREL._SY450_.jpg",
    // name:"Mackbook",
    // price:30000,
    // quantity:4,
    // stock:10,

    const {photo,productId,name,price,quantity} = cartItem
  return (
    <div className="cart-item">
        <img src={photo} alt="" />

        <article>
            <Link to={`/product/${productId}`}>{name}</Link>
            <span>₹{price}</span>
        </article>
        <div> 
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>
        
        <button><RiDeleteBinFill />
        </button>
    </div>
  )
}

export default CartItem
