// getting all the elements
var $income = document.querySelector("#money-plus");
var $expense = document.querySelector("#money-minus");
var $addTrabsactionBtn = document.querySelector(".btn");
var $list = document.querySelector("#list");
var $balance = document.querySelector("#balance");

// initializing these variables zero to add by default values
var prev_inc = 0;
var prev_exp = 0;
var prev_bal = 0;

$addTrabsactionBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // getting the entered  text values
  var textElement = document.querySelector("#text").value;
  // getting the entered  amount values
  var amountElement = parseInt(document.querySelector("#amount").value);

  //setting localStorage with the key as textElement and value as amountElement
  localStorage.setItem(textElement, amountElement);

  // creating list tag to insert items
  var $listTag = document.createElement("li");

  // inserting list items in list tag
  $listTag.textContent = textElement + " " + amountElement;

  //updating the income values
  if (amountElement > 0) {
    $listTag.classList.add("plus");
    prev_inc += amountElement;
    $income.innerHTML = `$ ${prev_inc}`;
  }

  //updating the expense values
  else if (amountElement < 0) {
    $listTag.classList.add("minus");
    prev_exp += amountElement;
    $expense.innerHTML = `$ ${Math.abs(prev_exp)}`;
  }

  $list.appendChild($listTag);
  prev_bal += amountElement;
  $balance.innerHTML = `$ ${prev_bal}`;
});
