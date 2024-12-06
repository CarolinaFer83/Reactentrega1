import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjbnOLLK-Q6Z9rgeXkv-tQWxgR6eXsoAY",
  authDomain: "tienda-saludable.firebaseapp.com",
  projectId: "tienda-saludable",
  storageBucket: "tienda-saludable.appspot.com",
  messagingSenderId: "434415775737",
  appId: "1:434415775737:web:371f4a4c09be77d1435728"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener stock actual de un producto
export const getProductStock = async (productId) => {
  try {
    const docRef = doc(db, "productos", productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().stock;
    }
    return 0;
  } catch (error) {
    console.error("Error getting stock:", error);
    throw error;
  }
};

// Actualizar stock de un producto
export const updateProductStock = async (productId, newStock) => {
  try {
    const docRef = doc(db, "productos", productId);
    await updateDoc(docRef, {
      stock: newStock
    });
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
};

// Obtener todos los productos con su stock
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (categoria) => {
  try {
    const q = query(
      collection(db, "productos"),
      where("categoria", "==", categoria)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting products by category:", error);
    throw error;
  }
};

export { db }; 