
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slideCount = mainSlide.querySelectorAll('div').length
let activeSlide = 0

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
changeSlide('up')
})

downBtn.addEventListener('click', () => {
changeSlide('down')
})

document.addEventListener('keydown', event => {
    if( event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W')
        {
            changeSlide('up')
        }
     else if ( event.key === 'ArrowDown' || event.key === 's' || event.key === 'S')
        {
            changeSlide('down')
        }
})

function changeSlide(direction) {

    if (direction === 'up' )
        {
            activeSlide++
            if (activeSlide === slideCount) 
                {
                    activeSlide = 0
                }
        }
            else if ( direction === 'down' )
            {
                activeSlide--
                if (activeSlide < 0 ) 
                    {
                        activeSlide = slideCount - 1
                    }
            }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    sidebar.style.transform = `translateY(${activeSlide * height}px)`

}