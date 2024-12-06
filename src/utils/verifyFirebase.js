import { collection, getDocs } from "firebase/firestore";
import { db } from "../main";

export const verifyFirebaseConnection = async () => {
  try {
    console.log("Verificando conexión con Firebase...");
    const querySnapshot = await getDocs(collection(db, "productos"));
    console.log("Productos encontrados:", querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log("Producto:", doc.id, doc.data());
    });
    return true;
  } catch (error) {
    console.error("Error de conexión con Firebase:", error);
    return false;
  }
}; 