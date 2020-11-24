name = document.getElementById("name").value;
email = document.getElementById("email").value;
subject = document.getElementById("subject").value;
compose = document.getElementById("compose").value;
send = document.querySelector('.send-btn')


send.addEventListener('click',()=>{
    window.open(`mailto:${'anandtanishqs@gmail.com'}?subject=${subject}&body=${name}: ${compose}`);
})