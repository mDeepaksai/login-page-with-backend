import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Vm0bP5bbMtA9YEKT-p1gh7WyiTkZl5M",
  authDomain: "login-4f2a9.firebaseapp.com",
  projectId: "login-4f2a9",
  storageBucket: "login-4f2a9.firebasestorage.app",
  messagingSenderId: "827317854395",
  appId: "1:827317854395:web:f81fea3190069357d6499e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// --- Email/Password Login ---
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) return;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const name = user.displayName || user.email;
        alert(`Welcome ${name}`);

        console.log("Email/Password User:", user);


    } catch (err) {
        alert("Invalid email or password");
        console.error(err);
    }
});

// --- Show / Hide Password ---
const passwordInput = document.getElementById('password');
const showPassword = document.getElementById('showPassword');

showPassword.addEventListener('change', () => {
    passwordInput.type = showPassword.checked ? 'text' : 'password';
});

// --- Google Login ---
const googleBtn = document.querySelector(".google");

googleBtn.addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        alert(`Welcome ${user.displayName}`);
        console.log("Google User:", user);


    } catch (error) {
        console.error(error);
        alert("Google sign-in failed");
    }
});
