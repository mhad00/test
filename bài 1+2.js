// Bài 1
function tongSoNguyenTo() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let tong = 0;
  
    for (let i = number1; i <= number2; i++) {
      if (soNguyenTo(i)) {
        tong += i;
      }
    }
  
    document.getElementById("result").innerHTML = `Tổng các số nguyên tố trong khoảng ${number1} và ${number2} là: ` + tong;
  }
  
  function soNguyenTo(number) {
    if (!Number.isInteger(number) || number <= 1) {
      return false;
    }
      for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
}
  
// Bài 2
function numberOneTriangle(numB2) {
    if (!Number.isInteger(numB2) || numB2 < 1 || numB2 > 10) {
      console.log("Error");
      return;
    }
    for (let i = 1; i <= numB2; i++) {
      let triangle = "";
      for (let j = 1; j <= i; j++) {
        triangle += "*";
      }
        console.log(triangle);
    }
}
numberOneTriangle(5);