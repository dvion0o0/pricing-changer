var change = document.getElementById("chk");
var price1 = document.querySelector(".price-1");
var price2 = document.querySelector(".price-2");
var price3 = document.querySelector(".price-3");
var changePrice1 = document.querySelector(".changed-price-1");
var changePrice2 = document.querySelector(".changed-price-2");
var changePrice3 = document.querySelector(".changed-price-3");

change.addEventListener("change", function(){
if(change.checked === true){
price1.style.display ="block";
price2.style.display = "block";
price3.style.display = "block";
changePrice1.style.display = "none";
changePrice2.style.display = "none";
changePrice3.style.display = "none";
}
else{
price1.style.display = "none";
price2.style.display = "none";
price3.style.display = "none";
changePrice1.style.display = "block";
changePrice2.style.display = "block";
changePrice3.style.display = "block";
}
});

