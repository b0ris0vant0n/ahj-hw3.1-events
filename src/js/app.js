import Character from "./character";
import userClick from "./user-click";

const Game = new Character(document.querySelector(".grid-container"));

userClick(Game.getRandomPosition);
