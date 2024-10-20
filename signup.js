document.getElementById('signup-form').addEventListener('submit', function(event) {
	event.preventDefault();
  
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const avatar = document.getElementById('avatar').files[0];
  
	if (name && email && password && avatar) {
	  const reader = new FileReader();
	  reader.onloadend = function() {
		const userData = {
		  name: name,
		  email: email,
		  password: password,
		  avatar: reader.result // Save image as base64 string
		};
  
		// Store user data in local storage
		localStorage.setItem('user', JSON.stringify(userData));
  
		// Redirect to the main page
		window.location.href = 'huh.html';
	  };
	  reader.readAsDataURL(avatar);
	} else {
	  alert('Please fill out all fields.');
	}
  });
