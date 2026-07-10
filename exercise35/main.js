

function changeElement(){

    const image = document.querySelector('#image')


    const url = prompt('inter your url')
const boderColor = prompt('plase inter your boder color')
const width = prompt('inter width in pixel')
const height = prompt('inter height (in pixel)')
const boderRadius = prompt('inter yor boder radius (in pixels)')


    image.setAttribute('src' , url)

    image.style.boder =`2px solid  tomato ${boderColor}`
    image.style.width =` ${width}px`
    image.style.height =` ${height}px`
    image.style.padding=`10px`
    image.style.backgroundColor= '#4b187a33'

    image.style.boderRadius= `20px ${boderRadius}`
}