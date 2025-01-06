function classToggle() {
  const navs = document.querySelector(".Navbar__Items");
  navs.classList.toggle("Navbar__ToggleShow");
}

// Close the navbar when a menu item is clicked
function closeNavbar() {
  const navs = document.querySelector(".Navbar__Items");
  navs.classList.remove("Navbar__ToggleShow");
}

// Add event listener to the toggle button
document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

// Add event listeners to each menu link
const menuLinks = document.querySelectorAll(".Navbar__Link");
menuLinks.forEach(link => {
  link.addEventListener("click", closeNavbar);
});


/*document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password) {
    alert('Login Successful');
  } else {
    alert('Please Fill in both fields');
  }
});*/

document.querySelector('.form').addEventListener('submit', function(event){
  event.preventDefault();
  const username =  document.getElementById('username').value;
  const password =  document.getElementById('password').value;
  if(username && password){
    alert('Login Successful');
  }else{
    alert('Please Fill in both fields');
  }
});