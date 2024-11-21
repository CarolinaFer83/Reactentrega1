import {FaShoppingCart} from "react-icons/fa";
import "./navbar.css";
    import { BsCart4 } from "react-icons/bs";
    function CartWidget() {
      return (
        <div className="carrito">
            <FaShoppingCart size="40px"/>
            <BsCart4 />
            <span className="badge">8</span>
        </div>
      )
    }
    export default CartWidget 