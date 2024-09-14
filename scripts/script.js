function MenuToggle(e) {
    const line1 = document.querySelector('.line-1')
    const line2 = document.querySelector('.line-2')
    const line3 = document.querySelector('.line-3')

    const hamburguerCont = document.querySelector('.menu-hamburguer-container')
    const body = document.querySelector('body')

    e.target.classList.toggle('.active')
    if (e.target.classList.contains('.active')) {
        body.style.overflowY = 'hidden'
        line1.style.transform= 'rotate(-45deg)'
        line1.style.top= '18px'
        line1.style.transition = '.3s'

        line2.style.transition = '.2s'
        line2.style.opacity = '0'
        hamburguerCont.classList.add('menu-show')
        
        line3.style.transform= 'rotate(45deg)'
        line3.style.bottom= '18px'
        line3.style.transition = '.3s'
    }
    else {
        body.style.overflowY = 'scroll'
        line1.style.transform= 'rotate(.1deg)'
        line1.style.top= '0'
        line1.style.transition = '.3s'

        line2.style.opacity = '1'
        hamburguerCont.classList.remove('menu-show')

        line3.style.transform= 'rotate(.1deg)'
        line3.style.bottom= '0'
        line3.style.transition = '.3s'
    }
}