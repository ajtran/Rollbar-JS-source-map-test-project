var button = document.createElement("button");
button.innerHTML = "Create an error";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

function multiplication(n1, n2) {
  try {
    throw "blah";
  } catch(err) {
    alert("I am an error message")
  }
  return n1 * n2;
}

function numero(num) {
  try {
      throw new Error("Something went wrong inside numero");
  } catch (e) {
      Rollbar.error(e);
  }
  return num;
}

button.addEventListener ("click", function() {
    console.log(multiplication(numero(2), 4));
});


function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
}

try {
  throw new Error("something happened on load");
} catch (e) {
  Rollbar.error(e);
}
