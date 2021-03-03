function classToggle() {

    const node1 = document.querySelector('.Navbar-Item');
    const node2 = document.querySelector('.Navbar-Item-Right');

    const style = getComputedStyle(node1);
    const x = style.display;
    if (x == 'flex') {
        node1.setAttribute('style', 'display:none');
        node2.setAttribute('style', 'display:none');
    } else {
        node1.setAttribute('style', 'display:flex');
        node2.setAttribute('style', 'display:flex');
    }


}

/*function res_resize() {

    const mq = window.matchMedia("(min-width:768px)");
    if (mq.matches) {
        const node1 = document.querySelector('.Navbar-Item');
        const node2 = document.querySelector('.Navbar-Item-Right');
        node1.setAttribute('style', 'display:flex');
        node2.setAttribute('style', 'display:flex');
    } else {
        classToggle();
    }

}*/

window.addEventListener('resize', res_resize);


function changeCol() {

    var y = document.getElementsByClassName('Nav-Icon');
    y[0].style.backgroundColor='black';
    y[0].style.borderColor='black';
   
    
    
}

function retainColor(){

    var y = document.getElementsByClassName('Nav-Icon');
    y[0].style.backgroundColor='grey';
    y[0].style.borderColor='grey';

}

document.addEventListener("click",retainColor);