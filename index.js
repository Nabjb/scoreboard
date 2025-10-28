let btnOneHome = document.getElementById("home")
let btnTwoHome = document.getElementById("home")
let btnThreeHome = document.getElementById("home")

let btnOneGuest = document.getElementById("guest")
let btnTwoGuest = document.getElementById("guest")
let btnThreeGuest = document.getElementById("guest")






function plusOne(){
 btnOneHome.textContent = Number(btnOneHome.textContent)+1;
 }
  
  function plusTwo(){
    btnTwoHome.textContent = Number(btnTwoHome.textContent) + 2;
  }

function plusThree(){
  btnThreeHome.textContent = Number(btnThreeHome.textContent) + 3;
}



function pone(){
  btnOneGuest.textContent= Number(btnOneGuest.textContent) + 1;
}

function ptwo(){
  btnTwoGuest.textContent= Number(btnTwoGuest.textContent) + 2;
}

function pthree(){
  btnThreeGuest.textContent= Number(btnThreeGuest.textContent) + 3;
}