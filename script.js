//your JS code here. If required.
const form = document.getElementById("userForm");
    const submitBtn = document.getElementById("submitBtn");
    const checkbox = document.getElementById("terms");

    checkbox.addEventListener('change', () => {
      submitBtn.disabled = !checkbox.checked;
    });

    form.addEventListener('submit', (e) => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      if (name === '' || email === '') {
        e.preventDefault();
        alert("Please fill in all required fields.");
        return;
      }

      if (!checkbox.checked) {
        e.preventDefault();
        alert("Please accept the terms and conditions.");
        return;
      }

      alert("Form submitted successfully!");
    });