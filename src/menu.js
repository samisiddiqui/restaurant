function menu() {
    const content = document.getElementById('content');
    content.setAttribute('style', 'color: #FF69B4');
    content.innerHTML = `<p>Food Menu</p>`;
    document.body.style.backgroundImage = "url('57e9ade8e54e0025ab0a.jpg')";
    document.body.style.backgroundSize = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundPosition = '';
};

export default menu;