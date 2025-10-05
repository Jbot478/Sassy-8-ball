const messages = [
  "Sure, Jan.",
  "Ask again when Mercury's not in retrograde.",
  "Yes, but do a little dance first.",
  "Oh honey... no.",
  "You wish.",
  "Yes, you miserable genius.",
  "Absolutely... because why not ruin everything?",
  "Let me think....... no.",
  "Bless your heart.",
  "Try again, I wasn't listening.",
  "The vibe says... absolutely not.",
  "Did you really need to ask that?"
];

const messageBox = document.getElementById("message");
const askBtn = document.getElementById("ask-btn");
const eightBall = document.getElementById("eight-ball");

function shakeBall() {
  eightBall.style.transform = "rotate(10deg)";
  setTimeout(() => (eightBall.style.transform = "rotate(-10deg)"), 100);
  setTimeout(() => (eightBall.style.transform = "rotate(0deg)"), 200);
}

function getSassyReply() {
  shakeBall();
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageBox.textContent = randomMessage;
}

askBtn.addEventListener("click", getSassyReply);
eightBall.addEventListener("click", getSassyReply);
