function SOLVE() {
  var a = parseInt(document.getElementById("tb1").value);
  var b = parseInt(document.getElementById("tb2").value);
  var c = parseInt(document.getElementById("tb3").value);

  switch (c) {
    case 1:
      alert("sum is " + (a + b));
      break;
    case 2:
      alert("prodcut is " + a * b);
      break;
    case 3:
      alert("average is " + (a + b) / 2);
      break;
    default:
      alert("Wrong choice");
  }
}
