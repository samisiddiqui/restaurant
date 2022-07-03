import './style.css';
import './reset.css';

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
content.innerHTML = '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>';
const parent = content.parentNode;
parent.insertBefore(header, content);
parent.insertBefore(footer, content.nextSibling);