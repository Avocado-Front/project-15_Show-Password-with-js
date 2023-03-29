let inputUser = document.querySelector('.inp')
let icon = document.querySelector('.fa')

icon.addEventListener('click',function(){
    icon.classList.toggle('fa-eye-slash')
    if(icon.className.includes('fa-eye-slash')){
        inputUser.setAttribute('type','text')
    }else{
        inputUser.setAttribute('type','password')
    }
})