alert("Xoş gəlmisiniz");
let wallet = 5000;
const name = prompt("Adinizi daxil edin:");
const surname = prompt("Soyadinizi daxil edin:");
alert("Balans:"+ wallet);
alert("1.Balansi artirmaq 2.Pul cekmek 0.Cixis");
let operator = prompt(" Etmək istədiyiniz əməlliyatın nömrəsini daxil edin");
result(operator);

function increase(a) {
  return wallet=wallet + a;
}

function withdraw(b) {
  if (wallet >= b) {
    return wallet - b;
  } else {
    alert("Balansinizda kifayet qeder pul yoxdu");
  }
}

function result(operator) {

  while(operator !== 0) {
    switch (operator) {
      case "1":
        let a = Number(prompt("Meblegi daxil edin"));
        alert("Balans:" + increase(a));
        break;
      case "2":
        let b = Number(prompt("Meblegi daxil edin"));
        alert(withdraw(b));
        break;
      case "0":
        alert("Kartinizi goturun");
        console.log("hey");
        break;
      default:
        alert("Duzgun operator daxil edin");
        break;
    }
     operator = prompt(" Etmək istədiyiniz əməlliyatın nömrəsini daxil edin");
  };
}
