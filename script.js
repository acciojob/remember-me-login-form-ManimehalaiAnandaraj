//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
	const loginForm =document.getElementById('existing');
	const usernameInput=document.getElementById('username');
	const passwordInput=document.getElementById('password');
	const remembermeCheckbox=document.getElementById('checkbox');

	if(localStorage.getItem('username'))
	{
		usernameInput.value=localStorage.getItem('username');
		passwordInput.value=localStorage.getItem('password');
		remembermeCheckbox.checked=true;
	}

	loginForm.addEventListener('submit',function (event) {
		event.preventDefault();

		if(remembermeCheckbox.checked){
			localStorage.setItem('username',usernameInput.value);
			localStorage.setItem('password',passwordInput.value);
		}
		else
		{
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		
		}
		alert(`Logged in as ${username.value}`);
	});	
});