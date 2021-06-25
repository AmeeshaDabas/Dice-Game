
var randomnumber1=Math.ceil(Math.random()*6);
var dicenum1="images/dice"+randomnumber1+".png";
var randomnumber2=Math.ceil(Math.random()*6);
var dicenum2="images/dice"+randomnumber2+".png";

var set=document.querySelectorAll(".img1")[0];
set.setAttribute("src",dicenum1);

var set2=document.querySelectorAll(".img2")[0];
set2.setAttribute("src",dicenum2);

if(randomnumber1>randomnumber2)
{
    document.querySelectorAll("h1")[0].innerHTML="Player 1 wins! 🏁";
}
else if(randomnumber2>randomnumber1)
{
    document.querySelectorAll("h1")[0].innerHTML="🏁 Player 2 wins!";
}
else{
    document.querySelectorAll("h1")[0].innerHTML="Draw!";
}
