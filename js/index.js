
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("check");
  // Get the output text
  var text = document.getElementsByClassName("menu")[0];

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "flex"
    } else {
    text.style.display = "none";
  }
}