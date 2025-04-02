import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync } from "../Servise/action/product.action";
import { Button } from "react-bootstrap";
import { addToCart } from "../Servise/action/cart.action";
import { FaShoppingCart } from "react-icons/fa";


const ViewProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (id) {
      dispatch(getProductAsync(id));
    }
  }, [id, dispatch]);
  const handleChange = () => {
    navigate("/");
  };

  return (
    <>
      <div className="view-product-container">
        <p>Now Product Show With View More Details...!!</p>
        {product ? (
          <div className="product-card">
            <div className="product-image-container">
              <img src={product.product_image} alt="Product" />
            </div>
            <div className="product-info">
              <h2>{product.product_name}</h2>
              <hr></hr>
              <h3>Price: ${product.product_price}</h3>
              <hr></hr>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <hr></hr>
              <p>{product.product_description}</p>
              <div>
              <Button className="back-btn" onClick={handleChange}>
                Go Back
              </Button>
              <Button className="back-btn ms-4" onClick={() => dispatch(addToCart(product))}
                variant="warning">
                Add To Cart
              </Button>

              </div>
              {/* <Button
                className="card-btn cart-btn ms-2"
                onClick={() => dispatch(addToCart(product))}
                variant="warning"
              >
                <FaShoppingCart />
              </Button> */}
            </div>
          </div>
        ) : (
          <p>No product found!</p>
        )}
      </div>
    </>
  );
};

export default ViewProduct;
