let mailvalue;
function check(){
    let mail = document.querySelector('#text');
    mailvalue = mail.value;
    let regex = /^.+@.+\..+$/;
    if (regex.test(mailvalue)){
        window.location.href = './successpage.html';     
    }else{
        mail.style.border = '2px solid  hsl(4, 100%, 67%)';
        let warn = document.querySelector('#warningtext');
        warn.style.visibility = 'visible';
        setTimeout(()=>{mail.style.border = 'revert';
                        warn.style.visibility = 'hidden'},2000);
    }
}

function retun(){
    console.log(mailvalue);
    window.location.href = './index.html';     

}

document.addEventListener('submit', function(e){e.preventDefault();
                                                check();} );


