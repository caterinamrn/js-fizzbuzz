// se davanti ad un elemento ho backslash \ js ignora il carattere e lo salva come stringa!!
for (var i = 1; i <= 100; i++) {
  if (!(i % 3) && (i % 5)) {
    document.getElementById('list').innerHTML += "<li class= \" fizz \" > Fizz </li>";

  }
  else if (!(i % 5) && (i % 3)) {
    document.getElementById('list').innerHTML += "<li class= \" buzz \" > Buzz </li>";

  }
  else if (!(i % 3) && !(i % 5)) {
    document.getElementById('list').innerHTML += "<li class= \" fizzbuzz \" > FizzBuzz </li>";

  }
  else {
    document.getElementById('list').innerHTML += "<li>" + i + "</li>";
  }
}
