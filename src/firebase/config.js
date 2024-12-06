import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjbnOLLK-Q6Z9rgeXkv-tQWxgR6eXsoAY",
  authDomain: "tienda-saludable.firebaseapp.com",
  projectId: "tienda-saludable",
  storageBucket: "tienda-saludable.appspot.com",
  messagingSenderId: "434415775737",
  appId: "1:434415775737:web:371f4a4c09be77d1435728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Función para verificar la conexión
export const verificarConexion = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    console.log("Productos en Firebase:", querySnapshot.size);
    return querySnapshot.size > 0;
  } catch (error) {
    console.error("Error verificando conexión:", error);
    return false;
  }
}; 