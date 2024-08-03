const form = document.getElementById("form");
const inputs = document.querySelectorAll("input, textarea");

function validateForm(e) {
  e.preventDefault();


  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length < 1) {
      inputs[i].classList.add("redline");
      const errorCamp = document.createElement("div");
      errorCamp.textContent = "campo obrigatorio";
      errorCamp.classList.add("errordecampo");
      inputs[i].parentNode.insertBefore(errorCamp, inputs[i].nextSibling);

    } 
    else
     {
      inputs[i].classList.add("greenline");
    }
  }
}

form.addEventListener("submit", validateForm);

