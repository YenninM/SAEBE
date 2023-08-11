
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Pyfn4qrwcScFAbo3-1LYj2dQ6yz9-ys",
  authDomain: "saebe-ac2f5.firebaseapp.com",
  projectId: "saebe-ac2f5",
  storageBucket: "saebe-ac2f5.appspot.com",
  messagingSenderId: "618229848645",
  appId: "1:618229848645:web:84532544ee5a6033d3612c"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);

// Exportar instancias de Firebase
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();

export default app; // Exportar la instancia de la aplicación Firebase

// Función para registrar un nuevo usuario
export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await authApp.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Función para iniciar sesión
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await authApp.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Función para cerrar sesión
export const signOut = async () => {
  try {
    await authApp.signOut();
  } catch (error) {
    throw error;
  }
};

// Función para obtener el usuario actual
export const getCurrentUser = () => {
  return authApp.currentUser;
};
