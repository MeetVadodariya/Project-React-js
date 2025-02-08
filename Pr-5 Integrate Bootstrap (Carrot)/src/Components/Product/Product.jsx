import { Container } from "react-bootstrap";
import './Product.css';

const Product = () => {
    return (
        <div className="product">
            <Container className="product-container">
                <row>
                    <col-lg-12>
                       <div className="d-flex justify-content-between">
                       <h2>Product</h2>
                       <span><a href="">Home</a> - Product</span>
                       </div>
                    </col-lg-12>
                </row>
            </Container>
        </div>
    );
};

export default Product;
