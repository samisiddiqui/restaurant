import './style.css';
import './reset.css';
import home from './home';
import menu from './menu';
import about from './about';
import header_footer from './header_footer';

init();

function init() {
    header_footer();
    home();

    const homeNav = document.getElementById('homeNav');
    homeNav.addEventListener('click', home);

    const menuNav = document.getElementById('menuNav');
    menuNav.addEventListener('click', menu);

    const aboutNav = document.getElementById('aboutNav');
    aboutNav.addEventListener('click', about);
}
/* const body = document.body;
const pic = new Image();
pic.src = coffee;
body.style.backgroundImage = coffee; */
//body.setAttribute('style', 'background-image: url(99c7687a8f053aef7142.jpg)');


