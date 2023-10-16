const loginr=document.querySelector('.login-section')
const loginLink=document.querySelector('.login-link')
const registerLink=document.querySelector('.register-link')
registerLink.addEventListener('click',()=>{
    loginr.classList.add('active')
})
loginLink.addEventListener('click',()=>{
    loginr.classList.remove('active')
})