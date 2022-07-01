const header = document.createElement('nav');
header.id = 'nav';
header.innerHTML = `<ul>
<li>Home
<li>Menu
<li>About
</ul>`;
const footer = document.createElement('footer');
footer.id = 'footer';
footer.innerHTML = '<p>Made with 🌮 by Sami Siddiqui</p>'

const content = document.getElementById('content');
content.innerHTML = 'Content';
const parent = content.parentNode;
parent.insertBefore(header, content);
parent.insertBefore(footer, content.nextSibling);