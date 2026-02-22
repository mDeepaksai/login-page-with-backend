import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

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
const provider = new GoogleAuthProvider();

const form = document.querySelector("form");

form.addEventListener("submit", async (e) =>
{
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password)
  {
    alert("Email and password required");
    return;
  }

  try
  {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("User registered successfully");
    window.location.href = "index.html";
  } catch (err)
  {
    alert(err.message);
  }
});
const passwordInput = document.getElementById('password');
const showPassword = document.getElementById('showPassword');

showPassword.addEventListener('change', () =>
{
  passwordInput.type = showPassword.checked ? 'text' : 'password';
});
const googleBtn = document.querySelector("#google");

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
// slider
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", ()=>{
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener("click", ()=>{
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});
/* Auto Slide */
setInterval(()=>{
  current = (current + 1) % slides.length;
  showSlide(current);
},2000);