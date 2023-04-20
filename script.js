function mayorNum() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt (document.getElementById("num2").value);
  if(num1 > num2){
    alert("El numero mayor es:" + num1 + "(num1)")
  }
  else if(num1 < num2){
    alert("El numero Mayor es:" + num2 + "(num2)")
  }
  else if(num1 == num2){
    alert("Los numeros son iguales:" + num1 +"(num1)" + num2 + "(num2)")
  }
  else{
    alert("Falta numeros:"+ num1 + "(num1)" + num2 + "(num2)")
  }
}