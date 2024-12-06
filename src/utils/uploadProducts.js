import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { productos } from "../paginas/Productos";

export const uploadProductsToFirebase = async () => {
  try {
    console.log("Iniciando carga de productos...");
    
    for (const producto of productos) {
      await addDoc(collection(db, "productos"), {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        categoria: producto.categoria,
        imagen: producto.imagen,
        stock: producto.stock
      });
    }
    
    console.log("Productos cargados exitosamente");
  } catch (error) {
    console.error("Error subiendo productos:", error);
    throw error;
  }
}; 