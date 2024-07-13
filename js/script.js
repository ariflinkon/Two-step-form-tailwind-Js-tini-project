const signinTab = document.getElementById('signin-tab');
const signupTab = document.getElementById('signup-tab');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

signinTab.addEventListener('click', () => {
    signinForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    signinForm.classList.add('fade-in');
    signupForm.classList.remove('fade-in');
    signinTab.classList.add('text-white-500', 'font-bold');
    signupTab.classList.remove('text-white-500', 'font-bold');
    signupTab.classList.add('text-white-500');
});

signupTab.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    signinForm.classList.add('hidden');
    signupForm.classList.add('fade-in');
    signinForm.classList.remove('fade-in');
    signupTab.classList.add('text-white-500', 'font-bold');
    signinTab.classList.remove('text-white-500', 'font-bold');
    signinTab.classList.add('text-white-500');
});

// Add this JavaScript code to your script.js file

const signinButton = document.querySelector('#signin-form .submit-btn');
const signupButton = document.querySelector('#signup-form .submit-btn');

signinButton.addEventListener('mouseover', () => {
    signinButton.style.backgroundColor = '#3b82f6'; // Change to a lighter blue on hover
});

signinButton.addEventListener('mouseout', () => {
    signinButton.style.backgroundColor = '#1d4ed8'; // Revert to original color
});

signupButton.addEventListener('mouseover', () => {
    signupButton.style.backgroundColor = '#3b82f6'; // Change to a lighter blue on hover
});

signupButton.addEventListener('mouseout', () => {
    signupButton.style.backgroundColor = '#1d4ed8'; // Revert to original color
});