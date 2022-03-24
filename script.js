let message = "";

document.getElementById("btn").onclick = function () {
  if (document.getElementById("text").value == "hallo") {
    message = "That's a greeting";
    document.getElementById("title").innerHTML = message;
  } else if (document.getElementById("text").value == "bye") {
    message = "This is a goodbye.";
    document.getElementById("title").innerHTML = message;
  } else {
    message = "Try again";
    document.getElementById("title").innerHTML = message;
  }
};
