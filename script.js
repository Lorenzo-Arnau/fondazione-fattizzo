


function copyToSend() {
   document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  var copyText = window.location.href;
  navigator.clipboard.writeText(copyText);
  var modal = document.getElementsByClassName('fake-modal')[0]
  modal.classList.remove('invisible')
  modal.classList.add('visible')
 var overlay = document.getElementsByClassName('overlay-modal')[0]
  overlay.classList.remove('invisible')
  overlay.classList.add('visible')
}
function openDonate(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  var modal = document.getElementsByClassName('donate-modal')[0]
  modal.classList.remove('invisible')
  modal.classList.add('visible')
 var overlay = document.getElementsByClassName('overlay-modal')[0]
  overlay.classList.remove('invisible')
  overlay.classList.add('visible')
}
function openTextArea(){
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  var modal = document.getElementsByClassName('send-text')[0]
  modal.classList.remove('invisible')
  modal.classList.add('visible')
 var overlay = document.getElementsByClassName('overlay-modal')[0]
  overlay.classList.remove('invisible')
  overlay.classList.add('visible')
}
function closeModal(){
 var overlay = document.getElementsByClassName('overlay-modal')[0]
  overlay.classList.remove('visible')
  overlay.classList.add('invisible')
  var modal = document.getElementsByClassName('fake-modal')[0]
  modal.classList.remove('visible')
  modal.classList.add('invisible');
  
  var modal = document.getElementsByClassName('send-text')[0]
  modal.classList.remove('visible')
  modal.classList.add('invisible')
  
  var modal = document.getElementsByClassName('donate-modal')[0]
  modal.classList.remove('visible')
  modal.classList.add('invisible')
}
function sendMessage(){
   var input = document.getElementsByClassName('text-area-message')[0]
   var textarea = document.getElementsByClassName('text-area-message')[1]
   console.log(textarea.value);
   Email.send({
    Host : "",
    Username : "",
    Password : "",
    To : '',
    From : "",
    Subject : "",
    Body :input.value + '-' + textarea.value
  }).then(
    message => alert(message)
  );


    var modal = document.getElementsByClassName('send-text')[0]
    modal.classList.remove('visible')
    modal.classList.add('invisible')
    var overlay = document.getElementsByClassName('overlay-modal')[0]
    overlay.classList.remove('visible')
    overlay.classList.add('invisible')
}