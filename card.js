const btRemove = document.getElementsByClassName("delete");
const btnsAddTag = document.getElementsByClassName("plus");
const btnsSubTag = document.getElementsByClassName("minus");
const btnlikeTag=document.getElementsByClassName("like");



for (var i = 0; i < btnsAddTag.length; i++) {
  btnsAddTag[i].addEventListener("click", increment);
  btRemove[i].addEventListener("click", deleteFN);
  btnsSubTag[i].addEventListener("click", decrement);
  btnlikeTag[i].addEventListener("click",likeFN);


}
function likeFN(event) {
    var like = event.target;
console.log( like);
if(like.style.color == 'red'){
    like.style.color="#424242";
}else{
    like.style.color = 'red';

}

  }

function deleteFN(event) {
    var block = event.target.parentElement.parentElement.parentElement.parentElement;
    var total=Number(document.querySelector("#total").innerHTML);
   total-=Number(block.querySelector(".price").innerHTML);
   document.querySelector("#total").innerHTML=total;
   console.log(total);
   
    block.parentNode.removeChild(block);

  }
  function decrement(event)  {
        var btnPlus = event.target;
        var divElt = btnPlus.parentElement;
        var quantityTag = divElt.querySelector("p");
        var quantity = Number(quantityTag.innerHTML);
        if(quantity!=0)
        {
        quantity--;}
        quantityTag.innerHTML = quantity;
        var priceTag = divElt.parentElement.parentElement.querySelector(".price");
        var unitPriceTag =
          divElt.parentElement.parentElement.querySelector(".unitPrice");
        var unitPrice = Number(unitPriceTag.innerHTML);
        var price = unitPrice * quantity;
        priceTag.innerHTML = price;
      }
      
function increment(event) {
  var btnPlus = event.target;
  var divElt = btnPlus.parentElement;
  var quantityTag = divElt.querySelector("p");
  var quantity = Number(quantityTag.innerHTML);
  quantity++;
  quantityTag.innerHTML = quantity;
  var priceTag = divElt.parentElement.parentElement.querySelector(".price");
  var unitPriceTag =
    divElt.parentElement.parentElement.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  var price = unitPrice * quantity;
  priceTag.innerHTML = price;
}

var checkTags = document.querySelectorAll(".check");
for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].onclick = totalPrice;
}

function totalPrice(event) {
  var checkTag = event.target;
  var priceTag = checkTag.parentElement.parentElement.querySelector(".price");
  console.log(priceTag);
  var price = Number(priceTag.innerHTML);
  console.log(price);
  var totalTag = document.getElementById("total");

  var total = Number(totalTag.innerHTML);
  var btnPlus = checkTag.parentElement.parentElement.querySelector(".plus")
  var btnMinus = checkTag.parentElement.parentElement.querySelector(".minus")

  if (checkTag.checked === true) {
    //  total = total + priceF

    total += price;
    btnPlus.setAttribute("disabled",true);
    btnMinus.setAttribute("disabled",true);

  } else {
    total =total- price;
    btnPlus.removeAttribute("disabled")
    btnMinus.removeAttribute("disabled")
  }
  totalTag.innerHTML = total;
}


 
  