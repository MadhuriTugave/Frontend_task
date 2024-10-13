document.getElementsByClassName("inner-circle").addEventListener("click", function() {
    var outerCircle = document.getElementsByClassName("outer-circle");

    if (this.style.backgroundColor === "pink") {
        // Revert both inner and outer circle to their original states
        this.style.backgroundColor = "white";
        outerCircle.style.borderColor = "gray"; // Keep the outer circle border pink
    } else {
        // Change inner circle to pink and outer circle border to pink
        this.style.backgroundColor = "pink";
        outerCircle.style.borderColor = "pink"; // Ensure outer circle border changes to pink
    }
});

function toggleInputDiv(divId) {
    var inputDiv = document.getElementById(divId);
    if (inputDiv.style.display === "none" || inputDiv.style.display === "") {
      inputDiv.style.display = "flex";
    } else {
      inputDiv.style.display = "none";
    }


    var outerCircle = inputDiv.previousElementSibling.querySelector('.outer-circle');
  var innerCircle = outerCircle.querySelector('.inner-circle');

  // Toggle the pink class
  outerCircle.classList.toggle('pink-outer-circle');
  innerCircle.classList.toggle('pink-circle');
  }


