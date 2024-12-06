import {Link } from "react-router-dom"
function Productos ({ nombre,precio,id} ){
    return (
        <Link to={"/productos/${id}"} className="card">
            <h2> { nombre}</h2>
            <h3>{precio} </h3>
        
        </Link>
    )
}
export default Productos