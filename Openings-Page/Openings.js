//Accordion elements
const accordion = document.getElementsByClassName("accordionElement");
for (i = 0; i < accordion.length; i++) {
    console.log(accordion[i].innerHTML);
    console.log("child: " + accordion[i].children[0].innerHTML);
    accordion[i].children[0].addEventListener('click', function() {
        this.parentNode.classList.toggle('active');
    })
}