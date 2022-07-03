function home() {
    const content = document.getElementById('content');
    content.setAttribute('style', 'color: white');
    content.innerHTML = `<p>World-class food, world-class atmosphere</p>`;
};

export default home;