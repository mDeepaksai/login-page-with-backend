import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

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
const form = document.querySelector("form");
const emailInput = document.getElementById("email");

form.addEventListener("submit", async (e) =>
{
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) return;

    try
    {
        await sendPasswordResetEmail(auth, email);
        alert(`Password reset link sent to ${email}. Check your inbox!`);
        emailInput.value = "";
    } catch (error)
    {
        console.error(error);
        alert("Error sending password reset email. Please check the email and try again.");
    }
});