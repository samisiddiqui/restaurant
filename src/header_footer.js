function header_footer() {
    const header = document.createElement('nav');
    header.id = 'nav';
    header.innerHTML = `
    <ul>
       <li id = 'homeNav'>Home
       <li id = 'menuNav'>Menu
       <li id = 'aboutNav'>About
    </ul>
    `;
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.innerHTML = `
    <p>Made with 🌮 by Sami Siddiqui</p>
    `;
    const content = document.getElementById('content');
    const parent = content.parentNode;
    parent.insertBefore(header, content);
    parent.insertBefore(footer, content.nextSibling);
    }
    export default header_footer;