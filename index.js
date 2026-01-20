import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8Vm0bP5bbMtA9YEKT-p1gh7WyiTkZl5M",
  authDomain: "login-4f2a9.firebaseapp.com",
  projectId: "login-4f2a9",
  storageBucket: "login-4f2a9.firebasestorage.app",
  messagingSenderId: "827317854395",
  appId: "1:827317854395:web:f81fea3190069357d6499e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) return;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful");
  } catch (err) {
    alert("Invalid email or password");
  }
});
