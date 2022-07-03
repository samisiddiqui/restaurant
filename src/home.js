function home() {
    const content = document.getElementById('content');
    content.setAttribute('style', 'color: #1E3FAE');
    content.innerHTML = `<p>World-class food, world-class atmosphere</p>`;
    document.body.style.backgroundImage = "url('99c7687a8f053aef7142.jpg')";
    document.body.style.backgroundSize = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundPosition = '';
};

export default home;