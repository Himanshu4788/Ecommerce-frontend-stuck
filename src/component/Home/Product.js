import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import ratingImg from "../../react-icons/rating.png"

const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgb(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 4.5, 
    isHalf: true,
  };

  return (
<Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.image[0].url} alt={product.name} />
      <p>{product.name}</p>

      <div>
        <ReactStars {...options} />
        <img src={ratingImg} alt='rating' style={{ width: '50px', height: '50px' }} />
        <span> (256 Reviews)  </span>  
      </div>

      <span>₹{product.price}</span>
    </Link>
  );
};

export default Product; 