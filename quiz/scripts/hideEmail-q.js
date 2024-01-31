/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        // complete the loop
        // if (!email.match('@') || !email.match('northeastern.edu')) continue;
        // + means 0-more ocurances of the previous character
        // reg is space sensitive
        if (!email.match(/^[a-z0-9_]+@(.+\.)*northeastern.edu$/)) continue;
        const li = document.createElement('li');
        const index = email.indexOf('@');
        const username = email.slice(0, index);
        const domain = email.slice(index);
        const hiddenUsername = username.replace(/./g, '*');
        li.innerHTML = hiddenUsername + domain;
        list.appendChild(li);
    }
}