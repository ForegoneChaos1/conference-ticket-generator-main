
const avatarImage = document.getElementById("avatar-input");
const input = document.querySelector(".input-container");
const ticket = document.querySelector(".ticket");
const fullName = document.getElementById("fullname");
const emailAddress = document.getElementById("email");
const githubUser = document.getElementById("github");
const subButton = document.querySelector(".submit-btn");
const avatarDisplay = document.getElementById("avatar-display")
const fullNameDisplay = document.querySelector(".fullnamedisplay");
const ticketNameDisplay = document.querySelector(".name-ticket")
const emailDisplay = document.querySelector(".emaildisplay");
const githubUserDisplay = document.querySelector(".gituserdisplay");
const ticketNumber = document.querySelector(".tick-num");
const form = document.querySelector('form');

fullName.addEventListener("input", (event) =>{
    fullNameDisplay.textContent = event.target.value;
    ticketNameDisplay.textContent = event.target.value;
})
emailAddress.addEventListener("input", (event) =>{
    emailDisplay.textContent = event.target.value;
})
githubUser.addEventListener("input", (event) =>{
    githubUserDisplay.textContent = event.target.value;
})
form.addEventListener("submit", (event) => {
  event.preventDefault();
  ticket.style.display = "flex";
  input.style.display = "none";
  tickNum(); 
});

avatarImage.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const objectURL = URL.createObjectURL(file);
    avatarDisplay.src = objectURL;
    avatarDisplay.onload = () => {
        URL.revokeObjectURL(objectURL);
    };
  }
});

function tickNum() {
    const randomNumber = Math.floor(Math.random() * 100000);
    const formattedID = `#${String(randomNumber).padStart(5, '0')}`;
    ticketNumber.textContent = formattedID;
};
