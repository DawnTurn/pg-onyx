const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const body = document.querySelector('body')
const clientMail = document.querySelector('#email')

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("rotate");
  body.classList.toggle('no-scroll')
});

function sendEmail(){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "adebowaleademuyiwa12@gmail.com",
    Password: "8BF37C2E9466540C0A1C327A1B11FF208D47",
    To: "adebowaleademuyiwa12@gmail.com",
    From: clientMail.value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
