import {exeMatchInfo} from './fo4api.js';
import {renderResult} from './render.js';

//About First Page
const form = document.getElementById("search-form");
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");

let members = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  members = [{nickname: user1.value}, {nickname: user2.value}];
  let matchInfo = exeMatchInfo(members);
  renderResult(matchInfo);
});
