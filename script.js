// your JS code here
const form = document.getElementById("userForm");
const submitBtn = document.getElementById("submitBtn");
const checkbox = document.querySelector('input[name="terms"]');

checkbox.addEventListener("change", () => {
  submitBtn.disabled = !checkbox.checked;
});


form.addEventListener("submit", (e) => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const gender = form.gender.value;

  if (!name || !email || !password || !gender) {
    e.preventDefault();
    alert("Please complete all fields before submitting.");
    return;
  }


  if (!checkbox.checked) {
    e.preventDefault();
    alert("You must accept the terms and conditions.");
    return;
  }

 
});
