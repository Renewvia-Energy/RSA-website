// Hide the body element by setting display to none
document.body.style.display = 'none';

// Show password prompt
const password = prompt('This site is currently under construction. Please enter password to view:');

// Check if password is correct
// Good for you. You found the "password" in the JS and can view a website that's under construction. I know this is bad form, but it really doesn't matter, so I'm going to leave it like this until we can make the website public.
if (password === 'Renewvia1!') {
    document.body.style.display = 'initial';
}