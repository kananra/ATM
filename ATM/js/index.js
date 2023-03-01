alert("Xoş gəlmisiniz");
let wallet = 5000;
const name = prompt("Adinizi daxil edin:");
const surname = prompt("Soyadinizi daxil edin:");
alert("Balans:"+ wallet);
let operator = prompt(" Etmək istədiyiniz əməlliyatın nömrəsini daxil edin");
result(operator);

function increase(a) {
  return wallet + a;
}

function withdraw(b) {
  if (wallet >= b) {
    return wallet - b;
  } else {
    alert("Balansinizda kifayet qeder pul yoxdu");
  }
}

function result(operator) {
  do {
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
        break;
      default:
        alert("Duzgun operator daxil edin");
        break;
    }
    operator = prompt(" Etmək istədiyiniz əməlliyatın nömrəsini daxil edin");
  } while (operator !== 0);
}
