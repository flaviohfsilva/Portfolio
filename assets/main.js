//*==================== SCROLL UP ====================*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    if(this.scrollY >+ 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK MODE ====================*/
const chk = document.getElementById('chk');

chk.addEventListener('change',() => {
    document.body.classList.toggle("dark-theme")
});



