let animado= document.querySelectorAll(".skills");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i< animado.length; i++){
        let alturaAnimado= animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity= 1;
        }
    }
}
window.addEventListener('scroll',mostrarScroll)

var waypoint = new Waypoint({
    element: document.getElementById('html-menu'),
    handler: function(direction) {
      let menuhtml= document.getElementById('html-menu')
      let menucss= document.getElementById('css-menu')
      let jsmenu= document.getElementById('js-menu')
      let angularmenu= document.getElementById('angular-menu')
      menuhtml.classList.add('html-menu')
      menucss.classList.add('css-menu')
      jsmenu.classList.add('js-menu')
      angularmenu.classList.add('angular-menu')

      //console.log(menuhtml)
    },
    offset: 450
})
