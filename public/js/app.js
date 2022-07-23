
const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const menulink = document.querySelector('#menu-link')
const mainmenus = document.querySelector('#mainmenu')
const hamburgeritem = document.querySelectorAll('#hamburgeritem') //grabs all elements with that id not just first

const contactform = document.querySelector('#contact-form')
let name = document.getElementById('fullname')
let email = document.getElementById('email')
let message = document.getElementById('message')

//menu dropdown functionality
hamburger.addEventListener('click', ()=>{
    //when clicked  main menu becomes hidden
    menu.classList.toggle('hidden')
    hamburgeritem.forEach(e=>{
        //each tick in hamburger menu becomes white on toggle with click
        e.classList.toggle('bg-white')
    })
})

//post form data
contactform.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('clicked')
    let formData = {
        fullname: fullname.value,
        email: email.value,
        message: message.value
    }
    try{
        const fetchdata = async function(){
            await fetch('/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            })
        }
        fetchdata().then((req,res)=>{
            console.log(res)
        })
    }catch(err){console.log(err)}

})