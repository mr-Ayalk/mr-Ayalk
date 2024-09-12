let form1=document.getElementById("form1");
let form2=document.getElementById("form2");
let login=document.getElementById("sign-in");

login.onclick=change1;
function change1(){
    if(form1.style.display==="none"){
        form1.style.display="block"
    } if(form2.style.display==="none"){
        form2.style.display="block"
        
    }
    if(form1.style.display==="block"){
        form1.style.display="none"
        
    }
    if(form2.style.display==="block"){
        form2.style.display="none"
    }
}