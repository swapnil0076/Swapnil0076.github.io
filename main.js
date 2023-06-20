let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    navbar.classList.toggle('open-menu')
    menu.classList.toggle("move");
};

window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    navbar.classList.remove("move")
}

function validate(){
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendbtn = document.querySelector('.send-btn')

    sendbtn.addEventListener('click',(e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail(name.value,email.value,msg.value);
            success();
        }
    })
}

validate();

function sendmail(name,email,msg){
    emailjs.send("service_floiule","template_5z7tvoa",{
        to_name: email,
        from_name: name,
        message: msg,
        });
};

function emptyerror(){
    swal({
        title: "Oh No.........!",
        text: "Fields cannot be empty",
        icon: "error",
        // button: "Success!",
      });

}

function success(){
    swal({
        title: "Good job!",
        text: "Email sent sucessfully!",
        icon: "success",
        button: "Ok",
      });
}

// header background

let header = document.querySelector('header');

window.addEventListener('scroll',() =>{
    header.classList.toggle("header-active", window.scrollY>0)
})


let resbut1 = document.getElementById("resume-button-1").addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1R_ZvEje4lq3BXfJD3T9SNssHCTlFx4Ek/view?usp=share_link');
  });


  let resbut2 = document.getElementById("resume-button-2").addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1R_ZvEje4lq3BXfJD3T9SNssHCTlFx4Ek/view?usp=share_link');
  });