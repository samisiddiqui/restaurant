const header = document.createElement('header');
header.id = 'header';
header.innerHTML = 'Header'
const footer = document.createElement('footer');
footer.id = 'footer';
footer.innerHTML = 'Footer'

const content = document.getElementById('content');
content.innerHTML = 'Content';
const parent = content.parentNode;
parent.insertBefore(header, content);
parent.insertBefore(footer, content.nextSibling);