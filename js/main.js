const light = document.querySelector('.light_mode');
const dark = document.querySelector('.dark_mode');
const aTag = document.querySelector('a')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const main = document.querySelector('main')
const profile = document.querySelector('#profile')
const input = document.querySelector('input')
const allh4 = document.querySelectorAll('h4')
const allpTags = document.querySelectorAll('p')
const allaTags = document.querySelectorAll('a')
const error = document.querySelector('.error')
const modal = document.querySelector('.modal-bg')
const closeModal = document.querySelector('.ri-close-fill')
const userName = document.querySelector('.userName')
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

async function getInfo(){
    if(input.value === ''){
        error.style.display = 'block'
        setTimeout(() => {
            error.style.display = 'none'
        }, 3000);
        error.textContent = 'input a valid username';
    }else{
        const response = await fetch (`https://api.github.com/users/${input.value}`)
        let data = await response.json()
        console.log(response);
        
        if(!response.ok){
            modal.style.display = 'flex'
            allpTags[5].textContent = `${input.value} ${data.message}`
            input.value = ''
        }
        if(response.ok){
            input.value = ''
            document.querySelector('h2').textContent = data.login
            if(data.bio == null){
                document.querySelector('.bio').textContent = 'This profile has no bio';
            }else{
                document.querySelector('.bio').textContent = data.bio
            }
            document.querySelector('.date').textContent = `Joined ${new Date(data.created_at).toString().split(' ').splice(1, 3).join(' ')}`
            allh4[1].textContent = data.public_repos
            allh4[2].textContent = data.followers
            allh4[3].textContent = data.following
            allpTags[3].textContent = data.location
            allpTags[4].textContent = data.html_url
            allaTags[0].textContent =  data.twitter_username
            allaTags[1].textContent =  data.blog
            document.querySelector('img').src = data.avatar_url
            userName.textContent = data.login
        }
    }  
}
document.querySelector('button').addEventListener('click', getInfo)

closeModal.addEventListener('click', function(){
    modal.style.display = 'none'
})