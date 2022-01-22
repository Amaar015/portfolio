let cursor0=document.querySelector(".cursor1");
let cursor=document.querySelector(".cursor2");
let userName=document.getElementById("textusername");
let email=document.getElementById("textemail");
let password=document.getElementById("textpass");
let cpassword=document.getElementById("textcpass");
let cnic=document.getElementById("textnic");
let form =document.querySelector("form");


// var Typed=new Typed(".typing",{
//     strings:["Web Designer", "Java devloper", "Java GUI devloper","Certicate Designer" ],
//     typeSpeed:100,
//     backSpeed:60,
//     loop:true
// });




function validInput(){
    // user name
    if(userName.value.trim()=="" || userName.value.trim()==null){
 onError(userName,"User Name can not be Empty");
    }
else{
    onSucces(userName);
}
//c-nic
if(cnic.value.trim()=="" || cnic.value.trim()==null){
    onError(cnic,"filed can't be empty");
       }
   else{

       onSucces(cnic);
   }
// email
if(email.value.trim()==""|| email.value.trim()==null){
    onError(email,"Email can not be Empty");
}
else{
if(!validEmail(email.value.trim())){
    onError(email,"Email is not valid");
}else{
    onSucces(email);
}
}


//password
if(password.value.trim()=="" || password.value.trim()==null){
    onError(password,"Area can't be empty");
       }
   else{
       onSucces(password);
   }
   
      

}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validInput();
});

function onSucces(input){
    let parent=input.parentElement;
    let MessageEle=parent.querySelector("small");
    MessageEle.style.visibility="hidden";
    MessageEle.innerText="";      
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,message){
    let parent=input.parentElement;
    let MessageEle=parent.querySelector("small");
    MessageEle.style.visibility="visible";
    MessageEle.innerText=message;      
    parent.classList.add("error");
    parent.classList.remove("success");
}

function validEmail(email){

    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}





window.onmousemove=(e)=>{
cursor0.style.top=e.pageY+'px';
cursor0.style.left=e.pageX+'px';
cursor.style.top=e.pageY+'px';
cursor.style.left=e.pageX+'px';

}

let links= document.querySelectorAll('a').forEach(links=>
{
links.onmouseenter=()=>{
    cursor0.classList.add('mouse');
    cursor.classList.add('mouse');
}
links.onmouseleave=()=>{
    cursor0.classList.remove('mouse');
    cursor.classList.remove('mouse');
}
});
