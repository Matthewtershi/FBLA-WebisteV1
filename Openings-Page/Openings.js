form = document.get

//Accordion elements
const accordion = document.getElementsByClassName("accordionElement");
for (i = 0; i < accordion.length; i++) {
    console.log(accordion[i].innerHTML);
    console.log("child: " + accordion[i].children[0].innerHTML);
    accordion[i].children[0].addEventListener('click', function() {
        this.parentNode.classList.toggle('active');
    })
}

function zoomin(e) {
    e.style.zIndex = "1000";
    console.log(e.style.zIndex);
    e.parentNode.animate(
        [
            { 
                transform: 'scale(20)',
                color: 'red',
            }
        ], {
            duration: 500,
            easing: 'ease-in',
            delay: 0,
            iterations: 1,
            direction: 'alternate',
            fill: 'both'
        },
    ).onfinish = function () {
        window.location.href = "../Application-Page/ApplicationMain.html"
    };
}

dropdownItems.forEach(function (item) {
    item.addEventListener("click", function() {
        var selectedValue = item.getAttribute("data-position");
        dropdownButton.innerHTML = selectedValue;
        position.value = selectedValue;
    })
})

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var selectedPosition = dropdownButton.getAttribute("value");
    var formData = new FormData(this);
    formData.set("position", selectedPosition);

    fetch(SCRIPT_URL, { method: 'POST', body: new FormData(this) })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
        position.textContent = "Form Has Been Updated!";

        // Handle success
        if (data.result == 'success') {
          //alert('Form has been submitted successfully. Updated row: ' + data.row);
          window.location.href = "../Submission-Confirmation/Confirmation.html";
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