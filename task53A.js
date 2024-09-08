const checkAccessButton = document.getElementById("checkAccess");
const roleInput = document.getElementById("role");
const ageInput = document.getElementById("age");
const accessMessage = document.getElementById("accessMessage");

checkAccessButton.addEventListener("click", function () {
  const role = roleInput.value.toLowerCase();
  const age = parseInt(ageInput.value);

  if (role === "admin" || role === "moderator") {
    accessMessage.textContent = "You have full access!";
    accessMessage.classList.add("full-access");
  } else if (role === "member" && age >= 18) {
    accessMessage.textContent = "You have member access!";
    accessMessage.classList.add("member-access");
  } else if (role === "guest") {
    accessMessage.textContent = "You have guest access!";
    accessMessage.classList.add("guest-access");
  } else {
    accessMessage.textContent = "Access denied!";
    accessMessage.classList.add("deny-access");
  }
});
