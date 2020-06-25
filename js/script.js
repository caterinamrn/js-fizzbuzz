
for (var i = 1; i <= 100; i++) {
  if (!(i % 3) && (i % 5)) {
    // document.getElementById('list').innerHTML = "<li> Fizz </li>";
    console.log("Fizz");
  }
  else if (!(i % 5) && (i % 3)) {
    // document.getElementById('list').innerHTML = "Fuzz";
    console.log("Buzz");
  }
  else if (!(i % 3) && !(i % 5)) {
    console.log("FizzBuzz")
  }
  else {
    console.log(i);
  }
}
