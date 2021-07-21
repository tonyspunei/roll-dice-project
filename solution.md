const diceTriggerEl = document.querySelector(".dice**trigger");
const diceImageEl = document.querySelector(".dice**image");

function getRandomNumber() {
return 1 + Math.floor(Math.random() \* 6);
}

function showDice() {
diceTriggerEl.addEventListener("click", function () {
let myRandomNumber = getRandomNumber();
diceImageEl.src = "images/dice" + myRandomNumber + ".png";
})
}

showDice();

<!-- <div class="dice">
    <h1 class="dice__title">Dice Project</h1>
    <button class="dice__trigger">Roll Dice</button>
    <div class="dice__result">
      <img class="dice__image" src="images/dice1.png" alt="" />
    </div>
</div> -->
<!--
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1e1e1e;
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.dice__title {
  background-color: #eee;
  color: #111;
  padding: 1.5rem;
}

.dice__trigger {
  font-size: 1rem;
  padding: 1rem 1.2rem;
  border-radius: 4px;
  margin: 2rem 0;
}

.dice__trigger:hover {
  opacity: 0.8;
} -->
