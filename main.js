function check(){
    let mail = document.querySelector('#text');
    let mailvalue = mail.value;
    let regex = /^.+@.+\..+$/;
    if (regex.test(mailvalue)){
        window.location.href = './successpage.html';     
    }else{
        mail.style.borderColor = red;
    }
}

function retun(){
    window.location.href = './index.html';     

}



document.addEventListener('submit', function(e){e.preventDefault();
                                                check();} );


