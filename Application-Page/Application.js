const scriptURL = 'https://script.google.com/macros/s/AKfycbyPadtNTEdWM-sVHtKBoeSLv0Tkz_9PsUZrA2i40IEPVpa7jaGKhaTSN63gNKQRbSl38Q/exec'
const form = document.forms['submit-to-google-sheet']
const date = new Date();

form.addEventListener('submit', e => {
  e.preventDefault()
  alert(getDate())
  data = new FormData(form)
  data.append("Position", document.getElementById("positionSelector").value)
  data.append("Date", getDate())
  for (let entry of data.entries()) {
    console.log(entry[0] + ": " + entry[1]);
  } 
  console.log("");
  fetch(scriptURL, { method: 'POST', body: data})
    .then(hooray())
    .catch(error => console.error('Error!', error.message))
})

function hooray() {
  alert("success");
}

function getDate() {
  let month = date.getMonth() + 1;
  month = month > 10 ? month : "0" + month;
  
  let day = date.getDate();
  day = day > 10 ? day : "0" + day;
  
  return date.getFullYear() + "/" + month + "/" + day;
}