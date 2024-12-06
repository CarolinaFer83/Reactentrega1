import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const cleanupDatabase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log("Base de datos limpiada exitosamente");
  } catch (error) {
    console.error("Error limpiando la base de datos:", error);
  }
}; 