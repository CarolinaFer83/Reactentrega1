import productosSaludables from "../Producto";
import Productos from "./Productos";
import "./Staylesa.css"
function Producto (){
  
    return (
      <div id="container" >
        
       {productosSaludables.map(prod=>(
        <Productos key={prod.id} {...prod} />
        ))}
      </div>
    )
  }
  export default Producto