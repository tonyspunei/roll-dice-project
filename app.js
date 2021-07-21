const diceBtnEl = document.querySelector(".dice__btn");
const diceImgEl = document.querySelector(".dice__image");
const diceAudio = new Audio(
  "./Redneck Rolls Dice-SoundBible.com-1100715950.mp3"
);

diceBtnEl.addEventListener("click", (_) => {
  let randomNum = Math.floor(Math.random() * 6) + 1;

  diceImgEl.src = `./images/dice${randomNum}.png`;
  diceAudio.play();

  diceImgEl.classList.toggle("rollDice");
  diceImgEl.classList.toggle("rollDice-2");
});
