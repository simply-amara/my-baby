const correctAnswer = "forex"; // CHANGE THIS

function checkAnswer(){
  const input = document.getElementById("answerInput").value.toLowerCase().trim();

  if(input === correctAnswer){
    document.getElementById("lockScreen").style.display = "none";
    const numberScreen = document.getElementById("numberScreen");
    numberScreen.style.display = "flex"; // IMPORTANT
  } 
  else {
    const error = document.getElementById("error");
    error.innerText = "Wrong answer 💔 Try again";

    const box = document.getElementById("lockScreen");
    box.classList.add("shake");
    setTimeout(()=> box.classList.remove("shake"),300);
  }
}
function goToMain(){
  document.getElementById("numberScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}


let current = 0;
const sections = document.querySelectorAll(".section");

/* SHOW SECTIONS */
function showSection(index) {
  sections.forEach((sec, i) => {
    sec.classList.remove("active");
    if (i === index) {
      sec.classList.add("active");
    }
  });
}

function nextSection() {
  current++;
  if (current < sections.length) {
    showSection(current);
  }
}

/* TYPEWRITER */
const text = "Happy Birthday, my love ❤️";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

/* HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);

/* FINAL LOVE REVEAL */
function showLove() {
  document.getElementById("love").style.opacity = "1";
}

/* START EFFECTS */
typeWriter();
