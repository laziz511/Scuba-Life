let icon = "hamburger";
let registerNumber = 1;

// This function is to change the state of menu in mobile&tablet version.
// when there is a 'hamburger' icon clicked, it shows Menu and coverts that icon to 'close' icon.
// when there is a 'close' icon clicked, it removes Menu and converts that icon to 'hamburger' icon. 
const changeMenuState = () => {
  if (icon == "hamburger") {
    document.getElementById("navbar").style.display = "flex";
    icon = "close";
  }
  else if (icon == "close") {
    document.getElementById("navbar").style.display = "none";
    icon = "hamburger";
  }
  document.getElementById("menu-bar").classList.toggle('fa-times');
}


// This function is to remove Menu once it is clicked, in mobile&tablet version.
const removeMenu = () => {
  if (window.innerWidth < 1030) {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("menu-bar").classList.toggle('fa-times');
    icon = "hamburger";
  }
}


// Once Menu is clicked in mobile&tablet version, it disappers. 
// This functon is to ensure it is available again once width exceeds 1030px.
// It is also to change the images of the first page, based on window width.

window.addEventListener("resize", function () {
  if (window.innerWidth > 1030) {
    document.getElementById("navbar").style.display = "flex";
  } else {
    document.getElementById("navbar").style.display = "none";
  }

  if (icon == "close") {
    document.getElementById("menu-bar").classList.toggle('fa-times');
    icon = "hamburger";
  }

  if (window.innerWidth < 1030) {
    document.getElementById("main-image2").src = "images/main-image-mobile2.jpg";
  } else {
    document.getElementById("main-image2").src = "images/main-photo2.jpg";
  }

  if (window.innerWidth <= 700) {
    document.getElementById("main-image1").src = "images/main-image-mobile.jpg";
  } else {
    document.getElementById("main-image1").src = "images/main-photo1.jpg";
  }

  if (window.innerWidth <= 600) {
    document.getElementById("main-image3").src = "images/main-image-mobile3.jpg";
  } else {
    document.getElementById("main-image3").src = "images/main-photo3.jpg";
  }
});


// This function is to send email to "Scooba Life" Sales Department, when someone registers.
function sendMail(params) {
  let tempParams = {
    register_number: registerNumber,
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    phone_number: document.getElementById("phone_number").value,
    course: document.getElementById("course").value
  };

  emailjs.send("service_h5wasjn", "template_n8gde8l", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    });

  registerNumber++;
}

// This function is to inform a user that registration form is submitted, and to remove values fom input sections. 
document.getElementById("submit-button").addEventListener("click", function () {
  this.style.backgroundColor = "#b85151";
  this.innerText = "Submitted";

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("phone_number").value = "";
  document.getElementById("course").value = "";
});

responsiveNavState = "none";
function appear() {

  if (responsiveNavState == "none") {
    document.querySelector('.response-nav ').style = "display: block;";
    responsiveNavState = "block";
  } 
  
  else if (responsiveNavState == "block") {
    document.querySelector('.response-nav ').style = "display: none;";
    responsiveNavState = "none";
  }
}