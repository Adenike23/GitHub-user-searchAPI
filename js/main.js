const light = document.querySelector('.light_mode');
const dark = document.querySelector('.dark_mode');
const aTag = document.querySelector('a')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const main = document.querySelector('main')
const profile = document.querySelector('#profile')


light.addEventListener('click', function(){
    dark.style.display = 'flex'
    light.style.display = 'none'
    aTag.style.color = 'black'
    body.style.color = 'black'
    body.style.backgroundColor = 'white'
    nav.style.backgroundColor = 'lightgray'
    main.style.backgroundColor = 'lightgray'
    profile.style.backgroundColor = 'grey'
})

dark.addEventListener('click', function(){
    dark.style.display = 'none'
    light.style.display = 'flex'
    aTag.style.color = 'white'
    body.style.color = 'white'
    body.style.backgroundColor = 'rgb(41, 41, 56)'
    nav.style.backgroundColor = 'rgba(62, 62, 126, 0.882)'
    main.style.backgroundColor = 'rgba(62, 62, 126, 0.882)'
    profile.style.backgroundColor = 'rgba(36, 36, 49, 0.886)'
})