// nota: avresti dovuto mettere la classe più stringente come prima classe per evitare di aggiungere una seconda condizone su tutte condizioni degli if
for (var i = 1; i <= 100; i++) {
  if (!(i % 3) && (i % 5)) {
    console.log("Fizz");
  }
  else if (!(i % 5) && (i % 3)) {
    console.log("Buzz");
  }
  else if (!(i % 3) && !(i % 5)) {
    console.log("FizzBuzz")
  }
  else {
    console.log(i);
  }
}
