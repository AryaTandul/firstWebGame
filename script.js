var person = document.getElementById("person");
var object = document.getElementById("object");
var count = document.getElementById("countdown")
var score = 0
var add = document.getElementById("score")


function jump() {
  count.classList.add("color")
  if (person.classList != "animation") {
    person.classList.add("animation");
  }
  setTimeout(function(){
    person.classList.remove("animation");
  },500);
  score += 1;
  add.innerHTML = (score)
};



var chaeckDead = setInterval(function(){
  var personTop = parseInt(window.getComputedStyle(person).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(object).getPropertyValue("left"));

  if(blockLeft < 20 && blockLeft > 0 && personTop >= 130) {
    object.style.animation = "none";
    object.style.display = "none";
    alert("game over, score:" +score);
  }


},10)


function wartenStart() {
  count.classList.add("count")
  setInterval(function(){
    count.classList.remove("count")
  },3000)
  object.classList.add("warte")
  setInterval(function(){
    object.classList.remove("warte")
  },3000)
  object.classList.add("start")
  
};





