var test = document.getElementById("NIHAO");
var form = document.getElementById("myForm");
var submitButton = document.getElementById("submitButton");
var dropdownButton = document.getElementById("positionSelector");
var dropdownItems = document.querySelectorAll(".dropdown-item");
var position = document.getElementById("position");
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby4PhZjkcBe1Bggj0AmYosHU2qPHjnwWIid5wYcPNyBcKVchBHCBEuSnApEBArqAtd7mQ/exec";

//testing ok leave me alone
/*test.addEventListener("click", function() {
    if (test.innerHTML == "NI HAO") {
        test.innerHTML = "IM SPECIAL";
    } else {
        test.innerHTML = "NI HAO";
    }

});*/

/*submitButton.addEventListener("click", function() {
    test.innerHTML = "NOOOOOOOOO";
    document.getElementById("loadingIcon").classList.remove("d-none");
})*/

/*form.addEventListener("submit", e => {
    e.preventDefault()
    console.log('SCRIPT_URL:', SCRIPT_URL);

    fetch(SCRIPT_URL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
          console.log('Server response:', data);
          position.textContent = "Form Has Been Updated!";
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });

})*/

form.addEventListener("submit", function (e) {
    e.preventDefault();

    /*var selectedPosition = dropdownButton.getAttribute("data-position");
    var formData = new FormData(this);
    formData.set("position", selectedPosition);*/
    var selectedPosition = dropdownButton.getAttribute("value");
    alert(selectedPosition);
    var formData = new FormData(this);
    formData.set("position", selectedPosition);

    fetch(SCRIPT_URL, { method: 'POST', body: new FormData(this) })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
        position.textContent = "Form Has Been Updated!";

        // Handle success
        if (data.result === 'success') {
          alert('Form has been submitted successfully. Updated row: ' + data.row);
        } else {
          alert('Form submission failed.');
        }
        document.getElementById("loadingIcon").classList.add("d-none");
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        document.getElementById("loadingIcon").classList.add("d-none");
      });
  });


// Assuming the URL is something like: https://www.example.com/page?param1=value1&param2=value2
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const job_input = urlParams.get('job');
const job_dropdown = document.getElementById("positionSelector")
job_dropdown.value = job_input;